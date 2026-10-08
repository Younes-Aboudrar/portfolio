import type { Project } from '../i18n/types';

export const projectsEn: Project[] = [
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
		challenges: 'Support equipment and intervention tracking in areas with limited connectivity.',
		solutions:
			'Offline-first architecture with asynchronous synchronization and a PostgreSQL database for equipment, interventions and histories. The backend was deployed for trials during the internship; restoration of the service is in preparation.',
		lessons: [
			'Backend design based on industrial maintenance needs.',
			'Coordination of requirements and integration between the API and mobile app.'
		],
		category: 'internships',
		kind: 'project',
		cvFeatured: true,
		context: 'OCP internship · IMACID maintenance'
	},
	{
		slug: 'interface-traduction',
		links: { github: 'https://github.com/Younes-Aboudrar/CodeAlpha_LanguageTranslationTool' },
		category: 'internships',
		kind: 'project',
		title: 'Web translation interface',
		tagline: 'Multilingual translation and browser-based speech synthesis.',
		date: 'July 2025',
		status: 'Internship prototype',
		context: 'CodeAlpha internship',
		tech: ['HTML', 'CSS', 'JavaScript', 'Azure Translator'],
		description:
			'CodeAlpha remote internship project: an HTML/CSS/JavaScript interface for choosing languages and calling the Azure Translator API. Speech synthesis uses browser capabilities.',
		challenges: 'Connect a multilingual interface to a translation service.',
		solutions:
			'HTTP requests with fetch, language selection and speech synthesis through Web Speech.',
		lessons: [
			'Integrating an API into a web interface.',
			'Distinguishing translation services from local speech synthesis.'
		]
	},
	{
		slug: 'chatbot-faq',
		links: { github: 'https://github.com/Younes-Aboudrar/CodeAlpha_AIEngineeringFAQsChatbot' },
		category: 'internships',
		kind: 'project',
		title: 'Contextual FAQ chatbot',
		tagline: 'Language processing and similarity-based answer retrieval.',
		date: 'July 2025',
		status: 'Internship prototype',
		context: 'CodeAlpha internship',
		tech: ['Python', 'Flask', 'spaCy', 'TF-IDF'],
		description:
			'Chatbot prototype from the CodeAlpha internship. The Flask application processes requests, normalizes text and retrieves FAQ answers using spaCy and TF-IDF similarity.',
		challenges: 'Retrieve relevant answers and provide a fallback mechanism.',
		solutions: 'Flask request handling, language normalization and text similarity search.',
		lessons: [
			'Structuring a Python web service.',
			'FAQ retrieval using language processing and similarity.'
		]
	},
	{
		slug: 'portfolio-sveltekit',
		category: 'personal',
		kind: 'project',
		title: 'Personal portfolio — younes.aboudrar.dev',
		tagline: 'Bilingual website organized around background, experience and projects.',
		date: 'Personal project',
		status: 'Live website',
		context: 'Personal development',
		tech: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
		description:
			'Personal portfolio in French and English built with SvelteKit and Tailwind CSS. The site includes dedicated background, experience, project, skills and contact pages, together with a printable CV.',
		challenges: 'Present a professional background clearly across desktop and mobile.',
		solutions:
			'Static pages, bilingual content, section-based navigation and a CV generated from the same data.',
		lessons: [
			'Organizing a professional website across multiple pages.',
			'Consistency between portfolio content, translations and CV.'
		],
		links: {
			demo: 'https://younes.aboudrar.dev'
		}
	},
	{
		slug: 'autohebergement-plane',
		category: 'personal',
		kind: 'project',
		title: 'Self-hosting Plane',
		tagline: 'Setting up a project management tool for my own use.',
		date: 'Personal project',
		status: 'Active personal service',
		context: 'Personal self-hosted environment',
		tech: ['Plane', 'Ubuntu Server', 'Docker', 'Cloudflare Zero Trust'],
		description:
			'Independent installation and administration of Plane on my personal server to organize and track my projects. This work is part of setting up my personal computing environment, which I began during my first year of engineering studies.',
		challenges: 'Provide a project management tool suited to my needs and accessible remotely.',
		solutions:
			'Hosting the service in my Ubuntu Server environment, configuring access and networking, and using Cloudflare Zero Trust for remote access.',
		lessons: [
			'Independent installation and administration of a self-hosted service.',
			'Access configuration and maintenance of a personal computing environment.'
		]
	},
	{
		slug: 'autohebergement-ente',
		category: 'personal',
		kind: 'project',
		title: 'Self-hosting Ente',
		tagline: 'Setting up a photo and video management service for my own use.',
		date: 'Personal project',
		status: 'Active personal service',
		context: 'Personal self-hosted environment',
		tech: ['Ente', 'Ubuntu Server', 'Docker', 'Cloudflare Zero Trust'],
		description:
			'Independent installation and administration of Ente on my personal server to manage my photo and video library. The service complements my personal self-hosted environment alongside Plane.',
		challenges: 'Provide a personal media management service with appropriate access.',
		solutions:
			'Service installation, remote access configuration and administration in my personal environment.',
		lessons: [
			'Deployment and configuration of a media management service.',
			'Administration of multiple services for distinct personal needs.'
		]
	},
	{
		slug: 'pfa-qualite-industrielle-iot',
		category: 'academic',
		kind: 'project',
		title: 'End-of-year project — industrial quality and IoT supervision',
		tagline: 'Industrial data preparation, regression comparisons and supervision prototypes.',
		date: 'Academic project',
		status: 'Academic study',
		context: 'ENSEM · Academic project',
		tech: ['Python', 'pandas', 'scikit-learn', 'MQTT', 'Redis', 'Streamlit'],
		description:
			'Collaborative end-of-year project focused on industrial quality data. The work combines quality, production tonnage and stoppages to prepare features and compare regression models. Prototyping phases explore MQTT, Redis and a Streamlit interface.',
		challenges: 'Structure industrial time-series data and compare models in context.',
		solutions:
			'Daily aggregation, lagged features and rolling windows with pandas; regression comparisons and supervision component prototypes.',
		lessons: [
			'Time-series data preparation and model comparisons.',
			'Distinguishing experimentation, prototype components and a system validated in operation.'
		],
		cvFeatured: true
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
			'Collaborative study of a 45 kW HVAC installation covering partial-load profiles, affinity laws, harmonics and economic feasibility. Energy savings are theoretical projections under stated assumptions.',
		challenges: 'Connect variable speed operation, power quality and economic assumptions.',
		solutions:
			'Affinity-law calculations, Python harmonic simulation and a technical-economic assessment under stated assumptions.',
		lessons: [
			'Distinguishing theoretical results from operational measurements.',
			'Considering energy use and economics together.'
		],
		category: 'academic',
		kind: 'project',
		cvFeatured: true,
		context: 'ENSEM · Academic work'
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
			'Collaborative study and simulation of a compressor driven by an induction motor, covering Simulink modeling, PID control and a configuration described in TIA Portal.',
		challenges: 'Study pressure response and control-loop tuning.',
		solutions:
			'Motor and pressure modeling, PID-loop simulation and analysis of the SINAMICS G120 drive.',
		lessons: [
			'Control-loop analysis in a simulated model.',
			'Distinguishing simulation from validation on physical equipment.'
		],
		category: 'academic',
		kind: 'project',
		cvFeatured: true,
		context: 'ENSEM · Academic work'
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
		],
		category: 'academic',
		kind: 'project',
		cvFeatured: true,
		context: 'ENSEM · Academic work'
	},
	{
		slug: 'planification-production',
		category: 'academic',
		kind: 'project',
		title: 'Production planning with linear programming',
		tagline: 'Constraint modeling, solution methods and graphical representation.',
		date: 'Academic project',
		status: 'Academic study',
		context: 'ENSEM · Academic project',
		tech: ['Python', 'Matplotlib', 'Linear programming'],
		description:
			'Academic operations research project on industrial production planning. The presentation formulates a linear program and examines graphical solutions, simplex and duality; Python scripts visualize constraints.',
		challenges: 'Formalize a constrained production decision.',
		solutions:
			'Linear model construction and feasible-region visualization with Python/Matplotlib.',
		lessons: [
			'Turning a planning problem into a mathematical formulation.',
			'Interpreting constraints and feasible regions.'
		]
	},
	{
		slug: 'presentation-photovoltaique',
		category: 'academic',
		kind: 'project',
		title: 'Photovoltaic sizing presentation',
		tagline: 'Study of PV*SOL features and workflow.',
		date: 'Academic project',
		status: 'Academic study',
		context: 'ENSEM · Academic project',
		tech: ['PV*SOL', 'Photovoltaics'],
		description:
			'Collaborative academic presentation on photovoltaic systems and PV*SOL Premium features: location, consumption profiles, modules, inverters and shading.',
		challenges: 'Explain the parameters involved in a photovoltaic study.',
		solutions:
			'Presentation of the workflow, 2D/3D modeling, component selection and shading analysis.',
		lessons: [
			'Identifying photovoltaic study parameters.',
			'Technical communication about a sizing tool.'
		]
	},
	{
		slug: 'segmentation-marketing',
		category: 'academic',
		kind: 'coursework',
		title: 'Marketing segmentation and classification',
		tagline: 'Exploratory analysis, data preparation and classifier comparisons.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['Python', 'pandas', 'scikit-learn', 'K-Means', 'PCA'],
		description:
			'Practical coursework using a marketing campaign dataset: exploration, imputation, encoding, scaling and segmentation. The notebooks also compare approaches to classifying campaign responses.',
		challenges: 'Prepare heterogeneous data and interpret the resulting clusters.',
		solutions:
			'Exploratory visualizations, K-Means and PCA; logistic regression and Random Forest comparisons in an educational setting.',
		lessons: [
			'Data preparation and profile segmentation.',
			'Interpreting classification metrics and class imbalance.'
		]
	},
	{
		slug: 'reseaux-neurones-maintenance',
		category: 'academic',
		kind: 'coursework',
		title: 'Neural networks for maintenance',
		tagline: 'ANN, RNN and LSTM experiments for faults and remaining useful life.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['Python', 'TensorFlow', 'Keras', 'ANN / RNN / LSTM'],
		description:
			'Practical coursework on fault classification and remaining useful life estimation for hydraulic equipment. The notebooks explore dense, recurrent and LSTM networks with TensorFlow/Keras as educational experiments.',
		challenges: 'Compare architectures and examine detection of rare fault classes.',
		solutions:
			'Data preparation, ANN/RNN/LSTM construction and analysis of curves and confusion matrices.',
		lessons: [
			'Neural network experimentation with Keras.',
			'Distinguishing overall accuracy from effective detection of rare faults.'
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
		],
		category: 'academic',
		kind: 'coursework',
		cvFeatured: true,
		context: 'ENSEM · Academic work'
	},
	{
		slug: 'cps-thermique',
		category: 'academic',
		kind: 'coursework',
		title: 'Thermal cyber-physical system study',
		tagline: 'Continuous model, state machine and disturbance scenarios.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['Python', 'FSM', 'Euler', 'CPS'],
		description:
			'Collaborative academic study of a thermal process linking a physical model, sensor, controller and actuator. The report describes Euler discretization and a state-based controller.',
		challenges: 'Connect continuous dynamics with discrete control logic.',
		solutions:
			'Thermal modeling, a finite-state machine and study of fault and recovery scenarios.',
		lessons: [
			'Hybrid modeling of a cyber-physical system.',
			'Analysis of control and safety constraints.'
		]
	},
	{
		slug: 'automates-chariots-ascenseur',
		category: 'academic',
		kind: 'coursework',
		title: 'Cart automation and educational lift control',
		tagline: 'Control sequences and supervision with TIA Portal and WinCC.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['TIA Portal', 'S7-1200', 'GRAFCET', 'WinCC'],
		description:
			'Collaborative practical coursework on cart sequences and a four-floor educational lift. The studies cover I/O variables, GRAFCET, timing, calls and door interlocks.',
		challenges: 'Structure sequences and connect control logic to a supervision interface.',
		solutions:
			'Programming and configuration described with TIA Portal/S7-1200, including PLC/HMI variables for WinCC Runtime.',
		lessons: [
			'Designing automation sequences.',
			'Connecting PLC logic and HMI concepts in an educational setting.'
		]
	},
	{
		slug: 'diagnostic-reseaux-ip',
		category: 'academic',
		kind: 'coursework',
		title: 'Network diagnostics and IP topologies',
		tagline: 'Packet analysis and simulated network configuration.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['Wireshark', 'Packet Tracer', 'IP', 'DHCP / DNS'],
		description:
			'Practical coursework on diagnostics using ping, tracert and Wireshark, followed by topology studies in Cisco Packet Tracer. Network captures and simulated configurations are presented in their respective contexts.',
		challenges: 'Interpret network exchanges and define topology addressing and services.',
		solutions:
			'ARP/ICMP/DNS/UDP analysis, static and RIP v2 routing, and DHCP/DNS configuration in Packet Tracer.',
		lessons: [
			'Packet-based diagnostics and network tools.',
			'Distinguishing captured network traffic from simulated topologies.'
		]
	},
	{
		slug: 'linux-apache',
		category: 'academic',
		kind: 'coursework',
		title: 'Linux and Apache server configuration',
		tagline: 'Local administration and VirtualHost setup in a lab environment.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['Ubuntu', 'VirtualBox', 'Apache', 'UFW'],
		description:
			'Practical coursework on Ubuntu in VirtualBox: navigation, files, directories and links. A second part covers Apache installation, a VirtualHost, site activation and a local firewall rule.',
		challenges: 'Understand the file system and configure a web service in a lab.',
		solutions:
			'File and link management, apt/systemctl commands, an Apache VirtualHost and activation with a2ensite.',
		lessons: [
			'Working with a Linux environment.',
			'Local web service configuration and access settings.'
		]
	},
	{
		slug: 'fiabilite-disponibilite-grif',
		category: 'academic',
		kind: 'coursework',
		title: 'Reliability and availability with GRIF',
		tagline: 'Reliability blocks, fault trees and failure models.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['GRIF', 'Weibull', 'Reliability'],
		description:
			'Practical coursework modeling series/parallel systems, fault trees and availability. The studies use GRIF and cover Weibull models in an academic setting.',
		challenges: 'Represent component dependencies and interpret failure states.',
		solutions:
			'Construction and analysis of reliability and availability models with blocks and fault trees.',
		lessons: [
			'Interpreting and modeling reliability structures.',
			'Academic analysis of failures and availability.'
		]
	},
	{
		slug: 'circuits-vhdl',
		category: 'academic',
		kind: 'coursework',
		title: 'Combinational circuits in VHDL',
		tagline: 'Hardware descriptions, testbenches and synthesis/simulation workflow studies.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['VHDL', 'Xilinx ISE', 'Testbench'],
		description:
			'Practical coursework on a parity generator, multiplexers, a comparator and a hierarchical sorter. The report describes circuits, testbenches, timing diagrams and the Xilinx ISE workflow.',
		challenges: 'Translate logic behavior into verifiable hardware descriptions.',
		solutions: 'VHDL descriptions, testbenches and simulation/synthesis analysis with Xilinx ISE.',
		lessons: [
			'Describing circuits and interpreting timing diagrams.',
			'Distinguishing logic simulation from hardware validation.'
		]
	},
	{
		slug: 'microcontroleur-8051',
		category: 'academic',
		kind: 'coursework',
		title: '8051 microcontroller and signal generation',
		tagline: 'Assembly programming and digital-to-analog conversion.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['8051', 'Assembly', 'DAC'],
		description:
			'Practical coursework on 8051 registers, timing and value tables. The reports describe signal generation and connection to a digital-to-analog converter.',
		challenges: 'Organize timing and digital value output.',
		solutions:
			'Assembly programs, flowcharts and square, triangular, sawtooth and table-based ECG signal generation.',
		lessons: [
			'Programming with registers and timing.',
			'Connecting digital values to analog signals.'
		]
	},
	{
		slug: 'statistiques-r',
		category: 'academic',
		kind: 'coursework',
		title: 'Descriptive statistics in R',
		tagline: 'Calculations, data handling and visualizations.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['R', 'Statistics'],
		description:
			'Collaborative practical coursework in R programming and descriptive statistics. Exercises cover loops, functions, data loading, means, variance and visualizations.',
		challenges: 'Structure statistical calculations and present the results.',
		solutions: 'R scripts for data handling, descriptive indicators and charts.',
		lessons: [
			'Statistical programming in an educational context.',
			'Interpreting descriptive statistics and charts.'
		]
	},
	{
		slug: 'algorithmique-c',
		category: 'academic',
		kind: 'coursework',
		title: 'Algorithms and C programming',
		tagline: 'Functions, recursion, arrays and numerical algorithms.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['C', 'Algorithms'],
		description:
			'A set of practical C programming exercises covering I/O, conditions, loops, functions, arrays and matrices. The programs also explore recursion and simple numerical approximations.',
		challenges: 'Break problems into functions and work with basic data structures.',
		solutions: 'Small C programs structured around functions, loops and arrays.',
		lessons: [
			'Foundations of imperative algorithms.',
			'Working with recursion and simple numerical calculations.'
		]
	},
	{
		slug: 'electronique-analogique-numerique',
		category: 'academic',
		kind: 'coursework',
		title: 'Analog and digital electronics',
		tagline: 'Filter and oscillator characterization, and combinational logic.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['Electronics', 'Filters', 'Logic'],
		description:
			'Collaborative practical coursework on oscillators and active filters, complemented by digital logic exercises. The reports compare theoretical responses, readings and simulations in an educational setting.',
		challenges: 'Connect circuit behavior with its model and frequency response.',
		solutions:
			'Filter and oscillator studies, truth tables, Boolean algebra and Karnaugh simplification.',
		lessons: [
			'Analyzing analog circuit responses.',
			'Turning logic expressions into combinational structures.'
		]
	},
	{
		slug: 'asservissement-antenne-radar',
		category: 'academic',
		kind: 'coursework',
		title: 'Radar antenna control',
		tagline: 'Time- and frequency-domain analysis of a control loop.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['MATLAB', 'Simulink', 'Control'],
		description:
			'Collaborative control coursework on a radar antenna servo system. The studies compare open- and closed-loop behavior, step responses and stability margins with MATLAB/Simulink.',
		challenges: 'Analyze stability and servo response.',
		solutions: 'Study of gain/phase margins, system responses and a proportional controller.',
		lessons: [
			'Interpreting time- and frequency-domain responses.',
			'Effects of proportional correction in a control loop.'
		]
	},
	{
		slug: 'simulation-machine-courant-continu',
		category: 'academic',
		kind: 'coursework',
		title: 'DC machine simulation',
		tagline: 'Speed, current and electromechanical behavior studies.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['MATLAB', 'Simulink', 'DC Machine'],
		description:
			'Academic work distinct from the radar study: modeling a DC machine in Simulink. Diagrams and characteristics cover voltage, torque, speed and armature current.',
		challenges: 'Connect electrical and mechanical quantities in a machine model.',
		solutions: 'Study of the DC Machine block and simulated electromechanical characteristics.',
		lessons: [
			'Modeling an electrical machine.',
			'Interpreting its quantities in a simulation environment.'
		]
	},
	{
		slug: 'erp-prelude',
		category: 'academic',
		kind: 'coursework',
		title: 'Production management with Prélude ERP',
		tagline: 'Items, planning, procurement and inventory.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['ERP Prélude', 'Production planning'],
		description:
			'Collaborative practical coursework using an educational production-management case. Work in Prélude covers technical data, sales, planning, capacity, manufacturing and inventory movements.',
		challenges: 'Connect item data to planning and production stages.',
		solutions: 'Workflow studies and educational ERP exercises for production and inventory.',
		lessons: [
			'Understanding planning, capacity and procurement relationships.',
			'Working with an ERP in an academic setting.'
		]
	},
	{
		slug: 'web-mobile-cordova',
		category: 'academic',
		kind: 'coursework',
		title: 'Web integration and Cordova mobile exploration',
		tagline: 'Presentation website and hybrid application prototype.',
		date: 'Practical coursework',
		status: 'Practical coursework',
		context: 'ENSEM · Practical coursework',
		tech: ['HTML', 'CSS', 'Apache Cordova'],
		description:
			'Practical coursework on an ENSEM presentation website in HTML/CSS, with navigation, forms and responsive styling. A separate part explores an Apache Cordova Android base as an exploratory prototype.',
		challenges: 'Structure a web interface and explore hybrid mobile integration.',
		solutions:
			'HTML/CSS pages, responsive styles and exploration of a Cordova structure with menus and plugins.',
		lessons: [
			'Structuring and adapting a web interface.',
			'Distinguishing interface code from platform-generated mobile components.'
		]
	}
];
