import type { Dictionary } from './types';
import { projectsEn } from '../projects/en';

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
			'My projects grouped by context: internships, AeroENSEM presidency, academic work and personal development.',
		items: projectsEn,
		viewDetails: 'View details',
		backToProjects: 'Back to projects',
		github: 'Source code',
		live: 'Live demo',
		techLabel: 'Technologies',
		challengesLabel: 'Challenges',
		solutionsLabel: 'Solutions',
		lessonsLabel: 'Key takeaways',
		relatedLabel: 'Related projects',
		categories: [
			{
				id: 'internships',
				title: 'Internship projects',
				description:
					'Maintenance Manager at OCP, and the translation interface and FAQ chatbot at CodeAlpha.'
			},
			{
				id: 'aeroensem',
				title: 'AeroENSEM presidency',
				description:
					'Technical communication, the club website and administrative automation during my term.'
			},
			{
				id: 'academic',
				title: 'Academic projects',
				description:
					'End-of-year work, industrial studies, data projects and practical coursework in their educational context.'
			},
			{
				id: 'personal',
				title: 'Personal projects',
				description: 'Development and evolution of my professional portfolio.'
			}
		],
		allCategories: 'All categories',
		academicProjects: 'Projects and studies',
		coursework: 'Practical coursework',
		projectSingular: 'project',
		projectPlural: 'projects'
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
		projectsTitle: 'Selected projects',
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
				description: 'Internship, AeroENSEM presidency, academic and personal projects.'
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
