const chimie = {
chimie_minerale: [
  {
    question: "Vrai ou faux : Une mole contient toujours le même nombre d'entités, peu importe la nature de la substance.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Une mole contient 6,022 × 10²³ entités, quelle que soit la nature chimique."
  },
  {
    question: "Complétez : La masse molaire de H₂O est ____ g/mol.",
    options: ["16", "18", "17", "20"],
    answer: 1,
    explanation: "H₂O : 2×1 + 16 = 18 g/mol."
  },
  {
    question: "Une solution de HCl a un pH = 2. Elle est :",
    options: ["neutre", "acide", "basique", "salée"],
    answer: 1,
    explanation: "Un pH < 7 indique un milieu acide."
  },
  {
    question: "Vrai ou faux : Une base forte a toujours un pH inférieur à 7.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "Une base forte a un pH généralement > 7."
  },
  {
    question: "Complétez : Le volume molaire d’un gaz parfait à CNTP est environ ____ L/mol.",
    options: ["22,4", "24", "18", "20"],
    answer: 0,
    explanation: "À CNTP, 1 mole de gaz occupe environ 22,4 L."
  },
  {
    question: "Vrai ou faux : Le chlorure d’ammonium en solution est acide.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Il donne un pH < 7, selon le modèle du NH₄⁺ acide faible."
  },
  {
    question: "Dans l’équation : Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), l’oxydant est :",
    options: ["Cu", "Zn", "Zn²⁺", "Cu²⁺"],
    answer: 3,
    explanation: "C’est Cu²⁺ qui capte des électrons → oxydant."
  },
  {
    question: "Complétez : Une réaction d’oxydoréduction est un transfert d’__________.",
    options: ["ions", "protons", "électrons", "neutrons"],
    answer: 2,
    explanation: "Oxydoréduction = perte/gain d’électrons."
  },
  {
    question: "La solution obtenue en dissolvant NaOH est :",
    options: ["acide", "neutre", "basique", "oxydante"],
    answer: 2,
    explanation: "NaOH est une base forte."
  },
  {
    question: "Complétez : Une électrolyse est une réaction redox provoquée par ________.",
    options: ["le pH", "la chaleur", "un courant électrique", "l’oxygène"],
    answer: 2,
    explanation: "L’électrolyse est forcée par un générateur électrique."
  },
  {
    question: "Vrai ou faux : Une dissolution est une réaction chimique.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "C’est un phénomène physique (sauf si réaction avec solvant)."
  },
  {
    question: "Le pH d’une solution d’acide sulfurique dilué est 1. Cela signifie que :",
    options: ["la solution est neutre", "la solution est acide", "la solution est basique", "c’est une base faible"],
    answer: 1,
    explanation: "pH très bas → solution très acide."
  },
  {
    question: "Complétez : Une solution dont [H₃O⁺] = 10⁻³ mol/L a un pH de :",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "pH = –log[H₃O⁺] → –log(10⁻³) = 3."
  },
  {
    question: "Vrai ou faux : L'eau pure a un pH de 7 à 25°C.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Par définition, pH neutre = 7 pour eau pure à 25°C."
  },
  {
    question: "Complétez : Le chlorure de sodium NaCl est un ________________ neutre.",
    options: ["oxyde", "sel", "acide", "base"],
    answer: 1,
    explanation: "NaCl est un sel issu d’un acide fort et d’une base forte."
  },
  {
    question: "Quelle est la concentration molaire d’une solution contenant 2 mol de soluté dans 1 L de solution ?",
    options: ["2 mol/L", "0,5 mol/L", "1 mol/L", "3 mol/L"],
    answer: 0,
    explanation: "C = n / V = 2 / 1 = 2 mol/L"
  },
  {
    question: "Vrai ou faux : Plus une solution est concentrée en ions H₃O⁺, plus son pH est élevé.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "Plus [H₃O⁺] est élevée, plus le pH est bas."
  },
  {
    question: "Le cuivre est un métal utilisé dans :",
    options: ["la fabrication de verre", "l’extraction du fer", "les circuits électriques", "l’oxydation des alcools"],
    answer: 2,
    explanation: "Le cuivre est conducteur et résistant à l’oxydation."
  },
  {
    question: "Complétez : Lors d’une électrolyse, l’ion qui se dépose à la cathode est celui qui est :",
    options: ["oxydé", "réduit", "neutre", "précipité"],
    answer: 1,
    explanation: "La cathode attire les cations qui y gagnent des électrons."
  },
  {
    question: "Vrai ou faux : Un métal plus réducteur peut remplacer un métal moins réducteur dans une réaction.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Un métal plus réducteur s’oxyde plus facilement et peut déplacer un autre métal de sa solution."
  },
  {
    question: "Complétez : Une solution de NaOH est dite basique car elle libère des ions ________ en solution.",
    options: ["H⁺", "Na⁺", "OH⁻", "Cl⁻"],
    answer: 2,
    explanation: "NaOH → Na⁺ + OH⁻, donc la solution est basique à cause des ions OH⁻."
  },
  {
    question: "Vrai ou faux : Une solution avec un pH = 9 est plus basique qu'une solution de pH = 8.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Plus le pH est grand, plus la solution est basique."
  },
  {
    question: "Complétez : Lors d'une réaction redox, l'élément qui s'oxyde voit son nombre d'oxydation :",
    options: ["diminuer", "rester inchangé", "augmenter", "devenir nul"],
    answer: 2,
    explanation: "L’oxydation correspond à une perte d’électrons → augmentation du nombre d’oxydation."
  },
  {
    question: "Quel est le rôle d’un indicateur coloré en chimie ?",
    options: ["Mesurer la température", "Identifier un ion", "Déterminer une masse", "Détecter le pH"],
    answer: 3,
    explanation: "Les indicateurs comme le tournesol changent de couleur selon le pH."
  },
  {
    question: "Complétez : Une réaction d’oxydoréduction met en jeu un ________ d’électrons.",
    options: ["transfert", "mélange", "partage", "échauffement"],
    answer: 0,
    explanation: "Oxydation = perte, réduction = gain → transfert d’électrons."
  },
  {
    question: "Vrai ou faux : La réaction entre le zinc et les ions Cu²⁺ est spontanée.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Le zinc est plus réducteur que le cuivre, donc la réaction est spontanée."
  },
  {
    question: "Complétez : Une solution à pH = 7 est dite :",
    options: ["acide", "basique", "neutre", "saline"],
    answer: 2,
    explanation: "pH = 7 → solution neutre, comme l’eau pure."
  },
  {
    question: "Dans une cellule électrochimique, l'anode est le siège :",
    options: ["de la réduction", "de la corrosion", "de l’oxydation", "de l'hydrolyse"],
    answer: 2,
    explanation: "L’oxydation se produit à l’anode dans une pile ou une électrolyse."
  },
  {
    question: "Quelle est la formule de la concentration molaire ?",
    options: ["C = V / n", "C = n / V", "C = m × V", "C = V × n"],
    answer: 1,
    explanation: "C = n / V, avec C en mol/L."
  },
  {
    question: "Vrai ou faux : On peut utiliser le bleu de bromothymol pour déterminer si une solution est neutre.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Il devient vert à pH = 7 → indicateur de neutralité."
  },
  {
    question: "Complétez : Le nombre d’Avogadro correspond à :",
    options: ["la masse d’un atome", "le volume d’un gaz", "le nombre d’atomes dans 1 mole", "la charge d’un électron"],
    answer: 2,
    explanation: "6,022 × 10²³ particules par mole."
  },
  {
    question: "Quel est le gaz formé lors de l'action de l'acide chlorhydrique sur le zinc ?",
    options: ["O₂", "CO₂", "H₂", "N₂"],
    answer: 2,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂"
  },
  {
    question: "Complétez : Lors d’une électrolyse, les cations migrent vers la :",
    options: ["cathode", "anode", "solution", "membrane"],
    answer: 0,
    explanation: "Les cations (chargés +) sont attirés par la cathode (–)."
  },
  {
    question: "Vrai ou faux : Une pile électrique transforme de l’énergie chimique en énergie électrique.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C’est exactement le rôle d’une pile."
  },
  {
    question: "Lequel des éléments suivants est un métal alcalin ?",
    options: ["Fer", "Cuivre", "Sodium", "Calcium"],
    answer: 2,
    explanation: "Le sodium (Na) est un métal alcalin (colonne 1)."
  },
  {
    question: "Complétez : Une solution de NaCl ne modifie pas la couleur du papier tournesol. Elle est donc :",
    options: ["acide", "neutre", "basique", "réductrice"],
    answer: 1,
    explanation: "NaCl est le sel d’un acide et d’une base forts → solution neutre."
  },
  {
    question: "Vrai ou faux : Lorsqu’un métal est oxydé, il devient un ion positif.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Perte d’électrons → formation d’un cation."
  },
  {
    question: "Le fer rouille lorsqu’il réagit avec :",
    options: ["le dioxygène", "l’azote", "le méthane", "le dioxyde de carbone"],
    answer: 0,
    explanation: "O₂ + humidité = oxydation du fer → rouille."
  },
  {
    question: "Complétez : Le pH d’un acide fort en solution concentrée est proche de :",
    options: ["7", "5", "1", "10"],
    answer: 2,
    explanation: "pH proche de 1 → solution très acide."
  },
  {
    question: "Vrai ou faux : Une base faible réagit complètement avec l’eau.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "Une base faible ne réagit que partiellement, contrairement à une base forte."
  }
],

chimie_organique: [
  {
    question: "Complétez : Un alcène possède au moins une liaison ______.",
    options: ["simple", "double", "triple", "aromatique"],
    answer: 1,
    explanation: "Les alcènes ont au moins une liaison double C=C."
  },
  {
    question: "Vrai ou faux : Un alcyne possède une liaison triple.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Par définition, les alcynes possèdent une triple liaison entre deux carbones."
  },
  {
    question: "Complétez : Le méthane a pour formule brute :",
    options: ["C₂H₆", "CH₄", "CH₃OH", "C₂H₄"],
    answer: 1,
    explanation: "C'est l’alcane le plus simple : CH₄."
  },
  {
    question: "Quel est le nom de la fonction présente dans CH₃–COOH ?",
    options: ["alcool", "cétone", "acide carboxylique", "aldéhyde"],
    answer: 2,
    explanation: "COOH indique un acide carboxylique."
  },
  {
    question: "Complétez : Le groupe –OH est caractéristique de la fonction :",
    options: ["acide", "cétone", "alcool", "amide"],
    answer: 2,
    explanation: "Le groupe hydroxyle est propre aux alcools."
  },
  {
    question: "Vrai ou faux : Les isomères ont la même formule brute mais des formules semi-développées différentes.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C'est la définition des isomères."
  },
  {
    question: "Complétez : Le benzène est un hydrocarbure de type ______.",
    options: ["saturé", "cyclique", "aromatique", "alcène"],
    answer: 2,
    explanation: "Le benzène est aromatique car il possède un cycle conjugué stable."
  },
  {
    question: "Quelle est la formule brute de l’éthanol ?",
    options: ["CH₄O", "C₂H₆O", "C₂H₄O₂", "C₂H₆"],
    answer: 1,
    explanation: "Éthanol : C₂H₅OH → C₂H₆O."
  },
  {
    question: "Complétez : Le propane possède ______ atomes de carbone.",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "Préfixe “pro” indique 3 carbones."
  },
  {
    question: "Vrai ou faux : Un alcane est un hydrocarbure saturé.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Les alcanes n'ont que des liaisons simples (saturés)."
  },
  {
    question: "Complétez : La réaction entre un alcool et un acide produit un ester et de l’____.",
    options: ["éthanol", "éther", "eau", "acide"],
    answer: 2,
    explanation: "C’est une estérification qui produit un ester + H₂O."
  },
  {
    question: "La réaction inverse de l’estérification est :",
    options: ["addition", "hydrolyse", "déshydratation", "substitution"],
    answer: 1,
    explanation: "Hydrolyse = réaction avec l’eau pour décomposer l’ester."
  },
  {
    question: "Vrai ou faux : CH₃–CH₂–OH est un alcool primaire.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Le carbone portant le –OH est lié à un seul autre carbone."
  },
  {
    question: "Complétez : La liaison triple de l’éthyne est constituée de ______ liaisons sigma.",
    options: ["1", "2", "3", "0"],
    answer: 0,
    explanation: "Une triple liaison contient 1 sigma et 2 π."
  },
  {
    question: "La formule topologique du but–2–ène comporte :",
    options: ["4 sommets", "2 liaisons doubles", "1 cycle", "1 liaison triple"],
    answer: 0,
    explanation: "Chaque sommet représente un atome de carbone."
  },
  {
    question: "Complétez : Un aldéhyde contient le groupe fonctionnel :",
    options: ["–COOH", "–CHO", "–OH", "–CO–"],
    answer: 1,
    explanation: "L’aldéhyde a une double liaison C=O + H → –CHO."
  },
  {
    question: "Quel est le nom officiel de CH₃–CH(CH₃)–CH₃ ?",
    options: ["butane", "méthylpropane", "propane", "isobutane"],
    answer: 1,
    explanation: "Le nom IUPAC est méthylpropane."
  },
  {
    question: "Vrai ou faux : Le test de Fehling permet d’identifier les cétones.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "Fehling réagit avec les aldéhydes, pas les cétones."
  },
  {
    question: "Complétez : Une molécule ayant une chaîne carbonée linéaire est dite :",
    options: ["cyclique", "ouverte", "aromatique", "ramifiée"],
    answer: 1,
    explanation: "Une chaîne sans cycle est dite ouverte ou linéaire."
  },
  {
    question: "La formule brute du butan–2–ol est :",
    options: ["C₄H₈O", "C₄H₁₀O", "C₄H₁₀", "C₃H₆O"],
    answer: 1,
    explanation: "C₄H₁₀O est la formule brute du butan–2–ol."
  },
  {
    question: "Vrai ou faux : La combustion complète d’un hydrocarbure donne du CO₂ et de l’eau.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C’est la définition de la combustion complète."
  },
  {
    question: "Complétez : La fonction alcool est mise en évidence par la formation d’un :",
    options: ["gaz", "sel", "précipité blanc", "ester"],
    answer: 3,
    explanation: "Un alcool réagit avec un acide pour former un ester."
  },
  {
    question: "Quelle est la formule semi-développée de l’éthyne ?",
    options: ["CH₃–CH₃", "CH₂=CH₂", "CH≡CH", "CH₃–CH=CH₂"],
    answer: 2,
    explanation: "Éthyne = acétylène → CH≡CH"
  },
  {
    question: "Complétez : L’addition de H₂ sur un alcène produit un :",
    options: ["alcyne", "acide", "alcane", "alcool"],
    answer: 2,
    explanation: "C’est une hydrogénation : l’alcène devient un alcane."
  },
  {
    question: "Vrai ou faux : Les hydrocarbures saturés peuvent subir des réactions d’addition.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "Les alcanes (saturés) ne subissent pas d’addition, mais des substitutions."
  },
  {
    question: "La fonction cétone est caractérisée par :",
    options: ["–COOH", "–OH", "–CO–", "–CHO"],
    answer: 2,
    explanation: "La cétone possède une double liaison C=O entre deux carbones."
  },
  {
    question: "Complétez : Un hydrocarbure est un composé constitué uniquement de ______ et d’______.",
    options: ["carbone, azote", "carbone, oxygène", "carbone, hydrogène", "hydrogène, oxygène"],
    answer: 2,
    explanation: "Les hydrocarbures contiennent uniquement du C et du H."
  },
  {
    question: "Le nom IUPAC du composé CH₃–CH₂–CHO est :",
    options: ["propane", "propène", "propanal", "propanone"],
    answer: 2,
    explanation: "Il s’agit d’un aldéhyde à 3 carbones → propanal."
  },
  {
    question: "Vrai ou faux : Un alcool tertiaire est oxydé plus facilement qu’un alcool primaire.",
    options: ["Vrai", "Faux"],
    answer: 1,
    explanation: "Les alcools tertiaires sont très résistants à l’oxydation."
  },
  {
    question: "Complétez : La réaction entre un alcyne et HCl est une réaction d’________.",
    options: ["élimination", "substitution", "addition", "oxydation"],
    answer: 2,
    explanation: "Un H et un Cl s’ajoutent → addition."
  },
  {
    question: "Vrai ou faux : Le groupe carbonyle (C=O) est présent dans les cétones et les aldéhydes.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Les deux contiennent un groupe C=O, mais dans des positions différentes."
  },
  {
    question: "Complétez : Le but–1–ène contient ____ atomes de carbone.",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "Le préfixe « but » indique 4 carbones."
  },
  {
    question: "Quel est le nom de l'alcane de formule brute C₅H₁₂ ?",
    options: ["pentane", "butane", "hexane", "méthane"],
    answer: 0,
    explanation: "C₅H₁₂ est la formule brute du pentane."
  },
  {
    question: "Vrai ou faux : Le test de Tollens est positif avec les aldéhydes.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Il permet d’oxyder un aldéhyde en acide carboxylique et donne un miroir d’argent."
  },
  {
    question: "Complétez : La liaison C=C est plus __________ que la liaison C–C.",
    options: ["faible", "forte", "courte", "longue"],
    answer: 2,
    explanation: "Une double liaison est plus courte qu’une simple liaison."
  },
  {
    question: "Quel composé est un hydrocarbure aromatique ?",
    options: ["éthane", "benzène", "propanol", "éthyne"],
    answer: 1,
    explanation: "Le benzène est l’exemple type d’aromatique."
  },
  {
    question: "Complétez : L'addition de HBr à un alcène suit la règle de ________.",
    options: ["Dalton", "Tollens", "Markovnikov", "Hess"],
    answer: 2,
    explanation: "Le H se fixe sur le C le plus hydrogéné (Markovnikov)."
  },
  {
    question: "Vrai ou faux : Un ester est formé à partir d’un acide et d’un alcool.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C’est une estérification."
  },
  {
    question: "Lequel est un alcool tertiaire ?",
    options: ["CH₃CH₂OH", "CH₃CH(OH)CH₃", "C(CH₃)₃OH", "CH₂OH–CH₃"],
    answer: 2,
    explanation: "L’atome de C portant le OH est lié à 3 autres carbones."
  },
  {
    question: "Complétez : Un composé qui réagit avec Na donne un dégagement de gaz. C’est probablement un ________.",
    options: ["alcène", "ester", "alcool", "cétone"],
    answer: 2,
    explanation: "Na réagit avec les fonctions alcool pour libérer H₂."
  },
  {
    question: "Vrai ou faux : Les esters sont souvent responsables des odeurs de fruits.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "Beaucoup d’esters sont volatils et ont une odeur fruitée."
  },
  {
    question: "Complétez : Le groupe fonctionnel caractéristique des amines est :",
    options: ["–COOH", "–NH₂", "–CHO", "–OH"],
    answer: 1,
    explanation: "Les amines ont une fonction amine primaire –NH₂."
  },
  {
    question: "Quelle est la nature du composé CH₃–CO–CH₃ ?",
    options: ["aldéhyde", "alcool", "cétone", "acide carboxylique"],
    answer: 2,
    explanation: "C’est une cétone (fonction CO entre deux C)."
  },
  {
    question: "Vrai ou faux : Tous les alcènes ont une géométrie plane autour de la double liaison.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "La double liaison impose un plan (sp²)."
  },
  {
    question: "Complétez : La molécule CH₃–CH₂–COOH est :",
    options: ["propanone", "propanal", "acide propanoïque", "propène"],
    answer: 2,
    explanation: "Elle porte la fonction acide → propanoïque."
  },
  {
    question: "Quel composé présente une isomérie de chaîne ?",
    options: ["CH₃CH₂CH₂CH₃ et CH₃CH(CH₃)CH₃", "CH₄ et C₂H₆", "CH₂=CH₂ et CH≡CH", "CH₃–CH₂–OH et CH₃OCH₃"],
    answer: 0,
    explanation: "Même formule brute mais chaîne ramifiée."
  },
  {
    question: "Vrai ou faux : Les alcynes ont une géométrie linéaire autour de la liaison triple.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "La triple liaison implique un angle de 180° (sp)."
  },
  {
    question: "Complétez : L’isomérie de position concerne la position d’un(e) ______ sur la chaîne carbonée.",
    options: ["atome d’hydrogène", "liaison simple", "groupe fonctionnel", "nom de molécule"],
    answer: 2,
    explanation: "Un même groupe fonctionnel à des positions différentes."
  },
  {
    question: "Quel est le produit de l’hydrogénation de CH≡CH ?",
    options: ["CH₄", "CH₂=CH₂", "CH₃–CH₃", "CH₂OH–CH₃"],
    answer: 2,
    explanation: "Éthyne → éthane par hydrogénation totale."
  },
  {
    question: "Vrai ou faux : Le groupe méthyle est noté –CH₃.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C’est la représentation du radical méthyle."
  },
  {
    question: "Complétez : Une cétone ne peut pas s’oxyder facilement, contrairement à un(e) ______.",
    options: ["acide", "alcène", "alcool tertiaire", "aldéhyde"],
    answer: 3,
    explanation: "Les aldéhydes s’oxydent en acides ; les cétones non."
  },
  {
    question: "Le test au réactif de Fehling est négatif avec :",
    options: ["aldéhyde", "cétone", "glucose", "fructose"],
    answer: 1,
    explanation: "Fehling ne réagit pas avec les cétones."
  },
  {
    question: "Quel gaz est formé quand un alcool réagit avec un métal alcalin ?",
    options: ["O₂", "H₂", "CH₄", "CO₂"],
    answer: 1,
    explanation: "Dégagement de dihydrogène (H₂)."
  },
  {
    question: "Complétez : L’oxydation douce d’un alcool primaire donne un(e) :",
    options: ["cétone", "ester", "aldéhyde", "alcool secondaire"],
    answer: 2,
    explanation: "C’est la première étape avant l’acide carboxylique."
  },
  {
    question: "Vrai ou faux : Les arènes sont des composés contenant un noyau benzénique.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "C’est la définition des arènes."
  },
  {
    question: "Quel est le nom de CH₃CH=CHCH₃ ?",
    options: ["butane", "but–2–ène", "butan–2–ol", "butyne"],
    answer: 1,
    explanation: "Double liaison entre C2 et C3 → but–2–ène."
  },
  {
    question: "Complétez : CH₃–CH₂–CH=O est un(e) :",
    options: ["alcool", "aldéhyde", "cétone", "acide carboxylique"],
    answer: 1,
    explanation: "–CHO = aldéhyde → propanal."
  },
  {
    question: "Complétez : Un acide carboxylique peut réagir avec une base pour former :",
    options: ["un sel", "un ester", "un acide fort", "un alcool"],
    answer: 0,
    explanation: "Acide + base → sel + eau."
  },
  {
    question: "Vrai ou faux : CH₃–CH₂–OH est soluble dans l’eau.",
    options: ["Vrai", "Faux"],
    answer: 0,
    explanation: "L’éthanol est polaire et hydrophile."
  },
  {
    question: "Complétez : L’acide méthanoïque a pour formule :",
    options: ["CH₃COOH", "HCOOH", "CH₃CH₂OH", "CH₂O"],
    answer: 1,
    explanation: "C’est le plus petit acide carboxylique : HCOOH."
  }   
]

}