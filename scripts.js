const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];


// 1. **Gallery**: Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. No interactúa con HTML.
//    - `constructor`: Acepta dos parámetros, ambos conjuntos de imágenes.
//    - `getRandomCivil`: devuelve un vehículo aleatorio civil de la galería.
//    - `getRandomMilitary`: devuelve un vehículo aleatorio militar de la galería.
//    - `getAll`: devuelve el conjunto de vehículos de la galería, tanto militares como civiles.

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const image = this.civilImages[Math.floor((Math.random() * this.civilImages.length))];
        console.log(image);
        return image;
        // return this.civilImages[Math.floor((Math.random() * this.civilImages.length))]
    }
    
    getRandomMilitary() {
        const militaryImage = this.militaryImages[Math.floor((Math.random() * this.civilImages.length))];
        console.log(militaryImage);
        return militaryImage;
        // return this.militaryImages[Math.floor((Math.random() * this.militaryImages.length))];
    }
    
    getAll() {
    }
}

const moma = new Gallery(civilAircrafts, militaryAircrafts)

moma.getRandomCivil()
moma.getRandomMilitary()

// 2. **Painter**: La clase encargada de pintar las imágenes, de interactuar con el DOM. Encargada de crear etiquetas y manipular el DOM para agregarlas.
//     - `constructor`: Ejecutará la función `createGallery`.
//     - `createGallery`:
//         - Creará un elemento `section` y lo agregará al body.
//         - Dicho `section` será, también, una propiedad de Painter a la que llamaremos `gallery`.
//     - `createImageTag`: Acepta la url de una imagen y devuelve los siguientes elementos:
//         ```javascript
//         <picture>
//             <img src="ThisIsAnImage.jpg" />
//         </picture>
//         ```
//     - `paintSingleImage`: Acepta la url de una imagen y agrega a `gallery` el elemento creado por `createImageTag`.
//     - `paintMultipleImages`: Acepta un conjunto de imágenes y agrega a `gallery`, uno a uno, el elemento creado por `createImageTag`.

class Painter {
    constructor() {
    }

    createGallery() {
    }

    createImageTag(imageUrl) {
    }

    paintSingleImage(imageUrl) {
    }

    paintMultipleImages(arrayOfImages) {
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();