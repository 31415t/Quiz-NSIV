const biologie = {
  nutriments: [
    {
      question: "Quel est le rôle principal des glucides dans l’organisme ?",
      options: ["La croissance cellulaire", "La production d’énergie", "La régulation hormonale", "La transmission nerveuse"],
      answer: 1,
      explanation: "Les glucides sont la source principale d’énergie pour les cellules."
    },
    {
      question: "Parmi les vitamines suivantes, laquelle est liposoluble ?",
      options: ["Vitamine C", "Vitamine B6", "Vitamine D", "Vitamine B12"],
      answer: 2,
      explanation: "La vitamine D est liposoluble, stockée dans les graisses de l’organisme."
    },
    {
      question: "Une carence en vitamine C provoque :",
      options: ["Le rachitisme", "La cécité nocturne", "L’anémie", "Le scorbut"],
      answer: 3,
      explanation: "Le scorbut est causé par une carence en vitamine C."
    },
    {
      question: "Quel nutriment est principalement utilisé pour la construction des tissus ?",
      options: ["Les glucides", "Les lipides", "Les protéines", "Les minéraux"],
      answer: 2,
      explanation: "Les protéines servent à construire et réparer les tissus corporels."
    },
    {
      question: "Quel minéral est essentiel pour la formation des os ?",
      options: ["Fer", "Calcium", "Zinc", "Sodium"],
      answer: 1,
      explanation: "Le calcium est indispensable à la formation des os et des dents."
    },
    {
      question: "Quelle est la principale source alimentaire de glucides complexes ?",
      options: ["Le lait", "Le sucre", "Le riz complet", "Le beurre"],
      answer: 2,
      explanation: "Les céréales complètes comme le riz brun sont riches en glucides complexes."
    },
    {
      question: "Les vitamines hydrosolubles sont principalement :",
      options: ["Stockées dans le foie", "Solubles dans les graisses", "Éliminées dans l’urine", "Transformées en protéines"],
      answer: 2,
      explanation: "Elles ne sont pas stockées et sont éliminées rapidement dans l’urine."
    },
    {
      question: "Les fibres alimentaires sont connues pour :",
      options: ["Provoquer des allergies", "Favoriser le transit intestinal", "Apporter des calories", "Protéger contre les virus"],
      answer: 1,
      explanation: "Les fibres facilitent le transit et réduisent les troubles digestifs."
    },
    {
      question: "Quel nutriment est le plus riche en énergie par gramme ?",
      options: ["Glucides", "Lipides", "Protéines", "Eau"],
      answer: 1,
      explanation: "Les lipides apportent 9 kcal/g, contre 4 pour glucides et protéines."
    },
    {
      question: "Le fer est un minéral essentiel à :",
      options: ["La digestion", "La respiration cellulaire", "La formation de l’hémoglobine", "La production de bile"],
      answer: 2,
      explanation: "Le fer est nécessaire à la synthèse de l’hémoglobine dans les globules rouges."
    }
  ],

  defenses_non_specifiques: [
    {
      question: "Quelle structure constitue une barrière physique contre les infections ?",
      options: ["Le sang", "La rate", "La peau", "Le pancréas"],
      answer: 2,
      explanation: "La peau est la première barrière contre l’invasion des agents pathogènes."
    },
    {
      question: "Les muqueuses contribuent à la défense non spécifique en :",
      options: ["Produisant des enzymes digestives", "Sécrétant du mucus piégeant les microbes", "Fabriquant des globules rouges", "Filtrant les nutriments"],
      answer: 1,
      explanation: "Le mucus capture les agents pathogènes dans les muqueuses."
    },
    {
      question: "La phagocytose est le processus par lequel :",
      options: ["Les virus se répliquent", "Les cellules absorbent des nutriments", "Les cellules immunitaires ingèrent les microbes", "Les globules rouges transportent l’oxygène"],
      answer: 2,
      explanation: "Les phagocytes englobent et digèrent les envahisseurs."
    },
    {
      question: "Les cellules tueuses naturelles (NK) ont pour rôle :",
      options: ["D’aider à la digestion", "De produire des hormones", "De détruire les cellules infectées", "D’éliminer les déchets"],
      answer: 2,
      explanation: "Les cellules NK ciblent et détruisent les cellules anormales."
    },
    {
      question: "L’inflammation est déclenchée par :",
      options: ["La déshydratation", "L’exercice physique", "Une lésion ou une infection", "La fatigue"],
      answer: 2,
      explanation: "C’est une réponse naturelle à une agression locale."
    },
    {
      question: "Quels sont les signes cardinaux de l’inflammation ?",
      options: ["Fièvre, toux, maux de tête", "Rougeur, chaleur, douleur, gonflement", "Vertige, fatigue, fièvre", "Rougeur, démangeaison, faiblesse"],
      answer: 1,
      explanation: "Les quatre signes sont : rougeur, chaleur, douleur, œdème."
    },
    {
      question: "Les protéines du complément :",
      options: ["Transportent le fer", "Sont des anticorps", "Aident à éliminer les microbes", "Produisent du glucose"],
      answer: 2,
      explanation: "Elles forment des complexes qui perforent la membrane des microbes."
    },
    {
      question: "Les interférons sont produits par :",
      options: ["Les bactéries", "Les virus", "Les cellules infectées", "Les globules rouges"],
      answer: 2,
      explanation: "Les interférons sont sécrétés par les cellules infectées pour alerter les voisines."
    },
    {
      question: "L’inflammation favorise :",
      options: ["La multiplication virale", "La réparation tissulaire", "La digestion", "La formation d’anticorps"],
      answer: 1,
      explanation: "Elle nettoie les tissus et attire les cellules réparatrices."
    },
    {
      question: "Une défense non spécifique est dite ainsi car :",
      options: ["Elle est dirigée contre un microbe précis", "Elle est inefficace", "Elle agit contre tout type d’agent pathogène", "Elle utilise des anticorps"],
      answer: 2,
      explanation: "Elle intervient sans distinction de l’agent envahisseur."
    }
  ],

  immunite: [
    {
      question: "Quel est le rôle des lymphocytes B ?",
      options: ["Phagocyter les virus", "Produire des anticorps", "Stimuler la peau", "Transporter l’oxygène"],
      answer: 1,
      explanation: "Les lymphocytes B sont responsables de la production d’anticorps."
    },
    {
      question: "Les lymphocytes T sont impliqués dans :",
      options: ["L’immunité humorale", "La digestion", "L’immunité à médiation cellulaire", "Le transport sanguin"],
      answer: 2,
      explanation: "Les lymphocytes T reconnaissent et détruisent les cellules infectées."
    },
    {
      question: "Les macrophages :",
      options: ["Produisent du mucus", "Attaquent les globules rouges", "Phagocytent les microbes", "Transportent les hormones"],
      answer: 2,
      explanation: "Les macrophages sont des phagocytes qui digèrent les agents pathogènes."
    },
    {
      question: "Un antigène est :",
      options: ["Une cellule de défense", "Un marqueur reconnu comme étranger", "Un globule blanc", "Une vitamine"],
      answer: 1,
      explanation: "Un antigène est une molécule qui déclenche une réponse immunitaire."
    },
    {
      question: "Les plasmocytes proviennent de :",
      options: ["Lymphocytes T", "Macrophages", "Lymphocytes B activés", "Globules rouges"],
      answer: 2,
      explanation: "Ce sont des lymphocytes B différenciés produisant des anticorps."
    },
    {
      question: "Les cellules mémoire :",
      options: ["Transportent la mémoire", "Stockent des hormones", "Gardent une trace des infections", "Digèrent les bactéries"],
      answer: 2,
      explanation: "Elles permettent une réponse rapide lors d’une future infection."
    },
    {
      question: "L’immunité active s’acquiert :",
      options: ["Par injection d’anticorps", "Par exposition à un agent pathogène", "Par sommeil", "Par l’alimentation"],
      answer: 1,
      explanation: "Elle se développe après exposition ou vaccination."
    },
    {
      question: "Combien de classes d’anticorps existent ?",
      options: ["3", "4", "5", "6"],
      answer: 2,
      explanation: "Il existe 5 classes d’anticorps : IgA, IgD, IgE, IgG, IgM."
    },
    {
      question: "Avant une greffe, on teste :",
      options: ["La tension", "Le poids", "La compatibilité HLA", "Le groupe lipidique"],
      answer: 2,
      explanation: "Le système HLA est testé pour éviter le rejet."
    },
    {
      question: "L’immunité humorale est assurée par :",
      options: ["Les anticorps", "Les nerfs", "Les enzymes", "Les capillaires"],
      answer: 0,
      explanation: "Elle repose sur la production d’anticorps circulants."
    }
  ],

    hormones: [
    {
      question: "Quelle glande produit l’insuline ?",
      options: ["Thyroïde", "Surrénale", "Hypophyse", "Pancréas"],
      answer: 3,
      explanation: "Le pancréas sécrète l’insuline pour réguler la glycémie."
    },
    {
      question: "L’hormone thyroïdienne contrôle :",
      options: ["Le rythme cardiaque", "Le métabolisme", "La digestion", "La respiration"],
      answer: 1,
      explanation: "Elle régule la vitesse du métabolisme de base."
    },
    {
      question: "Une hyperthyroïdie entraîne :",
      options: ["Prise de poids", "Somnolence", "Amaigrissement", "Hypotension"],
      answer: 2,
      explanation: "L’hyperactivité de la thyroïde accélère le métabolisme, causant un amaigrissement."
    },
    {
      question: "La calcitonine intervient dans :",
      options: ["La digestion", "L’immunité", "La régulation du calcium", "Le sommeil"],
      answer: 2,
      explanation: "Elle réduit le taux de calcium sanguin."
    },
    {
      question: "L’hypophyse est reliée à :",
      options: ["La moelle", "Le pancréas", "L’hypothalamus", "Les poumons"],
      answer: 2,
      explanation: "L’hypophyse est contrôlée par l’hypothalamus."
    },
    {
      question: "La GH (hormone de croissance) est produite par :",
      options: ["La thyroïde", "L’hypophyse", "Le pancréas", "Les glandes salivaires"],
      answer: 1,
      explanation: "La GH stimule la croissance des os et tissus."
    },
    {
      question: "Les surrénales sécrètent :",
      options: ["Insuline", "Adrénaline", "Progestérone", "Thyréostimuline"],
      answer: 1,
      explanation: "L’adrénaline est libérée enp situation de stress par la médullosurrénale."
    },
    {
      question: "La GNRH est :",
      options: ["Une hormone thyroïdienne", "Une neurohormone hypothalamique", "Une enzyme pancréatique", "Une cellule immunitaire"],
      answer: 1,
      explanation: "La GNRH est libérée par l’hypothalamus pour stimuler l’hypophyse."
    },
    {
      question: "Le rôle du foie dans la glycémie est de :",
      options: ["Produire du fer", "Transformer le glucose en glycogène", "Produire de l’insuline", "Détruire les hormones"],
      answer: 1,
      explanation: "Le foie stocke le glucose sous forme de glycogène."
    },
    {
      question: "L’adrénaline prépare l’organisme à :",
      options: ["Dormir", "Lutter ou fuir", "Digérer", "Produire des globules rouges"],
      answer: 1,
      explanation: "Elle élève le rythme cardiaque et la vigilance."
    }
  ],

  // ...existing code...
  systeme_nerveux: [
    {
      question: "Quel est le rôle principal du système nerveux ?",
      options: [
        "Transporter l’oxygène",
        "Coordonner les actions de l’organisme",
        "Produire des hormones",
        "Digérer les aliments"
      ],
      answer: 1,
      explanation: "Le système nerveux coordonne les actions et transmet les informations dans le corps."
    },
    {
      question: "Quelle est l’unité de base du système nerveux ?",
      options: [
        "Le neurone",
        "Le globule rouge",
        "La fibre musculaire",
        "La cellule épithéliale"
      ],
      answer: 0,
      explanation: "Le neurone est la cellule spécialisée dans la transmission de l’influx nerveux."
    },
    {
      question: "Quel organe contrôle le système nerveux central ?",
      options: [
        "Le cœur",
        "Le foie",
        "Le cerveau",
        "Le pancréas"
      ],
      answer: 2,
      explanation: "Le cerveau est l’organe principal du système nerveux central."
    },
    {
      question: "Comment s’appelle la connexion entre deux neurones ?",
      options: [
        "Synapse",
        "Axone",
        "Dendrite",
        "Myéline"
      ],
      answer: 0,
      explanation: "La synapse permet la transmission du message nerveux d’un neurone à un autre."
    },
    {
      question: "Quel est le rôle de la moelle épinière ?",
      options: [
        "Produire des hormones",
        "Transmettre les messages entre le cerveau et le reste du corps",
        "Filtrer le sang",
        "Stocker le calcium"
      ],
      answer: 1,
      explanation: "La moelle épinière transmet les messages nerveux entre le cerveau et le corps."
    },
    {
      question: "Quel type de message transporte le système nerveux ?",
      options: [
        "Messages chimiques uniquement",
        "Messages électriques uniquement",
        "Messages électriques et chimiques",
        "Messages hormonaux uniquement"
      ],
      answer: 2,
      explanation: "Le système nerveux utilise des messages électriques et chimiques."
    },
    {
      question: "Quelle partie du neurone reçoit le message nerveux ?",
      options: [
        "L’axone",
        "La dendrite",
        "La synapse",
        "La gaine de myéline"
      ],
      answer: 1,
      explanation: "Les dendrites reçoivent les messages provenant d’autres neurones."
    },
    {
      question: "Comment s’appelle la substance qui protège et isole l’axone ?",
      options: [
        "La synapse",
        "La myéline",
        "La dopamine",
        "La membrane plasmique"
      ],
      answer: 1,
      explanation: "La gaine de myéline protège et accélère la transmission du message nerveux."
    },
    {
      question: "Quel est le rôle des nerfs sensitifs ?",
      options: [
        "Transmettre les informations du cerveau vers les muscles",
        "Transmettre les informations des organes vers le cerveau",
        "Produire des hormones",
        "Protéger le cerveau"
      ],
      answer: 1,
      explanation: "Les nerfs sensitifs transmettent les informations des organes sensoriels vers le cerveau."
    },
    {
    question: "Que provoque une lésion de la moelle épinière ?",
    options: [
        "Des troubles digestifs",
        "Une paralysie",
        "Une augmentation de la température",
        "Une accélération du rythme cardiaque"
      ],
      answer: 1,
      explanation: "Une lésion de la moelle épinière peut entraîner une paralysie."
    }
  ],
microbiologie: [
  {
    question: "Qu’est-ce qu’un microbe ?",
    options: [
      "Un animal microscopique",
      "Un organisme vivant invisible à l’œil nu",
      "Une molécule d’eau",
      "Un organe du corps humain"
    ],
    answer: 1,
    explanation: "Un microbe est un organisme vivant invisible à l’œil nu."
  },
  {
    question: "Quel type de microbe provoque la grippe ?",
    options: [
      "Une bactérie",
      "Un virus",
      "Un champignon",
      "Un parasite"
    ],
    answer: 1,
    explanation: "La grippe est causée par un virus."
  },
  {
    question: "Comment appelle-t-on une maladie qui se transmet d’un individu à un autre ?",
    options: [
      "Héréditaire",
      "Contagieuse",
      "Chronique",
      "Bénigne"
    ],
    answer: 1,
    explanation: "Une maladie contagieuse se transmet d’un individu à un autre."
  },
  {
    question: "Quel est le rôle des antibiotiques ?",
    options: [
      "Détruire les virus",
      "Détruire les bactéries",
      "Détruire les globules rouges",
      "Détruire les champignons"
    ],
    answer: 1,
    explanation: "Les antibiotiques détruisent ou bloquent la croissance des bactéries."
  },
  {
    question: "Quel geste limite la transmission des microbes ?",
    options: [
      "Se laver les mains",
      "Manger sucré",
      "Dormir tard",
      "Faire du sport"
    ],
    answer: 0,
    explanation: "Le lavage des mains limite la transmission des microbes."
  },
  {
    question: "Comment s’appelle la science qui étudie les microbes ?",
    options: [
      "La biologie",
      "La microbiologie",
      "La physiologie",
      "La chimie"
    ],
    answer: 1,
    explanation: "La microbiologie est la science qui étudie les microbes."
  },
  {
    question: "Quel microbe est utilisé pour fabriquer le yaourt ?",
    options: [
      "Un virus",
      "Une bactérie",
      "Un champignon",
      "Un parasite"
    ],
    answer: 1,
    explanation: "Le yaourt est fabriqué grâce à des bactéries."
  },
  {
    question: "Quel organe du corps humain protège contre les microbes ?",
    options: [
      "La peau",
      "Le cœur",
      "Le foie",
      "L’estomac"
    ],
    answer: 0,
    explanation: "La peau est une barrière naturelle contre les microbes."
  },
  {
    question: "Comment s’appelle la réaction du corps contre les microbes ?",
    options: [
      "La digestion",
      "L’immunité",
      "La respiration",
      "La circulation"
    ],
    answer: 1,
    explanation: "L’immunité est la réaction du corps contre les microbes."
  },
  {
    question: "Quel vaccin protège contre la tuberculose ?",
    options: [
      "Le BCG",
      "Le DTPolio",
      "Le ROR",
      "Le tétanos"
    ],
    answer: 0,
    explanation: "Le vaccin BCG protège contre la tuberculose."
  }
],

heredite: [
  {
    question: "Qu’est-ce que l’hérédité ?",
    options: [
      "La transmission des maladies",
      "La transmission des caractères d’une génération à l’autre",
      "La digestion des aliments",
      "La croissance des plantes"
    ],
    answer: 1,
    explanation: "L’hérédité est la transmission des caractères des parents aux descendants."
  },
  {
    question: "Où se trouvent les gènes dans la cellule ?",
    options: [
      "Dans le cytoplasme",
      "Dans le noyau",
      "Dans la membrane",
      "Dans le réticulum endoplasmique"
    ],
    answer: 1,
    explanation: "Les gènes sont situés sur les chromosomes dans le noyau."
  },
  {
    question: "Comment s’appelle l’ensemble du matériel génétique d’un individu ?",
    options: [
      "Le phénotype",
      "Le génotype",
      "Le caryotype",
      "Le chromosome"
    ],
    answer: 1,
    explanation: "Le génotype est l’ensemble des gènes d’un individu."
  },
  {
    question: "Combien de chromosomes possède une cellule humaine normale ?",
    options: [
      "23",
      "46",
      "44",
      "92"
    ],
    answer: 1,
    explanation: "Une cellule humaine normale possède 46 chromosomes (23 paires)."
  },
  {
    question: "Qu’est-ce qu’un allèle ?",
    options: [
      "Une forme différente d’un même gène",
      "Un type de cellule",
      "Un organe",
      "Une molécule d’ADN"
    ],
    answer: 0,
    explanation: "Un allèle est une version possible d’un même gène."
  },
  {
    question: "Comment s’appelle l’apparence observable d’un individu ?",
    options: [
      "Le génotype",
      "Le phénotype",
      "Le caryotype",
      "L’allèle"
    ],
    answer: 1,
    explanation: "Le phénotype est l’ensemble des caractères observables d’un individu."
  },
  {
    question: "Qu’est-ce qu’un caractère héréditaire ?",
    options: [
      "Un caractère acquis pendant la vie",
      "Un caractère transmis par les gènes",
      "Un caractère dû à l’environnement",
      "Un caractère temporaire"
    ],
    answer: 1,
    explanation: "Un caractère héréditaire est transmis par les gènes des parents."
  },
  {
    question: "Comment s’appelle la molécule qui porte l’information génétique ?",
    options: [
      "ARN",
      "Protéine",
      "ADN",
      "Lipide"
    ],
    answer: 2,
    explanation: "L’ADN porte l’information génétique."
  },
  {
    question: "Qu’est-ce qu’une mutation génétique ?",
    options: [
      "Un changement dans la séquence de l’ADN",
      "La division cellulaire",
      "La digestion des protéines",
      "La respiration cellulaire"
    ],
    answer: 0,
    explanation: "Une mutation est une modification de la séquence de l’ADN."
  },
  {
    question: "Quel scientifique est considéré comme le père de la génétique ?",
    options: [
      "Louis Pasteur",
      "Gregor Mendel",
      "Charles Darwin",
      "Marie Curie"
    ],
    answer: 1,
    explanation: "Gregor Mendel est le père de la génétique."
  }
],

ogm: [
  {
    question: "Que signifie le sigle OGM ?",
    options: [
      "Organisme Généralisé Modifié",
      "Organisme Génétiquement Modifié",
      "Organisation Génétique Mondiale",
      "Origine Génétique Modifiée"
    ],
    answer: 1,
    explanation: "OGM signifie Organisme Génétiquement Modifié."
  },
  {
    question: "Comment obtient-on un OGM ?",
    options: [
      "Par croisement naturel",
      "Par modification de l’ADN en laboratoire",
      "Par sélection des plus gros fruits",
      "Par arrosage spécial"
    ],
    answer: 1,
    explanation: "Un OGM est obtenu par modification de l’ADN en laboratoire."
  },
  {
    question: "Quel est l’objectif principal de la création d’OGM agricoles ?",
    options: [
      "Changer la couleur des plantes",
      "Augmenter la résistance aux maladies ou aux insectes",
      "Réduire la taille des fruits",
      "Rendre les plantes toxiques"
    ],
    answer: 1,
    explanation: "On crée des OGM pour améliorer la résistance ou le rendement des plantes."
  },
  {
    question: "Quel aliment peut être un OGM ?",
    options: [
      "Le maïs",
      "Le sel",
      "L’eau",
      "Le sucre pur"
    ],
    answer: 0,
    explanation: "Le maïs est souvent cultivé sous forme OGM."
  },
  {
    question: "Quel risque est parfois évoqué à propos des OGM ?",
    options: [
      "Ils peuvent transmettre des maladies génétiques",
      "Ils pourraient avoir un impact sur l’environnement ou la santé",
      "Ils rendent les aliments radioactifs",
      "Ils font pousser les plantes plus lentement"
    ],
    answer: 1,
    explanation: "Certains craignent des impacts sur l’environnement ou la santé."
  },
  {
    question: "Quelle technique est utilisée pour introduire un gène dans un OGM ?",
    options: [
      "La greffe",
      "La transgénèse",
      "La fermentation",
      "La pasteurisation"
    ],
    answer: 1,
    explanation: "La transgénèse consiste à introduire un gène étranger dans un organisme."
  },
  {
    question: "Les OGM sont-ils utilisés uniquement dans l’agriculture ?",
    options: [
      "Oui, uniquement",
      "Non, aussi en médecine et recherche",
      "Non, uniquement dans l’industrie textile",
      "Non, uniquement dans l’élevage"
    ],
    answer: 1,
    explanation: "Les OGM sont aussi utilisés en médecine (ex : insuline produite par des bactéries OGM)."
  },
  {
    question: "Quel organisme peut être OGM ?",
    options: [
      "Une plante",
      "Un animal",
      "Une bactérie",
      "Tous les précédents"
    ],
    answer: 3,
    explanation: "Plantes, animaux et bactéries peuvent être génétiquement modifiés."
  },
  {
    question: "Quel est un avantage des OGM pour les agriculteurs ?",
    options: [
      "Moins de pertes dues aux insectes",
      "Plus de travail manuel",
      "Moins de récoltes",
      "Plus de maladies"
    ],
    answer: 0,
    explanation: "Les OGM résistants aux insectes permettent de réduire les pertes."
  },
  {
    question: "Que doit-on faire avant de commercialiser un OGM ?",
    options: [
      "Rien, ils sont toujours sûrs",
      "Les tester et obtenir une autorisation",
      "Les vendre directement",
      "Les mélanger avec d’autres plantes"
    ],
    answer: 1,
    explanation: "Les OGM doivent être testés et autorisés avant d’être commercialisés."
  }
],

ecologie: [
  {
    question: "Qu’est-ce que l’écologie ?",
    options: [
      "L’étude des étoiles",
      "L’étude des relations entre les êtres vivants et leur environnement",
      "La fabrication de médicaments",
      "La culture des plantes en laboratoire"
    ],
    answer: 1,
    explanation: "L’écologie étudie les relations entre les êtres vivants et leur milieu."
  },
  {
    question: "Comment s’appelle l’ensemble des êtres vivants d’un milieu donné ?",
    options: [
      "La population",
      "La communauté",
      "L’écosystème",
      "La biosphère"
    ],
    answer: 1,
    explanation: "La communauté regroupe toutes les populations d’un même milieu."
  },
  {
    question: "Qu’est-ce qu’un écosystème ?",
    options: [
      "Un ensemble d’êtres vivants uniquement",
      "Un ensemble de roches",
      "Un ensemble d’êtres vivants et de leur milieu",
      "Un animal particulier"
    ],
    answer: 2,
    explanation: "Un écosystème comprend les êtres vivants et leur environnement."
  },
  {
    question: "Quel gaz est principalement responsable de l’effet de serre ?",
    options: [
      "L’oxygène",
      "Le dioxyde de carbone (CO2)",
      "L’azote",
      "L’hélium"
    ],
    answer: 1,
    explanation: "Le CO2 est un gaz à effet de serre important."
  },
  {
    question: "Comment appelle-t-on la disparition totale d’une espèce ?",
    options: [
      "L’évolution",
      "L’extinction",
      "La migration",
      "La reproduction"
    ],
    answer: 1,
    explanation: "L’extinction est la disparition totale d’une espèce."
  },
  {
    question: "Quel geste aide à protéger l’environnement ?",
    options: [
      "Jeter les déchets dans la nature",
      "Recycler les déchets",
      "Utiliser plus de plastique",
      "Polluer les rivières"
    ],
    answer: 1,
    explanation: "Recycler permet de limiter la pollution et de préserver les ressources."
  },
  {
    question: "Qu’est-ce que la biodiversité ?",
    options: [
      "La diversité des climats",
      "La diversité des espèces vivantes",
      "La diversité des roches",
      "La diversité des océans"
    ],
    answer: 1,
    explanation: "La biodiversité désigne la variété des espèces vivantes sur Terre."
  },
  {
    question: "Quel est le rôle des producteurs dans un écosystème ?",
    options: [
      "Ils mangent les animaux",
      "Ils produisent de la matière organique grâce à la photosynthèse",
      "Ils décomposent la matière",
      "Ils polluent l’eau"
    ],
    answer: 1,
    explanation: "Les producteurs (plantes) fabriquent de la matière organique à partir de la lumière."
  },
  {
    question: "Comment s’appelle la chaîne reliant les êtres vivants qui se nourrissent les uns des autres ?",
    options: [
      "La chaîne alimentaire",
      "La chaîne de montagnes",
      "La chaîne humaine",
      "La chaîne de transport"
    ],
    answer: 0,
    explanation: "La chaîne alimentaire montre qui mange qui dans un écosystème."
  },
  {
    question: "Quel est un effet de la déforestation ?",
    options: [
      "Augmentation de la biodiversité",
      "Diminution de la biodiversité",
      "Plus d’oxygène produit",
      "Stabilisation du climat"
    ],
    answer: 1,
    explanation: "La déforestation réduit la biodiversité et perturbe les écosystèmes."
  }
],
};
