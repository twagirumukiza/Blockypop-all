// images-data.js
// Un seul chemin de dossier par item. Toutes les photos de cet item vivent dedans,
// nommées front.jpg / right.jpg / left.jpg / back.jpg (ces noms exacts).
// Pour ajouter les photos d'un item :
//   1. Crée le dossier assets/items/<id-de-l-item>/ (les id sont dans blockypop.html, objet ITEMS)
//   2. Dépose dedans front.jpg, right.jpg, left.jpg, back.jpg
//   3. Ajoute une ligne ci-dessous avec juste le chemin du dossier
// Un item absent de cet objet retombe automatiquement sur le visuel SVG généré.

const IMAGES = {
  'blockland-0': 'assets/items/cube-miner'
};
