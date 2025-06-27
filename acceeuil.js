// === Sélection des éléments ===
const galleryImages = document.querySelectorAll('.expo img');
const previewImages = document.querySelectorAll('.p-expo img');
const titre = document.querySelector('.cata-titre');
const surfaceSpan = document.querySelector('.infos-surface');
const cataDyn = document.querySelector('.cata-dyn');
const etoileNombre = document.querySelector(".etoile-nombre");
const iP = document.querySelector(".i-p");
const iF = document.querySelector(".i-f");
const ficheDetails = document.querySelector('.fiche-details');
const starSlides = document.querySelectorAll('.mySlides img');

// === Données ===
const details = [
  [ // Slide 1
    {
      titre: "Détails de la salle de bain",
      dynInfos: ["Nombre : 1", "Douche : Italienne", "WC : intégré"],
      surface: "9 m²"
    },
    {
      titre: "Détails de la cuisine",
      dynInfos: ["Équipements : Oui", "Plaque : Oui", "Hotte : Incluse","Cuisine ouverte"],
      surface: "15 m²"
    },
    {
      titre: "Détails de la chambre",
      dynInfos: ["Nombre : 2", "Type : Normal/Enfant", "Placard : Oui"],
      surface: "20 m²"
    },
    {
      titre: "Détails du salon et Infos supplementaire",
      dynInfos: ["Ascenseur : Oui", "Etage : 4", "TV : 65 pouces"],
      surface: "30 m²"
    }
  ],
  [ // Slide 2
    {
      titre: "Détails de la salle de bain",
      dynInfos: ["Nombre : 1", "Douche : Classique", "WC : séparé"],
      surface: "8 m²"
    },
    {
      titre: "Détails de la cuisine",
      dynInfos: ["Équipements : Non", "Plaque : Gaz", "Hotte : Non"],
      surface: "12 m²"
    },
    {
      titre: "Détails de la chambre",
      dynInfos: ["Nombre : 2", "Type : Simple", "Placard : Non"],
      surface: "18 m²"
    },
    {
      titre: "Détails du salon",
      dynInfos: ["Style : Rustique", "Cheminée : Non", "TV : 42 pouces"],
      surface: "25 m²"
    }
  ],
  [ // Slide 3
    {
      titre: "Détails de la salle de bain",
      dynInfos: ["Nombre : 2", "Douche : Douche + Baignoire", "WC : intégré"],
      surface: "10 m²"
    },
    {
      titre: "Détails de la cuisine",
      dynInfos: ["Équipements : Partiels", "Plaque : Induction", "Hotte : Oui"],
      surface: "14 m²"
    },
    {
      titre: "Détails de la chambre",
      dynInfos: ["Nombre : 3", "Type : Luxe", "Placard : Oui"],
      surface: "24 m²"
    },
    {
      titre: "Détails du salon",
      dynInfos: ["Style : Scandinave", "Cheminée : Non", "TV : 60 pouces"],
      surface: "32 m²"
    }
  ],
  [ // Slide 4
    {
      titre: "Détails de la salle de bain",
      dynInfos: ["Nombre : 3", "Douche : Spa", "WC : séparé"],
      surface: "13 m²"
    },
    {
      titre: "Détails de la cuisine",
      dynInfos: ["Équipements : Complet", "Plaque : Gaz", "Hotte : Oui"],
      surface: "18 m²"
    },
    {
      titre: "Détails de la chambre",
      dynInfos: ["Nombre : 4", "Type : Suite + bureau", "Placard : Oui"],
      surface: "28 m²"
    },
    {
      titre: "Détails du salon",
      dynInfos: ["Style : Contemporain", "Cheminée : Oui", "TV : 75 pouces"],
      surface: "38 m²"
    }
  ],
  [ // Slide 5
    {
      titre: "Détails de la salle de bain",
      dynInfos: ["Nombre : 4", "Douche : Jacuzzi", "WC : Intégré & séparé"],
      surface: "16 m²"
    },
    {
      titre: "Détails de la cuisine",
      dynInfos: ["Équipements : Premium", "Plaque : Induction", "Hotte : silencieuse"],
      surface: "22 m²"
    },
    {
      titre: "Détails de la chambre",
      dynInfos: ["Nombre : 5", "Type : Master + invités", "Placard : Dressing complet"],
      surface: "36 m²"
    },
    {
      titre: "Détails du salon",
      dynInfos: ["Style : Luxe", "Cheminée : Marbre", "TV : 85 pouces"],
      surface: "50 m²"
    }
  ]
];


const prixTypes = [
  { prix: "2Mil DA / Mois", type: "F3" },
  { prix: "3.5Mil DA / Mois", type: "F2" },
  { prix: "5Mil DA / Mois", type: "F4" },
  { prix: "20Mil DA / Mois", type: "F5" },
  { prix: "10Mil DA / Mois", type: "Chalet" }
];

