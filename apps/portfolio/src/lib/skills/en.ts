import type { SkillCategory } from '../i18n/types';

export const skillsEn: SkillCategory[] = [
	{
		"id": "programming",
		"category": "Programming and tools",
		"context": "Languages, scripts and development tools.",
		"items": [
			"Python",
			"C",
			"R",
			"JavaScript",
			"TypeScript",
			"C++",
			"Go",
			"Rust",
			"Bash / shell scripting",
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
		"category": "Backend and APIs",
		"context": "Web services, integration and synchronization architectures.",
		"items": [
			"FastAPI",
			"Flask",
			"HTTP API integration",
			"Offline-first architecture",
			"Asynchronous synchronization",
			"Node.js",
			"Express",
			"Django",
			"Spring Boot",
			"REST API design",
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
		"category": "Databases",
		"context": "Modeling, queries, data access and migrations.",
		"items": [
			"PostgreSQL",
			"Relational data modeling",
			"SQL queries",
			"Database migrations",
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
		"category": "Web and interfaces",
		"context": "Web interfaces, visual design and site publishing.",
		"items": [
			"HTML",
			"CSS",
			"SvelteKit",
			"Tailwind CSS",
			"Responsive interfaces",
			"Bilingual websites",
			"Static site generation",
			"Browser speech synthesis",
			"React",
			"Vue",
			"Angular",
			"UI/UX design",
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
		"category": "Mobile development",
		"context": "Android, Flutter and hybrid applications.",
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
		"category": "Software testing and validation",
		"context": "Automated tests and integration verification.",
		"items": [
			"Automated testing / pytest",
			"Unit and integration testing",
			"Postman"
		],
		"projectSlugs": []
	},
	{
		"id": "data",
		"category": "Data analysis and preparation",
		"context": "Data preparation, analysis, reporting and processing.",
		"items": [
			"pandas",
			"NumPy",
			"Matplotlib",
			"Exploratory data analysis",
			"Descriptive statistics",
			"Data visualization",
			"Missing-value imputation",
			"Encoding and standardization",
			"Time-based aggregation",
			"Lagged features and rolling windows",
			"Correlation analysis",
			"SQL data analysis",
			"Power BI",
			"Advanced Excel",
			"ETL / data pipelines",
			"Time-series forecasting",
			"Experimental design and statistical testing"
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
		"category": "Machine learning and language processing",
		"context": "Machine learning, language processing and model integration.",
		"items": [
			"scikit-learn",
			"K-Means",
			"PCA",
			"Logistic regression",
			"Random Forest",
			"Regression model comparison",
			"Classification metrics",
			"Class imbalance",
			"Confusion matrices",
			"TensorFlow",
			"Keras",
			"ANN / RNN / LSTM",
			"Remaining useful life estimation",
			"spaCy",
			"TF-IDF",
			"Text normalization and similarity",
			"Azure Translator",
			"PyTorch",
			"OpenCV / computer vision",
			"XGBoost",
			"Hugging Face / Transformers",
			"LLM APIs",
			"RAG / vector databases",
			"AI agents and workflow automation",
			"ML deployment / MLOps"
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
		"category": "Algorithms and optimization",
		"context": "Programming and operations research in an academic setting.",
		"items": [
			"SageMath",
			"Functions, arrays and matrices",
			"Recursion",
			"Linear and integer programming",
			"Simplex and duality",
			"Constraint modeling",
			"Network flows and vertex cover",
			"Traveling salesperson problem",
			"Greedy heuristics",
			"Local search",
			"Genetic algorithms",
			"Solution cost and runtime comparison"
		],
		"projectSlugs": [
			"algorithmique-c",
			"algorithmes-metaheuristiques",
			"planification-production"
		]
	},
	{
		"id": "automation",
		"category": "Control and supervision",
		"context": "Automation, control, supervision and industrial networks.",
		"items": [
			"MATLAB",
			"Simulink",
			"PID control",
			"TIA Portal",
			"SINAMICS G120",
			"Siemens S7-1200",
			"GRAFCET",
			"WinCC",
			"Sequences and timers",
			"Human-machine interfaces (HMI)",
			"Time and frequency response analysis",
			"Gain and phase margins",
			"Proportional control",
			"MATLAB scripting",
			"Modbus",
			"OPC UA",
			"Ladder programming",
			"Structured Text",
			"Siemens S7-1500",
			"SCADA",
			"Industrial instrumentation",
			"Motor-drive commissioning",
			"Robotics / ROS"
		],
		"projectSlugs": [
			"controle-vitesse-compresseur",
			"automates-chariots-ascenseur",
			"asservissement-antenne-radar"
		]
	},
	{
		"id": "iot",
		"category": "IoT and cyber-physical systems",
		"context": "Supervision prototypes and academic modeling.",
		"items": [
			"MQTT",
			"Redis",
			"Streamlit",
			"Thermal modeling",
			"Finite-state machines (FSM)",
			"Euler discretization",
			"Hybrid continuous/discrete modeling",
			"Fault and recovery scenarios"
		],
		"projectSlugs": [
			"pfa-qualite-industrielle-iot",
			"cps-thermique"
		]
	},
	{
		"id": "electronics",
		"category": "Electronics and embedded systems",
		"context": "Electronics, embedded programming and hardware descriptions.",
		"items": [
			"VHDL",
			"Xilinx ISE",
			"Testbenches and timing diagrams",
			"Logic synthesis and simulation",
			"8051",
			"Assembly",
			"Digital-to-analog conversion (DAC)",
			"Waveform generation",
			"Active filters and oscillators",
			"Combinational logic",
			"Boolean algebra and truth tables",
			"Karnaugh simplification",
			"Arduino",
			"ESP32",
			"STM32",
			"Raspberry Pi",
			"Embedded C/C++",
			"FreeRTOS",
			"Proteus",
			"CAN bus",
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
		"category": "Energy and electrical machines",
		"context": "Theoretical studies, presentations and academic simulations.",
		"items": [
			"HVAC energy analysis",
			"Variable speed drives",
			"Affinity laws",
			"Harmonic analysis",
			"Technical and economic assessment",
			"Photovoltaics",
			"PV*SOL — workflow study",
			"PV sizing, components and shading",
			"DC machine modeling",
			"Induction motor studies"
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
		"category": "Linux and self-hosting",
		"context": "Systems, virtualization and service administration.",
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
			"Linux files, directories and links",
			"Self-hosted service deployment",
			"Remote access configuration",
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
		"category": "Cloud, deployment and security",
		"context": "Service deployment, remote access and operations.",
		"items": [
			"GitHub Pages",
			"Cloudflare Zero Trust",
			"Kubernetes",
			"Microsoft Azure",
			"Google Cloud",
			"CI/CD",
			"GitHub Actions",
			"DNS / TLS certificates",
			"SSH",
			"VPN",
			"Backups and disaster recovery",
			"Monitoring and logging",
			"Prometheus / Grafana",
			"Security hardening"
		],
		"projectSlugs": [
			"autohebergement-plane",
			"autohebergement-ente",
			"portfolio-sveltekit"
		]
	},
	{
		"id": "networks",
		"category": "Networks and diagnostics",
		"context": "Packet capture analysis and simulated topology configuration.",
		"items": [
			"Wireshark",
			"Cisco Packet Tracer",
			"IP addressing",
			"DHCP",
			"DNS",
			"ARP",
			"ICMP",
			"UDP",
			"ping / tracert",
			"Static routing",
			"RIP v2",
			"Packet analysis"
		],
		"projectSlugs": [
			"diagnostic-reseaux-ip"
		]
	},
	{
		"id": "industry",
		"category": "Maintenance and industrial operations",
		"context": "Maintenance, reliability, design and industrial organization.",
		"items": [
			"Maintenance management workflow modeling",
			"Preventive and corrective intervention tracking",
			"GRIF",
			"Weibull distribution",
			"Reliability block diagrams",
			"Fault trees",
			"Availability analysis",
			"ERP Prélude",
			"Production planning",
			"Capacity and supply planning",
			"Inventory management",
			"SolidWorks / AutoCAD",
			"Lean / Six Sigma",
			"FMEA",
			"Root-cause analysis",
			"Preventive and predictive maintenance",
			"Budgeting and cost estimation",
			"Procurement"
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
		"category": "Coordination and communication",
		"context": "Project management, teamwork and communication.",
		"items": [
			"Project leadership",
			"Requirements and integration coordination",
			"Technical guidance for a teammate",
			"Club leadership",
			"Activity coordination",
			"Technical communication",
			"Speech preparation",
			"Teamwork",
			"Presenting and interpreting results",
			"Project planning",
			"Agile / Scrum / Kanban",
			"Technical documentation",
			"Requirements analysis",
			"Negotiation",
			"Mentoring and training",
			"Public speaking"
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
		"category": "Scientific foundations",
		"context": "MPSI/MP preparatory classes and engineering studies.",
		"items": [
			"Mathematics",
			"Physics",
			"Engineering science",
			"Electrical engineering",
			"Digital systems",
			"Industrial process digitalization"
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
		"category": "Languages",
		"context": "Communication languages.",
		"items": [
			"Arabic",
			"French",
			"English",
			"Amazigh"
		],
		"projectSlugs": []
	}
];
