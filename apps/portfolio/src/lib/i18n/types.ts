export type Locale = 'fr' | 'en';
export type ProjectCategory = 'internships' | 'academic' | 'personal';

export interface Experience {
	role: string;
	company: string;
	date: string;
	tech: string[];
	tasks: string[];
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
		terminalPrompt: string;
		categories: { category: string; items: string[] }[];
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
