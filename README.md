# 🎙️ Studio 52-20 — Site Web du Club Radio

Bienvenue sur le dépôt du site web du club radio *Studio 52-20*.  
Ce projet a été développé dans le cadre du cours WEB101, avec l’objectif de proposer une plateforme simple et moderne pour consulter nos émissions, écouter les podcasts, découvrir les participants et interagir via un système de commentaires.

L’ambiance du site se veut professionnelle, propre… mais avec une petite touche chill, comme une discussion autour d’un micro à 23h au local radio.

<br>

---

<br>

## 🚀 Technologies utilisées

Le projet repose sur un stack moderne et rapide :

### **Frontend**
- React — v19.2.0
- React DOM — v19.2.0
- React Router DOM — v7.9.6

### **Build & Dev**
- Vite — rolldown-vite@7.2.2
- TypeScript — v5.9.3
- pnpm (gestionnaire de dépendances)

### **Style**
- TailwindCSS — v4.1.17
- Autoprefixer — v10.4.22
- Lucide React — v0.554.0

### **Linting & Qualité**
- ESLint — v9.39.1
- typescript-eslint — v8.46.3

<br>

---

<br>

## 📦 Pré-requis

Assurez-vous d’avoir installé :

- Node.js ≥ 18
- pnpm ≥ 9 (`npm install -g pnpm`)

---

## 🔧 Installation du projet

- Cloner le dépôt
```bash
git clone <url-du-dépôt>
```

<br>

- Aller dans le dossier
```bash
cd studio-52-20
```

<br>

- Installer les dépendances
```bash
pnpm install
```

<br>

---

<br>

## ▶️ Lancement & scripts disponibles

| Commande       | Description |
|----------------|-------------|
| `pnpm dev`     | Lance le serveur de dev (port 4666) |
| `pnpm build`   | Build le projet en production |
| `pnpm preview` | Prévisualise le build |
| `pnpm lint`    | Analyse les problèmes ESLint |

Application accessible ici :  
👉 http://localhost:4666

<br>

---

<br>

## 🧪 Tester le site

Une fois le serveur lancé, vous pouvez :

- naviguer sur la page d’accueil  
- consulter une émission via l’URL :  
  `http://localhost:4666/emission/<id>`  

<br>

La page d’émission permet :
- d’afficher l’image et le titre  
- de voir les participants  
- de lire la description  
- de consulter les commentaires  
- écouter l’émission via un lecteur audio

Les données affichées proviennent d’un fichier temporaire (`TemporaryData`) en attendant la version finale connectée à un backend.

<br>

---

<br>

## 🧱 Structure du projet

```
public/            	  # Images, icônes, etc.
src/
├─ components/        # Composants réutilisables
├─ data/              # Données
├─ pages/             # Pages du router
├─ style/             # Styles CSS globaux
├─ type/              # Types de données
└─ App.tsx            # Point d’entrée React
```

<br>

---

<br>

## 🎨 Style et Design

- TailwindCSS configuré via le plugin officiel Vite  
- Palette sombre/verte inspirée de l’ambiance du club radio  
- Icônes via Lucide React  
- Styles globaux définis dans `tailwind.css` et `index.css`

<br>

---

<br>

## 🔐 Routing

Le projet utilise React Router DOM avec des routes paramétrées :

- `/`  
- `/studio`
- `/emission/:emissionId`
- `/404`

Une redirection automatique sera mise en place ultérieurement pour les pages inconnues / authentification.

<br>

---

<br>

## 🎧 Lecteur audio

Un lecteur audio personnalisé est en cours de création.  
Fonctionnalités prévues :

- Play / Pause
- Barre de progression
- Options ±10 secondes
- Affichage du temps total et courant

<br>

---

<br>

## 🤝 Auteurs

Projet réalisé par :

- Clément Lacroix  
- Lucas Aubriet  
- Martin Vidal  
- Nathan Tirolf  
- Romane Lesueur  

<br>

---

<br>

## 📄 Licence

À compléter selon les exigences du cours.  
Si aucune indication n’est donnée : **MIT** est conseillé.

<br>

---

<br>

## 🙏 Remerciements

Merci au club radio *Studio 52-20* pour l’identité visuelle et l’inspiration générale, ainsi qu’au professeur pour l’encadrement du projet.
