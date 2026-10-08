import type { Dictionary } from './types';

export const en: Dictionary = {
	meta: {
		description:
			'Younes ABOUDRAR, electrical engineering student studying digital systems. Backend development and industrial digitalization. Available for a six-month final-year internship from early March 2027.'
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
		cv: 'CV',
		home: 'Home'
	},
	hero: {
		badge: '6-month final-year internship · Early March 2027',
		name: 'Younes ABOUDRAR',
		headline: 'Electrical engineering & digital systems student',
		mission:
			'I develop software for industrial systems, with experience in backend development and maintenance management.',
		objective:
			'A third-year engineering student at ENSEM Casablanca, currently on exchange at ENSEM Nancy, I am seeking a six-month final-year internship from early March 2027.',
		ctaExperience: 'View experience',
		ctaContact: 'Contact me',
		terminalLines: [
			'Electrical engineering · GE-DPI',
			'Digital systems · ISN',
			'Backend · Python / FastAPI',
			'Industrial maintenance · PostgreSQL'
		],
		terminalSummary: 'Engineering student · Backend development',
		scrollLabel: 'Explore'
	},
	stats: [
		{
			label: 'Year of engineering studies',
			value: 3,
			suffix: 'rd'
		},
		{
			label: 'Months sought for final-year internship',
			value: 6
		},
		{
			label: 'Months of internship at OCP',
			value: 2
		},
		{
			label: 'Business roles in the tested maintenance app',
			value: 6
		}
	],
	about: {
		heading: 'About',
		body: 'I am a third-year engineering student at ENSEM Casablanca, working toward a State Engineering Degree in Electrical Engineering with a specialization in Industrial Process Digitalization (GE-DPI). I am currently on a semester exchange in Digital Systems Engineering (ISN) at ENSEM Nancy.',
		body2:
			'During my 2026 internship at OCP, I led a maintenance management application project and developed its entire FastAPI backend. This experience connects my industrial systems studies with software designed for maintenance needs and limited connectivity.',
		facts: [
			{
				label: 'Location',
				value: 'Nancy, France'
			},
			{
				label: 'Email',
				value: 'younes@aboudrar.dev'
			},
			{
				label: 'Availability',
				value: '6-month final-year internship — early March 2027'
			},
			{
				label: 'Areas of interest',
				value: 'Digital systems, AI, cloud'
			}
		]
	},
	experience: {
		heading: 'Experience',
		jobs: [
			{
				role: 'Intern — maintenance management application',
				company: 'OCP S.A. · Jorf Lasfar',
				date: '15 June – 15 August 2026',
				tech: ['Python', 'FastAPI', 'PostgreSQL', 'Offline-First'],
				tasks: [
					'Led the project and independently developed the entire FastAPI backend of an Android maintenance management app for preventive and corrective interventions, with six business roles in the tested version.',
					'Guided the teammate responsible for the Android app on requirements and backend integration.',
					'Designed an offline-first architecture with asynchronous synchronization for areas with limited connectivity.',
					'Modeled equipment, interventions and maintenance histories in PostgreSQL. Deployed for trials during the internship; restoration of the service is in preparation.'
				]
			},
			{
				role: 'President',
				company: 'AeroENSEM Club',
				date: 'Sept. 2025 – March 2026',
				tech: ['Leadership', 'Club coordination', 'Technical communication'],
				tasks: [
					'Led the club and coordinated its activities.',
					'Prepared communications and a speech for the conference on Moroccan aeronautics toward 2030.'
				]
			},
			{
				role: 'Remote internship — AI and web development',
				company: 'CodeAlpha',
				date: 'July 2025',
				tech: ['Python', 'Flask', 'spaCy', 'JavaScript', 'Azure Translator'],
				tasks: [
					'FAQ chatbot prototype using Flask, spaCy language processing and text similarity search.',
					'Separate translation interface project using the Azure Translator API, with browser-based speech synthesis.'
				]
			}
		]
	},
	education: {
		heading: 'Education',
		items: [
			{
				degree: 'International exchange — Digital Systems Engineering (ISN)',
				institution: 'ENSEM Nancy, France',
				date: '7 Sept. 2026 – 26 Feb. 2027',
				highlight: 'Semester S9 exchange with ENSEM Casablanca.'
			},
			{
				degree: 'State Engineering Degree in Electrical Engineering — in progress',
				institution: 'ENSEM Casablanca, Morocco',
				date: 'Sept. 2024 – Aug. 2027 (expected completion)',
				highlight:
					'Specialization in Industrial Process Digitalization (GE-DPI). Third year of the engineering cycle, 2026–2027.'
			},
			{
				degree: 'CPGE preparatory classes, MPSI / MP',
				institution: 'Lycée Reda Slaoui, Agadir',
				date: 'Sept. 2022 – June 2024',
				highlight: 'Studies in mathematics, physics and engineering science.'
			}
		]
	},
	certifications: {
		heading: 'Certifications & Awards',
		items: []
	},
	projects: {
		heading: 'Technical projects',
		subheading:
			'Selected backend development work and collaborative academic studies in industrial systems.',
		items: [
			{
				slug: 'maintenance-manager',
				title: 'Maintenance Manager — CMMS',
				tagline: 'FastAPI backend and offline-first synchronization for industrial maintenance.',
				date: 'June – August 2026',
				image: 'images/projects/maintenance-manager.jpg',
				status: 'Tested during internship',
				tech: ['Python', 'FastAPI', 'PostgreSQL', 'Offline-First'],
				description:
					'Developed during my OCP internship for IMACID maintenance. I led the project and independently built the entire backend. My teammate developed the Android app, with my guidance on requirements and integration. The tested version supports six business roles and preventive and corrective interventions.',
				challenges:
					'Support equipment and intervention tracking in areas with limited connectivity.',
				solutions:
					'Offline-first architecture with asynchronous synchronization and a PostgreSQL database for equipment, interventions and histories. The backend was deployed for trials during the internship; restoration of the service is in preparation.',
				lessons: [
					'Backend design based on industrial maintenance needs.',
					'Coordination of requirements and integration between the API and mobile app.'
				]
			},
			{
				slug: 'efficacite-energetique-climatisation',
				title: 'HVAC energy study',
				tagline: 'Variable speed drives, harmonic analysis and a technical-economic assessment.',
				date: 'Academic project',
				image: 'images/projects/efficacite-energetique-climatisation.jpg',
				status: 'Two-person study',
				tech: ['Python', 'NumPy', 'Matplotlib', 'Variable speed drives'],
				description:
					'Collaborative study of a 45 kW HVAC installation covering partial-load profiles, affinity laws, harmonics and economic feasibility. Energy savings are theoretical projections under stated assumptions, rather than measured operational gains.',
				challenges: 'Connect variable speed operation, power quality and economic assumptions.',
				solutions:
					'Affinity-law calculations, Python harmonic simulation and a technical-economic assessment under stated assumptions.',
				lessons: [
					'Distinguishing theoretical results from operational measurements.',
					'Considering energy use and economics together.'
				]
			},
			{
				slug: 'performance-etudiante',
				title: 'Student profile analysis',
				tagline: 'Exploratory analysis, PCA and K-Means segmentation.',
				date: 'Academic project',
				image: 'images/projects/performance-etudiante.jpg',
				status: 'Team project',
				tech: ['Data analysis', 'PCA', 'K-Means'],
				description:
					'Collaborative analysis of grades and behavioral factors. The presentation examines correlations between subjects and student profile segmentation, with possible guidance applications.',
				challenges: 'Interpret academic profiles while distinguishing correlation from causation.',
				solutions:
					'Exploratory analysis, PCA and K-Means on the first two components, presented as a team study.',
				lessons: [
					'Interpreting correlations and profile clusters.',
					'Communicating the context and limits of an analysis.'
				]
			},
			{
				slug: 'controle-vitesse-compresseur',
				title: 'Compressor control study',
				tagline: 'Simulink modeling and PID control of a variable-speed compressor.',
				date: 'Academic project',
				image: 'images/projects/controle-vitesse-compresseur.jpg',
				status: 'Study and simulation',
				tech: ['MATLAB/Simulink', 'PID', 'SINAMICS G120', 'TIA Portal'],
				description:
					'Collaborative study of a compressor driven by an induction motor. The work covers Simulink modeling, PID control and a configuration described in TIA Portal. Its scope is study and simulation, without claiming physical commissioning.',
				challenges: 'Study pressure response and control-loop tuning.',
				solutions:
					'Motor and pressure modeling, PID-loop simulation and analysis of the SINAMICS G120 drive.',
				lessons: [
					'Control-loop analysis in a simulated model.',
					'Distinguishing simulation from validation on physical equipment.'
				]
			},
			{
				slug: 'algorithmes-metaheuristiques',
				title: 'Graph optimization',
				tagline: 'Comparing exact methods, relaxations and heuristics in SageMath.',
				date: 'Practical coursework',
				image: 'images/projects/algorithmes-metaheuristiques.jpg',
				status: 'Academic work',
				tech: ['SageMath', 'LP / ILP', 'Graphs', 'Heuristics'],
				description:
					'Practical coursework on linear programming, flows, weighted vertex cover and the traveling salesman problem. The report and notebook compare approaches in an educational context.',
				challenges: 'Compare solution costs and computation time as problem size changes.',
				solutions:
					'SageMath modeling and comparisons of exact methods, relaxations, greedy heuristics, local search and a genetic algorithm.',
				lessons: [
					'Accounting for constraints in mathematical models.',
					'Experimental comparison of optimization strategies.'
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
		lessonsLabel: 'Key takeaways',
		relatedLabel: 'Related projects'
	},
	skills: {
		heading: 'Skills & areas of study',
		terminalPrompt: 'younes@aboudrar: ~/skills',
		categories: [
			{
				category: 'Backend development — OCP internship',
				items: [
					'Python',
					'FastAPI',
					'PostgreSQL',
					'Offline-first architecture',
					'Asynchronous synchronization'
				]
			},
			{
				category: 'Control and energy — studies and simulations',
				items: ['MATLAB/Simulink', 'PID control', 'TIA Portal', 'Variable speed drives']
			},
			{
				category: 'Data and optimization — academic work',
				items: [
					'Exploratory analysis',
					'PCA / K-Means',
					'SageMath',
					'Linear programming',
					'Graphs and heuristics'
				]
			},
			{
				category: 'Systems and networks — practical coursework',
				items: ['Linux / Ubuntu', 'Apache', 'Packet Tracer', 'Wireshark']
			}
		]
	},
	contact: {
		heading: 'Contact',
		subheading:
			'For a six-month final-year internship from early March 2027, or to discuss a project, contact me by email or using this form.',
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
		tagline: 'Engineering student · Digital systems and industrial digitalization.',
		madeWith: 'Built with SvelteKit, Astro & Tailwind CSS.',
		backToTop: 'Back to top'
	},
	now: {
		heading: 'Now',
		subheading: 'Professional priorities — October 2026.',
		focusTitle: 'Current priorities',
		focus: [
			{
				title: 'Exchange semester at ENSEM Nancy',
				detail: 'Digital Systems Engineering (ISN), from 7 September 2026 to 26 February 2027.'
			},
			{
				title: 'Final-year internship search',
				detail:
					'Seeking a six-month internship from early March 2027, with an interest in digital systems, AI and cloud.'
			},
			{
				title: 'Maintenance Manager',
				detail:
					'Preparing redeployment and restoration of the maintenance application developed during my OCP internship.'
			}
		],
		currentlyTitle: 'At a glance',
		currently: [
			'Studies: third year of the engineering cycle, 2026–2027',
			'Location: Nancy, France',
			'Availability: early March 2027, for six months'
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
	},
	home: {
		heading: 'Explore my work and background',
		intro: 'Find my profile, experience and selected work in the sections below.',
		pages: [
			{
				href: '/about',
				title: 'About',
				description: 'My profile, availability and areas of interest.'
			},
			{
				href: '/experience',
				title: 'Experience',
				description: 'My internships and contributions to software development.'
			},
			{
				href: '/projects',
				title: 'Projects',
				description: 'Selected industrial projects and academic studies.'
			},
			{
				href: '/education',
				title: 'Education',
				description: 'My studies in Casablanca, exchange in Nancy and preparatory classes.'
			},
			{
				href: '/skills',
				title: 'Skills',
				description: 'Tools and methods used during internships and academic work.'
			},
			{
				href: '/contact',
				title: 'Contact',
				description: 'Discuss a final-year internship or a professional project.'
			}
		]
	}
};
