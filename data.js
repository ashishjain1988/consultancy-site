/**
 * ============================================================
 *  data.js  —  YOUR WEBSITE CONTENT
 * ============================================================
 *  This is the ONLY file you need to edit to update content.
 *  Edit text, add/remove items, update links — then reload
 *  the page in your browser to see the changes.
 * ============================================================
 */

const SITE_DATA = {

  /* ----------------------------------------------------------
   *  IDENTITY
   * ---------------------------------------------------------- */
  identity: {
    name:       "ATGC Bioinformatics",
    founder:    "Ashish Jain, PhD",           // shown in About & footer
    credential: "PhD",
    role:       "Bioinformatics & Data Science Consultancy",
    tagline:    "Empowering biotech and research teams to unlock the full potential of their data through advanced NGS analytics, single-cell and spatial biology, and machine learning driven multi-omics integration.",
    email:      "contact@atgcbioinformatics.com",
    phone:      "(317) 529-7973",
    photo:      "assets/images/AJ_headshot.jpg",
    brochure:   "assets/ATGCBioinformatics_brochure.pdf",
    calendar:   "https://calendar.app.google/uhbtzzA7b66FCrRY7",
    links: {
      linkedin: "https://www.linkedin.com/in/ashish-jain-phd-395b2711/",
      github:   "https://github.com/ashishjain1988",
      scholar:  "https://scholar.google.com/citations?user=_mFN4s4AAAAJ",
    },
  },


  /* ----------------------------------------------------------
   *  HERO STATS  (the 3 numbers on the dark panel)
   * ---------------------------------------------------------- */
  stats: [
    { number: "12+", label: "Years Experience" },
    { number: "30+", label: "Publications"     },
    { number: "6+",  label: "R Packages & Tools" },
  ],

  /* ----------------------------------------------------------
   *  ABOUT
   *  Written from a consultancy perspective — "we/our" framing.
   *  The experience track record is in data.experience below.
   * ---------------------------------------------------------- */
  about: {
    paragraphs: [
      "ATGC Bioinformatics is an independent consulting practice specializing in next-generation sequencing, multi-omics integration, and computational biology. We partner with academic research groups, hospitals, and biotech companies to design, execute, and interpret complex genomic analyses.",
      "Founded by Ashish Jain, PhD, a computational biologist with over a decade of experience at institutions including Boston Children's Hospital, the Frederick National Laboratory for Cancer Research (NIH/NCI), and Takeda Pharmaceuticals, ATGC brings publication grade rigor and deep technical expertise to every engagement.",
      "From early study design through to publication ready results, we act as an embedded scientific partner, not just a service provider. Our goal is to accelerate your research, reduce technical bottlenecks, and ensure your genomic data reaches its full scientific potential.",
    ],
    highlights: [
      { icon: "🔬", title: "Research-Grade Analysis",  detail: "Every deliverable is held to peer-reviewed publication standards"          },
      { icon: "🤝", title: "Embedded Partnership",     detail: "We work closely with your team from study design through to results"        },
      { icon: "⚡", title: "Rapid Turnaround",         detail: "Optimized pipelines on HPC and cloud for fast, reproducible results"        },
      { icon: "📦", title: "Open-Source Commitment",   detail: "Tools like TissueEnrich & MAFDash used by thousands of researchers globally" },
    ],
  },

  /* ----------------------------------------------------------
   *  EXPERIENCE
   *  Displayed as compact org cards inside the About section —
   *  not as a standalone CV timeline. Each entry has:
   *    org, role, period, summary (1–2 sentences max)
   * ---------------------------------------------------------- */
  experience: [
    {
      period:  "2026 - Present",
      role: "Senior Data Scientist",
      org:   "Merck & Co.",
      summary: "Empowering neuroscience research through advanced multi omics analysis and interactive visualization platforms, translating complex data into accessible, actionable insights.",
    },
    {
      org:     "Boston Children's Hospital",
      role:    "Data Scientist III",
      period:  "2022 — 2026",
      summary: "Lead bioinformatics support across multiple research groups, scRNA-seq, spatial transcriptomics, WGS/WES, proteomics, and DNA methylation. Contributed to 10+ peer-reviewed publications.",
    },
    {
      org:     "Frederick National Lab for Cancer Research (NIH/NCI)",
      role:    "Bioinformatics Analyst II",
      period:  "2020 — 2022",
      summary: "Multi-omics integration across 40+ rare cancers in the MyPART program. Developed MAFDash, a widely adopted open-source mutation visualization tool.",
    },
    {
      org:     "Takeda Pharmaceuticals",
      role:    "Computational Biology Intern",
      period:  "2019",
      summary: "Human microbiome protein subfamily discovery using ProtVec deep learning; benchmarked GPU infrastructure for large-scale bioinformatics.",
    },
  ],

  /* ----------------------------------------------------------
   *  SERVICES
   * ---------------------------------------------------------- */
  services: [
    {
      icon:  "🔬",
      title: "Single-Cell & Spatial Transcriptomics",
      description: "End to end scRNA-seq (10X Genomics, Smart-Seq2) and spatial transcriptomics (10X Visium/VisiumHD, MERFISH) analysis including quality control, integration, cell type annotation, trajectory analysis, cell-cell communication, and multi sample integration.",
      tags:  ["scRNA-seq", "Seurat", "Spatial", "Monocle3", "CellChat"],
    },
    {
      icon:  "🧬",
      title: "Bulk RNAseq Data Analysis",
      description: "Comprehensive bulk RNASeq data analysis, from raw sequencing reads to actionable biological insights, including quality control, differential expression, co-expression networks, and pathway interpretation.",
      tags:  ["RNA-seq", "WGCNA", "PPI", "GSEA"],
    },
    {
      icon:  "🧬",
      title: "Whole Exome and Genome Data Analysis",
      description: "Advanced whole genome and exome sequencing analysis, from raw data processing to accurate variant detection, annotation, and interpretation, enabling meaningful clinical and research insights.",
      tags:  ["WGS/WES", "SNV", "CNV", "GWAS"],
    },
    {
      icon:  "⚙️",
      title: "Other Omics Data Analysis",
      description: "Proteomics, ChIP-Seq, DNA methylation, and other omics data analysis with statistical modeling and biological interpretation tailored to your research questions.",
      tags:  ["Proteomics","OLINK","ChIP-Seq","DNA Methylation"],
    },
    {
      icon:  "🤖",
      title: "Machine Learning & Statistical Modeling",
      description: "Supervised and unsupervised learning applied to biological data, classification, regression, clustering, deep learning for protein sequences, and multi-omics integration.",
      tags:  ["R", "Python", "scikit-learn", "deep learning"],
    },
    {
      icon:  "📊",
      title: "Interactive Data Visualization and Tool Development",
      description: "Custom R Shiny dashboards and interactive multi omics visualization webtools for exploring and sharing complex genomic datasets with collaborators and clinicians.",
      tags:  ["R Shiny", "ggplot2", "plotly", "VitessceR"],
    },
  ],

  /* ----------------------------------------------------------
   *  SKILLS
   *  Each group has a title and a list of skill strings.
   * ---------------------------------------------------------- */
  skills: [
    {
      title: "NGS & Multi-Omics",
      items: ["scRNA-seq", "Spatial Transcriptomics", "Bulk RNA-seq", "WGS/WES", "ChIP-Seq", "DNA Methylation", "Proteomics", "Hi-C","MOFA", "GWAS", "Trajectory Analysis", "Cell-Cell Communication","WGCNA"],
    },
    {
      title: "Programming",
      items: ["R", "Python", "Bash", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Visualization",
      items: ["R Shiny", "ggplot2", "plotly", "VitessceR","CellxGene"],
    },
    {
      title: "Machine Learning & Statistics",
      items: ["Supervised Learning", "Unsupervised Learning", "Classification", "Clustering", "Regression"],
    },
    {
      title: "Infrastructure & Cloud",
      items: ["HPC (SLURM)", "AWS", "Distributed Computing", "GitHub/GitLab", "MySQL"],
    },
    {
      title: "Delivery & Leadership",
      items: ["Study Design", "Cross-functional Collaboration", "Workshop Facilitation", "Mentoring", "Scientific Writing"],
    },
  ],

  /* ----------------------------------------------------------
   *  PUBLICATIONS
   *  Set firstAuthor: true to highlight entries where you are
   *  the first/corresponding author.
   * ---------------------------------------------------------- */
  publications: [
    {
      year: 2025,
      title: "An endothelial SOX18–mevalonate pathway axis enables repurposing of statins for infantile hemangioma",
      authors: "Annegret Holm, Matthew S Graus,..., Ashish Jain, et al.",
      journal: "The Journal of Clinical Investigation",
      firstAuthor: false,
    },
    {
      year: 2025,
      title: "Genome-Wide Association Study and Rare Variant Association Studies of Strabismus in the All of Us Research Program",
      authors: "Kyoung A Viola Lee, Corey Tesdahl, Inas F Aboobakar, Ashish Jain, et al.",
      journal: "Ophthalmology Science",
      firstAuthor: false,
    },
    {
      year: 2025,
      title: "Chromosome 4 Duplication Associated with Strabismus Leads to Gene Expression Changes in iPSC-Derived Cortical Neurons",
      authors: "Mayra Martinez-Sanchez, William Skarnes, Ashish Jain, et al.",
      journal: "Genes",
      firstAuthor: false,
    },
    {
      year: 2024,
      title: "Nociceptor-immune interactomes reveal insult-specific immune signatures of pain",
      authors: "Aakanksha Jain, Benjamin M. Gyori, Sara Hakim, Ashish Jain, et al.",
      journal: "Nature Immunology",
      firstAuthor: false,
    },
    {
      year: 2023,
      title: "Follicle center lymphoma of the lower female genital tract: a novel variant of primary cutaneous follicle center lymphoma",
      authors: "Annapurna Saksena, Ashish Jain, Svetlana D Pack, Jung Kim, et al.",
      journal: "The American Journal of Surgical Pathology",
      firstAuthor: false,
    },
    {
      year: 2022,
      title: "MAFDash: An easy-to-use dashboard builder for mutation data",
      authors: "Ashish Jain, Mayank Tandon",
      journal: "F1000 Research",
      firstAuthor: true,
      link: "https://github.com/ashishjain1988/MAFDash",
      linkLabel: "GitHub",
    },
    {
      year: 2021,
      title: "PlacentaCellEnrich: A tool to characterize gene sets using placenta cell-specific gene enrichment analysis",
      authors: "Ashish Jain, Geetu Tuteja",
      journal: "Placenta",
      firstAuthor: true,
      link: "https://placentacellenrich.gdcb.iastate.edu/",
      linkLabel: "Webtool",
    },
    {
      year: 2019,
      title: "Early onset preeclampsia in a model for human placental trophoblast",
      authors: "Megan A Sheridan, Ying Yang, Ashish Jain, Alex S Lyons, et al.",
      journal: "PNAS",
      firstAuthor: false,
    },
    {
      year: 2018,
      title: "TissueEnrich: Tissue-specific gene enrichment analysis",
      authors: "Ashish Jain, Geetu Tuteja",
      journal: "Bioinformatics",
      firstAuthor: true,
      link: "https://bioconductor.org/packages/release/bioc/html/TissueEnrich.html",
      linkLabel: "Bioconductor",
    },
    {
      year: 2017,
      title: "Deciphering transcriptional regulation in human embryonic stem cells specified towards a trophoblast fate",
      authors: "Ashish Jain, Toshihiko Ezashi, R. Michael Roberts, Geetu Tuteja",
      journal: "Scientific Reports",
      firstAuthor: true,
    },
  ],

  /* ----------------------------------------------------------
   *  TESTIMONIALS
   *  Replace the placeholder entries with real ones.
   *  Set placeholder: true to show the "(placeholder)" label.
   * ---------------------------------------------------------- */
  testimonials: [
    {
      quote:  "His TissueEnrich package has become a standard tool in our lab. The documentation and support have been exemplary, truly a practitioner's tool.",
      author: "Geetu Tuteja, Professor, Iowa State University",
      placeholder: false,
    },
    {
      quote:  "Dr. Jain's TissueEnrich tool enabled me to conduct my own research on the delamination of throphoblast-like synctia in an embryonic stem cell based differentiation model",
      author: "Masatoshi Ohgushi, Associate Professor, Kyoto University",
      placeholder: false,
    },
    {
      quote:  "Dr. Jain's continued work is indispensable to obstetricians in the United States. He leads by example and takes bioinfomatics to new heights of biological understanding.",
      author: "Mana M. Parast, Professor, UCSD",
      placeholder: false,
    },
  ],

  /* ----------------------------------------------------------
   *  CONTACT FORM  —  service dropdown options
   * ---------------------------------------------------------- */
  serviceOptions: [
    "Single-Cell / Spatial Transcriptomics",
    "RNA-Seq Analysis",
    "WES/WGS Analysis",
    "Proteomics",
    "Bulk NGS Analysis",
    "Machine Learning / Statistical Modeling",
    "R Package / Tool Development",
    "Interactive Data Visualization",
    "Other / General Inquiry",
  ],

};
