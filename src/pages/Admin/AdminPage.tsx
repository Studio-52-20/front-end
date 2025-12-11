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
import React, { useState } from 'react';
import { fetchPost } from '@/services/fetch';

/* ----- COMPONENT ----- */
const AdminPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    audio: null as File | null,
    cover: null as File | null,
  });

  const [audioPreview, setAudioPreview] = useState<string>('');
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      // Crée le FormData avec les bons noms de champs
      const data = new FormData();
      data.append('titre', formData.name);
      data.append('description', formData.description);
      if (formData.audio) data.append('fichier', formData.audio);
      if (formData.cover) data.append('imageName', formData.cover);

      console.log('Envoi des données à l\'API...');

      // Envoie à l'API
      const response = await fetchPost('emissions', data);

      console.log('Réponse reçue:', response);

      if (response.ok) {
        const result = await response.json();
        console.log('Succès:', result);
        alert('Émission ajoutée avec succès ! 🎉');
        // Réinitialise le formulaire
        setFormData({ name: '', description: '', audio: null, cover: null });
        setAudioPreview('');
        setCoverPreview('');
      } else {
        const error = await response.json();
        console.error('Erreur backend:', error);
        alert('Erreur : ' + (error.message || error.detail || 'Une erreur est survenue'));
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      alert('Impossible de contacter le serveur');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold color-mountain-meadow mb-8 text-center">
            Ajouter une émission
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom de l'émission */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'émission *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-gray-900"
                placeholder="Le titre de ton émission"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none text-gray-900"
                placeholder="Décris ton émission..."
              />
            </div>

            {/* Audio */}
            <div>
              <label htmlFor="audio" className="block text-sm font-medium text-gray-700 mb-2">
                Audio de l'émission *
              </label>
              <label className="flex-1 cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    {audioPreview || 'Clique pour choisir un fichier audio'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">MP3, WAV, OGG</p>
                </div>
                <input
                  type="file"
                  id="audio"
                  accept="audio/*"
                  onChange={(e) => handleFileChange(e, 'audio')}
                  className="hidden"
                  required
                />
              </label>
            </div>

            {/* Image de couverture */}
            <div>
              <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-2">
                Image de couverture *
              </label>
              <label className="flex-1 cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition">
                  {coverPreview ? (
                    <img src={coverPreview} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-lg" />
                  ) : (
                    <>
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">Clique pour choisir une image</p>
                    </>
                  )}
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP</p>
                </div>
                <input
                  type="file"
                  id="cover"
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
              className="w-full background-mountain-meadow text-white py-4 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Ajouter l\'émission'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;