const ficheData = [
  {
    prix: "2Mil DA / Mois",
    etablissements: "École, hôpital",
    transport: "Bus, métro, taxi"
  },
  {
    prix: "3.5Mil DA / Mois",
    etablissements: "Université, clinique",
    transport: "Tramway, taxi"
  },
  {
    prix: "5Mil DA / Mois",
    etablissements: "École privée, pharmacie",
    transport: "Bus, train"
  },
  {
    prix: "20Mil DA / Mois",
    etablissements: "Collège, hôpital public",
    transport: "Bus, métro"
  },
  {
    prix: "10Mil DA / Mois",
    etablissements: "Station de sky, restaurant",
    transport: "Bus"
  }
];

// === Slider étoiles ===
let slideIndex = 1;

function plusSlides(n) {
  const slides = document.querySelectorAll(".mySlides");
  const pApparts = document.querySelectorAll(".p-appart");
  const ficheApparts = document.querySelectorAll(".fiche-appart");
  const allExpo = document.querySelectorAll(".expo");

  slideIndex += n;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  slides.forEach(s => s.style.display = "none");
  slides[slideIndex - 1].style.display = "flex";

  allExpo.forEach(ex => ex.style.display = "none");
  pApparts.forEach(p => p.style.display = "none");
  ficheApparts.forEach(f => f.style.display = "none");

  const currentExpo = document.querySelector(`.expo[data-appart="${slideIndex}"]`);
  const currentP = document.querySelector(`.p-appart[data-appart="${slideIndex}"]`);
  const currentF = document.querySelector(`.fiche-appart[data-appart="${slideIndex}"]`);

  if (currentExpo) currentExpo.style.display = "flex";
  if (currentP) currentP.style.display = "flex";
  if (currentF) currentF.style.display = "flex";

  etoileNombre.textContent = `${slideIndex} étoile${slideIndex > 1 ? "s" : ""}`;
  iP.textContent = prixTypes[slideIndex - 1].prix;
  iF.textContent = prixTypes[slideIndex - 1].type;

  ficheDetails.innerHTML = `
    <p>Localisation : Algérie</p>
    <p>Prix : ${ficheData[slideIndex - 1].prix}</p>
    <p>Établissements : ${ficheData[slideIndex - 1].etablissements}</p>
    <p>Moyens de transport : ${ficheData[slideIndex - 1].transport}</p>
    <div class="fiche-preview">
      <img src="${slides[slideIndex - 1].querySelector('img').src}" class="fiche-preview-img" />
    </div>
  `;

  // Met à jour l'image preview automatiquement
  const preview = document.querySelector('.p-preview');
  const imgToShow = currentExpo ? currentExpo.querySelector('img') : null;
  if (preview && imgToShow) {
    preview.src = imgToShow.src;
  }
  // Met à jour l'image de .photo-maison (bulle du bas)
const photoMaisonImg = document.querySelector('.photo-maison img');
if (photoMaisonImg) {
  photoMaisonImg.src = slides[slideIndex - 1].querySelector('img').src;
}

}

function showSlides(n) {
  plusSlides(n - slideIndex);
}

// === Initialisation générale ===
document.addEventListener("DOMContentLoaded", () => {
  showSlides(1);
  document.querySelector(".fiche-container").style.display = "flex";

  const preview = document.querySelector('.p-preview');

  // Fonction mise à jour image preview
  function updatePreview(imgSrc) {
    if (preview) {
      preview.src = imgSrc;
    }
  }

  // Événement sur chaque image visible de .expo
  const allExpos = document.querySelectorAll('.expo');
  allExpos.forEach(expo => {
    const images = expo.querySelectorAll('img');
    images.forEach((img, index) => {
      img.addEventListener('click', (e) => {
        e.preventDefault();

        // Mise à jour preview (image principale)
        updatePreview(img.src);

        // Mise à jour détails dynamiques
     const data = details[slideIndex - 1][index];
        titre.textContent = data.titre;
        surfaceSpan.textContent = data.surface;
        cataDyn.innerHTML = "";
        data.dynInfos.forEach(line => {
          const p = document.createElement('p');
          p.textContent = line;
          p.style.color = "#FFFFFF";
          p.style.padding = "1rem";
          p.style.fontSize = "22px";
          p.style.fontWeight = "300";
          cataDyn.appendChild(p);
        });
      });
    });
  });

  // Clic direct sur image étoile
  starSlides.forEach((img, index) => {
    img.addEventListener('click', () => {
      plusSlides(index + 1 - slideIndex);
    });
  });
});
