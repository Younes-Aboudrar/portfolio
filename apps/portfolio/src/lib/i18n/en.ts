import type { Dictionary } from './types';

export const en: Dictionary = {
	meta: {
		description:
			"Portfolio of Younes ABOUDRAR, engineering student in industrial process digitalization and software developer."
	},
	nav: {
		about: 'About',
		experience: 'Experience',
		projects: 'Projects',
		education: 'Education',
		skills: 'Skills',
		certifications: 'Certifications',
		contact: 'Contact',
		blog: 'Blog',
		wiki: 'Wiki',
		now: 'Now',
		cv: 'CV'
	},
	hero: {
		badge: 'System online. Ready for deployment.',
		name: 'Younes ABOUDRAR',
		headline: 'Engineering Student in Industrial Process Digitalization',
		mission:
			'I combine a rational approach to electrical engineering with an advanced command of digital tools and artificial intelligence.',
		objective:
			'Focused on precision and optimization, I build reliable technical solutions for industry and am looking for a technical internship to put them into practice.',
		ctaExperience: 'View experience',
		ctaContact: 'Contact me'
	},
	stats: [
		{ label: 'Projects completed', value: 4 },
		{ label: 'Technical skills', value: 21 },
		{ label: 'Languages spoken', value: 3 },
		{ label: 'Years of engineering', value: 4 }
	],
	about: {
		heading: 'About me',
		body: "Second-year engineering student at ENSEM, specializing in industrial process digitalization: automation, embedded systems, energy efficiency and data analysis. Ranked 3rd in my class during my first year.",
		body2: "Alongside my studies, I preside over the AeroENSEM Club, build software tools in Rust, Go, Python and TypeScript, and I'm constructing my full digital identity: a portfolio, a personal wiki to structure my knowledge, and a blog where I publicly document my path toward financial independence.",
		facts: [
			{ label: 'Location', value: 'Casablanca, Morocco' },
			{ label: 'Email', value: 'younes@aboudrar.dev' },
			{ label: 'Availability', value: 'Technical internship — 2026' },
			{ label: 'Interests', value: 'Automation, AI, Linux, Dev' }
		]
	},
	experience: {
		heading: 'Experience',
		jobs: [
			{
				role: 'President',
				company: 'AeroENSEM Club',
				date: 'Sept. 2025 - Present',
				tech: ['Leadership', 'Project management', 'Arduino'],
				tasks: [
					'Led the board and organized the conference "Moroccan Aeronautics 2030".',
					'Achieved 3rd place at the "Mouse Maze" (Arduino) competition.'
				]
			},
			{
				role: 'Intern (Initiation Internship)',
				company: 'CodeAlpha (Remote)',
				date: 'July 2025',
				tech: ['Python', 'Flask', 'SpaCy', 'scikit-learn'],
				tasks: [
					'Designed a contextual chatbot in Python, Flask, SpaCy and scikit-learn for intent recognition.',
					'Built a web interface integrating the Azure Translator API for real-time translation and speech synthesis.'
				]
			}
		]
	},
	education: {
		heading: 'Education',
		items: [
			{
				degree:
					'State Engineering Degree (in progress) — Industrial Process Digitalization',
				institution: 'ENSEM, Casablanca',
				date: 'Sept. 2024 - Present',
				highlight:
					'Ranked 3rd in my class (1st year). Key modules: Automation, Energy Efficiency, Embedded Systems, Operations Research.'
			},
			{
				degree: 'CPGE Preparatory Classes, MPSI / MP track',
				institution: 'Lycée Reda Slaoui, Agadir',
				date: 'Sept. 2022 - June 2024',
				highlight: 'Intensive training in mathematics and physics.'
			}
		]
	},
	certifications: {
		heading: 'Certifications & Awards',
		items: [
			{
				title: '3rd place — "Mouse Maze" Competition (Arduino)',
				issuer: 'AeroENSEM Club',
				date: '2025'
			},
			{
				title: 'Initiation internship — AI & Web Development',
				issuer: 'CodeAlpha',
				date: 'July 2025'
			},
			{
				title: "3rd in class (1st year of the engineering cycle)",
				issuer: 'ENSEM',
				date: '2024 - 2025'
			}
		]
	},
	projects: {
		heading: 'Technical projects',
		subheading:
			'Academic and personal projects that illustrate my approach to problem solving.',
		items: [
			{
				slug: 'efficacite-energetique-climatisation',
				title: 'Air Conditioning Energy Efficiency',
				tagline: 'Variable speed drive analysis and energy consumption optimization.',
				date: '2025',
				image: 'images/projects/efficacite-energetique-climatisation.jpg',
				status: 'Completed',
				tech: ['Matlab/Simulink', 'Variable speed drive', 'Power quality'],
				description:
					"Two-person project studying the air conditioning of an industrial building. Consumption analysis using a variable speed drive and a power quality study.",
				challenges:
					'Modeling real consumption on a system where several parameters (load, regime, grid quality) interact simultaneously.',
				solutions:
					'Matlab/Simulink modeling combined with a measurement campaign, resulting in a quantified energy optimization plan.',
				lessons: [
					'Mastery of variable speed drives and their impact on power quality.',
					'The importance of methodological rigor in energy analysis.'
				]
			},
			{
				slug: 'performance-etudiante',
				title: 'Student Performance — Data Science',
				tagline: 'A guidance tool built on academic data analysis.',
				date: '2025',
				image: 'images/projects/performance-etudiante.jpg',
				status: 'Completed',
				tech: ['Python', 'pandas', 'scikit-learn', 'Correlation'],
				description:
					"Three-person project: a student guidance system based on data analysis with correlation algorithms between academic results and student profiles.",
				challenges:
					'Extracting meaningful correlations from a noisy and heterogeneous dataset.',
				solutions:
					'Cleaning and normalization pipeline, then correlation analysis interpreted to power a guidance tool.',
				lessons: [
					'Full data project lifecycle: collection, cleaning, analysis, reporting.',
					'Teamwork and communicating results to a non-technical audience.'
				]
			},
			{
				slug: 'controle-vitesse-compresseur',
				title: 'Compressor Speed Control',
				tagline: 'Driving a SINAMICS G120 variable speed drive via TIA Portal.',
				date: '2024',
				image: 'images/projects/controle-vitesse-compresseur.jpg',
				status: 'Completed',
				tech: ['TIA Portal', 'SINAMICS G120', 'Siemens PLC'],
				description:
					"Three-person industrial automation project: controlling a SINAMICS G120 variable speed drive for a compressor, programmed under TIA Portal.",
				challenges:
					'Correctly configuring the drive parameters and the communication with the PLC.',
				solutions:
					'Complete regulation chain: PLC program, drive configuration and supervision.',
				lessons: [
					'Fundamentals of Siemens automation (TIA Portal).',
					'Connecting a PLC and a drive in a real industrial environment.'
				]
			},
			{
				slug: 'algorithmes-metaheuristiques',
				title: 'Algorithms & Meta-heuristics',
				tagline: 'Implementing constructive algorithms for complex optimization.',
				date: '2024',
				image: 'images/projects/algorithmes-metaheuristiques.jpg',
				status: 'Completed',
				tech: ['Python', 'Optimization', 'Meta-heuristics'],
				description:
					"Three-person project: implementing constructive algorithms to solve complex combinatorial optimization problems, connected to operations research.",
				challenges:
					'Balancing solution quality and computation time on large instances.',
				solutions:
					'Design and comparison of several constructive heuristics with experimental performance analysis.',
				lessons: [
					'Design of optimization algorithms and complexity analysis.',
					'Experimental validation and strategy comparison.'
				]
			}
		],
		viewDetails: 'View details',
		backToProjects: 'Back to projects',
		github: 'Source code',
		live: 'Live demo',
		techLabel: 'Technologies',
		challengesLabel: 'Challenges',
		solutionsLabel: 'Solutions',
		lessonsLabel: 'What I learned',
		relatedLabel: 'Related projects'
	},
	skills: {
		heading: 'Technical arsenal',
		terminalPrompt: 'younes@aboudrar: ~/arsenal',
		categories: [
			{ category: 'Engineering', items: ['TIA Portal', 'Matlab/Simulink', 'PV-Sol', 'PVSys', 'Carrier HAP', 'Arduino', 'VHDL'] },
			{ category: 'Dev & Scripting', items: ['Python', 'Rust', 'Go', 'C/C++', 'TypeScript', 'Assembly', 'Android Studio'] },
			{ category: 'Tools & OS', items: ['Linux (Arch)', 'Docker', 'VS Code', 'Neovim', 'Git', 'LaTeX', 'MS Office'] },
			{ category: 'Languages', items: ['French (Fluent)', 'English (Technical)', 'Arabic (Native)'] }
		]
	},
	contact: {
		heading: 'Contact',
		subheading:
			'Got a project, an internship, or an opportunity? Write to me, I reply fast.',
		form: {
			name: 'Name',
			email: 'Email',
			message: 'Message',
			send: 'Send',
			sending: 'Sending...',
			success: 'Message sent! I will get back to you shortly.',
			error: 'Something went wrong. Try again or email me directly.'
		},
		socials: 'Find me on'
	},
	footer: {
		tagline: 'Engineer in the making — Developer & builder.',
		madeWith: 'Built with SvelteKit, Astro & Tailwind CSS.',
		backToTop: 'Back to top'
	},
	now: {
		heading: 'Now',
		subheading: 'What I am currently working on — updated regularly.',
		focusTitle: 'Focused on',
		focus: [
			{
				title: 'Presidency of the AeroENSEM Club',
				detail: 'Organizing the "Moroccan Aeronautics 2030" conference and running the club.'
			},
			{
				title: 'aboudrar.dev digital identity',
				detail: 'This portfolio, my personal wiki (abwiki) and my blog: my online second brain.'
			},
			{
				title: 'Automation & AI',
				detail: 'Deepening TIA Portal, embedded systems and artificial intelligence.'
			}
		],
		currentlyTitle: 'Currently',
		currently: [
			'Reading: Rust documentation & embedded systems',
			'Project: full aboudrar.dev website (portfolio + wiki + blog)',
			'Looking for: a technical internship for 2026'
		]
	},
	cv: {
		title: 'Curriculum Vitae',
		profile: 'Profile',
		contactLabel: 'Contact',
		skillsTitle: 'Skills',
		experienceTitle: 'Experience',
		educationTitle: 'Education',
		projectsTitle: 'Projects',
		certificationsTitle: 'Certifications & Awards',
		print: 'Print / PDF'
	},
	misc: {
		langName: 'FR',
		notFound: 'Page not found'
	}
};
