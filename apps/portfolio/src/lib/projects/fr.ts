import type { Project } from '../i18n/types';

export const projectsFr: Project[] = [
	{
		slug: 'maintenance-manager',
		title: 'Maintenance Manager — GMAO',
		tagline: 'Backend FastAPI et synchronisation Offline-First pour la maintenance industrielle.',
		date: 'Juin – août 2026',
		image: 'images/projects/maintenance-manager.jpg',
		status: 'Testé en stage',
		tech: ['Python', 'FastAPI', 'PostgreSQL', 'Offline-First'],
		description:
			'Projet réalisé pendant mon stage chez OCP pour la maintenance d’IMACID. J’ai assuré le pilotage et développé seul l’intégralité du backend. L’application Android a été réalisée par mon binôme, avec mon accompagnement pour les exigences et l’intégration. La version testée couvre six profils métiers et les interventions préventives et correctives.',
		challenges:
			'Permettre le suivi des équipements et des interventions dans des zones où la connexion est limitée.',
		solutions:
			'Architecture Offline-First avec synchronisation asynchrone et base PostgreSQL pour les équipements, interventions et historiques. Le backend a été déployé pour essais pendant le stage ; sa remise en service est en préparation.',
		lessons: [
			'Conception backend à partir de besoins de maintenance industrielle.',
			'Coordination des exigences et de l’intégration entre API et application mobile.'
		],
		category: 'internships',
		kind: 'project',
		cvFeatured: true,
		context: 'Stage OCP · Maintenance IMACID'
	},
	{
		slug: 'interface-traduction',
		category: 'internships',
		kind: 'project',
		title: 'Interface de traduction web',
		tagline: 'Traduction multilingue et lecture vocale dans le navigateur.',
		date: 'Juillet 2025',
		status: 'Prototype de stage',
		context: 'Stage CodeAlpha',
		tech: ['HTML', 'CSS', 'JavaScript', 'Azure Translator'],
		description:
			'Projet du stage à distance CodeAlpha : interface HTML/CSS/JavaScript permettant de choisir les langues et d’appeler l’API Azure Translator. La lecture vocale utilise les fonctions du navigateur.',
		challenges: 'Relier une interface multilingue à un service de traduction.',
		solutions: 'Appels HTTP avec fetch, sélection des langues et synthèse vocale via Web Speech.',
		lessons: [
			'Intégration d’une API dans une interface web.',
			'Distinction entre un service de traduction et la synthèse vocale locale.'
		]
	},
	{
		slug: 'chatbot-faq',
		category: 'internships',
		kind: 'project',
		title: 'Chatbot FAQ contextuel',
		tagline: 'Traitement linguistique et recherche de réponses par similarité.',
		date: 'Juillet 2025',
		status: 'Prototype de stage',
		context: 'Stage CodeAlpha',
		tech: ['Python', 'Flask', 'spaCy', 'TF-IDF'],
		description:
			'Prototype de chatbot réalisé dans le cadre du stage CodeAlpha. L’application Flask traite les requêtes, normalise le texte et recherche des réponses dans une FAQ avec spaCy et une méthode de similarité TF-IDF.',
		challenges: 'Retrouver une réponse pertinente et prévoir un mécanisme de repli.',
		solutions:
			'Traitement des requêtes sous Flask, normalisation linguistique et recherche de similarité textuelle.',
		lessons: [
			'Organisation d’un service web Python.',
			'Recherche de réponses fondée sur le traitement linguistique et la similarité.'
		]
	},
	{
		slug: 'communication-aeroensem',
		category: 'aeroensem',
		kind: 'project',
		title: 'Communication technique et conférence AéroENSEM',
		tagline: 'Préparation de la communication et d’une prise de parole pendant la présidence.',
		date: 'Sept. 2025 – mars 2026',
		status: 'Projet associatif',
		context: 'Présidence du Club AéroENSEM',
		tech: ['Communication technique', 'Leadership'],
		description:
			'Communication technique dans le cadre de la présidence du Club AéroENSEM, avec préparation du « Mot du Président » pour la conférence sur les enjeux de l’aéronautique marocaine à l’horizon 2030.',
		challenges: 'Structurer un message technique pour un public associatif et institutionnel.',
		solutions:
			'Préparation d’un discours de présidence et des contenus de communication autour de la conférence.',
		lessons: [
			'Communication technique adaptée au public.',
			'Articulation entre responsabilités associatives et préparation d’événements.'
		]
	},
	{
		slug: 'site-automatisations-aeroensem',
		category: 'aeroensem',
		kind: 'project',
		title: 'Site du club et automatisations associatives',
		tagline: 'Contenus bilingues et scripts d’organisation du Club AéroENSEM.',
		date: 'Sept. 2025 – mars 2026',
		status: 'Projet associatif',
		context: 'Présidence du Club AéroENSEM',
		tech: ['Hugo', 'Python', 'Web'],
		description:
			'Projet associatif regroupant la configuration d’un site Hugo, des contenus bilingues et des scripts Python d’organisation et de génération de documents.',
		challenges: 'Organiser les contenus du club et réduire la répétition des tâches documentaires.',
		solutions:
			'Structure Hugo pour le site et scripts Python pour l’organisation et la génération de documents.',
		lessons: [
			'Organisation de contenus web bilingues.',
			'Automatisation de tâches documentaires dans un contexte associatif.'
		]
	},
	{
		slug: 'portfolio-sveltekit',
		category: 'personal',
		kind: 'project',
		title: 'Portfolio personnel — younes.aboudrar.dev',
		tagline: 'Site bilingue organisé par parcours, expériences et projets.',
		date: 'Projet personnel',
		status: 'Site en ligne',
		context: 'Développement personnel',
		tech: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
		description:
			'Portfolio personnel en français et en anglais, construit avec SvelteKit et Tailwind CSS. Le site comporte des pages dédiées au parcours, aux expériences, aux projets, aux compétences et au contact, ainsi qu’un CV imprimable.',
		challenges:
			'Présenter un parcours professionnel de manière structurée et accessible sur mobile.',
		solutions:
			'Pages statiques, contenu bilingue, navigation par rubrique et génération d’un CV depuis les mêmes données.',
		lessons: [
			'Organisation d’un site professionnel sur plusieurs pages.',
			'Cohérence entre contenu du portfolio, traductions et CV.'
		],
		links: {
			demo: 'https://younes.aboudrar.dev'
		}
	},
	{
		slug: 'pfa-qualite-industrielle-iot',
		category: 'academic',
		kind: 'project',
		title: 'PFA — qualité industrielle et supervision IoT',
		tagline:
			'Préparation de données industrielles, comparaison de régressions et prototypes de supervision.',
		date: 'Projet académique',
		status: 'Étude académique',
		context: 'ENSEM · Projet académique',
		tech: ['Python', 'pandas', 'scikit-learn', 'MQTT', 'Redis', 'Streamlit'],
		description:
			'Projet de fin d’année collectif consacré aux données de qualité industrielle. Les travaux rapprochent qualité, tonnage et arrêts pour préparer des variables et comparer des modèles de régression. Des phases de prototypage explorent MQTT, Redis et une interface Streamlit.',
		challenges:
			'Structurer des données temporelles industrielles et comparer des modèles dans leur contexte.',
		solutions:
			'Agrégations journalières, variables retardées et fenêtres glissantes avec pandas ; comparaison de régressions et prototypage de composants de supervision.',
		lessons: [
			'Préparation de données temporelles et comparaison de modèles.',
			'Distinction entre une expérimentation, une chaîne prototype et un système validé en exploitation.'
		],
		cvFeatured: true
	},
	{
		slug: 'efficacite-energetique-climatisation',
		title: 'Étude énergétique CVC',
		tagline: 'Variation de vitesse, analyse harmonique et bilan technico-économique.',
		date: 'Projet académique',
		image: 'images/projects/efficacite-energetique-climatisation.jpg',
		status: 'Étude en binôme',
		tech: ['Python', 'NumPy', 'Matplotlib', 'Variation de vitesse'],
		description:
			'Étude collective d’une installation CVC de 45 kW : profils de charge partielle, lois d’affinité, harmoniques et rentabilité. Les économies étudiées sont des projections théoriques sous hypothèses.',
		challenges: 'Relier variation de vitesse, qualité de l’énergie et hypothèses économiques.',
		solutions:
			'Calculs fondés sur les lois d’affinité, simulation harmonique en Python et bilan technico-économique sous hypothèses.',
		lessons: [
			'Distinguer un résultat théorique d’une mesure en exploitation.',
			'Analyser ensemble les dimensions énergétique et économique.'
		],
		category: 'academic',
		kind: 'project',
		cvFeatured: true,
		context: 'ENSEM · Travail académique'
	},
	{
		slug: 'controle-vitesse-compresseur',
		title: 'Régulation d’un compresseur',
		tagline: 'Modélisation Simulink et étude de commande PID à vitesse variable.',
		date: 'Projet académique',
		image: 'images/projects/controle-vitesse-compresseur.jpg',
		status: 'Étude et simulation',
		tech: ['MATLAB/Simulink', 'PID', 'SINAMICS G120', 'TIA Portal'],
		description:
			'Étude et simulation collectives d’un compresseur entraîné par un moteur asynchrone, portant sur la modélisation Simulink, la régulation PID et une configuration décrite sous TIA Portal.',
		challenges: 'Étudier la réponse en pression et le réglage d’une boucle de régulation.',
		solutions:
			'Modélisation du moteur et de la pression, simulation de la boucle PID et étude du variateur SINAMICS G120.',
		lessons: [
			'Analyse d’une boucle de régulation dans un modèle simulé.',
			'Distinction entre simulation et validation sur équipement réel.'
		],
		category: 'academic',
		kind: 'project',
		cvFeatured: true,
		context: 'ENSEM · Travail académique'
	},
	{
		slug: 'performance-etudiante',
		title: 'Analyse de profils étudiants',
		tagline: 'Analyse exploratoire, ACP et segmentation par K-Means.',
		date: 'Projet académique',
		image: 'images/projects/performance-etudiante.jpg',
		status: 'Travail collectif',
		tech: ['Analyse de données', 'ACP', 'K-Means'],
		description:
			'Projet collectif d’analyse de notes et de facteurs comportementaux. La présentation étudie les corrélations entre matières et la segmentation des profils étudiants, avec des pistes d’orientation.',
		challenges:
			'Interpréter des profils à partir de données académiques sans confondre corrélation et causalité.',
		solutions:
			'Démarche d’analyse exploratoire, ACP et K-Means sur les deux premières composantes, présentée dans un travail collectif.',
		lessons: [
			'Interprétation de corrélations et de groupes de profils.',
			'Présentation des limites et du contexte d’une analyse.'
		],
		category: 'academic',
		kind: 'project',
		cvFeatured: true,
		context: 'ENSEM · Travail académique'
	},
	{
		slug: 'planification-production',
		category: 'academic',
		kind: 'project',
		title: 'Planification de production par programmation linéaire',
		tagline: 'Modélisation des contraintes, résolution et représentation graphique.',
		date: 'Projet académique',
		status: 'Étude académique',
		context: 'ENSEM · Projet académique',
		tech: ['Python', 'Matplotlib', 'Linear programming'],
		description:
			'Projet académique de recherche opérationnelle sur la planification de production industrielle. La présentation formule un programme linéaire et examine résolution graphique, simplexe et dualité ; des scripts Python représentent les contraintes.',
		challenges: 'Formaliser une décision de production sous contraintes.',
		solutions:
			'Construction d’un modèle linéaire et visualisation des zones admissibles avec Python/Matplotlib.',
		lessons: [
			'Passage d’un problème de planification à une formulation mathématique.',
			'Interprétation des contraintes et de la zone admissible.'
		]
	},
	{
		slug: 'presentation-photovoltaique',
		category: 'academic',
		kind: 'project',
		title: 'Présentation sur le dimensionnement photovoltaïque',
		tagline: 'Étude des fonctionnalités et du flux de travail de PV*SOL.',
		date: 'Projet académique',
		status: 'Étude académique',
		context: 'ENSEM · Projet académique',
		tech: ['PV*SOL', 'Photovoltaics'],
		description:
			'Présentation académique collective sur les systèmes photovoltaïques et les fonctions de PV*SOL Premium : localisation, profils de consommation, modules, onduleurs et ombrage.',
		challenges: 'Expliquer les paramètres qui interviennent dans une étude photovoltaïque.',
		solutions:
			'Présentation du flux de travail, de la modélisation 2D/3D, du choix de composants et de l’analyse d’ombrage.',
		lessons: [
			'Identification des paramètres d’une étude photovoltaïque.',
			'Communication technique autour d’un outil de dimensionnement.'
		]
	},
	{
		slug: 'segmentation-marketing',
		category: 'academic',
		kind: 'coursework',
		title: 'Segmentation marketing et classification',
		tagline: 'Analyse exploratoire, préparation de données et comparaison de classifieurs.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['Python', 'pandas', 'scikit-learn', 'K-Means', 'PCA'],
		description:
			'Travaux pratiques sur un jeu de données de campagnes marketing : exploration, imputation, encodage, standardisation et segmentation. Les notebooks comparent aussi des approches de classification des réponses aux campagnes.',
		challenges: 'Préparer des données hétérogènes et interpréter les groupes obtenus.',
		solutions:
			'Visualisations exploratoires, K-Means et ACP ; comparaison de régression logistique et Random Forest dans un contexte pédagogique.',
		lessons: [
			'Préparation de données et segmentation de profils.',
			'Lecture des métriques de classification et prise en compte du déséquilibre des classes.'
		]
	},
	{
		slug: 'reseaux-neurones-maintenance',
		category: 'academic',
		kind: 'coursework',
		title: 'Réseaux de neurones pour la maintenance',
		tagline: 'Expérimentation ANN, RNN et LSTM pour les pannes et la durée de vie résiduelle.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['Python', 'TensorFlow', 'Keras', 'ANN / RNN / LSTM'],
		description:
			'Travaux pratiques sur la classification de pannes et l’estimation de durée de vie résiduelle d’équipements hydrauliques. Les notebooks explorent des réseaux denses, récurrents et LSTM avec TensorFlow/Keras ; leur portée reste celle d’une expérimentation pédagogique.',
		challenges: 'Comparer différentes architectures et examiner la détection des classes rares.',
		solutions:
			'Préparation des données, construction de réseaux ANN/RNN/LSTM et analyse de courbes et matrices de confusion.',
		lessons: [
			'Expérimentation de réseaux de neurones sous Keras.',
			'Distinction entre une précision globale et la détection effective de pannes rares.'
		]
	},
	{
		slug: 'algorithmes-metaheuristiques',
		title: 'Optimisation sur graphes',
		tagline: 'Comparaison de méthodes exactes, relaxations et heuristiques sous SageMath.',
		date: 'Travaux pratiques',
		image: 'images/projects/algorithmes-metaheuristiques.jpg',
		status: 'Travail académique',
		tech: ['SageMath', 'PL / PLNE', 'Graphes', 'Heuristiques'],
		description:
			'Travaux pratiques sur la programmation linéaire, les flots, la couverture pondérée de sommets et le voyageur de commerce. Le compte rendu et le notebook comparent plusieurs méthodes dans un contexte pédagogique.',
		challenges: 'Comparer le coût des solutions et le temps de calcul selon la taille du problème.',
		solutions:
			'Modélisation sous SageMath et comparaison de méthodes exactes, relaxations, heuristique gloutonne, recherche locale et algorithme génétique.',
		lessons: [
			'Prise en compte des contraintes lors de la modélisation.',
			'Comparaison expérimentale de stratégies d’optimisation.'
		],
		category: 'academic',
		kind: 'coursework',
		cvFeatured: true,
		context: 'ENSEM · Travail académique'
	},
	{
		slug: 'cps-thermique',
		category: 'academic',
		kind: 'coursework',
		title: 'Étude d’un système cyber-physique thermique',
		tagline: 'Modèle continu, machine à états et scénarios de perturbation.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['Python', 'FSM', 'Euler', 'CPS'],
		description:
			'Étude académique collective d’un procédé thermique associant un modèle physique, un capteur, un contrôleur et un actionneur. Le rapport décrit une discrétisation par Euler et un contrôleur à états.',
		challenges: 'Relier une dynamique continue à une logique de commande discrète.',
		solutions:
			'Modélisation thermique, machine à états et étude de scénarios de défaut et de récupération.',
		lessons: [
			'Modélisation hybride d’un système cyber-physique.',
			'Analyse de contraintes de commande et de sécurité.'
		]
	},
	{
		slug: 'automates-chariots-ascenseur',
		category: 'academic',
		kind: 'coursework',
		title: 'Automatisation de chariots et d’un ascenseur didactique',
		tagline: 'Séquences de commande et supervision sous TIA Portal et WinCC.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['TIA Portal', 'S7-1200', 'GRAFCET', 'WinCC'],
		description:
			'Travaux pratiques collectifs sur des séquences de chariots et un ascenseur didactique à quatre étages. Les études portent sur les variables d’entrée/sortie, le GRAFCET, les temporisations, les appels et les sécurités de portes.',
		challenges: 'Structurer des séquences et relier les commandes à une interface de supervision.',
		solutions:
			'Programmation et configuration décrites sous TIA Portal/S7-1200, avec variables API/IHM pour WinCC Runtime.',
		lessons: [
			'Conception de séquences d’automatisation.',
			'Mise en relation du programme automate et de l’IHM dans un contexte pédagogique.'
		]
	},
	{
		slug: 'diagnostic-reseaux-ip',
		category: 'academic',
		kind: 'coursework',
		title: 'Diagnostic réseau et topologies IP',
		tagline: 'Analyse de paquets et configuration de réseaux simulés.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['Wireshark', 'Packet Tracer', 'IP', 'DHCP / DNS'],
		description:
			'Travaux pratiques de diagnostic avec ping, tracert et Wireshark, puis étude de topologies sous Cisco Packet Tracer. Les captures réseau et les configurations simulées sont présentées dans leurs contextes respectifs.',
		challenges:
			'Interpréter des échanges réseau et définir l’adressage et les services d’une topologie.',
		solutions:
			'Analyse ARP/ICMP/DNS/UDP, routage statique et RIP v2, configuration DHCP et DNS dans Packet Tracer.',
		lessons: [
			'Diagnostic fondé sur les paquets et les outils réseau.',
			'Distinction entre captures réseau et simulation de topologies.'
		]
	},
	{
		slug: 'linux-apache',
		category: 'academic',
		kind: 'coursework',
		title: 'Linux et configuration d’un serveur Apache',
		tagline: 'Administration locale et VirtualHost dans un environnement de TP.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['Ubuntu', 'VirtualBox', 'Apache', 'UFW'],
		description:
			'Travaux pratiques sur Ubuntu dans VirtualBox : navigation, fichiers, répertoires et liens. Un second volet porte sur l’installation d’Apache, un VirtualHost, l’activation du site et une règle de pare-feu locale.',
		challenges: 'Comprendre le système de fichiers et configurer un service web en laboratoire.',
		solutions:
			'Gestion des fichiers et liens, commandes apt/systemctl, VirtualHost Apache et activation avec a2ensite.',
		lessons: [
			'Manipulation d’un environnement Linux.',
			'Configuration locale d’un service web et de ses paramètres d’accès.'
		]
	},
	{
		slug: 'fiabilite-disponibilite-grif',
		category: 'academic',
		kind: 'coursework',
		title: 'Fiabilité et disponibilité sous GRIF',
		tagline: 'Blocs de fiabilité, arbres de défaillance et modèles de panne.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['GRIF', 'Weibull', 'Reliability'],
		description:
			'Travaux pratiques de modélisation de systèmes série/parallèle, d’arbres de défaillance et de disponibilité. Les études utilisent GRIF et abordent notamment la loi de Weibull dans un contexte académique.',
		challenges: 'Représenter les dépendances entre composants et interpréter les états de panne.',
		solutions:
			'Construction et analyse de modèles de fiabilité et de disponibilité, avec blocs et arbres de défaillance.',
		lessons: [
			'Lecture et modélisation de structures de fiabilité.',
			'Analyse académique des pannes et de la disponibilité.'
		]
	},
	{
		slug: 'circuits-vhdl',
		category: 'academic',
		kind: 'coursework',
		title: 'Circuits combinatoires en VHDL',
		tagline: 'Descriptions, testbenches et étude du flot de synthèse et simulation.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['VHDL', 'Xilinx ISE', 'Testbench'],
		description:
			'Travaux pratiques sur un générateur de parité, des multiplexeurs, un comparateur et un trieur hiérarchique. Le rapport décrit les circuits, les testbenches, les chronogrammes et le flot Xilinx ISE.',
		challenges: 'Traduire un comportement logique en descriptions matérielles vérifiables.',
		solutions:
			'Descriptions VHDL, testbenches et analyse de simulation et de synthèse sous Xilinx ISE.',
		lessons: [
			'Description de circuits et lecture de chronogrammes.',
			'Distinction entre simulation logique et validation sur matériel.'
		]
	},
	{
		slug: 'microcontroleur-8051',
		category: 'academic',
		kind: 'coursework',
		title: 'Microcontrôleur 8051 et génération de signaux',
		tagline: 'Programmation assembleur et conversion numérique-analogique.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['8051', 'Assembly', 'DAC'],
		description:
			'Travaux pratiques sur les registres, les temporisations et les tables de valeurs d’un microcontrôleur 8051. Les rapports décrivent la génération de signaux et le raccordement à un convertisseur numérique-analogique.',
		challenges: 'Organiser les temporisations et la sortie des valeurs numériques.',
		solutions:
			'Programmes assembleur, organigrammes et génération de signaux carré, triangulaire, dents de scie et ECG à partir de tables.',
		lessons: [
			'Programmation structurée autour de registres et de temporisations.',
			'Lien entre valeurs numériques et signaux analogiques.'
		]
	},
	{
		slug: 'statistiques-r',
		category: 'academic',
		kind: 'coursework',
		title: 'Statistiques descriptives sous R',
		tagline: 'Calculs, manipulation de données et visualisations.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['R', 'Statistics'],
		description:
			'Travaux pratiques collectifs de programmation R et de statistiques descriptives. Les exercices portent sur les boucles, les fonctions, la lecture de données, les moyennes, la variance et les visualisations.',
		challenges: 'Structurer des calculs statistiques et restituer les résultats.',
		solutions:
			'Scripts R pour traiter des données, calculer des indicateurs descriptifs et produire des graphiques.',
		lessons: [
			'Programmation statistique dans un cadre pédagogique.',
			'Interprétation de statistiques descriptives et de graphiques.'
		]
	},
	{
		slug: 'algorithmique-c',
		category: 'academic',
		kind: 'coursework',
		title: 'Algorithmique et programmation C',
		tagline: 'Fonctions, récursivité, tableaux et algorithmes numériques.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['C', 'Algorithms'],
		description:
			'Ensemble de travaux pratiques de programmation C : entrées/sorties, conditions, boucles, fonctions, tableaux et matrices. Les programmes abordent aussi la récursivité et des approximations numériques simples.',
		challenges:
			'Décomposer un problème en fonctions et manipuler des structures de données élémentaires.',
		solutions: 'Petits programmes C organisés autour de fonctions, de boucles et de tableaux.',
		lessons: [
			'Bases de l’algorithmique impérative.',
			'Travail sur la récursivité et les calculs numériques simples.'
		]
	},
	{
		slug: 'electronique-analogique-numerique',
		category: 'academic',
		kind: 'coursework',
		title: 'Électronique analogique et numérique',
		tagline: 'Caractérisation de filtres, oscillateurs et logique combinatoire.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['Electronics', 'Filters', 'Logic'],
		description:
			'Travaux pratiques collectifs sur les oscillateurs et les filtres actifs, complétés par des exercices de logique numérique. Les rapports comparent réponses théoriques, relevés et simulations dans un contexte pédagogique.',
		challenges: 'Relier le comportement d’un circuit à son modèle et à sa réponse fréquentielle.',
		solutions:
			'Étude de filtres et oscillateurs, tables de vérité, algèbre de Boole et simplification par Karnaugh.',
		lessons: [
			'Analyse de réponses de circuits analogiques.',
			'Passage d’une expression logique à une structure combinatoire.'
		]
	},
	{
		slug: 'asservissement-antenne-radar',
		category: 'academic',
		kind: 'coursework',
		title: 'Asservissement d’une antenne de radar',
		tagline: 'Analyse temporelle et fréquentielle d’une boucle de commande.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['MATLAB', 'Simulink', 'Control'],
		description:
			'Travaux pratiques collectifs d’automatique consacrés à l’asservissement d’une antenne de radar. Les études comparent boucle ouverte et boucle fermée, réponse indicielle et marges de stabilité sous MATLAB/Simulink.',
		challenges: 'Analyser la stabilité et la réponse d’un système asservi.',
		solutions:
			'Étude des marges de gain et de phase, des réponses et d’un correcteur proportionnel.',
		lessons: [
			'Lecture des réponses temporelles et fréquentielles.',
			'Effet d’une correction proportionnelle dans une boucle de commande.'
		]
	},
	{
		slug: 'simulation-machine-courant-continu',
		category: 'academic',
		kind: 'coursework',
		title: 'Simulation d’une machine à courant continu',
		tagline: 'Étude de la vitesse, du courant et du comportement électromécanique.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['MATLAB', 'Simulink', 'DC Machine'],
		description:
			'Travail académique distinct de l’étude radar : modélisation d’une machine à courant continu sous Simulink. Les schémas et caractéristiques portent sur la tension, le couple, la vitesse et le courant d’induit.',
		challenges: 'Relier les grandeurs électriques et mécaniques dans un modèle de machine.',
		solutions:
			'Étude du bloc DC Machine et analyse des caractéristiques électromécaniques simulées.',
		lessons: [
			'Modélisation d’une machine électrique.',
			'Interprétation de ses grandeurs dans un environnement simulé.'
		]
	},
	{
		slug: 'erp-prelude',
		category: 'academic',
		kind: 'coursework',
		title: 'Gestion de production avec l’ERP Prélude',
		tagline: 'Articles, planification, approvisionnements et stocks.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['ERP Prélude', 'Production planning'],
		description:
			'Travaux pratiques collectifs sur un cas pédagogique de gestion de production. Les manipulations dans Prélude couvrent les données techniques, les ventes, la planification, les capacités, la fabrication et les mouvements de stock.',
		challenges: 'Relier les données d’articles aux étapes de planification et de production.',
		solutions:
			'Étude de flux et manipulations d’un ERP pédagogique pour la production et les stocks.',
		lessons: [
			'Compréhension des liens entre planification, capacité et approvisionnement.',
			'Manipulation d’un ERP dans un cadre académique.'
		]
	},
	{
		slug: 'web-mobile-cordova',
		category: 'academic',
		kind: 'coursework',
		title: 'Intégration web et exploration mobile Cordova',
		tagline: 'Site de présentation et prototype d’application hybride.',
		date: 'Travaux pratiques',
		status: 'Travaux pratiques',
		context: 'ENSEM · Travaux pratiques',
		tech: ['HTML', 'CSS', 'Apache Cordova'],
		description:
			'Travaux pratiques sur un site de présentation ENSEM en HTML/CSS, avec navigation, formulaires et mise en page responsive. Un volet distinct explore une base Apache Cordova pour Android ; il est présenté comme un prototype exploratoire.',
		challenges:
			'Structurer une interface web et découvrir son intégration dans une application hybride.',
		solutions:
			'Pages HTML/CSS, styles responsive et exploration d’une structure Cordova avec menus et plugins.',
		lessons: [
			'Structuration et adaptation d’une interface web.',
			'Distinction entre code d’interface et composants générés par une plateforme mobile.'
		]
	}
];
