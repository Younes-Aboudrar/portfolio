import type { Dictionary } from './types';

export const fr: Dictionary = {
	meta: {
		description:
			'Younes ABOUDRAR, élève ingénieur en génie électrique et systèmes numériques. Développement backend et digitalisation industrielle. PFE de six mois dès début mars 2027.'
	},
	nav: {
		about: 'À propos',
		experience: 'Expérience',
		projects: 'Projets',
		education: 'Formation',
		skills: 'Compétences',
		certifications: 'Certifications',
		contact: 'Contact',
		blog: 'Blog',
		wiki: 'Wiki',
		now: 'En ce moment',
		cv: 'CV',
		home: 'Accueil'
	},
	hero: {
		badge: 'PFE de 6 mois · Début mars 2027',
		name: 'Younes ABOUDRAR',
		headline: 'Élève ingénieur en génie électrique et systèmes numériques',
		mission:
			'Je développe des solutions logicielles pour les systèmes industriels, avec une expérience en développement backend et en gestion de la maintenance.',
		objective:
			'En troisième année à l’ENSEM Casablanca et en mobilité à l’ENSEM Nancy, je recherche un PFE de six mois à partir de début mars 2027.',
		ctaExperience: 'Voir l’expérience',
		ctaContact: 'Me contacter',
		terminalLines: [
			'Génie électrique · GE-DPI',
			'Systèmes numériques · ISN',
			'Backend · Python / FastAPI',
			'Maintenance industrielle · PostgreSQL'
		],
		terminalSummary: 'Élève ingénieur · Développement backend',
		scrollLabel: 'Découvrir'
	},
	stats: [
		{
			label: 'Année du cycle ingénieur',
			value: 3,
			suffix: 'e'
		},
		{
			label: 'Mois de PFE recherchés',
			value: 6
		},
		{
			label: 'Mois de stage chez OCP',
			value: 2
		},
		{
			label: 'Profils métiers de la GMAO testée',
			value: 6
		}
	],
	about: {
		heading: 'À propos',
		body: 'Élève ingénieur en troisième année à l’ENSEM Casablanca, je prépare le diplôme d’ingénieur d’État en génie électrique, spécialisation Digitalisation des Processus Industriels (GE-DPI). Je poursuis actuellement un semestre d’échange en Ingénierie des Systèmes Numériques (ISN) à l’ENSEM Nancy.',
		body2:
			'Lors de mon stage chez OCP en 2026, j’ai piloté un projet de GMAO et développé l’intégralité de son backend FastAPI. Cette expérience relie mes études en systèmes industriels à la conception de logiciels adaptés aux besoins de maintenance et aux contraintes de connectivité.',
		facts: [
			{
				label: 'Localisation',
				value: 'Nancy, France'
			},
			{
				label: 'Email',
				value: 'younes@aboudrar.dev'
			},
			{
				label: 'Disponibilité',
				value: 'PFE de 6 mois — début mars 2027'
			},
			{
				label: 'Domaines d’intérêt',
				value: 'Systèmes numériques, IA, cloud'
			}
		]
	},
	experience: {
		heading: 'Expérience',
		jobs: [
			{
				role: 'Stagiaire — projet de GMAO',
				company: 'OCP S.A. · Jorf Lasfar',
				date: '15 juin – 15 août 2026',
				tech: ['Python', 'FastAPI', 'PostgreSQL', 'Offline-First'],
				tasks: [
					'Pilotage du projet et développement en autonomie de l’intégralité du backend FastAPI d’une GMAO Android pour les interventions préventives et correctives ; six profils métiers dans la version testée.',
					'Accompagnement du binôme chargé de l’application Android sur les exigences et l’intégration avec le backend.',
					'Conception d’une architecture Offline-First avec synchronisation asynchrone, adaptée à une connectivité limitée.',
					'Modélisation PostgreSQL des équipements, interventions et historiques. Déploiement pour essais pendant le stage ; remise en service en préparation.'
				]
			},
			{
				role: 'Président',
				company: 'Club AéroENSEM',
				date: 'Sept. 2025 – mars 2026',
				tech: ['Leadership', 'Coordination associative', 'Communication technique'],
				tasks: [
					'Présidence du club et coordination de ses activités associatives.',
					'Préparation de la communication et d’une prise de parole pour la conférence « Les enjeux de l’aéronautique marocaine à l’horizon 2030 ».'
				]
			},
			{
				role: 'Stage à distance — IA et développement web',
				company: 'CodeAlpha',
				date: 'Juillet 2025',
				tech: ['Python', 'Flask', 'spaCy', 'JavaScript', 'Azure Translator'],
				tasks: [
					'Prototype de chatbot FAQ sous Flask, avec traitement linguistique spaCy et recherche de similarité textuelle.',
					'Projet distinct d’interface de traduction utilisant l’API Azure Translator, avec lecture vocale côté navigateur.'
				]
			}
		]
	},
	education: {
		heading: 'Formation',
		items: [
			{
				degree: 'Mobilité internationale — Ingénierie des Systèmes Numériques (ISN)',
				institution: 'ENSEM Nancy, France',
				date: '7 sept. 2026 – 26 fév. 2027',
				highlight: 'Semestre d’études S9 dans le cadre d’un échange avec l’ENSEM Casablanca.'
			},
			{
				degree: 'Diplôme d’ingénieur d’État en Génie Électrique — en préparation',
				institution: 'ENSEM Casablanca, Maroc',
				date: 'Sept. 2024 – août 2027 (fin prévue)',
				highlight:
					'Spécialisation : Génie électrique en Digitalisation des Processus Industriels (GE-DPI). Troisième année du cycle ingénieur, 2026–2027.'
			},
			{
				degree: 'Classes préparatoires MPSI / MP',
				institution: 'Lycée Reda Slaoui, Agadir',
				date: 'Sept. 2022 – juin 2024',
				highlight: 'Formation en mathématiques, physique et sciences de l’ingénieur.'
			}
		]
	},
	certifications: {
		heading: 'Certifications & Récompenses',
		items: []
	},
	projects: {
		heading: 'Projets techniques',
		subheading:
			'Une sélection de réalisations en développement backend et de travaux académiques collectifs en systèmes industriels.',
		items: [
			{
				slug: 'maintenance-manager',
				title: 'Maintenance Manager — GMAO',
				tagline:
					'Backend FastAPI et synchronisation Offline-First pour la maintenance industrielle.',
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
				]
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
					'Étude collective d’une installation CVC de 45 kW : profils de charge partielle, lois d’affinité, harmoniques et rentabilité. Les économies étudiées sont des projections théoriques sous hypothèses, sans gain d’exploitation mesuré.',
				challenges: 'Relier variation de vitesse, qualité de l’énergie et hypothèses économiques.',
				solutions:
					'Calculs fondés sur les lois d’affinité, simulation harmonique en Python et bilan technico-économique sous hypothèses.',
				lessons: [
					'Distinguer un résultat théorique d’une mesure en exploitation.',
					'Analyser ensemble les dimensions énergétique et économique.'
				]
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
				]
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
					'Étude collective d’un compresseur entraîné par un moteur asynchrone. Le travail porte sur la modélisation Simulink, la régulation PID et une configuration décrite sous TIA Portal. Il s’agit d’une étude et d’une simulation, sans mise en service matérielle revendiquée.',
				challenges: 'Étudier la réponse en pression et le réglage d’une boucle de régulation.',
				solutions:
					'Modélisation du moteur et de la pression, simulation de la boucle PID et étude du variateur SINAMICS G120.',
				lessons: [
					'Analyse d’une boucle de régulation dans un modèle simulé.',
					'Distinction entre simulation et validation sur équipement réel.'
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
				challenges:
					'Comparer le coût des solutions et le temps de calcul selon la taille du problème.',
				solutions:
					'Modélisation sous SageMath et comparaison de méthodes exactes, relaxations, heuristique gloutonne, recherche locale et algorithme génétique.',
				lessons: [
					'Prise en compte des contraintes lors de la modélisation.',
					'Comparaison expérimentale de stratégies d’optimisation.'
				]
			}
		],
		viewDetails: 'Voir les détails',
		backToProjects: 'Retour aux projets',
		github: 'Code source',
		live: 'Démo en ligne',
		techLabel: 'Technologies',
		challengesLabel: 'Défis',
		solutionsLabel: 'Solutions',
		lessonsLabel: 'Points clés',
		relatedLabel: 'Projets similaires'
	},
	skills: {
		heading: 'Compétences et domaines étudiés',
		terminalPrompt: 'younes@aboudrar: ~/competences',
		categories: [
			{
				category: 'Développement backend — stage OCP',
				items: [
					'Python',
					'FastAPI',
					'PostgreSQL',
					'Architecture Offline-First',
					'Synchronisation asynchrone'
				]
			},
			{
				category: 'Automatique et énergie — études et simulations',
				items: ['MATLAB/Simulink', 'Régulation PID', 'TIA Portal', 'Variation de vitesse']
			},
			{
				category: 'Données et optimisation — travaux académiques',
				items: [
					'Analyse exploratoire',
					'ACP / K-Means',
					'SageMath',
					'Programmation linéaire',
					'Graphes et heuristiques'
				]
			},
			{
				category: 'Systèmes et réseaux — travaux pratiques',
				items: ['Linux / Ubuntu', 'Apache', 'Packet Tracer', 'Wireshark']
			}
		]
	},
	contact: {
		heading: 'Contact',
		subheading:
			'Pour un PFE de six mois à partir de début mars 2027, ou pour échanger sur un projet, contactez-moi par email ou via ce formulaire.',
		form: {
			name: 'Nom',
			email: 'Email',
			message: 'Message',
			send: 'Envoyer',
			sending: 'Envoi...',
			success: 'Message envoyé ! Je reviendrai vers vous rapidement.',
			error: 'Une erreur est survenue. Réessayez ou écrivez-moi directement par email.'
		},
		socials: 'Retrouvez-moi'
	},
	footer: {
		tagline: 'Élève ingénieur · Systèmes numériques et digitalisation industrielle.',
		madeWith: 'Construit avec SvelteKit, Astro & Tailwind CSS.',
		backToTop: 'Haut de page'
	},
	now: {
		heading: 'En ce moment',
		subheading: 'Priorités professionnelles — octobre 2026.',
		focusTitle: 'Mes priorités',
		focus: [
			{
				title: 'Semestre d’échange à l’ENSEM Nancy',
				detail:
					'Parcours Ingénierie des Systèmes Numériques (ISN), du 7 septembre 2026 au 26 février 2027.'
			},
			{
				title: 'Recherche de PFE',
				detail:
					'Stage de fin d’études de six mois, à partir de début mars 2027. Intérêt pour les systèmes numériques, l’IA et le cloud.'
			},
			{
				title: 'Maintenance Manager',
				detail:
					'Préparation du redéploiement et de la remise en service de la GMAO développée pendant le stage OCP.'
			}
		],
		currentlyTitle: 'En bref',
		currently: [
			'Formation : troisième année du cycle ingénieur, 2026–2027',
			'Localisation : Nancy, France',
			'Disponibilité : début mars 2027, pour six mois'
		]
	},
	cv: {
		title: 'Curriculum Vitae',
		profile: 'Profil',
		contactLabel: 'Contact',
		skillsTitle: 'Compétences',
		experienceTitle: 'Expérience',
		educationTitle: 'Formation',
		projectsTitle: 'Projets',
		certificationsTitle: 'Certifications & Récompenses',
		print: 'Imprimer / PDF'
	},
	misc: {
		langName: 'EN',
		notFound: 'Page introuvable'
	},
	home: {
		heading: 'Découvrir mon parcours',
		intro: 'Retrouvez mon profil, mes expériences et mes travaux dans les rubriques ci-dessous.',
		pages: [
			{
				href: '/about',
				title: 'À propos',
				description: 'Mon profil, ma disponibilité et mes domaines d’intérêt.'
			},
			{
				href: '/experience',
				title: 'Expérience',
				description: 'Mes stages et mes contributions en développement logiciel.'
			},
			{
				href: '/projects',
				title: 'Projets',
				description: 'Une sélection de projets industriels et de travaux académiques.'
			},
			{
				href: '/education',
				title: 'Formation',
				description: 'Mon cursus à Casablanca, mon échange à Nancy et les classes préparatoires.'
			},
			{
				href: '/skills',
				title: 'Compétences',
				description: 'Les outils et méthodes pratiqués en stage et étudiés en formation.'
			},
			{
				href: '/contact',
				title: 'Contact',
				description: 'Échanger sur un PFE ou un projet professionnel.'
			}
		]
	}
};
