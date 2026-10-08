import type { Dictionary } from './types';
import { projectsFr } from '../projects/fr';

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
			'Mes projets regroupés par contexte : stages, présidence AéroENSEM, formation académique et développement personnel.',
		items: projectsFr,
		viewDetails: 'Voir les détails',
		backToProjects: 'Retour aux projets',
		github: 'Code source',
		live: 'Démo en ligne',
		techLabel: 'Technologies',
		challengesLabel: 'Défis',
		solutionsLabel: 'Solutions',
		lessonsLabel: 'Points clés',
		relatedLabel: 'Projets similaires',
		categories: [
			{
				id: 'internships',
				title: 'Projets en stage',
				description:
					'Maintenance Manager chez OCP, interface de traduction et chatbot FAQ chez CodeAlpha.'
			},
			{
				id: 'aeroensem',
				title: 'Présidence AéroENSEM',
				description:
					'Communication technique, site du club et automatisations associatives pendant mon mandat.'
			},
			{
				id: 'academic',
				title: 'Projets académiques',
				description:
					'PFA, études industrielles, projets de données et travaux pratiques, avec leur contexte pédagogique.'
			},
			{
				id: 'personal',
				title: 'Projets personnels',
				description: 'Développement et évolution de mon portfolio professionnel.'
			}
		],
		allCategories: 'Toutes les catégories',
		academicProjects: 'Projets et études',
		coursework: 'Travaux pratiques',
		projectSingular: 'projet',
		projectPlural: 'projets'
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
		projectsTitle: 'Projets sélectionnés',
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
				description: 'Projets en stage, pendant la présidence AéroENSEM, académiques et personnels.'
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
