# 🎨 Lucien Bootstrap

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.1.0-green.svg)](https://github.com/lucien-wrq/MyBootstrap/tags)
[![GitHub Pages](https://img.shields.io/badge/demo-online-blue.svg)](https://lucien-wrq.github.io/MyBootstrap/versions/v1.0.0/demo/)

> Framework CSS responsive, léger, élégant et personnalisable. Idéal pour créer rapidement des interfaces modernes avec une touche professionnelle.

---

## 🌐 Démo

👉 [Voir la démo en ligne](https://lucien-wrq.github.io/MyBootstrap/versions/v1.0.0/demo/)

---

## 📦 Installation

### 1. CDN (recommandé)

Ajoute dans le `<head>` de ton HTML :

```html
<!-- Dernière version (GitHub Pages) -->
<link rel="stylesheet" href="https://lucien-wrq.github.io/MyBootstrap/versions/v1.0.0/css/styles.css">
```

### 2. Utilisation locale

````bash
git clone https://github.com/lucien-wrq/MyBootstrap.git
````

Dans ton HTML :

```html
<link rel="stylesheet" href="css/lucien.css">
<script src="js/lucien.js" defer></script>
```

## 📁 Structure du projet 

```
MyBootstrap/
├── css/
│   ├── lucien.css          # Fichier CSS principal
├── js/
│   ├── lucien.js           # Fichier JavaScript principal
├── demo/
│   ├── index.html          # Exemple de démo en ligne
├── README.md               # Documentation du projet
```

## 🧱 Composants inclus

#### ✅ Base

- Reset CSS propre
- Typographie responsive
- Grille flexible (12 colonnes)

#### 🎨 UI Components

- Boutons (.btn, .btn-primary, .btn-danger)
- Cartes (.card, .card-title, .card-content)
- Alertes (.alert-success, .alert-error)
- Badges, séparateurs, loader

#### 📋 Formulaires

- Champs texte, textarea, select
- Labels, erreurs, validation

#### 🔲 Layout

- Container responsive (.container)
- Grille en colonnes (.row, .col)
- Spacers (.mt-2, .p-3, etc.)

#### 📚 Modules dynamiques (avec JS)

- Modal (fenêtre pop-up)
- Carrousel (slider horizontal)
- Dashboard (cartes de stats, graphiques)
- Footer responsive avec liens

## 🛠️ Versioning
Ce projet suit le modèle SemVer : MAJOR.MINOR.PATCH


Version	Description
v1.0.0	Première version stable
v1.1.0	Ajout du footer, dashboard, carrousel

### ⚙️ Créer un tag :
````bash
git tag v1.1.0
git push origin v1.1.0
````

### 🧪 Exemple d'utilisation
````html
<div class="card">
  <h3 class="card-title">Titre</h3>
  <p class="card-content">Contenu de la carte LucienCSS</p>
</div>

<button class="btn btn-primary">Clique ici</button>
````

### ✨ À venir

- Thèmes personnalisables
- Composants React/Vue intégrés
- Support Dark Mode
- Documentation complète avec recherche

### 🤝 Contribuer
Merci de vouloir contribuer ! Voici comment faire :

- Fork le repo
- Crée ta branche : git checkout -b feature/nouveau-composant
- Commit : git commit -m "Ajout du composant badge"
- Push : git push origin feature/nouveau-composant
- Ouvre une pull request 😄