# BlockyPop — Guide de mise à jour du site

Tout le contenu (univers, items, prix, textes, photos) se modifie dans deux fichiers,
sans toucher au reste du code :

- `blockypop.html` → sections `UNIVERSES`, `NAMES`, `TAG_COLOR`, `PRICE`, `STORY`
- `images-data.js` → l'objet `IMAGES`

---

## 1. Créer un nouvel univers

Dans `blockypop.html`, repère le tableau `UNIVERSES` et ajoute une entrée :

```js
{id:'ignis', name:'Terra Ignis', em:'🌋', color:'#ff5d3f', desc:'Une phrase qui donne l’ambiance de l’univers.'}
```

| Champ   | Rôle                                                              |
|---------|--------------------------------------------------------------------|
| `id`    | identifiant technique, court, sans espace/accent (ex: `ignis`)     |
| `name`  | nom affiché sur le site                                            |
| `em`    | un emoji qui illustre l'univers                                    |
| `color` | couleur de l'univers en hexadécimal, utilisée sur la bannière/cartes |
| `desc`  | courte description affichée sous le nom                            |

Un nouvel univers apparaît automatiquement sur la page d'accueil — rien d'autre à faire ici.

---

## 2. Créer un nouvel item dans un univers

Dans `blockypop.html`, repère l'objet `NAMES`. Chaque clé est l'`id` d'un univers, et
contient une liste `[Nom, Rareté]` :

```js
ignis:[
  ['Braise Vive','Commun'],
  ['Golem de Cendre','Rare'],
  ['Cœur de Magma','Édition limitée'],
  ['Nouvelle Figurine','Prototype']   // ← nouvel item ajouté ici
]
```

L'`id` complet de l'item est généré automatiquement : `<id-univers>-<position dans la liste, à partir de 0>`.
Exemple : le 3ᵉ item de `sylva` aura pour id `sylva-2`. C'est cet id qu'il faut réutiliser
dans `STORY` et `IMAGES` plus bas.

### Les raretés disponibles
Chaque rareté a déjà une couleur de badge et un prix par défaut, définis dans
`TAG_COLOR` et `PRICE` :

| Rareté            | Prix   |
|-------------------|--------|
| Commun            | 9,99 € |
| Rare              | 12,99 €|
| Édition limitée   | 16,99 €|
| Prototype         | 14,99 €|
| Icône             | 11,99 €|

Pour changer un prix, modifie la valeur dans `PRICE`. Pour créer une nouvelle rareté,
ajoute-la aux deux objets `TAG_COLOR` (une couleur de badge) et `PRICE` (un tarif).

---

## 3. Ajouter un texte « mot de l'atelier » (optionnel)

Dans `blockypop.html`, objet `STORY`, ajoute une clé = id de l'item :

```js
const STORY={
  'blockland-0': "texte existant...",
  'ignis-3': "Ton texte d'explication/anecdote pour ce nouvel item."
};
```

Un item sans entrée dans `STORY` n'affiche simplement pas ce bloc — ce n'est jamais obligatoire.

---

## 4. Ajouter les photos d'un item

Dans `images-data.js` :

```js
const IMAGES = {
  'blockland-0': 'assets/items/cube-miner',
  'ignis-3': 'assets/items/nouvelle-figurine'
};
```

Puis sur ton disque / dans ton repo, crée le dossier correspondant avec exactement ces
4 fichiers dedans :

```
assets/items/nouvelle-figurine/front.jpg
assets/items/nouvelle-figurine/right.jpg
assets/items/nouvelle-figurine/left.jpg
assets/items/nouvelle-figurine/back.jpg
```

Un item absent de `IMAGES` retombe automatiquement sur un visuel généré en SVG (pas de
photo nécessaire pour tester ou pré-remplir le site).

---

## 5. Résumé express — ajouter un item complet de A à Z

1. `UNIVERSES` → vérifier que l'univers existe déjà (sinon l'ajouter, étape 1)
2. `NAMES` → ajouter `['Nom de l'item', 'Rareté']` dans la liste de l'univers
3. (optionnel) `STORY` → ajouter un texte pour `<id-univers>-<position>`
4. `images-data.js` → ajouter le chemin du dossier photos
5. Déposer les 4 photos dans `assets/items/<dossier>/`

Rien d'autre à modifier : la page d'accueil, la grille de l'univers, la fiche produit,
le viewer 4 angles et le panier se mettent à jour tout seuls.

---

## Exemple complet : Cube Miner (univers Blockland)

Voici, pour référence, comment un item réel existant dans le site est câblé de bout en bout.

Dans `blockypop.html` :

```js
// 1. L'univers, dans UNIVERSES
{id:'blockland', name:'Blockland', em:'⛏️', color:'#5cb85c',
 desc:'Le monde cubique d\'où tout est parti : terre battue, blocs empilés et aventure à ciel ouvert.'}

// 2. L'item, dans NAMES (1er de la liste → id généré : blockland-0)
blockland:[
  ['Cube Miner','Icône'],
  ['Brique Forestière','Commun'],
  ['Bâtisseur de Nuit','Rare'],
  ['Golem de Terre','Édition limitée']
]

// 3. Le texte d'atelier, dans STORY
const STORY={
  'blockland-0': "Cube Miner, c'est la toute première figurine sortie de l'atelier BlockyPop : chemise bleu ciel, salopette terre battue, et cette allure carrée qui a lancé toute la collection Blockland. Un clin d'œil assumé aux héros cubiques qu'on adore, réinventé avec notre propre style — aucune licence, juste notre mascotte maison."
};
```

Dans `images-data.js` :

```js
// 4. Le dossier photos
const IMAGES = {
  'blockland-0': 'assets/items/cube-miner'
};
```

Sur le disque, à côté des deux fichiers :

```
assets/items/cube-miner/front.jpg
assets/items/cube-miner/right.jpg
assets/items/cube-miner/left.jpg
assets/items/cube-miner/back.jpg
```

Résultat : Univers → Blockland → Cube Miner affiche la fiche produit avec le badge « Icône »
à 11,99 €, le texte d'atelier, les 4 vraies photos selon l'angle choisi, et le bouton
« Ajouter au panier ».
