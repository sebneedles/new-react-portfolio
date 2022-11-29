// VIGNETTES
import Web1 from '../../assets/portfolio/web/aplus-sa.jpg';
import Web3 from '../../assets/portfolio/web/defense-security.jpg';
import Web4 from '../../assets/portfolio/web/transatel-datasim.jpg';
import Web5 from '../../assets/portfolio/web/vision-plus.jpg';
import Web6 from '../../assets/portfolio/web/booki-website.png';
import Web7 from '../../assets/portfolio/web/hot-takes-website.png';
import Web8 from '../../assets/portfolio/web/kanap-website.png';
import Web9 from '../../assets/portfolio/web/ohmyfood-website.png';
import Web10 from '../../assets/portfolio/web/panthere-website.png';
import Web11 from '../../assets/portfolio/web/kasa-website.png';
import Web12 from '../../assets/portfolio/web/boutika.jpg';
import Social1 from '../../assets/portfolio/social/202012-voeux.jpg';
import Print1 from '../../assets/portfolio/print/catalogue-aplus.jpg';
import Print2 from '../../assets/portfolio/print/mk-large.jpg';
import Emailing1 from '../../assets/portfolio/emailing/aplus.jpg';
import Emailing2 from '../../assets/portfolio/emailing/tds.jpg';

// GALERIE EMAILING
import EmailAplus1 from '../../assets/portfolio-max/emailing/emailing-aplus.jpg';
import EmailAplus2 from '../../assets/portfolio-max/emailing/emailing-visionplus.jpg';
import EmailAplus3 from '../../assets/portfolio-max/emailing/emailing-ds.jpg';
import EmailTDS1 from '../../assets/portfolio-max/emailing/emailing-tds.jpg';
import EmailTDS2 from '../../assets/portfolio-max/emailing/emailing-tds-2.jpg';

// GALERIE SOCIAL
import SocialAplus1 from '../../assets/portfolio-max/social/202012-voeux.jpg';
import SocialAplus2 from '../../assets/portfolio-max/social/aplus-facebook.jpg';

// GALERIE PRINT
import PrintAplus1 from '../../assets/portfolio-max/print/catalogue-aplus.jpg';
import PrintAplus2 from '../../assets/portfolio-max/print/catalogue-aplus-2.jpg';
import PrintCD1 from '../../assets/portfolio-max/print/mk-large.jpg';
import PrintCD2 from '../../assets/portfolio-max/print/saar-large.jpg';

// GALERIE WEB
import WebTransatel1 from '../../assets/portfolio-max/web/transatel-datasim.jpg';
import WebTransatel2 from '../../assets/portfolio-max/web/transatel-datasim-2.jpg';
import WebAplus1 from '../../assets/portfolio-max/web/aplus-sa-1.jpg';
import WebAplus2 from '../../assets/portfolio-max/web/aplus-sa-2.jpg';
import WebVision1 from '../../assets/portfolio-max/web/vision-plus.jpg';
import WebVision2 from '../../assets/portfolio-max/web/vision-plus-2.jpg';
import WebDS1 from '../../assets/portfolio-max/web/defense-security-1.jpg';
import WebDS2 from '../../assets/portfolio-max/web/defense-security-2.jpg';
import WebKasa1 from '../../assets/portfolio-max/web/kasa-1.jpg';
import WebKasa2 from '../../assets/portfolio-max/web/kasa-2.jpg';
import WebKasa3 from '../../assets/portfolio-max/web/kasa-3.jpg';
import WebKasa4 from '../../assets/portfolio-max/web/kasa-4.jpg';
import WebHot1 from '../../assets/portfolio-max/web/hot-takes-1.jpg';
import WebHot2 from '../../assets/portfolio-max/web/hot-takes-2.jpg';
import WebHot3 from '../../assets/portfolio-max/web/hot-takes-3.jpg';
import WebKanap1 from '../../assets/portfolio-max/web/kanap-1.jpg';
import WebKanap2 from '../../assets/portfolio-max/web/kanap-2.jpg';
import WebKanap3 from '../../assets/portfolio-max/web/kanap-3.jpg';
import WebKanap4 from '../../assets/portfolio-max/web/kanap-4.jpg';
import WebPanthere1 from '../../assets/portfolio-max/web/panthere-1.jpg';
import WebPanthere2 from '../../assets/portfolio-max/web/panthere-2.jpg';
import WebFood1 from '../../assets/portfolio-max/web/ohmyfood-1.jpg';
import WebFood2 from '../../assets/portfolio-max/web/ohmyfood-2.jpg';
import WebBooki1 from '../../assets/portfolio-max/web/booki-1.jpg';
import WebBooki2 from '../../assets/portfolio-max/web/booki-2.jpg';
import WebBoutika1 from '../../assets/portfolio-max/web/boutika-1.jpg';
import WebBoutika2 from '../../assets/portfolio-max/web/boutika-2.jpg';
import WebBoutika3 from '../../assets/portfolio-max/web/boutika-3.jpg';
import WebBoutika4 from '../../assets/portfolio-max/web/boutika-4.jpg';
import WebBoutika5 from '../../assets/portfolio-max/web/boutika-5.jpg';

