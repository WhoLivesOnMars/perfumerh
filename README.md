# Perfumer H — Projet Drupal

## 1. Présentation

Ce projet a été réalisé dans le cadre du partiel Drupal 11.

L’objectif était de reproduire la structure d’un site e-commerce inspiré du site Perfumer H, en respectant les contraintes techniques imposées.

Le projet comprend :

- Un thème personnalisé
- Un type de contenu **Produit**
- Une taxonomie **Catégorie Produit**
- Plusieurs vues pour le catalogue
- Un bloc "Produits vedettes"
- Un module custom pour une popup newsletter
- Un mega menu implémenté avec Alpine.js

---

## 2. Environnement technique

- Drupal 10 / 11
- PHP 8.4
- Composer
- Drush
- Node.js / npm
- Tailwind CSS
- Alpine.js

---

## 3. Installation

### 1. Cloner le projet

git clone <repository_url>
cd perfumerh

### 2. Installer les dépendances PHP

composer install

### 3. Installer les dépendances front

npm install
npm run build

### 4. Importer la base de données

Importer le fichier .sql fourni.

### 5. Importer la configuration

drush cim

Configuration exportée dans :
config/sync

### 6. Activer le thème

Administration → Apparence → Activer perfumerh

---

## 4. Thème personnalisé

Nom du thème : perfumerh

Fonctionnalités :

- Thème custom créé
- Intégration Tailwind CSS
- Mega menu full-width avec Alpine.js
- Templates Twig personnalisés :
  - page.html.twig
  - menu--main.html.twig
  - node--product.html.twig
  - node--product--teaser.html.twig
- Overrides pour Views

---

## 5. Type de contenu : Produit

Champs ajoutés :

- field_category — Référence taxonomie
- field_image — Image
- field_price — Nombre (décimal)
- field_volume — Texte
- field_product_label — Texte
- field_featured — Booléen
- field_is_new — Booléen
- field_limited_edition — Booléen

Modes d’affichage configurés :
- Full
- Teaser

---

## 6. Taxonomie

Vocabulaire : Catégorie Produit

Termes principaux :

- Bougies
- Cadeaux
- Accessoires
- Encens
- Thé
- Maison
- Parfum
- Garde-manger
- Mains

---

## 7. Vues

Vue principale : Catalogue produits

Affichages :

- /collections
- /collections/parfum
- /collections/bougies
- /collections/maison
- /collections/mains
- /collections/garde-manger
- /collections/cadeaux

Bloc Views :
- Front featured (produits avec field_featured = TRUE)

---

## 8. Module custom

Module : perfumerh_popup

Contient :

- Controller
- Routing
- Template Twig
- Fichiers CSS
- Popup newsletter

Parties incomplètes :

- Formulaire programmatique complet via Form API
- Validation serveur avancée
- Traitement AJAX côté serveur
- Service custom avec injection de dépendances

---

## 9. Export de configuration

Configuration exportée avec :
drush cex

Située dans :
config/sync

---

## 10. Parties manquantes ou incomplètes

Les éléments suivants ne sont pas entièrement implémentés :

- Bloc programmatique avec injection de dépendances
- Service custom déclaré dans services.yml
- Formulaire Form API complet
- Validation et AJAX côté serveur

---

## 11. Conclusion

Le projet respecte :

- Création d’un thème personnalisé
- Structuration avancée du contenu
- Utilisation de taxonomies
- Création de vues multiples
- Intégration d’Alpine.js pour le mega menu
- Développement d’un module custom

Certaines fonctionnalités avancées liées aux services et à l’injection de dépendances restent partiellement implémentées.
