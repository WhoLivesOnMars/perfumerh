# Perfumer H -- Projet Drupal

## 1. Présentation

Ce projet a été réalisé dans le cadre du partiel Drupal 11.

L'objectif était de reproduire une structure de site e-commerce inspirée
du site Perfumer H, en respectant les contraintes techniques demandées.

Le projet comprend :

-   Un thème personnalisé
-   Un type de contenu **Produit**
-   Une taxonomie **Catégorie Produit**
-   Plusieurs vues pour le catalogue
-   Un bloc "Produits vedettes"
-   Un module custom pour une popup newsletter

------------------------------------------------------------------------

## 2. Installation

### 1. Cloner le projet

``` bash
git clone <repository_url>
cd perfumerh
```

### 2. Installer les dépendances

``` bash
composer install
```

### 3. Importer la base de données

Importer le fichier `.sql` fourni.

### 4. Importer la configuration

``` bash
drush cim
```

### 5. Activer le thème

Administration → Apparence → Activer **perfumerh**

------------------------------------------------------------------------

## 3. Thème personnalisé

Nom du thème : `perfumerh`

Fonctionnalités :

-   Thème custom créé
-   Intégration Tailwind CSS
-   Fichiers CSS et JS personnalisés
-   Templates Twig personnalisés :
    -   `page.html.twig`
    -   `menu--main.html.twig`
    -   `node--product.html.twig`
    -   `node--product--teaser.html.twig`
    -   Overrides pour Views

------------------------------------------------------------------------

## 4. Type de contenu : Produit

Type créé : **Produit**

### Champs ajoutés :

-   `field_category` --- Référence taxonomie
-   `field_image` --- Image
-   `field_price` --- Nombre (décimal)
-   `field_volume` --- Texte
-   `field_product_label` --- Texte
-   `field_featured` --- Booléen
-   `field_is_new` --- Booléen
-   `field_limited_edition` --- Booléen

### Modes d'affichage configurés :

-   Full
-   Teaser (utilisé dans les vues)

------------------------------------------------------------------------

## 5. Taxonomie

Vocabulaire : **Catégorie Produit**

Termes créés :

-   Bougies
-   Cadeaux
-   Accessoires
-   Encens
-   Thé
-   Maison
-   Parfum
-   Garde-manger
-   Mains

La taxonomie est associée au type de contenu Produit.

------------------------------------------------------------------------

## 6. Vues

Vue principale : **Catalogue produits (Contenu)**

### Affichages créés :

-   `/collections`
-   `/collections/parfum`
-   `/collections/bougies`
-   `/collections/maison`
-   `/collections/mains`
-   `/collections/garde-manger`
-   `/collections/cadeaux`

### Filtres :

-   Contenu publié
-   Type = Produit
-   Filtrage par catégorie

### Bloc Views

Bloc : **Front featured**

Affiche les produits où `field_featured = TRUE`.

------------------------------------------------------------------------

## 7. Blocs

Implémentés :

-   Bloc Views : Produits vedettes
-   Bloc Hero (Block content type personnalisé)

### Parties manquantes

-   Bloc programmatique avec injection de dépendances : **non
    implémenté**
-   Bloc affichant les informations admin (login + password) : **non
    implémenté**

------------------------------------------------------------------------

## 8. Module custom

Module : `perfumerh_popup`

Contient :

-   Controller
-   Route custom
-   Template Twig
-   Fichiers CSS et JS

Fonction :

Affichage automatique d'une popup newsletter à l'arrivée sur le site.

### Parties incomplètes

-   Formulaire programmatique basé sur Form API : **non implémenté**
-   Validation serveur avancée : **non implémentée**
-   AJAX via Form API : **non implémenté**

------------------------------------------------------------------------

## 9. Modules contrib

Modules activés :

-   Pathauto
-   Metatag
-   Token
-   Admin Toolbar
-   Webform

------------------------------------------------------------------------

## 10. Export de configuration

Export réalisé avec :

``` bash
drush cex
```

Configuration située dans :

`config/sync`

------------------------------------------------------------------------

## 11. Parties manquantes ou incomplètes (comme demandé)

Les éléments suivants ne sont pas entièrement implémentés :

-   Bloc programmatique avec injection de dépendances
-   Service custom avec interface et déclaration dans services.yml
-   Formulaire programmatique complet basé sur Form API
-   Validation et traitement AJAX côté serveur

------------------------------------------------------------------------

## 12. Conclusion

Le projet respecte :

-   La création d'un thème personnalisé
-   La structuration avancée du contenu
-   L'utilisation de taxonomies
-   La création de vues multiples
-   L'intégration d'un module custom

Les fonctionnalités avancées liées aux services et à l'injection de
dépendances restent partiellement ou non implémentées.
