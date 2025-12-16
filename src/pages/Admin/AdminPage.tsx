/*
  Authors:
  >> Clément Lacroix - { clacroix2@etu.uqac.cq }
  >> Lucas Aubriet - { laubriet@etu.uqac.cq }
  >> Martin Vidal - { mvidal@etu.uqac.cq }
  >> Nathan TIROLF - { ntirolf@etu.uqac.cq }
  >> Romane Lesueur - { rlesueur@etu.uqac.cq }

  („• ֊ •„)❤  <  Have a good day !
  --U-----U------------------------*/


/* ----- IMPORTS ----- */
import React, { useState, useEffect } from 'react';
import { fetchGet, fetchPost } from '@/services/fetch';
import { Music, FileText, Calendar, Image, Loader2, Tag, Users, Tv } from 'lucide-react';
import Studio5220TextLogo from '@/components/Logo/TextLogo/TextLogo';
import { clearEmissions } from '@/store/EmissionStore';

/* ----- COMPONENT ----- */
const AdminPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    audio: null as File | null,
    cover: null as File | null,
    categories: [] as string[],
    series: [] as string[],
  });

  const [categories, setCategories] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [audioPreview, setAudioPreview] = useState<string>('');
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // États pour les participants
  const [users, setUsers] = useState<any[]>([]);
  const [searchUser, setSearchUser] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // État pour les notifications
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  // Fonction pour afficher les notifications
  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });

    // Auto-fermeture après 5 secondes
    setTimeout(() => {
      setNotification({ show: false, type: 'success', message: '' });
    }, 5000);
  };

  // Charge les catégories disponibles
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchGet('categories');
        const data = await response.json();
        setCategories(data.member || []);
      } catch (error) {
        console.error('Erreur chargement catégories:', error);
      }
    };
    loadCategories();
  }, []);

  // Charge les séries disponibles
  useEffect(() => {
    const loadSeries = async () => {
      try {
        const response = await fetchGet('series');
        const data = await response.json();
        setSeries(data.member || []);
      } catch (error) {
        console.error('Erreur chargement séries:', error);
      }
    };
    loadSeries();
  }, []);

  // Charge les utilisateurs
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetchGet('users');
        const data = await response.json();
        setUsers(data.member || []);
      } catch (error) {
        console.error('Erreur chargement utilisateurs:', error);
      }
    };
    loadUsers();
  }, []);

  // Filtrage des utilisateurs selon la recherche
  const filteredUsers = users.filter(user =>
    user.pseudo?.toLowerCase().includes(searchUser.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const handleSerieToggle = (serieId: string) => {
    setFormData(prev => ({
      ...prev,
      series: prev.series.includes(serieId)
        ? prev.series.filter(id => id !== serieId)
        : [...prev.series, serieId]
    }));
  };

  const handleUserToggle = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'audio' | 'cover') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (type === 'audio') {
      setFormData(prev => ({ ...prev, audio: file }));
      setAudioPreview(file.name);
    } else {
      setFormData(prev => ({ ...prev, cover: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('titre', formData.name);
      data.append('description', formData.description);

      const isoDate = new Date(formData.date).toISOString();
      data.append('date', isoDate);

      data.append('isActive', '1');
      // data.append('categoriesIds[]', JSON.stringify(formData.categories));
      // data.append('serieIds[]', JSON.stringify(formData.series));
      // data.append('participantsIds[]', JSON.stringify(selectedUsers));

      if (formData.audio) data.append('audioFile', formData.audio);
      if (formData.cover) data.append('imageFile', formData.cover);

      const response = await fetchPost('emissions', data, "formData");

      if (response.ok) {
        showNotification('success', '🎉 Émission ajoutée avec succès !');
        setFormData({ name: '', description: '', date: '', audio: null, cover: null, categories: [], series: [] });
        setAudioPreview('');
        setCoverPreview('');
        setSelectedUsers([]);
        setSearchUser('');
        clearEmissions();
        window.location.href = "/"
      } else {
        const error = await response.json();
        showNotification('error', `❌ Erreur : ${error.message || error.detail || 'Une erreur est survenue'}`);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      showNotification('error', '❌ Impossible de contacter le serveur');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center background-dark-green p-4 relative overflow-hidden mt-28">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 background-mountain-meadow rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-8 right-8 z-50 max-w-md p-6 rounded-2xl shadow-2xl backdrop-blur-xl border-2 ${notification.type === 'success'
            ? 'bg-green-500/20 border-green-500 text-white'
            : 'bg-red-500/20 border-red-500 text-white'
            }`}
          style={{
            animation: 'slideInRight 0.3s ease-out'
          }}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${notification.type === 'success'
              ? 'bg-green-500'
              : 'bg-red-500'
              }`}>
              {notification.type === 'success' ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                {notification.type === 'success' ? 'Succès !' : 'Erreur'}
              </h3>
              <p className="text-sm opacity-90">{notification.message}</p>
            </div>

            <button
              onClick={() => setNotification({ show: false, type: 'success', message: '' })}
              className="text-white hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <Studio5220TextLogo color="var(--color-mountain-meadow)" size={0.8} />
          </div>
          <h2 className="text-3xl font-bold text-white text-center">
            Ajouter une émission
          </h2>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Remplissez le formulaire pour créer une nouvelle émission
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Nom de l'émission */}
          <div className="relative group">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:color-mountain-meadow transition-colors" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Nom de l'émission *"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
            />
          </div>

          {/* Description */}
          <div className="relative group">
            <textarea
              name="description"
              placeholder="Description de l'émission *"
              required
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all resize-none"
            />
          </div>

          {/* Date et heure */}
          <div className="relative group">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:color-mountain-meadow transition-colors" size={20} />
            <input
              type="datetime-local"
              name="date"
              required
              value={formData.date}
              onChange={handleInputChange}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
              style={{
                colorScheme: 'dark'
              }}
            />
          </div>

          {/* Catégories */}
          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="text-gray-400" size={20} />
              <label className="text-white font-medium">Catégories</label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all ${formData.categories.includes(category.id)
                    ? 'background-mountain-meadow text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.categories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="hidden"
                  />
                  <span className="text-sm font-medium">{category.nom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Séries */}
          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Tv className="text-gray-400" size={20} />
              <label className="text-white font-medium">Séries</label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {series.map((serie) => (
                <label
                  key={serie.id}
                  className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all ${formData.series.includes(serie.id)
                    ? 'background-mountain-meadow text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.series.includes(serie.id)}
                    onChange={() => handleSerieToggle(serie.id)}
                    className="hidden"
                  />
                  <span className="text-sm font-medium">{serie.nom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Participants */}
          <div className="bg-black/20 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-gray-400" size={20} />
              <label className="text-white font-medium">Participants</label>
            </div>

            {/* Barre de recherche */}
            <input
              type="text"
              placeholder="🔍 Rechercher un participant (ex: ro)..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all mb-3"
            />

            {/* Liste des participants */}
            <div className="max-h-48 overflow-y-auto space-y-2">
              {filteredUsers.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-4">
                  {searchUser ? 'Aucun utilisateur trouvé' : 'Aucun utilisateur disponible'}
                </p>
              ) : (
                filteredUsers.map((user) => (
                  <label
                    key={user.id}
                    className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all ${selectedUsers.includes(user.id)
                      ? 'background-mountain-meadow text-black'
                      : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleUserToggle(user.id)}
                      className="hidden"
                    />
                    <span className="text-sm font-medium">{user.pseudo}</span>
                    <span className="text-xs opacity-70">({user.email})</span>
                  </label>
                ))
              )}
            </div>

            {/* Affichage des participants sélectionnés */}
            {selectedUsers.length > 0 && (
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-white text-sm">
                  <strong>{selectedUsers.length}</strong> participant(s) sélectionné(s)
                </p>
              </div>
            )}
          </div>

          {/* Audio */}
          <div>
            <label className="flex items-center gap-2 text-white mb-2">
              <Music size={20} className="text-gray-400" />
              <span className="font-medium">Audio de l'émission *</span>
            </label>
            <label className="cursor-pointer block">
              <div className="bg-black/20 border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-green-500 transition-all">
                <Music className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-white text-sm">
                  {audioPreview || 'Clique pour choisir un fichier audio'}
                </p>
                <p className="text-gray-500 text-xs mt-1">MP3, WAV, OGG</p>
              </div>
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => handleFileChange(e, 'audio')}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* Image de couverture */}
          <div>
            <label className="flex items-center gap-2 text-white mb-2">
              <Image size={20} className="text-gray-400" />
              <span className="font-medium">Image de couverture *</span>
            </label>
            <label className="cursor-pointer block">
              <div className="bg-black/20 border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-green-500 transition-all">
                {coverPreview ? (
                  <img src={coverPreview} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-lg" />
                ) : (
                  <>
                    <Image className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-white text-sm">Clique pour choisir une image</p>
                  </>
                )}
                <p className="text-gray-500 text-xs mt-1">PNG, JPG, WEBP</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'cover')}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* Bouton submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 background-mountain-meadow text-black font-bold py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(76,175,80,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Envoi en cours...
              </>
            ) : (
              'Ajouter l\'émission'
            )}
          </button>
        </form>
      </div>

      {/* Styles pour l'animation */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