export const projectsData = [
  {
    id: 'boutika',
    image: Web12,
    title: 'Boutika (projet en cours)',
    category: 'web',
    year: '2022',
    description:
      "Projet en cours de réalisation, site E-commerce développé en react pour la partie frontend. Pour la partie backend j'utilise MongoDB, ExpressJS, NodeJS, Javascript, CRUD.",
    technos:
      'React / React Router / Axios / SASS / ExpressJS / MongoDB / Javascript / NodeJS',
    legende: [
      "Page d'accueil de l'application E-commerce",
      'Page produit',
      'Page Shopping Cart',
      'Page de connexion',
      'Page de crétion de compte',
    ],
    picture: [WebBoutika1, WebBoutika2, WebBoutika3, WebBoutika4, WebBoutika5],
  },
  {
    id: 'kasaoc',
    image: Web11,
    title: 'Kasa',
    category: 'web',
    year: '2022',
    description:
      "Projet de formation OpenCLassrooms : Développement des éléments d'une interface web en composants React, navigation des pages avec React Router.",
    technos: 'React / React Router / SASS',
    legende: [
      "Page d'accueil de l'application",
      "Page type d'un logement => composant collapse réutilisable",
      'Page A propos => composant collapse réutilisable',
      "Page d'erreur 404",
    ],
    picture: [WebKasa1, WebKasa2, WebKasa3, WebKasa4],
    url: 'https://github.com/sebneedles/projet-7-app-kasa/tree/main/kasa',
  },
  {
    id: 'hottakesoc',
    image: Web7,
    title: 'Hot Takes',
    category: 'web',
    year: '2022',
    description:
      "Projet de formation OpenCLassrooms : Développement Backend, Mise en place d'une API REST CRUD, BDD et stockage sécurisé sous Mongo, implémentation d'un modèle de données User et Produit, mise en place de l'auth/autorization, gestion des événnements like/dislike",
    technos: 'NodeJS / ExpressJS / Javascript / MongoDB',
    legende: [
      "Page d'accueil une fois la connexion réussie",
      "Page modèle d'un produit crée par un utilisateur",
      "Page de création d'un produit",
    ],
    picture: [WebHot1, WebHot2, WebHot3],
    url: 'https://github.com/sebneedles/p6-piiquante',
  },
  {
    id: 'kanapoc',
    image: Web8,
    title: 'Kanap',
    category: 'web',
    year: '2022',
    description:
      'Projet de formation OpenCLassrooms : Site E-commerce réalisé en Javascript, implémenter des données dynamiques en JS, gestion des événements JS, utilisation du LocalStorage.',
    technos: 'Javascript',
    legende: [
      "Page d'accueil",
      'Page Produit',
      'Page Panier avec formulaire',
      'Confirmation de commande',
    ],
    picture: [WebKanap1, WebKanap2, WebKanap3, WebKanap4],
    url: 'https://github.com/sebneedles/P5-Dev-Web-Kanap/tree/master/front',
  },
  {
    id: 'panthereoc',
    image: Web10,
    title: 'La Panthère',
    category: 'web',
    year: '2022',
    description:
      "Projet de formation OpenCLassrooms : Optimisations SEO d'un site, optimiser la taille et la vitesse, écrire du code HTML et CSS maintenable, assurer l'accessibilité du site web.",
    technos: "SEO / Outils d'analyses et de vitesses",
    legende: ["Page d'accueil", 'Page de contact'],
    picture: [WebPanthere1, WebPanthere2],
    url: 'https://sebneedles.github.io/oc-projet-4/',
  },
  {
    id: 'ohmyfoodoc',
    image: Web9,
    title: 'Oh My Food',
    category: 'web',
    year: '2022',
    description:
      "Projet de formation OpenCLassrooms : Réalisé en HTML5/CSS3, mise en œuvre des effets CSS graphiques avancés, cohérence graphique, mise en place d'une structure de navigation.",
    technos: 'HTML / CSS / SASS / Animation CSS (Keyframes)',
    legende: ["Page d'accueil", 'Page de menu'],
    picture: [WebFood1, WebFood2],
    url: 'https://sebneedles.github.io/oc-projet-3/',
  },
  {
    id: 'bookioc',
    image: Web6,
    title: 'Booki',
    category: 'web',
    year: '2022',
    description:
      'Projet de formation OpenCLassrooms : Réalisé en HTML5/CSS3, Contenu conforme à la maquette, interface responsive, normes W3C respectées.',
    technos: 'HTML / CSS',
    legende: ["Page d'accueil", 'Vue responsive'],
    picture: [WebBooki1, WebBooki2],
    url: 'https://sebneedles.github.io/oc-projet-2/',
  },
  {
    id: 'ds',
    image: Web3,
    title: 'Defense & Security',
    category: 'web',
    year: '2020',
    description: 'Site réalisé sous Wordpress avec un thème personnalisé.',
    technos: 'Wordpress / PHP',
    legende: ['legende 1', 'legende 2'],
    infos:
      'Ajout et gestion de tous les produits par catégories / Gestion des actualités / SEO et SEA',
    picture: [WebDS1, WebDS2],

    url: 'https://www.aplus-defense.com',
  },
  {
    id: 'visionplus',
    image: Web5,
    title: 'Vision [+]',
    category: 'web',
    year: '2019',
    description: 'Site réalisé sous Wordpress avec un thème personnalisé.',
    technos: 'Wordpress / PHP',
    legende: ['legende 1', 'legende 2'],
    infos:
      'Ajout et gestion de tous les produits par catégories / Gestion des actualités / SEO et SEA',
    picture: [WebVision1, WebVision2],

    url: 'https://www.aplus-visionplus.com',
  },
  {
    id: 'aplussa',
    image: Web1,
    title: 'APLUS Système Automation',
    category: 'web',
    year: '2018',
    description:
      'Site réalisé sous Wordpress avec un thème personnalisé. Gestion des pages, Maintenance du ',
    technos: 'Wordpress / PHP',
    legende: ['legende 1', 'legende 2'],
    infos:
      'Ajout et gestion de tous les produits par catégories / Gestion des actualités / SEO et SEA',
    picture: [WebAplus1, WebAplus2],
    url: 'https://www.aplus-sa.com',
  },
  {
    id: 'tds',
    image: Web4,
    title: 'Transatel DataSIM',
    category: 'web',
    year: '2015',
    description:
      'Gestion du site Transatel DataSIM, Création de nouvelles pages. Optimisation SEO.',
    technos: 'Wordpress / PHP / WooCommerce',
    legende: ['legende 1', 'legende 2'],
    picture: [WebTransatel1, WebTransatel2],

    url: 'https://www.transatel-datasim.com',
  },
  {
    id: 'aplusvoeux',
    image: Social1,
    title: 'APLUS SA | Voeux 2021',
    category: 'social',
    year: '2020',
    description:
      'Réalisation de visuels pour les réseaux sociaux (Facebook, Twitter, Linkedin)',
    technos: 'Photoshop / Illustrator',
    legende: [
      'APLUS Système Automation : Voeux 2021',
      "Lancement d'un nouveau produit",
    ],
    picture: [SocialAplus1, SocialAplus2],
  },
  {
    id: 'aplusprint',
    image: Print1,
    title: 'Catalogue APLUS SA',
    category: 'print',
    year: '2021',
    description:
      "Réalisation de documents d'impression pour la société APLUS SYstème Automation",
    technos: 'Photoshop / InDesign',
    legende: ['Catalogue Informatique Industrielle', 'Bloc notes'],
    picture: [PrintAplus1, PrintAplus2],
  },
  {
    id: 'cd',
    image: Print2,
    title: 'Pochettes CD',
    category: 'print',
    year: '2014',
    description: 'Réalisation de pochettes pour 2 groupes de Rock.',
    technos: 'Photoshop / Illustrator / InDesign',
    legende: ['Motor Kids : 4 titres', 'SaaR : The Last Day'],

    picture: [PrintCD1, PrintCD2],
  },
  {
    id: 'aplusmail',
    image: Emailing1,
    title: 'APLUS Système Automation',
    category: 'emailing',
    year: '2021',
    description:
      "Différentes campagnes d'emailings pour APLUS Système Automation et ses autres marques.",
    technos: 'Photoshop / Illustrator / MailPro',
    legende: [
      'Campagne APLUS SA',
      'Campagne Vision [+]',
      'Campagne Defense & Security',
    ],
    picture: [EmailAplus1, EmailAplus2, EmailAplus3],
  },
  {
    id: 'tdsmail',
    image: Emailing2,
    title: 'Transatel DataSIM',
    category: 'emailing',
    year: '2018',
    description:
      "Campagnes d'emailings pour un MVNO : Transatel DataSIM : Offres de réductions sur un ou des produit(s).",
    technos: 'Photoshop / Illustrator / Sarbacane',
    legende: ['Promotion sur des recharges DATA', 'Extended -20%'],
    picture: [EmailTDS1, EmailTDS2],
  },
];

export const projectsNav = [
  {
    name: 'tout',
  },
  {
    name: 'web',
  },
  {
    name: 'print',
  },
  {
    name: 'social',
  },
  {
    name: 'emailing',
  },
];
