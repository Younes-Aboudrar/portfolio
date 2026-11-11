import type { SkillCategory } from '../i18n/types';

export const skillsFr: SkillCategory[] = [
	{
		"id": "programming",
		"category": "Programmation et outils",
		"context": "Langages, scripts et outils de développement.",
		"items": [
			"Python",
			"C",
			"R",
			"JavaScript",
			"TypeScript",
			"C++",
			"Go",
			"Rust",
			"Bash / scripts shell",
			"PowerShell",
			"Git",
			"LaTeX"
		],
		"projectSlugs": [
			"algorithmique-c",
			"statistiques-r",
			"portfolio-sveltekit",
			"maintenance-manager"
		]
	},
	{
		"id": "backend",
		"category": "Backend et API",
		"context": "Services web, intégration et architectures de synchronisation.",
		"items": [
			"FastAPI",
			"Flask",
			"Intégration d’API HTTP",
			"Architecture Offline-First",
			"Synchronisation asynchrone",
			"Node.js",
			"Express",
			"Django",
			"Spring Boot",
			"Conception d’API REST",
			"GraphQL",
			"WebSockets",
			"OAuth / JWT",
			"OpenAPI / Swagger"
		],
		"projectSlugs": [
			"maintenance-manager",
			"chatbot-faq",
			"interface-traduction"
		]
	},
	{
		"id": "databases",
		"category": "Bases de données",
		"context": "Modélisation, requêtes, accès aux données et migrations.",
		"items": [
			"PostgreSQL",
			"Modélisation de données relationnelles",
			"Requêtes SQL",
			"Migrations de bases de données",
			"ORM / SQLAlchemy",
			"SQLite",
			"MySQL",
			"MongoDB"
		],
		"projectSlugs": [
			"maintenance-manager"
		]
	},
	{
		"id": "web",
		"category": "Web et interfaces",
		"context": "Interfaces web, conception visuelle et publication de sites.",
		"items": [
			"HTML",
			"CSS",
			"SvelteKit",
			"Tailwind CSS",
			"Interfaces responsive",
			"Sites bilingues",
			"Génération de sites statiques",
			"Synthèse vocale dans le navigateur",
			"React",
			"Vue",
			"Angular",
			"Conception UI/UX",
			"Figma"
		],
		"projectSlugs": [
			"portfolio-sveltekit",
			"interface-traduction",
			"web-mobile-cordova"
		]
	},
	{
		"id": "mobile",
		"category": "Développement mobile",
		"context": "Applications Android, Flutter et interfaces hybrides.",
		"items": [
			"Apache Cordova — prototype",
			"Android / Kotlin",
			"Flutter / Dart"
		],
		"projectSlugs": [
			"web-mobile-cordova"
		]
	},
	{
		"id": "testing",
		"category": "Tests et validation logicielle",
		"context": "Tests automatisés et vérification des intégrations.",
		"items": [
			"Tests automatisés / pytest",
			"Tests unitaires et d’intégration",
			"Postman"
		],
		"projectSlugs": []
	},
	{
		"id": "data",
		"category": "Analyse et préparation de données",
		"context": "Préparation, analyse, restitution et exploitation de données.",
		"items": [
			"pandas",
			"NumPy",
			"Matplotlib",
			"Analyse exploratoire",
			"Statistiques descriptives",
			"Visualisation de données",
			"Imputation des valeurs manquantes",
			"Encodage et standardisation",
			"Agrégations temporelles",
			"Variables retardées et fenêtres glissantes",
			"Analyse de corrélations",
			"Analyse de données en SQL",
			"Power BI",
			"Excel avancé",
			"ETL / pipelines de données",
			"Prévision de séries temporelles",
			"Plans d’expériences et tests statistiques"
		],
		"projectSlugs": [
			"pfa-qualite-industrielle-iot",
			"performance-etudiante",
			"segmentation-marketing",
			"statistiques-r",
			"efficacite-energetique-climatisation"
		]
	},
	{
		"id": "ai",
		"category": "Machine learning et traitement du langage",
		"context": "Apprentissage automatique, traitement du langage et intégration de modèles.",
		"items": [
			"scikit-learn",
			"K-Means",
			"ACP / PCA",
			"Régression logistique",
			"Random Forest",
			"Comparaison de modèles de régression",
			"Métriques de classification",
			"Déséquilibre des classes",
			"Matrices de confusion",
			"TensorFlow",
			"Keras",
			"ANN / RNN / LSTM",
			"Estimation de durée de vie résiduelle",
			"spaCy",
			"TF-IDF",
			"Normalisation et similarité textuelles",
			"Azure Translator",
			"PyTorch",
			"OpenCV / vision par ordinateur",
			"XGBoost",
			"Hugging Face / Transformers",
			"API de LLM",
			"RAG / bases de données vectorielles",
			"Agents IA et automatisation de workflows",
			"Déploiement ML / MLOps"
		],
		"projectSlugs": [
			"segmentation-marketing",
			"performance-etudiante",
			"reseaux-neurones-maintenance",
			"chatbot-faq",
			"interface-traduction",
			"pfa-qualite-industrielle-iot"
		]
	},
	{
		"id": "optimization",
		"category": "Algorithmique et optimisation",
		"context": "Programmation et recherche opérationnelle dans un cadre académique.",
		"items": [
			"SageMath",
			"Fonctions, tableaux et matrices",
			"Récursivité",
			"Programmation linéaire et en nombres entiers",
			"Simplexe et dualité",
			"Modélisation sous contraintes",
			"Flots et couverture de sommets",
			"Voyageur de commerce",
			"Heuristiques gloutonnes",
			"Recherche locale",
			"Algorithmes génétiques",
			"Comparaison du coût et du temps de calcul"
		],
		"projectSlugs": [
			"algorithmique-c",
			"algorithmes-metaheuristiques",
			"planification-production"
		]
	},
	{
		"id": "automation",
		"category": "Automatique et supervision",
		"context": "Automatisation, commande, supervision et réseaux industriels.",
		"items": [
			"MATLAB",
			"Simulink",
			"Régulation PID",
			"TIA Portal",
			"SINAMICS G120",
			"Siemens S7-1200",
			"GRAFCET",
			"WinCC",
			"Séquences et temporisations",
			"Interfaces homme-machine (IHM)",
			"Analyse temporelle et fréquentielle",
			"Marges de gain et de phase",
			"Correction proportionnelle",
			"Scripts MATLAB",
			"Modbus",
			"OPC UA",
			"Programmation Ladder",
			"Structured Text",
			"Siemens S7-1500",
			"SCADA",
			"Instrumentation industrielle",
			"Mise en service de variateurs",
			"Robotique / ROS"
		],
		"projectSlugs": [
			"controle-vitesse-compresseur",
			"automates-chariots-ascenseur",
			"asservissement-antenne-radar"
		]
	},
	{
		"id": "iot",
		"category": "IoT et systèmes cyber-physiques",
		"context": "Prototypes de supervision et modélisation académique.",
		"items": [
			"MQTT",
			"Redis",
			"Streamlit",
			"Modélisation thermique",
			"Machines à états (FSM)",
			"Discrétisation d’Euler",
			"Modélisation hybride continue/discrète",
			"Scénarios de défaut et de récupération"
		],
		"projectSlugs": [
			"pfa-qualite-industrielle-iot",
			"cps-thermique"
		]
	},
	{
		"id": "electronics",
		"category": "Électronique et systèmes embarqués",
		"context": "Électronique, programmation embarquée et descriptions matérielles.",
		"items": [
			"VHDL",
			"Xilinx ISE",
			"Testbenches et chronogrammes",
			"Synthèse et simulation logiques",
			"8051",
			"Assembleur",
			"Conversion numérique-analogique (DAC)",
			"Génération de signaux",
			"Filtres actifs et oscillateurs",
			"Logique combinatoire",
			"Algèbre de Boole et tables de vérité",
			"Simplification de Karnaugh",
			"Arduino",
			"ESP32",
			"STM32",
			"Raspberry Pi",
			"C/C++ embarqué",
			"FreeRTOS",
			"Proteus",
			"Bus CAN",
			"UART / I²C / SPI"
		],
		"projectSlugs": [
			"circuits-vhdl",
			"microcontroleur-8051",
			"electronique-analogique-numerique"
		]
	},
	{
		"id": "energy",
		"category": "Énergie et machines électriques",
		"context": "Études théoriques, présentations et simulations académiques.",
		"items": [
			"Analyse énergétique CVC",
			"Variation de vitesse",
			"Lois d’affinité",
			"Analyse harmonique",
			"Bilan technico-économique",
			"Photovoltaïque",
			"PV*SOL — étude des fonctionnalités",
			"Dimensionnement, composants et ombrage PV",
			"Modélisation de machines à courant continu",
			"Étude de moteurs asynchrones"
		],
		"projectSlugs": [
			"efficacite-energetique-climatisation",
			"presentation-photovoltaique",
			"simulation-machine-courant-continu",
			"controle-vitesse-compresseur"
		]
	},
	{
		"id": "hosting",
		"category": "Linux et auto-hébergement",
		"context": "Systèmes, virtualisation et administration de services.",
		"items": [
			"Linux / Ubuntu",
			"Ubuntu Server",
			"Docker",
			"Plane",
			"Ente",
			"VirtualBox",
			"Apache",
			"VirtualHost",
			"UFW",
			"apt / systemctl",
			"Fichiers, répertoires et liens Linux",
			"Déploiement de services auto-hébergés",
			"Configuration des accès distants",
			"Docker Compose",
			"Nginx / reverse proxies",
			"Proxmox",
			"Windows Server / Active Directory"
		],
		"projectSlugs": [
			"autohebergement-plane",
			"autohebergement-ente",
			"linux-apache"
		]
	},
	{
		"id": "cloud",
		"category": "Cloud, déploiement et sécurité",
		"context": "Déploiement de services, accès distants et exploitation.",
		"items": [
			"GitHub Pages",
			"Cloudflare Zero Trust",
			"Kubernetes",
			"Microsoft Azure",
			"Google Cloud",
			"CI/CD",
			"GitHub Actions",
			"DNS / certificats TLS",
			"SSH",
			"VPN",
			"Sauvegardes et reprise après incident",
			"Supervision et journalisation",
			"Prometheus / Grafana",
			"Durcissement de sécurité"
		],
		"projectSlugs": [
			"autohebergement-plane",
			"autohebergement-ente",
			"portfolio-sveltekit"
		]
	},
	{
		"id": "networks",
		"category": "Réseaux et diagnostic",
		"context": "Analyse de captures et configuration de topologies simulées.",
		"items": [
			"Wireshark",
			"Cisco Packet Tracer",
			"Adressage IP",
			"DHCP",
			"DNS",
			"ARP",
			"ICMP",
			"UDP",
			"ping / tracert",
			"Routage statique",
			"RIP v2",
			"Analyse de paquets"
		],
		"projectSlugs": [
			"diagnostic-reseaux-ip"
		]
	},
	{
		"id": "industry",
		"category": "Maintenance et gestion industrielle",
		"context": "Maintenance, fiabilité, conception et organisation industrielle.",
		"items": [
			"Modélisation de processus de GMAO",
			"Suivi des interventions préventives et correctives",
			"GRIF",
			"Loi de Weibull",
			"Blocs de fiabilité",
			"Arbres de défaillance",
			"Analyse de disponibilité",
			"ERP Prélude",
			"Planification de production",
			"Capacités et approvisionnements",
			"Gestion des stocks",
			"SolidWorks / AutoCAD",
			"Lean / Six Sigma",
			"AMDEC / FMEA",
			"Analyse des causes racines",
			"Maintenance préventive et prédictive",
			"Budgétisation et estimation des coûts",
			"Achats et approvisionnements"
		],
		"projectSlugs": [
			"maintenance-manager",
			"fiabilite-disponibilite-grif",
			"erp-prelude",
			"planification-production"
		]
	},
	{
		"id": "collaboration",
		"category": "Coordination et communication",
		"context": "Gestion de projet, travail collectif et communication.",
		"items": [
			"Pilotage de projet",
			"Coordination des exigences et de l’intégration",
			"Accompagnement technique d’un binôme",
			"Leadership associatif",
			"Coordination d’activités",
			"Communication technique",
			"Préparation de prises de parole",
			"Travail en équipe",
			"Présentation et interprétation de résultats",
			"Planification de projet",
			"Agile / Scrum / Kanban",
			"Documentation technique",
			"Analyse des exigences",
			"Négociation",
			"Mentorat et formation",
			"Prise de parole en public"
		],
		"projectSlugs": [
			"maintenance-manager",
			"presentation-photovoltaique",
			"performance-etudiante"
		],
		"journeyIds": [
			"ocp",
			"aeroensem"
		]
	},
	{
		"id": "foundations",
		"category": "Fondamentaux scientifiques",
		"context": "Classes préparatoires MPSI/MP et cycle ingénieur.",
		"items": [
			"Mathématiques",
			"Physique",
			"Sciences de l’ingénieur",
			"Génie électrique",
			"Systèmes numériques",
			"Digitalisation des processus industriels"
		],
		"projectSlugs": [],
		"journeyIds": [
			"cpge-reda-slaoui",
			"ensem-casablanca",
			"ensem-nancy"
		]
	},
	{
		"id": "languages",
		"category": "Langues",
		"context": "Langues de communication.",
		"items": [
			"Arabe",
			"Français",
			"Anglais",
			"Amazigh"
		],
		"projectSlugs": []
	}
];
