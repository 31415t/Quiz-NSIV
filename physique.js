const physique = {
  condensateur: [
    {
      question: "Quelle est l’unité de la capacité électrique d’un condensateur ?",
      options: ["Farad", "Ohm", "Tesla", "Coulomb"],
      answer: 0,
      explanation: "Le farad (F) est l’unité de mesure de la capacité d’un condensateur."
    },
    {
      question: "Vrai ou faux : Deux condensateurs en série ont une capacité équivalente supérieure à chaque capacité individuelle.",
      options: ["Vrai", "Faux"],
      answer: 1,
      explanation: "La capacité équivalente en série est toujours inférieure à chaque capacité individuelle."
    },
    {
      question: "Complétez : La capacité équivalente de deux condensateurs \( C_1 \) et \( C_2 \) en parallèle est donnée par ____. ",
      options: ["C1 + C2", "1/(1/C1 + 1/C2)", "C1 × C2", "(C1 + C2)/2"],
      answer: 0,
      explanation: "En parallèle, les capacités s’additionnent directement."
    },
    {
      question: "Quel est le rôle principal d’un condensateur dans un circuit ?",
      options: ["Stocker de l'énergie sous forme de champ magnétique", "Réduire la tension", "Stocker de l'énergie sous forme de champ électrique", "Convertir le courant en tension"],
      answer: 2,
      explanation: "Les condensateurs stockent l’énergie dans un champ électrique entre leurs plaques."
    },
    {
      question: "Vrai ou faux : Un condensateur peut rester chargé même après avoir été débranché du circuit.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Il peut conserver une charge pendant un certain temps, ce qui peut être dangereux."
    },
    {
      question: "Pourquoi ne faut-il pas toucher les composants internes d’un téléviseur même débranché ?",
      options: ["Parce que le plastique peut brûler", "À cause des bobines actives", "À cause de la chaleur résiduelle", "À cause des condensateurs chargés"],
      answer: 3,
      explanation: "Les condensateurs peuvent conserver une tension élevée même hors tension."
    },
    {
      question: "Complétez : L’énergie \( E \) stockée dans un condensateur est donnée par la formule ____. ",
      options: ["E = Q × C", "E = 1/2 × C × V²", "E = C/V", "E = V × R"],
      answer: 1,
      explanation: "C’est la formule correcte pour l’énergie stockée dans un condensateur."
    },
    {
      question: "Que se passe-t-il lorsque deux condensateurs identiques sont mis en série ?",
      options: ["La capacité double", "La capacité reste inchangée", "La capacité est divisée par deux", "La tension totale est réduite"],
      answer: 2,
      explanation: "La capacité équivalente est divisée par le nombre de condensateurs identiques en série."
    },
    {
      question: "Quelle grandeur physique est la même pour deux condensateurs en parallèle ?",
      options: ["La tension", "La charge", "La capacité", "Le courant"],
      answer: 0,
      explanation: "En parallèle, tous les composants reçoivent la même tension."
    },
    {
      question: "Complétez : La charge \( Q \) stockée dans un condensateur est donnée par ____. ",
      options: ["Q = V/C", "Q = C × V", "Q = 1/2 × C × V²", "Q = V²/C"],
      answer: 1,
      explanation: "C’est la relation fondamentale entre la charge, la capacité et la tension."
    },
    {
      question: "Quel est le rôle d’un condensateur dans un filtre passe-bas ?",
      options: ["Amplifier les hautes fréquences", "Bloquer les basses fréquences", "Laisser passer les basses fréquences", "Transformer le courant en tension"],
      answer: 2,
      explanation: "Dans un filtre passe-bas, le condensateur shunte les hautes fréquences à la masse."
    },
    {
      question: "Vrai ou faux : La capacité équivalente de condensateurs en série est toujours inférieure à la plus petite des capacités.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "La capacité équivalente est plus faible que n’importe quelle capacité individuelle en série."
    },
    {
      question: "Un condensateur de 10 μF est connecté à une tension de 5 V. Quelle est la charge stockée ?",
      options: ["50 μC", "2 μC", "5 μC", "15 μC"],
      answer: 0,
      explanation: "Q = C × V = 10 μF × 5 V = 50 μC."
    },
    {
      question: "À quoi sert un condensateur dans un circuit d’alimentation ?",
      options: ["Augmenter la tension", "Stabiliser la tension", "Réduire le courant", "Créer des oscillations"],
      answer: 1,
      explanation: "Les condensateurs sont utilisés pour lisser les tensions après redressement."
    },
    {
      question: "Complétez : Lorsque deux condensateurs de capacités \( C_1 \) et \( C_2 \) sont associés en série, la formule correcte est ____. ",
      options: ["Ceq = C1 + C2", "1/Ceq = 1/C1 + 1/C2", "Ceq = C1 × C2", "Ceq = (C1 + C2)/2"],
      answer: 1,
      explanation: "C’est la formule d’association en série des condensateurs."
    }
  ],

  magnetisme: [
    {
      question: "Vrai ou faux : Les effets magnétiques d’un aimant se manifestent principalement à ses pôles.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Les pôles d’un aimant concentrent le champ magnétique, les effets y sont donc plus marqués."
    },
    {
      question: "Complétez : Un solénoïde traversé par un courant crée un champ magnétique semblable à celui d’un ________________.",
      options: ["condensateur", "aimant droit", "moteur", "galvanomètre"],
      answer: 1,
      explanation: "Un solénoïde génère un champ magnétique uniforme dans sa cavité, comme un aimant."
    },
    {
      question: "Quel élément augmente le champ magnétique d’un solénoïde ?",
      options: ["Le plastique", "L’air", "Un noyau en fer doux", "Une résistance"],
      answer: 2,
      explanation: "Le noyau ferromagnétique amplifie considérablement le champ magnétique."
    },
    {
      question: "Quelle est l’unité du champ magnétique ?",
      options: ["Volt", "Tesla", "Farad", "Coulomb"],
      answer: 1,
      explanation: "Le Tesla (T) est l’unité du champ magnétique dans le système international."
    },
    {
      question: "La force de Laplace agit sur un conducteur lorsqu’il est placé dans un champ magnétique et que :",
      options: [
        "Il est en rotation",
        "Il est neutre électriquement",
        "Il est parcouru par un courant",
        "Il est à la masse"
      ],
      answer: 2,
      explanation: "C’est la condition nécessaire pour que la force de Laplace s’applique."
    },
    {
      question: "Complétez : La force de Laplace s’exerce perpendiculairement à la fois au courant et au ________________.",
      options: ["temps", "champ magnétique", "poids", "vecteur vitesse"],
      answer: 1,
      explanation: "Elle suit la règle des trois doigts de la main droite (courant, champ, force)."
    },
    {
      question: "Quel appareil utilise la force de Laplace pour fonctionner ?",
      options: ["Thermomètre", "Condensateur", "Moteur électrique", "Oscilloscope"],
      answer: 2,
      explanation: "Le moteur repose sur la force de Laplace pour transformer l’énergie électrique en mécanique."
    },
    {
      question: "Vrai ou faux : Le champ magnétique peut créer un courant dans une bobine fixe si le champ varie dans le temps.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "C’est le principe de l’induction électromagnétique."
    },
    {
      question: "Quel phénomène explique la création d’une f.é.m. dans un circuit fermé lorsqu’on déplace un aimant à proximité ?",
      options: ["Conduction", "Polarisation", "Induction", "Diffraction"],
      answer: 2,
      explanation: "Un champ magnétique variable induit une f.é.m. selon la loi de Faraday."
    },
    {
      question: "Complétez : Un alternateur transforme de l’énergie ___________ en énergie ___________.",
      options: ["magnétique – mécanique", "mécanique – électrique", "thermique – magnétique", "électrique – lumineuse"],
      answer: 1,
      explanation: "C’est le rôle principal d’un alternateur, utilisé dans les centrales électriques."
    },
    {
      question: "Vrai ou faux : Lors d’une auto-induction, une bobine génère elle-même une f.é.m. lorsqu’un courant change en elle.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "C’est un effet propre à la variation de courant dans la bobine elle-même."
    },
    {
      question: "Complétez : Un transformateur fonctionne grâce au phénomène d’______________________.",
      options: ["attraction électrostatique", "résonance", "induction électromagnétique", "réfraction"],
      answer: 2,
      explanation: "Il utilise deux bobines couplées magnétiquement."
    },
    {
      question: "Quel facteur influence le plus la puissance du champ magnétique d’un électro-aimant ?",
      options: ["Sa couleur", "Le courant traversant", "La longueur du fil", "La température ambiante"],
      answer: 1,
      explanation: "Un courant plus élevé crée un champ plus intense."
    },
    {
      question: "Complétez : Lorsqu’un conducteur se déplace dans un champ magnétique, une ___________ est induite à ses bornes.",
      options: ["force gravitationnelle", "différence de température", "tension électrique", "pression"],
      answer: 2,
      explanation: "C’est le principe de base de l’induction."
    },
    {
      question: "Quel type de courant est nécessaire pour faire fonctionner un transformateur ?",
      options: ["Continu", "Alternatif", "Variable en tension", "Pulsé"],
      answer: 1,
      explanation: "Un courant alternatif est requis pour qu’il y ait variation de flux magnétique."
    },
    {
      question: "Un galvanomètre est basé sur :",
      options: ["Le champ gravitationnel", "La réfraction de la lumière", "La force de Laplace", "La compression de l’air"],
      answer: 2,
      explanation: "Il utilise un champ magnétique et une bobine mobile pour détecter un courant."
    },
    {
      question: "Quel est le rôle principal d’un transformateur ?",
      options: ["Produire de la chaleur", "Stocker l’énergie", "Changer la tension", "Convertir le courant en lumière"],
      answer: 2,
      explanation: "Il adapte la tension à l’entrée et à la sortie d’un circuit électrique."
    },
    {
      question: "Complétez : Une bobine est un fil conducteur enroulé en __________ pour concentrer le champ magnétique.",
      options: ["cercle", "spirale", "sphère", "droite"],
      answer: 1,
      explanation: "La forme en spirale renforce le champ au centre de la bobine."
    },
    {
      question: "Vrai ou faux : Un conducteur immobile dans un champ magnétique variable peut subir une induction.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Le changement de champ est suffisant pour induire un courant sans mouvement du conducteur."
    },
    {
      question: "Complétez : Lorsqu’une bobine est soumise à une variation de courant, elle génère une f.é.m. qui s’oppose à cette variation. C’est le phénomène d’_________________.",
      options: ["électrolyse", "auto-induction", "résonance", "diffraction"],
      answer: 1,
      explanation: "La loi de Lenz décrit cette opposition à la variation de courant."
    },
    {
      question: "Complétez : La force de Laplace est la force exercée par un champ magnétique sur un ______________ parcouru par un courant.",
      options: ["aimant", "condensateur", "conducteur", "diélectrique"],
      answer: 2,
      explanation: "Un conducteur traversé par un courant dans un champ magnétique subit une force : c’est la force de Laplace."
    },
    {
      question: "Vrai ou faux : Si l’on place un conducteur dans un champ magnétique sans y faire circuler de courant, il ne subit aucune force.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "La force de Laplace dépend du courant traversant le conducteur. Sans courant, pas de force."
    },
    {
      question: "Quel est l’effet observé quand on approche un aimant d’une bobine connectée à un milliampèremètre ?",
      options: ["Le courant reste nul", "Une tension est observée", "Le champ électrique augmente", "Le courant devient continu"],
      answer: 1,
      explanation: "Une f.é.m. est induite par variation du flux magnétique dans la bobine."
    },
    {
      question: "Complétez : Une expérience simple d’induction montre qu’un aimant en mouvement crée une tension dans une bobine par variation du ______________.",
      options: ["champ électrique", "flux magnétique", "intensité", "résistance"],
      answer: 1,
      explanation: "La loi de Faraday relie la variation de flux magnétique à la tension induite."
    },
    {
      question: "Quel phénomène rend possible le fonctionnement d’un alternateur ?",
      options: ["La pression", "L’induction électromagnétique", "La conduction", "La gravitation"],
      answer: 1,
      explanation: "Un alternateur repose sur l’induction d’un courant par un champ magnétique variable."
    },
    {
      question: "Complétez : Une bobine parcourue par un courant génère autour d’elle un ______________.",
      options: ["champ électrique", "champ gravitationnel", "champ magnétique", "champ thermique"],
      answer: 2,
      explanation: "Une bobine joue le rôle d’un électroaimant lorsqu’elle est traversée par un courant."
    },
    {
      question: "Vrai ou faux : L’induction est possible seulement si la bobine se déplace.",
      options: ["Vrai", "Faux"],
      answer: 1,
      explanation: "Une variation du champ magnétique suffit, même sans mouvement de la bobine."
    },
    {
      question: "Quelle est la cause de la force de Laplace dans un moteur électrique ?",
      options: ["Le courant induit", "Le champ gravitationnel", "Le champ magnétique et le courant traversant", "La friction"],
      answer: 2,
      explanation: "La combinaison du champ magnétique et du courant dans un conducteur génère la force."
    },
    {
      question: "Complétez : Un galvanomètre est un appareil qui mesure des courants très faibles grâce à un champ ______________.",
      options: ["électrique", "magnétique", "thermique", "gravitique"],
      answer: 1,
      explanation: "Un galvanomètre utilise une bobine dans un champ magnétique pour détecter le courant."
    },
    {
      question: "Vrai ou faux : L’intensité du champ magnétique dans une bobine dépend du nombre de spires.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Plus il y a de spires, plus le champ est intense pour un même courant."
    },
    {
      question: "Complétez : Lorsqu’on inverse la polarité d’un aimant devant une bobine, le ______________ du courant induit change.",
      options: ["sens", "intensité", "type", "matériau"],
      answer: 0,
      explanation: "Selon la loi de Lenz, le courant s’oppose à la cause qui le produit, donc son sens change."
    },
    {
      question: "Quelle expérience montre que le champ magnétique d’un solénoïde est similaire à celui d’un aimant droit ?",
      options: ["Expérience de Joule", "Expérience de Hertz", "Expérience de limaille de fer", "Expérience de Lenz"],
      answer: 2,
      explanation: "La limaille de fer s’aligne selon les lignes de champ, révélant leur configuration."
    },
    {
      question: "Complétez : Le champ magnétique d’un aimant droit sort du pôle ____________ et entre dans le pôle ____________.",
      options: ["sud – nord", "positif – négatif", "nord – sud", "électron – proton"],
      answer: 2,
      explanation: "C’est la convention de représentation du champ magnétique d’un aimant."
    },
    {
      question: "Quel est le rôle du fer doux dans un électro-aimant ?",
      options: ["Empêcher le courant", "Refroidir le système", "Concentrer le champ magnétique", "Faire résonner les spires"],
      answer: 2,
      explanation: "Le fer doux guide et amplifie le champ magnétique produit par la bobine."
    },
    {
      question: "Complétez : Un transformateur est constitué de deux bobines couplées par un ______________ magnétique.",
      options: ["lien chimique", "champ", "contact électrique", "flux"],
      answer: 3,
      explanation: "Les deux bobines sont couplées magnétiquement par un noyau qui canalise le flux magnétique."
    },
    {
      question: "Vrai ou faux : Le champ magnétique est nul à l’intérieur d’un fil droit parcouru par un courant.",
      options: ["Vrai", "Faux"],
      answer: 1,
      explanation: "Il existe un champ magnétique circulaire autour du fil selon la règle du tire-bouchon."
    }
  ],

  mecanique: [
    {
      question: "Complétez : Le vecteur accélération est la dérivée par rapport au temps du vecteur ______________.",
      options: ["force", "masse", "vitesse", "position"],
      answer: 2,
      explanation: "L'accélération est la variation de la vitesse au cours du temps."
    },
    {
      question: "Vrai ou faux : Une vitesse constante implique une accélération nulle.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Une accélération représente un changement de vitesse. Si la vitesse est constante, il n'y a pas d'accélération."
    },
    {
      question: "Complétez : Dans un mouvement circulaire uniforme, l’accélération est uniquement ______________.",
      options: ["tangentielle", "nulle", "normale", "constante"],
      answer: 2,
      explanation: "L'accélération est centripète, donc perpendiculaire à la trajectoire."
    },
    {
      question: "Quelle est l’unité de l’accélération dans le système international ?",
      options: ["m/s", "m/s²", "N·m", "kg/m²"],
      answer: 1,
      explanation: "L'accélération est une variation de vitesse (m/s) par unité de temps (s)."
    },
    {
      question: "Complétez : Lors de la chute libre, l’accélération est dirigée vers ______________.",
      options: ["le haut", "l’ouest", "le bas", "l’avant"],
      answer: 2,
      explanation: "Elle est due à la pesanteur terrestre, orientée vers le centre de la Terre."
    },
    {
      question: "Vrai ou faux : La masse d’un objet influe sur son accélération en chute libre.",
      options: ["Vrai", "Faux"],
      answer: 1,
      explanation: "En l'absence de frottement, tous les corps tombent avec la même accélération gravitationnelle."
    },
    {
      question: "Complétez : Le travail d’une force constante est donné par W = ________.",
      options: ["F × d × cos(θ)", "m × a", "1/2 × m × v²", "F × t"],
      answer: 0,
      explanation: "Le travail dépend de la force, du déplacement et de l’angle entre les deux vecteurs."
    },
    {
      question: "Laquelle de ces grandeurs est une énergie ?",
      options: ["Newton", "Joule", "Pascal", "Tesla"],
      answer: 1,
      explanation: "Le joule (J) est l’unité de l’énergie dans le système international."
    },
    {
      question: "Complétez : L’énergie cinétique est proportionnelle à la masse et au __________ de la vitesse.",
      options: ["carré", "produit", "inverse", "logarithme"],
      answer: 0,
      explanation: "Ec = 1/2 × m × v²"
    },
    {
      question: "Quelle force agit sur un objet glissant sans frottement sur un plan incliné ?",
      options: ["Force normale", "Poids", "Frottement", "Force centrifuge"],
      answer: 1,
      explanation: "Le poids est projeté selon l’axe incliné, ce qui fait glisser l’objet."
    },
    {
      question: "Complétez : Le mouvement d’un projectile dans l’air peut être décomposé en un mouvement horizontal uniforme et un mouvement vertical ______________.",
      options: ["uniforme", "uniformément accéléré", "périodique", "circulaire"],
      answer: 1,
      explanation: "La chute verticale est soumise à l'accélération due à la gravité."
    },
    {
      question: "Quelle est la première loi de Newton ?",
      options: [
        "La somme des forces est égale à la masse multipliée par l’accélération",
        "Une force est toujours opposée à une réaction",
        "Un corps persévère dans son état de repos ou de mouvement rectiligne uniforme",
        "L’énergie est conservée dans un système isolé"
      ],
      answer: 2,
      explanation: "C'est le principe d’inertie."
    },
    {
      question: "Complétez : Une force perpendiculaire à la trajectoire d’un objet modifie sa ______________, mais pas sa vitesse.",
      options: ["direction", "masse", "hauteur", "force"],
      answer: 0,
      explanation: "La vitesse reste constante en valeur mais change de direction."
    },
    {
      question: "Vrai ou faux : Un pendule simple est un exemple d’oscillateur harmonique.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Un pendule oscille autour d'une position d'équilibre, comme tout système harmonique."
    },
    {
      question: "Quel facteur influence la période d’un pendule simple ?",
      options: ["La masse", "L’amplitude", "La longueur", "La vitesse"],
      answer: 2,
      explanation: "T = 2π√(l/g), seule la longueur et la gravité interviennent."
    },
    {
      question: "Complétez : La somme des énergies cinétique et potentielle d’un système est appelée énergie ______________.",
      options: ["mécanique", "thermique", "magnétique", "statique"],
      answer: 0,
      explanation: "C’est la conservation de l’énergie dans les systèmes sans frottement."
    },
    {
      question: "Lorsqu’un objet atteint le sommet de sa trajectoire verticale, sa vitesse est :",
      options: ["maximale", "égale à g", "nulle", "infinie"],
      answer: 2,
      explanation: "À cet instant, il change de direction donc la vitesse s’annule."
    },
    {
      question: "Complétez : Dans un mouvement rectiligne uniformément accéléré, la vitesse varie de façon ______________.",
      options: ["constante", "aléatoire", "périodique", "circulaire"],
      answer: 0,
      explanation: "La variation de la vitesse par unité de temps (accélération) est constante."
    },
    {
      question: "Vrai ou faux : Dans un mouvement circulaire uniforme, la vitesse est constante mais le vecteur vitesse change.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Le module reste constant, mais la direction change constamment."
    },
    {
      question: "Complétez : Un satellite artificiel en orbite est soumis uniquement à la force ______________.",
      options: ["centrifuge", "gravitationnelle", "électrique", "de frottement"],
      answer: 1,
      explanation: "Le satellite est en chute libre permanente autour de la Terre."
    }
  ],

  alternatif: [
    {
      question: "Complétez : La représentation graphique d’un courant alternatif sinusoïdal forme une ______________.",
      options: ["droite", "courbe en cloche", "parabole", "sinusoïde"],
      answer: 3,
      explanation: "Le courant alternatif varie de manière périodique selon une sinusoïde."
    },
    {
      question: "Quelle est l’unité de la fréquence d’un courant alternatif ?",
      options: ["Hertz", "Volt", "Ohm", "Tesla"],
      answer: 0,
      explanation: "La fréquence se mesure en Hertz (Hz), nombre de cycles par seconde."
    },
    {
      question: "Complétez : La relation entre la période T et la fréquence f est donnée par ______________.",
      options: ["f = T × 2π", "f = 1/T", "f = T²", "f = √T"],
      answer: 1,
      explanation: "Fréquence et période sont des grandeurs inverses."
    },
    {
      question: "Vrai ou faux : La valeur efficace d’un courant alternatif est toujours inférieure à sa valeur maximale.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Valeur efficace = Imax / √2 dans un courant sinusoïdal."
    },
    {
      question: "Complétez : La tension efficace est la tension continue qui produirait le même ______________.",
      options: ["champ magnétique", "travail", "échauffement", "courant moyen"],
      answer: 2,
      explanation: "La valeur efficace équivaut thermiquement à une tension continue."
    },
    {
      question: "Quelle est l’unité de l’impédance dans un circuit RLC ?",
      options: ["Ohm", "Farad", "Henry", "Watt"],
      answer: 0,
      explanation: "L’impédance s’exprime en Ohms, comme la résistance."
    },
    {
      question: "Complétez : L’impédance Z d’un circuit RLC est donnée par Z = √(R² + (Lω - 1/Cω)²). Le terme (Lω - 1/Cω) est appelé ______________.",
      options: ["pulsation", "inductance", "réactance totale", "résistance équivalente"],
      answer: 2,
      explanation: "C’est la somme vectorielle des réactances inductive et capacitive."
    },
    {
      question: "Que se passe-t-il dans un circuit RLC en résonance ?",
      options: ["L’intensité est nulle", "Le courant est en retard", "L’impédance est minimale", "La tension est nulle"],
      answer: 2,
      explanation: "À la résonance, la réactance est nulle donc Z = R."
    },
    {
      question: "Vrai ou faux : Un multimètre mesure directement la valeur efficace d’un courant alternatif.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Les multimètres affichent directement les valeurs efficaces."
    },
    {
      question: "Complétez : Dans un circuit purement résistif, le courant est ______________ avec la tension.",
      options: ["en avance", "en retard", "en opposition de phase", "en phase"],
      answer: 3,
      explanation: "Il n’y a pas de déphasage dans une résistance pure."
    },
    {
      question: "Dans un circuit contenant uniquement une bobine idéale, le courant est :",
      options: ["en phase", "en avance", "en retard", "nul"],
      answer: 2,
      explanation: "Dans une bobine, la tension est en avance de π/2 sur le courant."
    },
    {
      question: "Complétez : Dans un condensateur, le courant est en ______________ sur la tension.",
      options: ["avance", "retard", "opposition", "résonance"],
      answer: 0,
      explanation: "Dans un condensateur, le courant atteint son maximum avant la tension."
    },
    {
      question: "Vrai ou faux : Dans un circuit RLC série à résonance, le courant est maximal.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "L’impédance est minimale donc I = U/Z est maximal."
    },
    {
      question: "Complétez : La pulsation ω d’un signal est reliée à la fréquence f par : ω = ______________.",
      options: ["1/f", "2πf", "πf", "f²"],
      answer: 1,
      explanation: "Pulsation et fréquence sont liées par ω = 2πf."
    },
    {
      question: "Quelle est la formule de la tension instantanée d’un courant alternatif sinusoïdal de fréquence f et amplitude Umax ?",
      options: ["u(t) = Umax × sin(2πft)", "u(t) = Umax × t", "u(t) = f × Umax", "u(t) = Umax + f"],
      answer: 0,
      explanation: "C’est la forme canonique d’une onde sinusoïdale."
    },
    {
      question: "Complétez : Lorsqu’un circuit est capacitif, la tension est en ______________ sur le courant.",
      options: ["avance", "retard", "opposition de phase", "résonance"],
      answer: 1,
      explanation: "Le courant est en avance dans un condensateur, donc la tension est en retard."
    },
    {
      question: "Pourquoi la tension domestique est-elle alternative ?",
      options: ["Parce que c’est plus facile à produire", "Parce qu’elle ne chauffe pas", "Parce qu’elle ne crée pas de champ", "Parce qu’elle est silencieuse"],
      answer: 0,
      explanation: "L’alternateur permet de produire de l’électricité à moindre coût en alternatif."
    },
    {
      question: "Complétez : En régime sinusoïdal, la représentation vectorielle permet de modéliser des grandeurs ______________.",
      options: ["constantes", "scalaires", "périodiques", "thermiques"],
      answer: 2,
      explanation: "Les grandeurs sinusoïdales sont représentées comme des vecteurs tournants."
    },
    {
      question: "Quel est l’effet principal d’un circuit RLC en série accordé à la résonance ?",
      options: ["Chute de tension", "Annulation de la puissance", "Amplification du courant", "Déphasage maximum"],
      answer: 2,
      explanation: "La résonance maximise l’intensité dans le circuit."
    },
    {
      question: "Vrai ou faux : En résonance, les effets du condensateur et de la bobine se compensent.",
      options: ["Vrai", "Faux"],
      answer: 0,
      explanation: "Leur réactance est égale et de signe opposé."
    },
    {
      question: "Complétez : Le facteur de puissance est maximal lorsque le courant est en ______________ avec la tension.",
      options: ["avance", "retard", "opposition", "phase"],
      answer: 3,
      explanation: "Le facteur de puissance est cos(φ), maximal pour φ = 0 (en phase)."
    },
    {
      question: "Dans un circuit RL, l’impédance Z vaut :",
      options: ["Z = R + L", "Z = √(R² + (Lω)²)", "Z = L/R", "Z = R × L"],
      answer: 1,
      explanation: "C’est la norme du vecteur impédance dans le plan complexe."
    },
    {
      question: "Quelle grandeur varie dans un courant alternatif sinusoïdal ?",
      options: ["La tension uniquement", "Le courant uniquement", "Les deux", "Ni l’un ni l’autre"],
      answer: 2,
      explanation: "Tension et courant varient simultanément de manière sinusoïdale."
    },
    {
      question: "Quel composant s’oppose le plus à une variation rapide du courant ?",
      options: ["Résistance", "Condensateur", "Bobine", "Diode"],
      answer: 2,
      explanation: "L’auto-induction freine la variation du courant dans une bobine."
    },
    {
      question: "Complétez : La tension secteur en Haïti est typiquement de ______ volts à ______ Hz.",
      options: ["220 – 50", "110 – 60", "240 – 60", "120 – 50"],
      answer: 1,
      explanation: "En Haïti, la tension standard est 110 V à 60 Hz."
    },
    {
      question: "Que représente l’aire sous une courbe i(t) dans un circuit AC sur une période complète ?",
      options: ["La tension moyenne", "L’énergie dissipée", "Zéro", "La puissance instantanée"],
      answer: 2,
      explanation: "La valeur moyenne d’un courant sinusoïdal sur une période est nulle."
    },
    {
      question: "Vrai ou faux : Un transformateur peut modifier la fréquence d’un courant alternatif.",
      options: ["Vrai", "Faux"],
      answer: 1,
      explanation: "Un transformateur modifie la tension, pas la fréquence."
    },
    {
      question: "Quelle est la formule correcte pour la puissance moyenne en alternatif ?",
      options: ["P = UI", "P = Ueff × Ieff × cos(φ)", "P = U²/Z", "P = Z × I"],
      answer: 1,
      explanation: "Le facteur de puissance intervient dans le calcul de la puissance réelle."
    },
    {
      question: "Complétez : Dans un circuit capacitif pur, la puissance moyenne consommée est ______________.",
      options: ["positive", "négative", "zéro", "infinie"],
      answer: 2,
      explanation: "Le condensateur ne dissipe pas d’énergie, il échange temporairement de l’énergie."
    }
  ]
};