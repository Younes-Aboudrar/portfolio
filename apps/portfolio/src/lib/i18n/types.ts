export type Locale = 'fr' | 'en';

export interface Project {
	slug: string;
	title: string;
	tagline: string;
	date: string;
	image: string;
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
	hero: {
		badge: string;
		name: string;
		headline: string;
		mission: string;
		objective: string;
		ctaExperience: string;
		ctaContact: string;
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
		jobs: {
			role: string;
			company: string;
			date: string;
			tech: string[];
			tasks: string[];
		}[];
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
