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
};

export const READING_LIST: Book[] = [
  // --- Greece ---
  {
    id: "homer-iliad",
    title: "The Iliad",
    author: "Homer",
    translation: "(translated by Emily Wilson)",
    year: -750,
    genre: "literature",
    category: "greece",
    notesPath: "/notes/iliad.md",
    done: true,
  },
  {
    id: "homer-odyssey",
    title: "The Odyssey",
    author: "Homer",
    translation: "(translated by Emily Wilson)",
    year: -725,
    genre: "literature",
    category: "greece",
    notesPath: "/notes/odyssey.md",
    done: true,
  },
  {
    id: "an-oresteia",
    title: "An Oresteia",
    author: "Aeschylus, Sophocles, Euripides",
    translation: "(translated by Anne Carson)",
    year: -458,
    genre: "literature",
    category: "greece",
    notesPath: "/notes/oresteia.md",
    done: true,
  },
  {
    id: "herodotus-histories",
    title: "The Histories",
    author: "Herodotus",
    translation: "(translated by Aubrey de Sélincourt)",
    year: -440,
    genre: "history",
    category: "greece",
    notesPath: "/notes/herodotus.md",
    done: true,
  },
  {
    id: "thucydides-peloponnesian",
    title: "History of the Peloponnesian War",
    author: "Thucydides",
    year: -400,
    genre: "history",
    category: "greece",
    done: false,
  },
  {
    id: "xenophon-hellenika",
    title: "Hellenika",
    author: "Xenophon",
    year: -360,
    genre: "history",
    category: "greece",
    done: false,
  },
  {
    id: "plato-last-days",
    title: "The Last Days of Socrates",
    author: "Plato",
    year: -399,
    genre: "philosophy",
    category: "greece",
    done: false,
  },
  {
    id: "plato-symposium",
    title: "The Symposium",
    author: "Plato",
    year: -385,
    genre: "philosophy",
    category: "greece",
    done: false,
  },
  {
    id: "plato-republic",
    title: "The Republic",
    author: "Plato",
    year: -375,
    genre: "philosophy",
    category: "greece",
    done: false,
  },
  {
    id: "aristotle-ethics",
    title: "Nichomachean Ethics",
    author: "Aristotle",
    year: -340,
    genre: "philosophy",
    category: "greece",
    done: false,
  },
  {
    id: "aristotle-politics",
    title: "Politics",
    author: "Aristotle",
    year: -330,
    genre: "philosophy",
    category: "greece",
    done: false,
  },
  {
    id: "diodorus-bibliotheca",
    title: "Bibliotheca Historica (Books 16–20)",
    author: "Diodorus Siculus",
    year: -50,
    genre: "history",
    category: "greece",
    done: false,
  },
  {
    id: "arrian-anabasis",
    title: "Anabasis of Alexander",
    author: "Arrian",
    year: 120,
    genre: "history",
    category: "greece",
    done: false,
  },

  // --- Rome ---
  {
    id: "polybius-histories",
    title: "Histories",
    author: "Polybius",
    year: -150,
    genre: "history",
    category: "rome",
    done: false,
  },
  {
    id: "caesar-gallic",
    title: "Commentarii de Bello Gallico (The Gallic Wars)",
    author: "Julius Caesar",
    year: -50,
    genre: "history",
    category: "rome",
    done: false,
  },
  {
    id: "caesar-civil",
    title: "Commentarii de Bello Civili (The Civil War)",
    author: "Julius Caesar",
    year: -45,
    genre: "history",
    category: "rome",

    done: false,
  },
  {
    id: "augustus-res-gestae",
    title: "Res Gestae Divi Augusti",
    author: "Augustus",
    year: 14,
    genre: "history",
    category: "rome",

    done: false,
  },
  {
    id: "virgil-aeneid",
    title: "The Aeneid",
    author: "Virgil (translated by Scott McGill)",
    year: -19,
    genre: "literature",
    category: "rome",

    done: false,
  },
  {
    id: "tacitus-annals",
    title: "The Annals",
    author: "Tacitus",
    year: 110,
    genre: "history",
    category: "rome",

    done: false,
  },
  {
    id: "tacitus-histories",
    title: "The Histories",
    author: "Tacitus",
    year: 105,
    genre: "history",
    category: "rome",

    done: false,
  },
  {
    id: "josephus-jewish-war",
    title: "The Jewish War",
    author: "Josephus",
    year: 75,
    genre: "history",
    category: "rome",

    done: false,
  },
  {
    id: "lucretius-nature",
    title: "On the Nature of Things",
    author: "Lucretius",
    year: -55,
    genre: "philosophy",
    category: "rome",

    done: false,
  },
  {
    id: "seneca-letters",
    title: "Letters",
    author: "Seneca",
    year: 65,
    genre: "philosophy",
    category: "rome",

    done: false,
  },
  {
    id: "epictetus-discourses",
    title: "Discourses",
    author: "Epictetus",
    year: 108,
    genre: "philosophy",
    category: "rome",

    done: false,
  },
  {
    id: "marcus-meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    year: 170,
    genre: "philosophy",
    category: "rome",

    done: false,
  },

  // --- Catholicism ---
  {
    id: "bible",
    title: "The Holy Bible",
    author: "Various",
    year: 325,
    genre: "literature",
    category: "christianity",

    done: false,
  },
  {
    id: "eusebius-history",
    title: "Ecclesiastical History",
    author: "Eusebius",
    year: 325,
    genre: "history",
    category: "christianity",

    done: false,
  },
  {
    id: "augustine-confessions",
    title: "Confessions",
    author: "Saint Augustine",
    year: 400,
    genre: "philosophy",
    category: "christianity",

    done: false,
  },
  {
    id: "augustine-city",
    title: "City of God",
    author: "Saint Augustine",
    year: 426,
    genre: "philosophy",
    category: "christianity",

    done: false,
  },

  // --- Renaissance ---
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
    title: "The Prince",
    author: "Niccolò Machiavelli",
    year: 1513,
    genre: "philosophy",
    category: "renaissance",

    done: false,
  },

  // --- Protestant Revolution ---
  {
    id: "luther-theses",
    title: "Ninety-five Theses",
    author: "Martin Luther",
    year: 1517,
    genre: "philosophy",
    category: "protestant",

    done: false,
  },
  {
    id: "milton-lost",
    title: "Paradise Lost",
    author: "John Milton",
    year: 1667,
    genre: "literature",
    category: "protestant",

    done: false,
  },
  {
    id: "milton-regained",
    title: "Paradise Regained",
    author: "John Milton",
    year: 1671,
    genre: "literature",
    category: "protestant",

    done: false,
  },

  // --- Scientific Revolution ---
  {
    id: "newton-principia",
    title: "The Mathematical Principles of Natural Philosophy",
    author: "Isaac Newton",
    year: 1687,
    genre: "philosophy",
    category: "science",

    done: false,
  },
  {
    id: "newton-prophecies",
    title:
      "Observations upon the Prophecies of Daniel, and the Apocalypse of St. John",
    author: "Isaac Newton",
    year: 1733,
    genre: "philosophy",
    category: "science",

    done: false,
  },

  // --- Enlightenment / French Revolution ---
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
    category: "kant",

    done: false,
  },
  {
    id: "kant-metaphysics",
    title: "Fundamental Principles to the Metaphysics of Morals",
    author: "Immanuel Kant",
    year: 1785,
    genre: "philosophy",
    category: "kant",

    done: false,
  },
  {
    id: "kant-practical",
    title: "Critique of Practical Reason",
    author: "Immanuel Kant",
    year: 1788,
    genre: "philosophy",
    category: "kant",

    done: false,
  },

  // --- Hegel ---
  {
    id: "hegel-right",
    title: "The Philosophy of Right",
    author: "Friedrich Hegel",
    year: 1820,
    genre: "philosophy",
    category: "hegel",

    done: false,
  },
  {
    id: "hegel-history",
    title: "The Philosophy of History",
    author: "Friedrich Hegel",
    year: 1837,
    genre: "philosophy",
    category: "hegel",

    done: false,
  },

  // --- Marx ---
  {
    id: "marx-manifesto",
    title: "Communist Manifesto",
    author: "Karl Marx",
    year: 1848,
    genre: "philosophy",
    category: "marx",

    done: false,
  },
  {
    id: "marx-capital",
    title: "Capital",
    author: "Karl Marx",
    year: 1867,
    genre: "philosophy",
    category: "marx",

    done: false,
  },

  // --- Russia ---
  {
    id: "dostoevsky-crime",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
    genre: "literature",
    category: "russia",

    done: false,
  },

  // --- Nietzsche ---
  {
    id: "nietzsche-genealogy",
    title: "On the Genealogy of Morals",
    author: "Friedrich Nietzsche",
    year: 1887,
    genre: "philosophy",
    category: "nietzsche",

    done: false,
  },

  // --- Capitalism / Sociology ---
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
  {
    id: "walcott-omeros",
    title: "Omeros",
    author: "Derek Walcott",
    year: 1990,
    genre: "literature",
    category: "modern",

    done: false,
  },
  {
    id: "dugin-geopolitics",
    title: "The Foundations of Geopolitics: The Geopolitical Future of Russia",
    author: "Aleksandr Dugin",
    year: 1997,
    genre: "philosophy",
    category: "modern",

    done: false,
  },
];
