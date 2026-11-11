export type Locale = 'fr' | 'en';
export type ProjectCategory = 'internships' | 'academic' | 'personal';

export interface Experience {
	id: string;
	learning: string[];
	role: string;
	company: string;
	date: string;
	tech: string[];
	tasks: string[];
}

export interface SkillCategory {
	id: string;
	category: string;
	context: string;
	items: string[];
	projectSlugs: string[];
	journeyIds?: string[];
}

export interface Project {
	slug: string;
	category: ProjectCategory;
	kind: 'project' | 'coursework';
	context: string;
	cvFeatured?: boolean;
	title: string;
	tagline: string;
	date: string;
	image?: string;
	status: string;
	tech: string[];
	links?: { github?: string; demo?: string };
	description: string;
	challenges: string;
	solutions: string;
	lessons: string[];
}

export interface Dictionary {
	meta: {
		description: string;
	};
	nav: {
		home: string;
		about: string;
		experience: string;
		projects: string;
		education: string;
		skills: string;
		certifications: string;
		contact: string;
		blog: string;
		wiki: string;
		now: string;
		cv: string;
	};
	home: {
		heading: string;
		intro: string;
		pages: { href: string; title: string; description: string }[];
	};
	hero: {
		badge: string;
		name: string;
		headline: string;
		mission: string;
		objective: string;
		ctaExperience: string;
		ctaContact: string;
		terminalLines: string[];
		terminalSummary: string;
		scrollLabel: string;
	};
	stats: {
		label: string;
		value: number;
		suffix?: string;
	}[];
	about: {
		heading: string;
		body: string;
		body2: string;
		facts: { label: string; value: string }[];
	};
	experience: {
		heading: string;
		professionalHeading: string;
		extracurricularHeading: string;
		jobs: Experience[];
		activities: Experience[];
	};
	education: {
		heading: string;
		items: {
			id: string;
			learning: string[];
			degree: string;
			institution: string;
			date: string;
			highlight: string;
		}[];
	};
	certifications: {
		heading: string;
		items: {
			title: string;
			issuer: string;
			date: string;
		}[];
	};
	projects: {
		heading: string;
		subheading: string;
		categories: { id: ProjectCategory; title: string; description: string }[];
		allCategories: string;
		academicProjects: string;
		coursework: string;
		projectSingular: string;
		projectPlural: string;
		items: Project[];
		viewDetails: string;
		backToProjects: string;
		github: string;
		live: string;
		techLabel: string;
		challengesLabel: string;
		solutionsLabel: string;
		lessonsLabel: string;
		relatedLabel: string;
	};
	skills: {
		heading: string;
		intro: string;
		search: string;
		searchPlaceholder: string;
		domain: string;
		allDomains: string;
		results: string;
		empty: string;
		clear: string;
		examples: string;
		categories: SkillCategory[];
		cvCategories: { category: string; items: string[] }[];
	};
	learning: {
		heading: string;
		blog: string;
		wiki: string;
		paused: string;
		pausedNote: string;
	};
	contact: {
		heading: string;
		subheading: string;
		form: {
			name: string;
			email: string;
			message: string;
			send: string;
			sending: string;
			success: string;
			error: string;
		};
		socials: string;
		messaging: string;
	};
	footer: {
		tagline: string;
		madeWith: string;
		backToTop: string;
	};
	now: {
		heading: string;
		subheading: string;
		focusTitle: string;
		focus: { title: string; detail: string }[];
		currentlyTitle: string;
		currently: string[];
	};
	cv: {
		title: string;
		profile: string;
		contactLabel: string;
		skillsTitle: string;
		experienceTitle: string;
		educationTitle: string;
		projectsTitle: string;
		certificationsTitle: string;
		print: string;
	};
	misc: {
		langName: string;
		notFound: string;
	};
}
