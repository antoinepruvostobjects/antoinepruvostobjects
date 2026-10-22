/* Archive : tous les projets réalisés (repris du portfolio). Ajouter un projet = ajouter un bloc ici. */
window.ARCHIVE = [
    {
      id: "ani", client: "Musée Horta", heroPos: "50% 68%", heroPosM: "50% 100%", year: 2026, onlyFiche: true,
      fiche: {
        title: "ANI - Tabouret",
        model: "models/ani.glb", name: "ani", poster: "ani-poster.jpg",
        specs: [["Matière", "Bois massif"], ["Finition", "Protection à effet mat"], ["Hauteur", "43 cm"], ["Diamètre d'assise", "32 cm"], ["Livraison", "À plat"], ["Montage", "Outils et notice inclus"]],
        story: {
          intro: { title: "ANI, une construction géométrique",
            text: "ANI associe une assise circulaire à un piètement composé de plans de bois qui se croisent. Sa silhouette se révèle différemment selon le point de vue, entre surfaces pleines et espaces ouverts. Les assemblages métalliques apparents ponctuent sa construction." },
          pair: [
            { src: "ani-main.jpg", alt: "Le tabouret Ani porté à la main, assise vers le haut", pos: "50% 45%" },
            { src: "ani-assise.jpg", alt: "L'assise du tabouret Ani tenue à la main, avec son ouverture centrale", pos: "50% 48%" }
          ],
          detail: { src: "ani-detail-new.jpg", pos: "50% 45%", alt: "Gros plan sur un assemblage métallique du tabouret Ani", title: "L'assemblage en détail",
            text: "Les éléments du piètement sont reliés par des assemblages métalliques laissés visibles. Livré à plat, ANI s'assemble à l'aide des outils et de la notice fournis." },
          note: "Prototype photographié. Version finale prévue en bois massif.",
          designer: { name: "Antoine Pruvost", portrait: "ani-designer.jpg", portraitAlt: "Portrait d'Antoine Pruvost en noir et blanc", bio: ["Je conçois des objets utiles, pensés pour durer, être compris et réparés.", "Pourquoi remplacer ce que nous pouvons réparer ? L’esthétique doit servir l’usage et donner envie de garder un objet.", "Je pars de ce qui existe et de ce dont nous avons réellement besoin, en m’appuyant sur les savoir-faire d’hier et les moyens d’aujourd’hui."] }
        },
        extra: [
          { title: "Construction et assemblage", items: ["4 vis en inox.", "4 inserts sphériques en aluminium.", "Tabouret à assembler, outils et notice inclus."] },
          { title: "Conseils d'entretien", text: "Nettoyer avec un chiffon doux légèrement humide, puis essuyer immédiatement avec un chiffon sec. Éviter l'eau stagnante et les produits nettoyants agressifs." }
        ],
        colors: [
          { name: "Naturel", light: "#efd9a8", dark: "#d9b070", swatch: "#e2c694" },
          { name: "Jaune", light: "#f7c948", dark: "#e6a823", swatch: "#f0b92f" }
        ]
      }, title: "Ani", kind: "Tabouret", cover: "ani-1.jpg", featured: true,
      tagline: "Se fondre dans le décor sans se confondre avec lui.",
      specs: [["Cadre", "Projet d'études, La Cambre"], ["Pour", "Musée Horta"], ["Domaine", "Mobilier, design industriel, patrimoine"], ["Statut", "Lauréat du concours du Musée Horta"]],
      sections: [
        { h: "Contexte",
          p: ["Ani est un tabouret pensé pour les visiteurs et les gardiens du Musée Horta. Il dialogue avec le lieu sans imiter Victor Horta, et sans se confondre avec son mobilier."],
          media: { layout: "grid", caption: "Musée Horta", items: [
            { src: "ani-07.jpg", alt: "Détail d'une rampe en fer forgé au Musée Horta" },
            { src: "ani-08.jpg", alt: "Pied d'une table en bois au Musée Horta, sur un sol en mosaïque" },
            { src: "ani-09.jpg", alt: "Chaise en bois courbé et cannage au Musée Horta" },
            { src: "ani-10.jpg", alt: "Détail d'un encadrement de porte en bois au Musée Horta" },
            { src: "ani-11.jpg", alt: "Verrière et ferronnerie du Musée Horta" }
          ] } },
        { h: "Inspiration",
          p: ["L'Art nouveau puise son inspiration dans la nature. L'aile d'une libellule, dessinée puis simplifiée, est devenue le pied du tabouret. Son nom, Ani, vient d'Anisoptera, le groupe des libellules."],
          media: { layout: "pair", caption: "De l'aile au pied d'Ani", items: [
            { src: "ani-aile.jpg", alt: "Aile de libellule : détail des nervures" },
            { src: "ani-croquis.jpg", w: 1.3, alt: "Croquis de recherche : la forme de l'aile de libellule devient le pied du tabouret" }
          ] } },
        { h: "Conception et fabrication",
          p: ["Ani est livré à plat, en flat pack. Il se monte et se démonte facilement, ce qui permet aussi de le réparer simplement.",
              "Une ouverture centrale sert de poignée. Le jaune fait office de signalétique : il est plus simple de dire aux visiteurs qu'ils peuvent s'asseoir sur le tabouret jaune que de leur expliquer une forme ou une idée."] },
        { h: "Résultat",
          p: ["**Ani a remporté le concours du Musée Horta**, avec la perspective d'une production et d'une intégration à la collection du musée."] }
      ],
      photos: [
        { src: "ani-1.jpg", caption: "Le tabouret Ani, photo studio", alt: "Le tabouret Ani, photo studio" },
        { src: "ani-02.jpg", caption: "L'ouverture centrale sert de poignée", alt: "Ani tenu par l'ouverture centrale" },
        { src: "ani-03.jpg", caption: "L'assise d'Ani vue de dessous", alt: "L'assise d'Ani vue de dessous" },
        { src: "ani-04.jpg", caption: "Détail d'un insert sphérique", alt: "Détail d'un insert sphérique sur un pied" },
        { src: "ani-05.jpg", caption: "Les pieds d'Ani vus de face", alt: "Les pieds d'Ani vus de face" }
      ]
    },
    {
      id: "hypar", client: "La Cambre", year: 2026, title: "Hypar", kind: "Cale-porte", cover: "hypar-01.jpg", pos: "50% 58%",
      tagline: "Quand les mathématiques deviennent pratiques.",
      specs: [["Domaine", "Objet domestique, géométrie"], ["Enquête", "66 personnes"], ["Outils", "Code, Fusion 360"], ["Matériaux", "Impression 3D ; prototypes en fibre et résine"]],
      sections: [
        { h: "Contexte et enquête", p: ["Hypar réinterprète le cale-porte, un objet du quotidien souvent encombrant. Une enquête auprès de 66 personnes a révélé trois attentes : la discrétion, l'intégration à la porte et moins d'objets laissés au sol."] },
        { h: "Explorations",
          p: ["Un premier mécanisme, actionné comme une clé près de la charnière, a été abandonné car peu intuitif. La double courbure d'une chips a ensuite orienté la recherche vers un paraboloïde hyperbolique."],
          media: { layout: "single", size: "85%", caption: "Carnet de recherche", items: [{ src: "hypar-carnet.jpg", alt: "Pages du carnet de recherche" }] } },
        { h: "Géométrie et fonctionnement",
          p: ["Cette double courbure est à la fois rigide et souple, ce qui crée une mise en tension. La forme a été générée par le calcul et du code, puis travaillée dans Fusion 360.",
              "On glisse l'extrémité sous la porte et on la retient du pied ; la porte avance alors sur la surface, et la pression l'immobilise."] },
        { h: "Matériaux et prototypage",
          p: ["La forme fonctionne en impression 3D, comme le montrent les photos. Deux prototypes ont aussi été réalisés en fibre et résine, à l'aide de moules."],
          media: { layout: "grid", plans: true, caption: "Profil de la pièce, profils du moule et moules", items: [
            { src: "hypar-plan-piece.png", alt: "Profil de la pièce" },
            { src: "hypar-plan-profils.png", alt: "Profils du moule" },
            { src: "hypar-plan-moule.png", alt: "Dessin des moules" }
          ] } }
      ],
      photos: [
        { src: "hypar-01.jpg", caption: "Hypar, la pièce seule", alt: "Hypar, la pièce seule" },
        { src: "hypar-02.jpg", caption: "Hypar glissé sous une porte", alt: "Hypar glissé sous une porte" },
        { src: "hypar-03.jpg", caption: "Deux Hypar, l'un sous la porte, l'autre posé au sol", alt: "Deux Hypar, l'un sous la porte, l'autre posé au sol" },
        { src: "hypar-04.jpg", caption: "Trois Hypar", alt: "Trois Hypar" },
        { src: "hypar-05.jpg", caption: "Trois Hypar vus de côté", alt: "Trois Hypar vus de côté" }
      ]
    },
    {
      id: "imal", client: "Projet scolaire", year: 2026, title: "Imal", kind: "Caisse de rangement", cover: "imal-01.jpg", pos: "50% 93%",
      tagline: "Le vide comme élément de structure.",
      specs: [["Cadre", "Workshop d'une semaine"], ["Procédé", "Usinage CNC"], ["Domaine", "Objet utilitaire, économie de matière"]],
      sections: [
        { h: "Contexte", p: ["Imal a été développé lors d'un workshop d'une semaine consacré à l'usinage CNC. L'objectif : alléger la caisse de rangement tout en conservant sa fonction."] },
        { h: "Recherche formelle", p: ["Les ouvertures allègent la structure, laissent voir le contenu et donnent son identité à l'objet. Leur taille et leur position gardent assez de matière pour que la caisse tienne."] },
        { h: "Fabrication", p: ["Des panneaux découpés à la CNC et un assemblage simple. Les découpes mettent le procédé en évidence."] }
      ],
      photos: [
        { src: "imal-01.jpg", caption: "Imal, la caisse vue de face", alt: "Imal, la caisse vue de face" },
        { src: "imal-02.jpg", caption: "Imal avec des pommes de terre", alt: "Imal avec des pommes de terre" },
        { src: "imal-03.jpg", caption: "Deux caisses Imal empilées", alt: "Deux caisses Imal empilées" },
        { src: "imal-04.jpg", caption: "Imal vue par le côté", alt: "Imal vue par le côté" },
        { src: "imal-05.jpg", caption: "Imal vue par l'extrémité, avec un filet d'oignons", alt: "Imal vue par l'extrémité, avec un filet d'oignons" },
        { src: "imal-06.jpg", caption: "Imal vue de trois quarts", alt: "Imal vue de trois quarts" },
        { src: "imal-07.jpg", caption: "Imal de trois quarts, avec un filet d'oignons", alt: "Imal de trois quarts, avec un filet d'oignons" },
        { src: "imal-08.jpg", caption: "Détail de l'assemblage d'Imal", alt: "Détail de l'assemblage d'Imal" }
      ]
    },
    {
      id: "duo", client: "XLBOOM", year: 2026, title: "Duo", kind: "Bougeoir", cover: "duo-00.jpg", pos: "50% 52%",
      tagline: "Un geste, deux ambiances.",
      specs: [["Pour", "XLBOOM"], ["Domaine", "Objet domestique, lumière, hospitalité"], ["Matériaux", "Verre soufflé sablé, aluminium tourné (pistes)"]],
      sections: [
        { h: "Contexte",
          p: ["Duo est un bougeoir développé pour XLBOOM, autour de l'hospitalité et du partage. La lumière peut rapprocher les convives ou ouvrir l'atmosphère d'une table."],
          media: { layout: "single", size: "80%", caption: "Duo posé sur une table ronde", items: [{ src: "duo-03.jpg", alt: "Duo posé sur une table ronde, sa lumière projetée sur le mur" }] } },
        { h: "Concept",
          p: ["Un même objet offre deux lumières : en le retournant, on change la diffusion, plus intime ou plus ouverte. Ce geste est le cœur du projet et lui donne son nom."],
          media: [
            { layout: "single", size: "85%", caption: "Recherches de profils", items: [{ src: "duo-04.jpg", alt: "Planche de croquis de profils de bougeoir" }] },
            { layout: "single", size: "85%", caption: "Carnet de recherche", items: [{ src: "duo-07.jpg", alt: "Pages du carnet de recherche" }] }
          ] },
        { h: "Matériaux", p: ["Les pistes associent le verre soufflé sablé, qui adoucit la diffusion, et l'aluminium tourné pour la base."] }
      ],
      photos: [
        { src: "duo-00.jpg", caption: "Duo, verre sablé et base sombre, posé sur du papier froissé", alt: "Duo, verre sablé et base sombre, posé sur du papier froissé" },
        { src: "duo-01.jpg", caption: "Retourner Duo pour changer la diffusion de la lumière", alt: "Retourner Duo pour changer la diffusion de la lumière" },
        { src: "duo-02.jpg", caption: "Deux Duo allumés, l'un ouvert vers le haut, l'autre vers le bas", alt: "Deux Duo allumés, l'un ouvert vers le haut, l'autre vers le bas" },
        { src: "duo-05.jpg", caption: "Duo en verre sablé sur du papier froissé", alt: "Duo en verre sablé sur du papier froissé" },
        { src: "duo-06.jpg", caption: "Duo, version inversée, sur du papier froissé", alt: "Duo, version inversée, sur du papier froissé" }
      ]
    },
    {
      id: "kome", client: "Royal Canin", year: 2025, cover: "kome-09.jpg", pos: "50% 50%", title: "Komé", kind: "Composteur de cuisine",
      tagline: "Un composteur de cuisine compact, développé avec Royal Canin.",
      specs: [["Collaboration", "Royal Canin"], ["Principe", "Fermentation bokashi"], ["Composition", "Quatre éléments ; bac intérieur perforé"], ["Manipulation", "Jus vidé par basculement ; jusqu'à 5 kg de déchets"]],
      sections: [
        { h: "Contexte", p: ["Komé est un composteur de cuisine basé sur la fermentation bokashi, développé avec Royal Canin. Le projet porte sur la gestion des déchets organiques à la maison et sur la manipulation du contenant."] },
        { h: "Composants", p: ["Il se compose de quatre éléments : un bac intérieur perforé pour les déchets, un réservoir extérieur qui recueille le jus, un couvercle étanche et un bouchon de vidange. Le fond du bac fait office de passoire et sépare les déchets du liquide."],
          media: [{ layout: "single", size: "55%", caption: "Rendu : le bac intérieur et le couvercle", items: [{ src: "kome-02.jpg", alt: "Rendu 3D du bac intérieur noir sorti du réservoir" }] }, { layout: "single", size: "60%", caption: "Carnet : les quatre parties du système bokashi", items: [{ src: "kome-06.jpg", alt: "Page de carnet : coupe du composteur et principe du bokashi" }] }] },
        { h: "Vidange", p: ["Une poignée en silicone et une cassure à la base permettent de basculer le composteur au bord d'un plan de travail et de vider le jus sans soulever l'ensemble, qui contient jusqu'à 5 kg de déchets.",
              "La séparation des contenants, l'étanchéité du couvercle et le basculement sont pensés ensemble pour simplifier l'usage."],
          media: [{ layout: "single", size: "90%", caption: "Mode d'emploi : les six étapes d'utilisation", items: [{ src: "kome-07.jpg", alt: "Schéma en six étapes : ajouter du son, les déchets, compresser, récupérer les jus et vider" }] }] }
      ],
      photos: [
        { src: "kome-09.jpg", caption: "Komé", alt: "Rendu 3D de deux composteurs Komé inclinés, en suspension sur fond gris clair" },
        { src: "kome-03.jpg", caption: "Photo : Komé sur un plan de travail", alt: "Komé, composteur blanc avec poignée en silicone, posé sur un plan de travail en bois" },
        { src: "kome-04.jpg", caption: "Photo : la poignée en silicone et le bouchon", alt: "Détail de la poignée en silicone et du bouchon noir" },
        { src: "kome-05.jpg", caption: "Photo : Komé vu de dessus, avec son couvercle", alt: "Komé vu de dessus, avec son couvercle" }
      ]
    },
    {
      id: "bucheup", client: "Centre de prêt de Naninne", year: 2025, cover: "bucheup-02.jpg", pos: "50% 42%", title: "Bûch'Up", kind: "Porte-bois",
      tagline: "Un porte-bois fait de matériaux destinés au rebut.",
      specs: [["Partenaire", "Centre de prêt de Naninne"], ["Pour", "Scouts et mouvements de jeunesse"], ["Matériaux", "PVC et sangles, matériaux revalorisés"], ["Usage", "Collecte et transport du bois de chauffage"]],
      sections: [
        { h: "Contexte", p: ["Bûch'Up est un projet réalisé avec le Centre de prêt de Naninne, qui loue du matériel pour les événements et les camps, notamment aux mouvements de jeunesse. L'objectif : valoriser des matériaux destinés au rebut."] },
        { h: "Conception", p: ["Pour les Scouts, il permet de rassembler beaucoup de bois proprement, sans encombrement ni salissures. Une poignée et une sangle servent à le porter, et il se range en le roulant."],
          media: [{ layout: "single", items: [{ src: "bucheup-06.jpg", alt: "Planche de croquis : support pour transporter le bois, avec sangle, poignée, matière PVC et rangement roulé" }] }, { layout: "single", items: [{ src: "bucheup-01.jpg", alt: "Dessin du porte-bois roulé et maintenu par des sangles" }] }] },
        { h: "Fabrication", p: ["Du PVC résistant et des sangles cousues, avec des bouts de bois comme tiges de maintien."],
          media: { layout: "single", items: [{ src: "bucheup-03.jpg", alt: "Détail de la fixation d'une sangle sur une olive de bois" }] } },
        { h: "Résultat", p: ["Robuste et réutilisable, Bûch'Up est à la fois écologique et fonctionnel."] }
      ],
      photos: [
        { src: "bucheup-04.jpg", caption: "Bûch'Up", alt: "Bûch'Up porté en marchant, rempli de branches" },
        { src: "bucheup-05.jpg", caption: "Photo", alt: "Bûch'Up porté en bandoulière et rempli de branches" },
        { src: "bucheup-02.jpg", caption: "Photo", alt: "Bûch'Up tenu à la main par une branche passée dans les sangles" }
      ]
    },
    {
      id: "bilume", client: "Projet scolaire", year: 2024, cover: "bilume-cover.jpg", pos: "50% 50%", title: "Bilume", kind: "Lampe de bureau",
      tagline: "Une lampe de bureau articulée qui offre deux ambiances lumineuses.",
      specs: [["Matériau", "Profilés d'aluminium de 15 × 15 mm"], ["Construction", "Socle en croix par emboîtement"], ["Stabilité", "Plus de 500 g intégrés dans les pieds"], ["Assemblage", "Deux vis ; livraison à plat"]],
      sections: [
        { h: "Concept", p: ["Bilume est une lampe de bureau qui propose deux ambiances lumineuses. En changeant la position de sa partie articulée, on fait évoluer l'éclairage selon l'usage."] },
        { h: "Structure", p: ["Elle repose sur des profilés d'aluminium de 15 × 15 mm. Le câble est intégré à l'articulation pour préserver la continuité de la silhouette."],
          media: [{ layout: "single", size: "50%", caption: "L'articulation et le câble", items: [{ src: "bilume-06.jpg", alt: "Détail de l'articulation vissée, avec le câble en boucle" }] }, { layout: "single", size: "60%", caption: "Carnet : étude de l'articulation et de ses pièces imprimées en 3D", items: [{ src: "bilume-08.jpg", alt: "Dessins de carnet : vue de dessus, joint, tube carré et axe de l'articulation" }] }] },
        { h: "Stabilité", p: ["Le socle en croix s'emboîte, et plus de 500 g de masse intégrés aux pieds assurent la stabilité sans base massive."] },
        { h: "Production", p: ["Bilume est livrée à plat et s'assemble avec seulement deux vis, ce qui simplifie sa fabrication, son transport et son montage."] },
      ],
      photos: [
        { src: "bilume-01.jpg", caption: "Photo : Bilume, position ouverte", alt: "Bilume ouverte, la barre articulée inclinée, lumière chaude sur le mur" },
        { src: "bilume-02.jpg", caption: "Photo : Bilume et son modèle 3D à l'écran", alt: "Une main incline la partie articulée de Bilume, devant un modèle 3D à l'écran" },
        { src: "bilume-04.jpg", caption: "Photo : Bilume, position fermée", alt: "Bilume fermée, les deux barres côte à côte, câble en boucle" },
        { src: "bilume-07.jpg", caption: "Photo : Bilume fermée sur un bureau, devant son modèle 3D", alt: "Bilume fermée sur un bureau devant un modèle 3D" },
        { src: "bilume-03.jpg", caption: "Photo : assemblage de Bilume au tournevis", alt: "Assemblage de Bilume au tournevis" },
        { src: "bilume-05.jpg", caption: "Photo : détail du haut de la lampe fermée", alt: "Détail du haut de Bilume fermée, avec le câble en boucle" }
      ]
    },
    {
      id: "iom", client: "Projet scolaire", year: 2024, cover: "iom-07.jpg", pos: "50% 50%", title: "Iom", kind: "Tabouret et marchepied",
      tagline: "Un tabouret compact en bouleau multiplis, à la fois assise et marchepied.",
      specs: [["Matériau", "Bouleau multiplis"], ["Composition", "Cinq pièces"], ["Fabrication", "Usinage CNC 5 axes"], ["Assemblage", "Huit inserts et huit vis ; démontable"]],
      sections: [
        { h: "Usages", p: ["Iom sert à la fois d'assise et de marchepied. Son format compact trouve sa place dans différents espaces, avec une structure simple et stable."],
          media: { layout: "single", size: "60%", caption: "Carnet : études de l'assemblage", items: [{ src: "iom-06.jpg", alt: "Dessins de carnet : coupes et détails d'assemblage des pièces" }] } },
        { h: "Conception des pièces", p: ["Il se compose de cinq pièces en bouleau multiplis, dont les rainures et les perçages sont alignés pour faciliter le montage."],
          media: { layout: "single", size: "50%", caption: "Vue éclatée : les cinq pièces, les inserts et les vis", items: [{ src: "iom-04.jpg", alt: "Rendu 3D de la vue éclatée de Iom : deux plateaux triangulaires, trois panneaux, inserts et vis" }] } },
        { h: "Usinage", p: ["L'usinage CNC 5 axes réalise les pièces avec précision et de façon reproductible, en limitant les interventions manuelles."],
          media: { layout: "single", size: "75%", caption: "Détail des chants et des assemblages", items: [{ src: "iom-05.jpg", alt: "Rendu 3D en gros plan de l'assise et des montants de Iom" }] } },
        { h: "Montage", p: ["Huit inserts et huit vis assemblent le tabouret, qui reste facilement démontable."] },
      ],
      photos: [
        { src: "iom-07.jpg", caption: "Iom", alt: "Rendu 3D du tabouret Iom sur fond gris clair" },
        { src: "iom-02.jpg", caption: "Iom dans un intérieur", alt: "Le tabouret Iom en bouleau multiplis posé sur un parquet, devant un mur à moulures" },
        { src: "iom-03.jpg", caption: "Iom utilisé comme marchepied", alt: "Une personne pose le pied sur Iom utilisé comme marchepied" }
      ]
    },
    {
      id: "citybreeze", client: "Projet scolaire", year: 2024, cover: "citybreeze-16.jpg", pos: "50% 50%", title: "CityBreeze", kind: "Éolienne urbaine",
      tagline: "Une éolienne pensée pour les angles des bâtiments.",
      specs: [["Implantation", "Angles des bâtiments ; couloirs de vent"], ["Aérodynamique", "Profil NACA 4412 ; pales inclinées à 6°"], ["Structure de la maquette", "Tubes d'acier cintrés et soudés ; plaques d'acier de 2 mm pliées et découpées"], ["Prototypage", "Impression 3D ; découpe laser pour la structure des pales"]],
      sections: [
        { h: "Contexte", p: ["CityBreeze est une éolienne urbaine conçue pour s'intégrer discrètement aux angles des bâtiments. Elle exploite les couloirs de vent qui se forment en milieu dense."],
          media: [{ layout: "single", size: "50%", caption: "CityBreeze fixée à l'angle d'un immeuble", items: [{ src: "citybreeze-13.jpg", alt: "Rendu 3D d'un immeuble vu d'en bas, avec l'éolienne fixée à son angle" }] }] },
        { h: "Aérodynamique", p: ["Le profil NACA 4412 et des pales inclinées à 6° visent à réduire les pertes d'énergie et le bruit. Le projet a été développé avec des ingénieurs en aérodynamique."],
          media: [{ layout: "single", size: "65%", caption: "Profil NACA et angles d'incidence (6°, 15°, 25°)", items: [{ src: "citybreeze-06.jpg", alt: "Schéma du profil NACA avec vent relatif et portance pour trois angles" }] }, { layout: "single", size: "75%", caption: "Carnet : fixation des pales, profil NACA 4412", items: [{ src: "citybreeze-09.jpg", alt: "Double page de carnet : pièce de fixation des pales et profil NACA 4412" }] }] },
        { h: "Maquette et prototypage", p: ["La maquette associe plusieurs procédés : une structure en tubes d'acier cintrés et soudés et en plaques d'acier de 2 mm, des pièces imprimées en 3D à la place de l'aluminium moulé prévu, et des pales dont la structure est découpée au laser."],
          media: [{ layout: "single", size: "45%", caption: "Vue éclatée des pièces de l'éolienne", items: [{ src: "citybreeze-17.jpg", alt: "Rendu 3D de la vue éclatée : pales, bras, pièces en aluminium et axe central" }] }, { layout: "grid", cols: 2, caption: "Structure en acier soudé à l'atelier", items: [{ src: "citybreeze-02.jpg", alt: "Structure en acier soudée sur un plateau de MDF" }, { src: "citybreeze-03.jpg", alt: "Structure en acier avec sa plaque triangulaire" }] }] }
      ],
      photos: [
        { src: "citybreeze-16.jpg", caption: "CityBreeze", alt: "Rendu 3D de l'éolienne vue de face, fixée à l'angle d'un bâtiment" },
        { src: "citybreeze-04.jpg", caption: "Prototype en atelier, vue de face", alt: "Prototype de l'éolienne : pale blanche, pales en balsa, structure grise" },
        { src: "citybreeze-05.jpg", caption: "Prototype, vue de trois quarts", alt: "Prototype de l'éolienne en trois quarts avec table et affiches" }
      ]
    },
    {
      id: "tubea", client: "Projet scolaire", year: 2024, cover: "tubea-cover.jpg", pos: "50% 50%", title: "Tubéa", kind: "Sac en chambres à air",
      tagline: "Un sac tressé en chambres à air recyclées.",
      specs: [["Matériau", "Chambres à air recyclées"], ["Construction", "Tressage structurant"], ["Usage", "Transport des essentiels du quotidien"], ["Portage", "Sangle gonflée pour le confort"]],
      sections: [
        { h: "Matière", p: ["Tubéa explore le tissage à partir d'un matériau abondant, la chambre à air recyclée, qu'il revalorise en lui donnant un nouvel usage."],
          media: { layout: "single", size: "50%", caption: "Chambres à air recyclées", items: [{ src: "tubea-01.jpg", alt: "Pile de chambres à air recyclées" }] } },
        { h: "Construction", p: ["Le sac est construit par un tressage qui lui donne à la fois résistance et souplesse. Le motif ainsi créé fait aussi son identité."],
          media: { layout: "grid", cols: 2, caption: "Le tressage et l'anse", items: [{ src: "tubea-13.jpg", alt: "Détail du tressage de Tubéa" }, { src: "tubea-02.jpg", alt: "L'anse en chambre à air et le haut du tressage" }] } },
        { h: "Usage et portage", p: ["Sa forme compacte accueille les essentiels du quotidien. Une sangle gonflée apporte du confort et prolonge le travail sur la chambre à air."] }
      ],
      photos: [
        { src: "tubea-cover.jpg", caption: "Tubéa", alt: "Tubéa, sac tressé en chambres à air, sur fond blanc" },
        { src: "tubea-11.jpg", caption: "Photo : Tubéa porté à l'épaule, vu de côté", alt: "Tubéa porté à l'épaule, vu de côté" },
        { src: "tubea-10.jpg", caption: "Photo : Tubéa porté devant une porte bleue", alt: "Tubéa porté devant une porte bleue, regard par-dessus l'épaule" },
        { src: "tubea-14.jpg", caption: "Photo : Tubéa porté, de profil", alt: "Tubéa porté, de profil" },
        { src: "tubea-12.jpg", caption: "Photo : Tubéa porté en marchant devant une façade bleue", alt: "Tubéa porté en marchant devant une façade bleue" }
      ]
    }
  ];
