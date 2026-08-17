import type { Dictionary } from './types';

export const fr: Dictionary = {
	meta: {
		description:
			"Portfolio de Younes ABOUDRAR, étudiant ingénieur en digitalisation des processus industriels et développeur logiciel."
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
		now: 'Now',
		cv: 'CV'
	},
	hero: {
		badge: 'Système en ligne. Prêt pour déploiement.',
		name: 'Younes ABOUDRAR',
		headline:
			'Étudiant Ingénieur en Digitalisation des Processus Industriels',
		mission:
			"Je combine une approche rationnelle de l'ingénierie électrique avec une maîtrise avancée des outils numériques et de l'intelligence artificielle.",
		objective:
			"Axé sur la précision et l'optimisation, je conçois des solutions techniques fiables pour l'industrie et recherche un stage technique pour les mettre en pratique.",
		ctaExperience: 'Voir l’expérience',
		ctaContact: 'Me contacter'
	},
	stats: [
		{ label: 'Projets réalisés', value: 4 },
		{ label: 'Compétences techniques', value: 21 },
		{ label: 'Langues parlées', value: 3 },
		{ label: "Années d'ingénierie", value: 4 }
	],
	about: {
		heading: 'À propos de moi',
		body: "Étudiant en 2ème année d'ingénierie à l'ENSEM, je me spécialise dans la digitalisation des processus industriels : automatisation, systèmes embarqués, efficacité énergétique et analyse de données. Classé 3ème de ma promotion en 1ère année.",
		body2: "En parallèle de mes études, je préside le Club AéroENSEM, je développe des outils logiciels en Rust, Go, Python et TypeScript, et je construis mon identité numérique complète : un portfolio, un wiki personnel pour structurer mes connaissances, et un blog où je documente publiquement mon chemin vers l'indépendance financière.",
		facts: [
			{ label: 'Localisation', value: 'Casablanca, Maroc' },
			{ label: 'Email', value: 'younes@aboudrar.dev' },
			{ label: 'Disponibilité', value: 'Stage technique — 2026' },
			{ label: 'Centres d’intérêt', value: 'Automatisation, IA, Linux, Dev' }
		]
	},
	experience: {
		heading: 'Expérience',
		jobs: [
			{
				role: 'Président',
				company: 'Club AéroENSEM',
				date: 'Sept. 2025 - Présent',
				tech: ['Leadership', 'Gestion de projet', 'Arduino'],
				tasks: [
					'Direction du bureau et organisation de la conférence "L\'Aéronautique Marocaine 2030".',
					'Obtention de la 3ème place à la compétition "Mouse Maze" (Arduino).'
				]
			},
			{
				role: 'Stagiaire (Stage d\'Initiation)',
				company: 'CodeAlpha (Distanciel)',
				date: 'Juillet 2025',
				tech: ['Python', 'Flask', 'SpaCy', 'scikit-learn'],
				tasks: [
					"Conception d'un agent conversationnel contextuel en Python, Flask, SpaCy et scikit-learn pour la reconnaissance d'intention.",
					"Développement d'une interface web intégrant l'API Azure Translator pour la traduction et synthèse vocale temps réel."
				]
			}
		]
	},
	education: {
		heading: 'Formation',
		items: [
			{
				degree:
					"Diplôme d'Ingénieur d'État (en cours) — Digitalisation des Processus Industriels",
				institution: 'ENSEM, Casablanca',
				date: 'Sept. 2024 - Présent',
				highlight:
					'Classé 3ème de la promotion (1ère année). Modules clés : Automatisme, Efficacité Énergétique, Systèmes Embarqués, Recherche Opérationnelle.'
			},
			{
				degree: 'Classes Préparatoires aux Grandes Écoles (CPGE), Filière MPSI / MP',
				institution: 'Lycée Reda Slaoui, Agadir',
				date: 'Sept. 2022 - Juin 2024',
				highlight: 'Formation intensive en mathématiques et physique.'
			}
		]
	},
	certifications: {
		heading: 'Certifications & Récompenses',
		items: [
			{
				title: '3ème place — Compétition "Mouse Maze" (Arduino)',
				issuer: 'Club AéroENSEM',
				date: '2025'
			},
			{
				title: 'Stage d\'initiation — Développement IA & Web',
				issuer: 'CodeAlpha',
				date: 'Juillet 2025'
			},
			{
				title: '3ème de la promotion (1ère année du cycle d\'ingénieur)',
				issuer: 'ENSEM',
				date: '2024 - 2025'
			}
		]
	},
	projects: {
		heading: 'Projets techniques',
		subheading:
			'Des projets académiques et personnels qui illustrent mon approche de résolution de problèmes.',
		items: [
			{
				slug: 'efficacite-energetique-climatisation',
				title: 'Efficacité Énergétique Climatisation',
				tagline:
					'Analyse par variateur de vitesse et optimisation de la consommation d\'énergie.',
				date: '2025',
				image: 'images/projects/efficacite-energetique-climatisation.jpg',
				status: 'Terminé',
				tech: ['Matlab/Simulink', 'Variateur de vitesse', 'Qualité d\'énergie'],
				description:
					"Projet de binôme portant sur l'étude de la climatisation d'un bâtiment industriel. Analyse de la consommation à l'aide d'un variateur de vitesse et étude de la qualité de l'énergie.",
				challenges:
					'Modéliser la consommation réelle sur un système où plusieurs paramètres (charge, régime, qualité réseau) interagissent simultanément.',
				solutions:
					'Réalisation d\'une modélisation sous Matlab/Simulink couplée à une campagne de mesures, aboutissant à un plan d\'optimisation énergétique chiffré.',
				lessons: [
					'Maîtrise des variateurs de vitesse et de leur impact sur la qualité d\'énergie.',
					'Importance de la rigueur méthodologique dans l\'analyse énergétique.'
				]
			},
			{
				slug: 'performance-etudiante',
				title: 'Performance Étudiante — Data Science',
				tagline:
					"Système d'aide à l'orientation fondé sur l'analyse de données académiques.",
				date: '2025',
				image: 'images/projects/performance-etudiante.jpg',
				status: 'Terminé',
				tech: ['Python', 'pandas', 'scikit-learn', 'Corrélation'],
				description:
					"Projet de trinôme : développement d'un système d'aide à l'orientation basé sur l'analyse de données avec des algorithmes de corrélation entre résultats académiques et profils étudiants.",
				challenges:
					'Extraire des corrélations signifiantes d\'un jeu de données bruité et hétérogène.',
				solutions:
					'Pipeline de nettoyage et normalisation, puis calcul de corrélations interprétées pour alimenter un outil d\'orientation.',
				lessons: [
					'Cycle complet d\'un projet data : collecte, nettoyage, analyse, restitution.',
					'Travail d\'équipe et communication des résultats à un public non technique.'
				]
			},
			{
				slug: 'controle-vitesse-compresseur',
				title: 'Contrôle de Vitesse Compresseur',
				tagline: 'Pilotage d\'un variateur SINAMICS G120 via TIA Portal.',
				date: '2024',
				image: 'images/projects/controle-vitesse-compresseur.jpg',
				status: 'Terminé',
				tech: ['TIA Portal', 'SINAMICS G120', 'Automate Siemens'],
				description:
					"Projet de trinôme d'automatisation industrielle : pilotage d'un variateur de vitesse SINAMICS G120 pour un compresseur, programmé sous TIA Portal.",
				challenges:
					'Configurer correctement le paramétrage du variateur et la communication avec l\'automate.',
				solutions:
					'Mise en œuvre d\'une chaîne de régulation complète : programme automate, paramétrage variateur et supervision.',
				lessons: [
					'Fondamentaux de l\'automatisation Siemens (TIA Portal).',
					'Connexion entre automate et variateur dans un environnement industriel réel.'
				]
			},
			{
				slug: 'algorithmes-metaheuristiques',
				title: 'Algorithmes & Méta-heuristiques',
				tagline: 'Implémentation d\'algorithmes constructifs pour l\'optimisation complexe.',
				date: '2024',
				image: 'images/projects/algorithmes-metaheuristiques.jpg',
				status: 'Terminé',
				tech: ['Python', 'Optimisation', 'Méta-heuristiques'],
				description:
					"Projet de trinôme : implémentation d'algorithmes constructifs pour résoudre des problèmes d'optimisation combinatoire complexes, en lien avec la recherche opérationnelle.",
				challenges:
					'Équilibre entre qualité de la solution et temps de calcul sur des instances de grande taille.',
				solutions:
					'Conception et comparaison de plusieurs heuristiques constructives avec analyse expérimentale des performances.',
				lessons: [
					'Conception d\'algorithmes d\'optimisation et analyse de complexité.',
					'Validation expérimentale et comparaison de stratégies.'
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
		lessonsLabel: 'Ce que j\'ai appris',
		relatedLabel: 'Projets similaires'
	},
	skills: {
		heading: 'Arsenal technique',
		terminalPrompt: 'younes@aboudrar: ~/arsenal',
		categories: [
			{ category: 'Ingénierie', items: ['TIA Portal', 'Matlab/Simulink', 'PV-Sol', 'PVSys', 'Carrier HAP', 'Arduino', 'VHDL'] },
			{ category: 'Dev & Scripting', items: ['Python', 'Rust', 'Go', 'C/C++', 'TypeScript', 'Assembly', 'Android Studio'] },
			{ category: 'Outils & OS', items: ['Linux (Arch)', 'Docker', 'VS Code', 'Neovim', 'Git', 'LaTeX', 'MS Office'] },
			{ category: 'Langues', items: ['Français (Courant)', 'Anglais (Technique)', 'Arabe (Natif)'] }
		]
	},
	contact: {
		heading: 'Contact',
		subheading:
			'Vous avez un projet, un stage, ou une opportunité ? Écrivez-moi, je réponds rapidement.',
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
		tagline: 'Ingénieur en devenir — Développeur & bâtisseur.',
		madeWith: 'Construit avec SvelteKit, Astro & Tailwind CSS.',
		backToTop: 'Haut de page'
	},
	now: {
		heading: 'Now',
		subheading: 'Ce sur quoi je travaille actuellement — mis à jour régulièrement.',
		focusTitle: 'Focalisé sur',
		focus: [
			{
				title: 'Présidence du Club AéroENSEM',
				detail: 'Organisation de la conférence "L\'Aéronautique Marocaine 2030" et animation du club.'
			},
			{
				title: 'Identité numérique aboudrar.dev',
				detail: 'Ce portfolio, mon wiki personnel (abwiki) et mon blog (blog) : mon second cerveau en ligne.'
			},
			{
				title: 'Automatisation & IA',
				detail: 'Approfondissement de TIA Portal, des systèmes embarqués et de l\'intelligence artificielle.'
			}
		],
		currentlyTitle: 'Actuellement',
		currently: [
			'Lecture : documentation Rust & systèmes embarqués',
			'Projet : site complet aboudrar.dev (portfolio + wiki + blog)',
			'Recherche : stage technique pour 2026'
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
	}
};
