const maths = {
suites: [
    {
        question: "Une suite est dite arithmétique si :",
        options: [
            "chaque terme est le produit du précédent par un nombre constant",
            "chaque terme est obtenu en ajoutant une constante au précédent",
            "chaque terme est le carré du précédent",
            "les termes forment une progression géométrique"
        ],
        answer: 1,
        explanation: "Dans une suite arithmétique, Un+1 = Un + r avec r constant."
    },
    {
        question: "La suite définie par Un = 3n + 2 est :",
        options: ["arithmétique", "géométrique", "constante", "aucune des réponses"],
        answer: 0,
        explanation: "C’est une expression explicite d’une suite arithmétique de raison 3."
    },
    {
        question: "Vrai ou faux : La suite Un = 5 × 2ⁿ est géométrique.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Elle est de la forme Un = U0 × qⁿ avec q = 2."
    },
    {
        question: "Complétez : La raison d’une suite géométrique Un = 7 × 3ⁿ est q = ____. ",
        options: ["3", "7", "21", "n"],
        answer: 0,
        explanation: "C’est le facteur multiplicatif constant."
    },
    {
        question: "Le 5e terme( dans N*) de la suite arithmétique Un = 2n + 1 est :",
        options: ["9", "10", "11", "12"],
        answer: 2,
        explanation: "U5 = 2×5 + 1 = 11."
    },
    {
        question: "Vrai ou faux : Si une suite est arithmétique de raison r > 0, alors elle est croissante.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Une raison positive implique une augmentation à chaque terme."
    },
    {
        question: "Si U0 = 2 et la suite est géométrique de raison 4, U2 vaut :",
        options: ["6", "8", "16", "32"],
        answer: 3,
        explanation: "U2 = U0 × 4² = 2 × 16 = 32."
    },
    {
        question: "Une suite est définie par récurrence : U0 = 1 et Un+1 = Un + 3. C’est une suite :",
        options: ["arithmétique", "géométrique", "constante", "oscillante"],
        answer: 0,
        explanation: "On ajoute 3 à chaque terme, donc c’est une suite arithmétique."
    },
    {
        question: "Complétez : La formule du terme général d’une suite arithmétique est Un = U0 + ____ × n.",
        options: ["r", "Un", "q", "n"],
        answer: 0,
        explanation: "Un = U0 + n × r, où r est la raison."
    },
    {
        question: "La suite définie par Un = 100 × (0.5)ⁿ est :",
        options: ["arithmétique", "géométrique décroissante", "géométrique croissante", "constante"],
        answer: 1,
        explanation: "q = 0.5 < 1, donc elle décroît."
    },
    {
        question: "Vrai ou faux : Toute suite géométrique à raison q > 1 est strictement croissante.",
        options: ["Vrai", "Faux"],
        answer: 1,
        explanation: "Elle est croissante uniquement si les termes sont positifs."
    },
    {
        question: "Soit Un une suite arithmetique et on a U0 = 3, U1 = 6. Alors U3 vaut :",
        options: ["9", "12", "3", "18"],
        answer: 1,
        explanation: "On a r= U1 - U0 = 6 - 3 = 3. Donc, U3 = U0 + 3r = 3 + 3 × 3 = 12."
    },
    {
        question: "Si Un = 6n – 1, alors U3 vaut :",
        options: ["17", "19", "20", "15"],
        answer: 0,
        explanation: "U3 = 6×3 – 1 = 18 – 1 = 17."
    },
    {
        question: "Une suite arithmétique a pour U1 = 4 et r = –2. Quelle est la valeur de U4 ?",
        options: ["–2", "–4", "0", "2"],
        answer: 0,
        explanation: "U4 = U1 + 3r = 4 + 3×(–2) = 4 – 6 = –2."
    },
    {
        question: "Vrai ou faux : Une suite constante est à la fois arithmétique et géométrique.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "r = 0 et q = 1 sont valables pour les suites constantes."
    },
    {
        question: "Complétez : Une suite géométrique diverge si sa raison q est ____. ",
        options: ["nulle", "entre 0 et 1", "supérieure à 1", "négative"],
        answer: 2,
        explanation: "Quand q > 1, les termes croissent indéfiniment."
    },
    {
        question: "La population Pn d’un pays augmente de 20 % chaque année. C’est une suite :",
        options: ["arithmétique", "géométrique de raison 1.2", "constante", "inconnue"],
        answer: 1,
        explanation: "Chaque année : Pn+1 = Pn × 1.2"
    },
    {
        question: "On a Un = 1/n. Que dire de cette suite ?",
        options: ["Elle diverge", "Elle est croissante", "Elle tend vers 0", "Elle est constante"],
        answer: 2,
        explanation: "1/n devient de plus en plus petit quand n → ∞."
    },
    {
        question: "Vrai ou faux : Si une suite Un tend vers un réel L, alors tous ses termes sont égaux à L.",
        options: ["Vrai", "Faux"],
        answer: 1,
        explanation: "Tendre vers une limite ≠ être constant."
    },
    {
        question: "Quelle est la somme des 3 premiers termes de la suite arithmétique Un = 2n + 1 ?",
        options: ["15", "12", "18", "9"],
        answer: 0,
        explanation: "U0 = 1, U1 = 3, U2 = 5 → somme = 1+3+5 = 9"
    }
],

complexes: [
    {
        question: "Un nombre complexe s’écrit sous la forme :",
        options: ["a + b", "a + bi", "a × i + b", "a × b × i"],
        answer: 1,
        explanation: "Un complexe est de la forme a + bi, avec a et b réels, et i² = –1."
    },
    {
        question: "Complétez : i² = ____",
        options: ["1", "0", "–1", "i"],
        answer: 2,
        explanation: "C’est la propriété fondamentale des nombres complexes."
    },
    {
        question: "Vrai ou faux : Le nombre 5 + 0i est un nombre complexe.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "C’est un nombre complexe dont la partie imaginaire est nulle."
    },
    {
        question: "Complétez : La partie réelle de z = –3 + 4i est ____.",
        options: ["–3", "4", "–4", "3"],
        answer: 0,
        explanation: "La partie réelle est le coefficient de 1 dans z."
    },
    {
        question: "Complétez : Le conjugué de z = 2 – 5i est ____.",
        options: ["2 + 5i", "–2 + 5i", "–2 – 5i", "2 – 5i"],
        answer: 0,
        explanation: "On change uniquement le signe de la partie imaginaire."
    },
    {
        question: "Le module de z = 3 + 4i est :",
        options: ["7", "1", "5", "√13"],
        answer: 2,
        explanation: "√(3² + 4²) = √25 = 5."
    },
    {
        question: "Vrai ou faux : Deux nombres complexes égaux ont la même partie réelle et la même partie imaginaire.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Deux complexes sont égaux si leurs parties réelles ET imaginaires sont égales."
    },
    {
        question: "Si z = –1 + i, alors |z|² vaut :",
        options: ["2", "1", "√2", "3"],
        answer: 0,
        explanation: "|z|² = (–1)² + 1² = 2."
    },
    {
        question: "Complétez : z × z̄ = ____.",
        options: ["–1", "|z|²", "1", "z²"],
        answer: 1,
        explanation: "Produit d’un complexe par son conjugué donne le carré du module."
    },
    {
        question: "Si z = 2 + 3i, alors z̄ – z =",
        options: ["0", "–6i", "6i", "4"],
        answer: 1,
        explanation: "z̄ = 2 – 3i ; donc z̄ – z = (2 – 3i) – (2 + 3i) = –6i."
    },
    {
        question: "Vrai ou faux : Le produit de deux complexes peut être un réel.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Exemple : i × (–i) = 1."
    },
    {
        question: "Complétez : Le carré de i est ____.",
        options: ["i", "–1", "0", "1"],
        answer: 1,
        explanation: "i² = –1 par définition."
    },
    {
        question: "Si z = 1 + i, alors z² =",
        options: ["0", "2i", "2", "2i"],
        answer: 1,
        explanation: "z² = (1 + i)² = 1 + 2i + i² = 1 + 2i – 1 = 2i."
    },
    {
        question: "Le nombre complexe z = –4 + 3i a pour module :",
        options: ["7", "5", "√25", "√13"],
        answer: 1,
        explanation: "√(16 + 9) = √25 = 5."
    },
    {
        question: "Complétez : L’affixe du point M(2, –1) dans le plan complexe est ____.",
        options: ["2 – i", "–2 + i", "–2 – i", "2 + i"],
        answer: 0,
        explanation: "L’affixe est x + iy, donc 2 – i ici."
    },
    {
        question: "Vrai ou faux : Le conjugué de i est –i.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "On change le signe de la partie imaginaire."
    },
    {
        question: "Complétez : L’ensemble ℝ est contenu dans ℂ car tout réel peut s’écrire comme ____.",
        options: ["un carré", "un imaginaire pur", "un complexe sans partie imaginaire", "z = i × x"],
        answer: 2,
        explanation: "Ex. : 5 = 5 + 0i"
    },
    {
        question: "Si z = 2 + i, quelle est l’écriture algébrique de z² ?",
        options: ["3 + 4i", "4 + 4i", "4 + i", "3 + i"],
        answer: 0,
        explanation: "(2 + i)² = 4 + 4i + i² = 4 + 4i – 1 = 3 + 4i."
    },
    {
        question: "Complétez : Une rotation de centre O et d’angle π/2 transforme z = x + iy en ____.",
        options: ["–y + ix", "–y – ix", "–x + iy", "–x – iy"],
        answer: 0,
        explanation: "C’est la multiplication par i."
    },
    {
        question: "Vrai ou faux : Si z × z = –4, alors z peut être 2i ou –2i.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Car (2i)² = –4 et (–2i)² = –4 aussi."
    }
],

algebre_geometrie: [
    {
        question: "Vrai ou faux : Une équation du second degré peut admettre deux solutions réelles distinctes.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Si le discriminant Δ > 0, il y a deux solutions réelles distinctes."
    },
    {
        question: "Complétez : L’équation x² – 4x + 3 = 0 a pour solutions :",
        options: ["1 et 3", "–1 et –3", "2 et –2", "0 et 3"],
        answer: 0,
        explanation: "Δ = 16 – 12 = 4 → x = (4 ± √4)/2 → x = 3 et 1."
    },
    {
        question: "Soit l’équation x² + 2x + 5 = 0. Que peut-on dire de ses solutions ?",
        options: ["Réelles et égales", "Réelles et distinctes", "Complexes", "Aucune solution"],
        answer: 2,
        explanation: "Δ = 4 – 20 = –16 < 0 → solutions complexes."
    },
    {
        question: "Vrai ou faux : Le discriminant d’une équation ax² + bx + c s’écrit Δ = b² – 4ac.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "C’est la formule standard pour le discriminant."
    },
    {
        question: "Complétez : Le produit des racines de x² – 5x + 6 = 0 est :",
        options: ["–5", "11", "6", "3"],
        answer: 2,
        explanation: "Produit = c/a = 6/1 = 6."
    },
    {
        question: "La somme des racines de l'équation x² + 3x – 10 = 0 est :",
        options: ["–3", "3", "–10", "10"],
        answer: 0,
        explanation: "Somme = –b/a = –3/1 = –3."
    },
    {
        question: "Vrai ou faux : Deux droites sont parallèles si elles ont la même pente.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Même coefficient directeur → droites parallèles."
    },
    {
        question: "Complétez : La pente de la droite passant par A(1,2) et B(3,6) est :",
        options: ["2", "3", "1", "4"],
        answer: 0,
        explanation: "m = (6 – 2)/(3 – 1) = 4/2 = 2."
    },
    {
        question: "Si une droite a pour équation y = –3x + 2, alors son coefficient directeur est :",
        options: ["–3", "2", "3", "–2"],
        answer: 0,
        explanation: "y = ax + b, ici a = –3."
    },
    {
        question: "Complétez : Le milieu du segment [AB] avec A(0,4) et B(4,0) est :",
        options: ["(2,2)", "(0,0)", "(4,4)", "(1,3)"],
        answer: 0,
        explanation: "Milieu = ((0+4)/2, (4+0)/2) = (2,2)."
    },
    {
        question: "Vrai ou faux : Deux droites perpendiculaires ont des pentes opposées et inverses.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "a₁ × a₂ = –1 → droites perpendiculaires."
    },
    {
        question: "Complétez : L’aire d’un triangle de base 6 cm et hauteur 4 cm est :",
        options: ["12 cm²", "24 cm²", "10 cm²", "8 cm²"],
        answer: 0,
        explanation: "A = (base × hauteur)/2 = (6×4)/2 = 12."
    },
    {
        question: "La distance entre les points A(1,1) et B(4,5) est :",
        options: ["5", "4", "3", "6"],
        answer: 0,
        explanation: "√[(4–1)² + (5–1)²] = √(9 + 16) = √25 = 5."
    },
    {
        question: "Vrai ou faux : Une équation cartésienne d’un cercle de centre O(0,0) est x² + y² = r².",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "C’est la forme canonique d’un cercle centré à l’origine."
    },
    {
        question: "Complétez : Le vecteur AB avec A(1, 3) et B(4, 7) est :",
        options: ["(3, 4)", "(–3, 4)", "(3, –4)", "(4, 3)"],
        answer: 0,
        explanation: "B – A = (4–1, 7–3) = (3, 4)."
    },
    {
        question: "Soit la droite d'équation y = 2x – 5. Elle passe par le point :",
        options: ["(2, –1)", "(1, –3)", "(3, 1)", "(0, 5)"],
        answer: 2,
        explanation: "Remplacer x = 3 → y = 2×3 – 5 = 1."
    },
    {
        question: "Complétez : Deux vecteurs sont colinéaires si leurs coordonnées sont ______________.",
        options: ["égales", "opposées", "proportionnelles", "identiques"],
        answer: 2,
        explanation: "Deux vecteurs colinéaires ont des coordonnées proportionnelles."
    },
    {
        question: "Vrai ou faux : Le vecteur nul est colinéaire à tout vecteur.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Il est aligné avec tout vecteur, par définition."
    },
    {
        question: "Complétez : La forme factorisée de x² – 9 est :",
        options: ["(x – 3)(x + 3)", "(x – 9)²", "(x + 9)²", "x(x – 9)"],
        answer: 0,
        explanation: "C’est une identité remarquable : a² – b² = (a – b)(a + b)."
    },
    {
        question: "Vrai ou faux : L’équation (x – 1)² = 0 a une seule solution.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "La solution double est x = 1."
    }
],

statistiques_probabilite: [
    {
        question: "Vrai ou faux : La moyenne d’une série statistique est toujours comprise entre les valeurs extrêmes.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "La moyenne est un centre de gravité des données, donc entre min et max."
    },
    {
        question: "Complétez : La médiane d’une série est la valeur qui ______________ les données en deux groupes de même effectif.",
        options: ["multiplie", "sépare", "additionne", "moyenne"],
        answer: 1,
        explanation: "Par définition, la médiane coupe la série en deux."
    },
    {
        question: "Quel est le mode de la série suivante : 3, 5, 3, 2, 3, 2, 4 ?",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explanation: "3 apparaît 3 fois, c’est la valeur la plus fréquente."
    },
    {
        question: "Vrai ou faux : L’écart-type mesure la dispersion autour de la moyenne.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Plus l’écart-type est élevé, plus les données sont dispersées."
    },
    {
        question: "Complétez : La variance est égale à l’________________ de l’écart-type.",
        options: ["inverse", "opposé", "carré", "addition"],
        answer: 2,
        explanation: "σ² = variance, σ = écart-type."
    },
    {
        question: "Un élève obtient 10, 12 et 14 en math. Sa moyenne est :",
        options: ["12", "11", "13", "10"],
        answer: 0,
        explanation: "(10 + 12 + 14)/3 = 36/3 = 12."
    },
    {
        question: "Vrai ou faux : Une probabilité est toujours comprise entre 0 et 1.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "C’est une règle fondamentale des probabilités."
    },
    {
        question: "Complétez : Dans une expérience aléatoire, la somme des probabilités de tous les événements élémentaires vaut :",
        options: ["1", "0", "100", "infini"],
        answer: 0,
        explanation: "C’est la loi des probabilités totales."
    },
    {
        question: "On lance un dé équilibré. Quelle est la probabilité d’obtenir un nombre pair ?",
        options: ["1/2", "1/3", "2/3", "1/6"],
        answer: 0,
        explanation: "Pairs : 2, 4, 6 → 3/6 = 1/2."
    },
    {
        question: "Vrai ou faux : Lors d’un tirage avec remise, les événements sont indépendants.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Chaque tirage n’influence pas le suivant."
    },
    {
        question: "Complétez : Une loi binomiale B(n, p) modélise une répétition de n épreuves indépendantes de probabilité de succès ___.",
        options: ["n", "1/n", "p", "np"],
        answer: 2,
        explanation: "C’est la probabilité de succès à chaque épreuve."
    },
    {
        question: "Dans un sac, il y a 4 boules rouges et 6 vertes. Probabilité de tirer une rouge :",
        options: ["4/6", "2/5", "4/10", "6/10"],
        answer: 2,
        explanation: "Rouges / Total = 4 / (4 + 6) = 4/10."
    },
    {
        question: "Vrai ou faux : Une variable aléatoire peut avoir une espérance négative.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "L’espérance est une moyenne pondérée, elle peut être négative."
    },
    {
        question: "Une variable X prend 1 avec P = 0.3, 2 avec P = 0.7. E(X) = ?",
        options: ["1.5", "1.7", "2", "1.3"],
        answer: 1,
        explanation: "E(X) = 1×0.3 + 2×0.7 = 0.3 + 1.4 = 1.7"
    },
    {
        question: "Complétez : Si P(A) = 0.4 et P(B) = 0.5, alors P(A ∪ B) ≤ ____.",
        options: ["0.1", "0.9", "1", "0.5"],
        answer: 1,
        explanation: "P(A ∪ B) ≤ P(A) + P(B) = 0.9"
    },
    {
        question: "Vrai ou faux : L’espérance d’une variable suit toujours un des résultats possibles de la variable.",
        options: ["Vrai", "Faux"],
        answer: 1,
        explanation: "L’espérance peut être un réel entre deux valeurs prises."
    },
    {
        question: "Complétez : Une probabilité empirique est basée sur une ________________ réelle.",
        options: ["expérience", "hypothèse", "démonstration", "intuition"],
        answer: 0,
        explanation: "Elle repose sur l’observation."
    },
    {
        question: "On tire deux cartes d’un jeu de 52, sans remise. Probabilité que les deux soient rouges ?",
        options: ["(26/52) × (25/51)", "(13/52) × (13/52)", "1/4", "1/2"],
        answer: 0,
        explanation: "Premier rouge : 26/52, deuxième : 25/51."
    },
    {
        question: "Dans une classe, 10 élèves sur 30 sont gauchers. La probabilité qu’un élève pris au hasard soit droitier est :",
        options: ["2/3", "1/3", "1/2", "1/4"],
        answer: 0,
        explanation: "Droitier : 20/30 = 2/3."
    },
    {
        question: "Vrai ou faux : Si A et B sont incompatibles, alors P(A ∩ B) = 0.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Incompatibles = ne peuvent pas se produire en même temps."
    }
],

analyse: [
    {
        question: "Complétez : La dérivée de f(x) = x² est f′(x) = ____.",
        options: ["x", "2x", "x²", "2"],
        answer: 1,
        explanation: "La dérivée de x² est 2x."
    },
    {
        question: "Vrai ou faux : La dérivée de f(x) = e^x est e^x.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "La fonction exponentielle est égale à sa propre dérivée."
    },
    {
        question: "La dérivée de ln(x) est :",
        options: ["1/x", "ln(x)", "x", "x²"],
        answer: 0,
        explanation: "f′(x) = 1/x pour x > 0."
    },
    {
        question: "Complétez : La limite de 1/x quand x tend vers +∞ est ____.",
        options: ["1", "0", "+∞", "–∞"],
        answer: 1,
        explanation: "Plus x devient grand, plus 1/x tend vers 0."
    },
    {
        question: "La fonction f(x) = –x² est :",
        options: ["croissante", "constante", "décroissante sur ℝ", "périodique"],
        answer: 2,
        explanation: "f′(x) = –2x, négatif pour x > 0, positif pour x < 0."
    },
    {
        question: "Complétez : La primitive de f(x) = 2x est F(x) = ____.",
        options: ["2", "x²", "x", "x³"],
        answer: 1,
        explanation: "On cherche F telle que F′(x) = 2x → F(x) = x²."
    },
    {
        question: "Vrai ou faux : Si f′(x) > 0 sur un intervalle, alors f est croissante sur cet intervalle.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Une dérivée strictement positive → fonction croissante."
    },
    {
        question: "Complétez : Si f(x) = ln(x), alors lim(x→0⁺) f(x) = ____.",
        options: ["+∞", "1", "0", "–∞"],
        answer: 3,
        explanation: "ln(x) tend vers –∞ quand x tend vers 0⁺."
    },
    {
        question: "La dérivée de f(x) = 1/x est :",
        options: ["–1/x²", "x", "1/x²", "–x²"],
        answer: 0,
        explanation: "La dérivée de 1/x est –1/x²."
    },
    {
        question: "Complétez : Une fonction est dérivable en x si elle est continue en x et ____.",
        options: ["positive", "symétrique", "possède une tangente", "dérivable à gauche et à droite"],
        answer: 3,
        explanation: "La dérivabilité implique une continuité et une pente définie à gauche et à droite."
    },
    {
        question: "Vrai ou faux : Une fonction peut être continue mais non dérivable.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "C’est le cas de la fonction valeur absolue en 0."
    },
    {
        question: "Si f(x) = e^(2x), alors f′(x) =",
        options: ["2e^x", "2e^(2x)", "e^x", "x·e^(2x)"],
        answer: 1,
        explanation: "On applique la règle de la dérivée composée."
    },
    {
        question: "Complétez : La limite de ln(x)/x quand x tend vers +∞ est :",
        options: ["0", "+∞", "–∞", "1"],
        answer: 0,
        explanation: "ln(x) croît plus lentement que x."
    },
    {
        question: "Quelle est une primitive de f(x) = cos(x) ?",
        options: ["sin(x)", "–sin(x)", "cos(x)", "x·cos(x)"],
        answer: 0,
        explanation: "Car (sin(x))′ = cos(x)."
    },
    {
        question: "Vrai ou faux : Toute fonction dérivable est continue.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "La dérivabilité implique la continuité."
    },
    {
        question: "La dérivée de sin(x) est :",
        options: ["cos(x)", "–cos(x)", "–sin(x)", "1"],
        answer: 0,
        explanation: "(sin(x))′ = cos(x)."
    },
    {
        question: "Complétez : Une fonction est croissante si f′(x) est _______________.",
        options: ["< 0", "> 0", "= 0", "nulle"],
        answer: 1,
        explanation: "Une dérivée strictement positive implique croissance."
    },
    {
        question: "Si f(x) = x·ln(x), alors f′(x) =",
        options: ["ln(x)", "1 + ln(x)", "x/ln(x)", "x·ln(x)"],
        answer: 1,
        explanation: "Produit : (x·ln(x))′ = 1·ln(x) + x·1/x = ln(x) + 1."
    },
    {
        question: "Vrai ou faux : Une fonction admet un extremum local là où sa dérivée s’annule.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Mais il faut vérifier le changement de signe pour conclure."
    },
    {
        question: "Complétez : La limite de sin(x)/x quand x tend vers 0 est :",
        options: ["0", "∞", "1", "indéterminée"],
        answer: 2,
        explanation: "C’est une limite remarquable."
    },
    {
        question: "Si f(x) = √x, alors f′(x) =",
        options: ["1/(2√x)", "2√x", "√x", "1/√x"],
        answer: 0,
        explanation: "Dérivée de racine : (√x)′ = 1/(2√x)."
    },
    {
        question: "Vrai ou faux : Une asymptote horizontale peut exister si la limite en ±∞ est finie.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "C’est justement la définition d’une asymptote horizontale."
    },
    {
        question: "Complétez : La fonction f(x) = 1/x est :",
        options: ["croissante sur ℝ⁺", "décroissante sur ℝ⁺", "constante", "périodique"],
        answer: 1,
        explanation: "Plus x augmente, plus f(x) diminue."
    },
    {
        question: "La dérivée de x³ est :",
        options: ["3x²", "x²", "x³", "3x"],
        answer: 0,
        explanation: "f′(x) = 3x²"
    },
    {
        question: "Vrai ou faux : ln(e^x) = x",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "ln(e^x) = x car ln et exp sont réciproques."
    },
    {
        question: "Complétez : La fonction f(x) = ln(x) est définie sur :",
        options: ["ℝ", "ℝ⁺*", "ℝ⁻", "ℕ"],
        answer: 1,
        explanation: "ln(x) n’est défini que pour x > 0."
    },
    {
        question: "La dérivée de ln(1 + x) est :",
        options: ["1/(1 + x)", "ln(x)", "1/x", "x/(1 + x)"],
        answer: 0,
        explanation: "Dérivée de ln(u) est u′/u, ici u = 1 + x, donc dérivée = 1/(1 + x)."
    },
    {
        question: "Complétez : Une primitive de 1/x est :",
        options: ["x", "ln(x)", "x²", "1/x²"],
        answer: 1,
        explanation: "La dérivée de ln(x) est 1/x."
    },
    {
        question: "Vrai ou faux : Une fonction dérivable peut ne pas avoir de maximum.",
        options: ["Vrai", "Faux"],
        answer: 0,
        explanation: "Une fonction peut croître indéfiniment sans extrémum."
    },
    {
        question: "Complétez : La courbe de f admet une tangente horizontale lorsque f′(x) = ____.",
        options: ["0", "1", "∞", "–1"],
        answer: 0,
        explanation: "f′(x) = 0 signifie pente nulle, donc tangente horizontale."
    }
],
}
