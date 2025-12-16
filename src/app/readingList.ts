type Book = {
  id: string;
  title: string;
  author: string;
  translation?: string;
  year: number;
  genre: string;
  category: string;
  notesPath?: string;
  done?: boolean;
  cover?: string;
  link?: string;
  spine?: string;
  rating?: number;
};

export const READING_LIST: Book[] = [
  // --- greek ---
  // LITERATURE AND MYTHOLOGY
  {
    id: "homer-iliad",
    title: "The Iliad",
    author: "Homer",
    translation: "(translated by Emily Wilson)",
    year: -750,
    genre: "literature",
    category: "greek",
    notesPath: "/notes/iliad.md",
    done: true,
    cover: "/covers/iliad.jpeg",
    link: "https://www.amazon.com/Iliad-Homer/dp/1324001801",
    spine: "/spines/iliad-spine.jpg",
    rating: 5,
  },
  {
    id: "homer-odyssey",
    title: "The Odyssey",
    author: "Homer",
    translation: "(translated by Emily Wilson)",
    year: -725,
    genre: "literature",
    category: "greek",
    notesPath: "/notes/odyssey.md",
    done: true,
    cover: "/covers/odyssey.jpeg",
    link: "https://www.amazon.com/Odyssey-Homer/dp/0393089053",
    spine: "/spines/odyssey-spine.jpeg",
    rating: 4,
  },
  {
    id: "an-oresteia",
    title: "An Oresteia",
    author: "Aeschylus, Sophocles, Euripides",
    translation: "(translated by Anne Carson)",
    year: -458,
    genre: "literature",
    category: "greek",
    notesPath: "/notes/oresteia.md",
    done: true,
    cover: "/covers/oresteia.jpg",
    link: "https://www.amazon.com/Oresteia-Agamemnon-Aiskhylos-Sophokles-Euripides/dp/086547916X",
    spine: "/spines/oresteia-spine.jpg",
    rating: 4.5,
  },
  {
    id: "theogony-works",
    title: "Theogony & Works and Days",
    author: "Hesiod",
    translation: "(translated by M.L. West)",
    year: -700,
    genre: "literature",
    category: "greek",
    notesPath: "/notes/hesiod.md",
    done: true,
    cover: "/covers/hesiod.jpeg",
    link: "https://www.amazon.com/Theogony-Works-Oxford-Worlds-Classics/dp/019953831X/",
    spine: "/spines/theogony-spine.jpg",
    rating: 1,
  },
  // HISTORY
  {
    id: "herodotus-histories",
    title: "The Histories",
    author: "Herodotus",
    translation: "(translated by Aubrey de Sélincourt)",
    year: -440,
    genre: "history",
    category: "greek",
    notesPath: "/notes/herodotus.md",
    done: true,
    cover: "/covers/herodotus.jpg",
    link: "https://www.amazon.com/Histories-Herodotus-dp-0140449086/dp/0140449086/",
    spine: "/spines/herodotus-spine.jpg",
    rating: 3.5,
  },
  {
    id: "thucydides-peloponnesian",
    title: "History of the Peloponnesian War",
    author: "Thucydides",
    translation: "(translated by Rex Warner)",
    year: -400,
    genre: "history",
    category: "greek",
    notesPath: "/notes/thucydides.md",
    done: true,
    cover: "/covers/thucydides.jpg",
    link: "https://www.amazon.com/History-Peloponnesian-War-Thucydides/dp/0140440399",
    spine: "/spines/thucydides-spine.jpeg",
    rating: 5,
  },
  {
    id: "xenophon-hellenika",
    title: "A History of My Times",
    author: "Xenophon",
    translation: "(translated by Rex Warner)",
    year: -360,
    genre: "history",
    category: "greek",
    notesPath: "/notes/xenophon.md",
    done: true,
    cover: "/covers/xenophon.jpg",
    link: "https://www.amazon.com/History-My-Times-Penguin-Classics/dp/0140441751",
    spine: "/spines/xenophon-spine.jpg",
    rating: 4.5,
  },
  // PHILOSOPHY
  {
    id: "plato-last-days",
    title: "The Last Days of Socrates",
    author: "Plato",
    year: -399,
    genre: "philosophy",
    category: "greek",
    done: true,
    notesPath: "/notes/socrates.md",
    cover: "/covers/socrates.jpg",
    link: "https://www.amazon.com/Last-Days-Socrates-Penguin-Classics-ebook/dp/B002RI9XUG",
    spine: "/spines/socrates-spine.jpg",
    rating: 5,
  },
  {
    id: "plato-symposium",
    title: "The Symposium",
    author: "Plato",
    year: -385,
    genre: "philosophy",
    category: "greek",
    done: true,
    notesPath: "/notes/symposium.md",
    cover: "/covers/symposium.jpg",
    link: "https://www.amazon.com/Symposium-Oxford-Worlds-Classics-Plato/dp/0199540195",
    spine: "/spines/symposium-spine.jpg",
    rating: 4.5,
  },
  {
    id: "plato-republic",
    title: "The Republic",
    author: "Plato",
    year: -375,
    genre: "philosophy",
    category: "greek",
    done: true,
    notesPath: "/notes/republic.md",
    cover: "/covers/republic.jpg",
    link: "https://www.amazon.com/Republic-Plato/dp/0141442433/",
    spine: "/spines/republic-spine.jpg",
    rating: 5,
  },
  {
    id: "aristotle-ethics",
    title: "Nichomachean Ethics",
    author: "Aristotle",
    year: -340,
    genre: "philosophy",
    category: "greek",
    done: true,
    notesPath: "/notes/ethics.md",
    cover: "/covers/ethics.jpg",
    link: "https://www.amazon.com/Nicomachean-Ethics-Penguin-Classics/dp/0140455477",
    spine: "/spines/ethics-spine.jpg",
    rating: 4.5,
  },
  {
    id: "aristotle-politics",
    title: "Politics",
    author: "Aristotle",
    year: -330,
    genre: "philosophy",
    category: "greek",
    done: true,
    notesPath: "/notes/politics.md",
    cover: "/covers/politics.jpg",
    link: "https://www.amazon.com/Politics-Penguin-Classics-Aristotle/dp/0140444211/",
    spine: "/spines/politics-spine.jpg",
    rating: 4.5,
  },
  // HELLENISTIC BRIDGE
  {
    id: "diodorus-history",
    title: "Bibliotheca Historica",
    author: "Diodorus Siculus",
    year: -30,
    genre: "history",
    category: "greek",
    done: false,
  },
  {
    id: "polybius-histories",
    title: "Histories",
    author: "Polybius",
    year: -118,
    genre: "history",
    category: "greek",
    done: false,
  },
  {
    id: "caesar-gallic",
    title: "The Gallic Wars",
    author: "Julius Caesar",
    year: -50,
    genre: "history",
    category: "roman",
    done: false,
  },
  {
    id: "caesar-civil",
    title: "The Civil War",
    author: "Julius Caesar",
    year: -45,
    genre: "history",
    category: "roman",
    done: false,
  },
  // ROMAN IMPERIAL LITERATURE
  {
    id: "virgil-aeneid",
    title: "The Aeneid",
    author: "Virgil",
    year: -19,
    genre: "literature",
    category: "roman",

    done: false,
  },
  {
    id: "horace-odes",
    title: "The Odes",
    author: "Horace",
    year: -13,
    genre: "literature",
    category: "roman",
    done: false,
  },
  {
    id: "ovid-metamorphoses",
    title: "Metamorphoses",
    author: "Ovid",
    year: 8,
    genre: "literature",
    category: "roman",
    done: false,
  },
  {
    id: "livy-histories",
    title: "History of Rome",
    author: "Livy",
    year: 9,
    genre: "literature",
    category: "roman",
    done: false,
  },
  // {
  //   id: "sallust-catiline",
  //   title: "Catiline's War, The Jugurthine War, Histories",
  //   author: "Sallust",
  //   year: -35,
  //   genre: "history",
  //   category: "roman",
  //   done: false,
  // },
  {
    id: "plutarch-1",
    title: "Plutarch's Lives Volume 1",
    author: "Plutarch",
    year: 100,
    genre: "history",
    category: "roman",
    done: false,
  },
  {
    id: "plutarch-2",
    title: "Plutarch's Lives Volume 2",
    author: "Plutarch",
    year: 100,
    genre: "history",
    category: "roman",
    done: false,
  },
  // {
  //   id: "appian-wars",
  //   title: "Civil Wars",
  //   author: "Appian",
  //   year: 150,
  //   genre: "history",
  //   category: "roman",

  //   done: false,
  // },
  // RISE OF THE EMPIRE
  // {
  //   id: "augustus-res-gestae",
  //   title: "Res Gestae Divi Augusti",
  //   author: "Augustus",
  //   year: 14,
  //   genre: "history",
  //   category: "roman",

  //   done: false,
  // },
  // {
  //   id: "lucan-pharsalia",
  //   title: "Pharsalia",
  //   author: "Lucan",
  //   year: 61,
  //   genre: "literature",
  //   category: "roman",
  //   done: false,
  // },

  // ROMAN IMPERIAL HISTORY
  {
    id: "tacitus-annals",
    title: "The Annals and The Histories",
    author: "Tacitus",
    year: 110,
    genre: "history",
    category: "roman",

    done: false,
  },
  // {
  //   id: "tacitus-histories",
  //   title: "The Histories",
  //   author: "Tacitus",
  //   year: 105,
  //   genre: "history",
  //   category: "roman",

  //   done: false,
  // },
  {
    id: "josephus-jewish-war",
    title: "The Jewish War",
    author: "Josephus",
    year: 75,
    genre: "history",
    category: "roman",

    done: false,
  },
  {
    id: "lucretius-nature",
    title: "On the Nature of Things",
    author: "Lucretius",
    year: -55,
    genre: "philosophy",
    category: "roman",

    done: false,
  },
  // ROMAN IMPERIAL PHILOSOPHY
  // {
  //   id: "seneca-letters",
  //   title: "Letters",
  //   author: "Seneca",
  //   year: 65,
  //   genre: "philosophy",
  //   category: "roman",

  //   done: false,
  // },
  {
    id: "epictetus-discourses",
    title: "Discourses",
    author: "Epictetus",
    year: 108,
    genre: "philosophy",
    category: "roman",

    done: false,
  },
  {
    id: "marcus-meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    year: 170,
    genre: "philosophy",
    category: "roman",

    done: false,
  },

  // --- Christian ---
  // BIBLES
  {
    id: "bible",
    title: "The Holy Bible",
    author: "Various",
    year: 325,
    genre: "literature",
    category: "christian",

    done: false,
  },
  {
    id: "dead-sea-scrolls",
    title: "The Dead Sea Scrolls",
    author: "Various",
    year: 325,
    genre: "literature",
    category: "christian",

    done: false,
  },
  {
    id: "nag-hammadi",
    title: "The Nag Hammadi Scriptures",
    author: "Various",
    year: 325,
    genre: "literature",
    category: "christian",

    done: false,
  },
  // EARLY CHRISTIAN HISTORY
  {
    id: "eusebius-history",
    title: "Ecclesiastical History",
    author: "Eusebius",
    year: 325,
    genre: "history",
    category: "christian",

    done: false,
  },
  // {
  //   id: "eusebius-constantine",
  //   title: "The Life of Constantine",
  //   author: "Eusebius",
  //   year: 340,
  //   genre: "history",
  //   category: "christian",

  //   done: false,
  // },
  {
    id: "later-roman-empire",
    title: "The Later Roman Empire",
    author: "Ammianus Marcellinus",
    year: 390,
    genre: "history",
    category: "christian",

    done: false,
  },
  // AUGUSTINE PHILOSOPHY
  {
    id: "augustine-confessions",
    title: "Confessions",
    author: "Saint Augustine",
    year: 400,
    genre: "philosophy",
    category: "christian",

    done: false,
  },
  {
    id: "augustine-city",
    title: "City of God",
    author: "Saint Augustine",
    year: 426,
    genre: "philosophy",
    category: "christian",

    done: false,
  },
  // POST-AUGUSTIAN HISTORY
  {
    id: "secret-history",
    title: "The Secret History",
    author: "Procopius",
    year: 550,
    genre: "history",
    category: "christian",

    done: false,
  },
  // --- ISLAM ---
  {
    id: "quran",
    title: "The Qur'an",
    author: "Muhammad",
    year: 632,
    genre: "literature",
    category: "islamic",
    done: false,
  },
  {
    id: "alfarabi-city",
    title: "The Virtuous City",
    author: "Al-Farabi",
    year: 940,
    genre: "philosophy",
    category: "islamic",
    done: false,
  },
  {
    id: "avicenna-metaphysics",
    title: "Metaphysics (from The Book of Healing)",
    author: "Avicenna (Ibn Sina)",
    year: 1020,
    genre: "philosophy",
    category: "islamic",
    done: false,
  },
  {
    id: "alghazali-incoherence",
    title: "The Incoherence of the Philosophers",
    author: "Al-Ghazali",
    year: 1095,
    genre: "philosophy",
    category: "islamic",
    done: false,
  },
  {
    id: "averroes-incoherence",
    title: "The Incoherence of the Incoherence",
    author: "Averroes (Ibn Rushd)",
    year: 1180,
    genre: "philosophy",
    category: "islamic",
    done: false,
  },
  {
    id: "maimonides-guide",
    title: "The Guide for the Perplexed",
    author: "Moses Maimonnides",
    year: 1190,
    genre: "philosophy",
    category: "islamic",
    done: false,
  },
  {
    id: "khaldun-muqaddimah",
    title: "The Muqaddimah",
    author: "Ibn Khaldun",
    year: 1377,
    genre: "history",
    category: "islamic",
    done: false,
  },

  // --- RENAISSANCE ---
  {
    id: "dante-comedy",
    title: "Divine Comedy",
    author: "Dante Alighieri",
    year: 1320,
    genre: "literature",
    category: "renaissance",

    done: false,
  },
  {
    id: "machiavelli-prince",
    title: "The Prince and Discourses on Livy",
    author: "Niccolò Machiavelli",
    year: 1513,
    genre: "philosophy",
    category: "renaissance",

    done: false,
  },
  {
    id: "luther-theses",
    title: "Ninety-five Theses",
    author: "Martin Luther",
    year: 1517,
    genre: "philosophy",
    category: "renaissance",

    done: false,
  },
  {
    id: "luther-freedom",
    title: "The Freedom of a Christian",
    author: "Martin Luther",
    year: 1520,
    genre: "philosophy",
    category: "renaissance",

    done: false,
  },

  // SCIENTIFIC PHILOSOPHY
  {
    id: "bacon-atlantis",
    title: "New Atlantis",
    author: "Francis Bacon",
    year: 1626,
    genre: "literature",
    category: "renaissance",

    done: false,
  },
  {
    id: "descartes-meditations",
    title: "Meditations on First Philosophy",
    author: "Rene Decartes",
    year: 1641,
    genre: "philosophy",
    category: "renaissance",

    done: false,
  },
  // {
  //   id: "newton-principia",
  //   title: "The Mathematical Principles of Natural Philosophy",
  //   author: "Isaac Newton",
  //   year: 1687,
  //   genre: "philosophy",
  //   category: "renaissance",

  //   done: false,
  // },
  {
    id: "newton-observations",
    title:
      "Observations upon the Prophecies of Daniel, and the Apocalypse of St. John",
    author: "Isaac Newton",
    year: 1733,
    genre: "philosophy",
    category: "renaissance",

    done: false,
  },

  // --- ENLIGHTENMENT ---
  {
    id: "milton-lost",
    title: "Paradise Lost",
    author: "John Milton",
    year: 1667,
    genre: "literature",
    category: "enlightenment",

    done: false,
  },
  // {
  //   id: "milton-regained",
  //   title: "Paradise Regained",
  //   author: "John Milton",
  //   year: 1671,
  //   genre: "literature",
  //   category: "enlightenment",

  //   done: false,
  // },

  // NATURE OF MAN
  {
    id: "hobbes-leviathan",
    title: "Leviathan",
    author: "Thomas Hobbes",
    year: 1651,
    genre: "philosophy",
    category: "enlightenment",
    done: false,
  },
  {
    id: "locke-essay",
    title: "Essay Concering Human Understanding",
    author: "John Locke",
    year: 1690,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  {
    id: "rousseau-inequality",
    title: "A Discourse on the Origin of Inequality",
    author: "Jean-Jacques Rousseau",
    year: 1755,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  {
    id: "rousseau-emile",
    title: "Emile",
    author: "Jean-Jacques Rousseau",
    year: 1762,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  {
    id: "rousseau-contract",
    title: "The Social Contract",
    author: "Jean-Jacques Rousseau",
    year: 1762,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },

  // --- Kant ---
  {
    id: "kant-pure-reason",
    title: "Critique of Pure Reason",
    author: "Immanuel Kant",
    year: 1781,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  {
    id: "kant-metaphysics",
    title: "Fundamental Principles to the Metaphysics of Morals",
    author: "Immanuel Kant",
    year: 1785,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  {
    id: "kant-practical",
    title: "Critique of Practical Reason",
    author: "Immanuel Kant",
    year: 1788,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },

  // --- Hegel ---
  {
    id: "hegel-right",
    title: "The Philosophy of Right",
    author: "Friedrich Hegel",
    year: 1820,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  {
    id: "hegel-history",
    title: "The Philosophy of History",
    author: "Friedrich Hegel",
    year: 1837,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },
  // NIETZSCHE
  {
    id: "nietzsche-zarathustra",
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    year: 1883,
    genre: "philosophy",
    category: "enlightenment",

    done: false,
  },

  // --- CAPITALISM ---
  // MARX
  {
    id: "marx-manifesto",
    title: "Communist Manifesto",
    author: "Karl Marx",
    year: 1848,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  {
    id: "marx-capital",
    title: "Capital",
    author: "Karl Marx",
    year: 1867,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  // DARWIN
  {
    id: "darwin-origin",
    title: "On the Origin of Species",
    author: "Charles Darwin",
    year: 1859,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  {
    id: "darwin-descent",
    title: "The Descent of Man",
    author: "Charles Darwin",
    year: 1871,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  // FREUD
  {
    id: "freud-dreams",
    title: "The Interpretation of Dreams",
    author: "Sigmund Freud",
    year: 1900,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  {
    id: "freud-civilization",
    title: "Civilization and its Discontents",
    author: "Sigmund Freud",
    year: 1930,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },

  // // --- Russia ---
  // {
  //   id: "dostoevsky-crime",
  //   title: "Crime and Punishment",
  //   author: "Fyodor Dostoevsky",
  //   year: 1866,
  //   genre: "literature",
  //   category: "russia",

  //   done: false,
  // },
  {
    id: "durkheim-suicide",
    title: "On Suicide",
    author: "Emile Durkheim",
    year: 1897,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  {
    id: "simmel-money",
    title: "The Philosophy of Money",
    author: "Georg Simmel",
    year: 1900,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },
  {
    id: "weber-protestant",
    title: "The Protestant Work Ethic and the Spirit of Capitalism",
    author: "Max Weber",
    year: 1905,
    genre: "philosophy",
    category: "capitalism",

    done: false,
  },

  // --- Modern day ---
  // {
  //   id: "walcott-omeros",
  //   title: "Omeros",
  //   author: "Derek Walcott",
  //   year: 1990,
  //   genre: "literature",
  //   category: "modern",

  //   done: false,
  // },
  // {
  //   id: "dugin-geopolitics",
  //   title: "The Foundations of Geopolitics: The Geopolitical Future of Russia",
  //   author: "Aleksandr Dugin",
  //   year: 1997,
  //   genre: "philosophy",
  //   category: "modern",

  //   done: false,
  // },
];
