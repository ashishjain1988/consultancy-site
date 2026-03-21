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
    companyName: "ATGC Bioinformatics",
    name:       "Ashish Jain",
    credential: "PhD",
    role:       "Bioinformatics & Computational Biology Consultant",
    tagline:    "Senior Computational Biologist with 10+ years of expertise in NGS analysis, single-cell & spatial transcriptomics, machine learning, and multi-omics integration. Available for independent consulting.",
    email:      "contact@atgcbioinformatics.com",
    phone:      "(317) 529-7973",
    photo:      "assets/images/AJ_headshot.jpg",   // ← Put path to your headshot here, e.g. "assets/photo.jpg"
                      //   Leave empty to show placeholder
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
    { number: "10+", label: "Years Experience" },
    { number: "30+", label: "Publications"     },
    { number: "6+",  label: "R Packages & Tools" },
  ],

  /* ----------------------------------------------------------
   *  ABOUT  (paragraphs shown on the About section)
   * ---------------------------------------------------------- */
  about: {
    paragraphs: [
      "I am a Senior Computational Biologist and Bioinformatics Scientist with over a decade of hands-on experience across leading research hospitals, national laboratories, and industry. I hold a PhD in Bioinformatics and Computational Biology from Iowa State University.",
      "My work spans advanced NGS and multi-omics data analysis, single-cell and spatial transcriptomics, machine learning, and the development of open-source computational tools. I have led projects at Boston Children's Hospital, the Frederick National Laboratory for Cancer Research (NIH/NCI), and Takeda Pharmaceuticals.",
      "I am now available for independent consulting engagements to help research groups, biotech companies, and clinical organizations unlock the full potential of their genomic data.",
    ],
    highlights: [
      { icon: "🎓", title: "PhD, Bioinformatics",  detail: "Iowa State University, Bioinformatics and Computational Biology (Minor in Statistics)"},
      { icon: "🏥", title: "Current Role",          detail: "Senior Data Scientist, Merck"         },
      { icon: "📦", title: "Open Source",           detail: "TissueEnrich, MAFDash, scDown & more on GitHub" },
      { icon: "🏆", title: "Recognition",           detail: 'Multiple research excellence awards, Several Employee Awards' },
    ],
  },

  /* ----------------------------------------------------------
   *  SERVICES
   * ---------------------------------------------------------- */
  services: [
    {
      icon:  "🔬",
      title: "Single-Cell & Spatial Transcriptomics",
      description: "End-to-end scRNA-seq (10X Genomics, Smart-Seq2) and spatial transcriptomics (10X Visium/VisiumHD, MERFISH) analysis including quality control, integration, cell-type annotation, trajectory analysis, cell-cell communication, and multi-sample integration.",
      tags:  ["scRNA-seq", "Seurat", "Spatial", "Monocle3", "CellChat"],
    },
    {
      icon:  "🧬",
      title: "Bulk RNAseq Data Analysis",
      description: "Comprehensive bulk RNA-Seq data analysis, from raw sequencing reads to actionable biological insights, including quality control, differential expression, co-expression networks, and pathway interpretation.",
      tags:  ["RNA-seq", "WGCNA", "PPI", "GSEA"],
    },
    {
      icon:  "🧬",
      title: "Whole Exome and Genome Data Analysis",
      description: "Advanced whole genome and exome sequencing analysis, from raw data processing to accurate variant detection, annotation, and interpretation, enabling meaningful clinical and research insights.",
      tags:  ["WGS/WES", "SNV", "CNV", "GWAS"],
    },
    {
      icon:  "🧬",
      title: "Other Omics Data Analysis",
      description: "Proteomics, ChIP-Seq, DNA methylation, and other omics data analysis with statistical modeling and biological interpretation tailored to your research questions.",
      tags:  ["Proteomics","OLINK","ChIP-Seq","DNA Methylation"],
    },
    {
      icon:  "🤖",
      title: "Machine Learning & Statistical Modeling",
      description: "Supervised and unsupervised learning applied to biological data — classification, regression, clustering, deep learning for protein sequences, and multi-omics integration.",
      tags:  ["R", "Python", "scikit-learn", "deep learning"],
    },
    {
      icon:  "📊",
      title: "Interactive Data Visualization and Tool Development",
      description: "Custom R Shiny dashboards and interactive multi-omics visualization webtools for exploring and sharing complex genomic datasets with collaborators and clinicians.",
      tags:  ["R Shiny", "ggplot2", "plotly", "VitessceR"],
    },
  ],

  /* ----------------------------------------------------------
   *  EXPERIENCE
   *  Each item: date, title, org, bullets (array of strings)
   *  Optionally add a `link` to each bullet for hyperlinks.
   * ---------------------------------------------------------- */
  experience: [
    {
      date:  "February 2026 — Present",
      title: "Senior Data Scientist",
      org:   "Merck & Co.",
      bullets: [
        "Delivering bioinformatics support to neuroscience research groups, including comprehensive analysis of bulk RNA-seq, proteomics, and integrative multi-omics datasets to drive meaningful biological insights.",
        "Developed interactive HTML dashboards and R Shiny applications to seamlessly share and explore analyzed NGS data with collaborators, enabling intuitive visualization and data-driven insights.",
      ],
    },
    {
      date:  "April 2022 — January 2026",
      title: "Data Scientist III",
      org:   "Boston Children's Hospital (BCH)",
      bullets: [
        "Lead bioinformatics support for multiple research groups: NGS analysis, machine learning, and statistical modeling in collaboration with clinicians and biologists.",
        "Analyzed immune scRNA-seq data from skin inflammatory pain models identifying cell-type-specific transcriptional programs and neuroimmune interactomes (Nature Immunology, 2024).",
        "Developed automated pipeline to identify compound heterozygous variants (small + structural) from trio WGS data for Nystagmus and Strabismus families.",
        "Built R Shiny applications, multi-omics visualization tools, and the scDown R package (https://github.com/BCH-RC/scDown).",
        "Developed and optimized pipelines for scRNA-seq, spatial, Hi-C, WGS/WES, proteomics, and DNA methylation on BCH HPC.",
        "Led bioinformatics workshops, mentored junior staff and students. Contributed to 10+ peer-reviewed manuscripts.",
      ],
    },
    {
      date:  "December 2020 — April 2022",
      title: "Bioinformatics Analyst II",
      org:   "Frederick National Laboratory for Cancer Research (NIH/NCI)",
      bullets: [
        "Led multi-omics integration (RNA-seq, WGS, WES, DNA methylation, PPI, DrugBank) across 40+ rare cancers in the MyPART team to identify marker genes and drug targets.",
        "Developed the MAFDash R package for interactive mutation data dashboards — freely available on GitHub (https://github.com/ashishjain1988/MAFDash).",
        "Provided bioinformatics support across NIH/NCI research groups as part of the CCBR team.",
        "Led trainings on R package development best practices. Contributed to 3+ peer-reviewed manuscripts.",
      ],
    },
    {
      date:  "May 2019 — August 2019",
      title: "Computational Biology Intern",
      org:   "Takeda Pharmaceuticals",
      bullets: [
        "Led analysis of human microbiome data for discovery of novel protein subfamilies using ProtVec encoding and clustering.",
        "Benchmarked new GPU infrastructure; tested multi-layer CNN models for protein sequence encoding.",
      ],
    },
    {
      date:  "August 2015 — November 2020",
      title: "Research Assistant (PhD)",
      org:   "Iowa State University",
      bullets: [
        "Developed TissueEnrich R/Bioconductor package for tissue-specific gene enrichment analysis — downloaded by thousands of users worldwide (https://bioconductor.org/packages/release/bioc/html/TissueEnrich.html).",
        "Built PlacentaCellEnrich R Shiny web tool for placenta cell-specific gene enrichment analysis (https://placentacellenrich.gdcb.iastate.edu/).",
        "Investigated effects of oxygen stress on trophoblast invasion in early-onset preeclampsia using bulk RNA-seq and WGCNA.",
        "Contributed to 10+ peer-reviewed manuscripts including publications in PNAS, Epigenetics & Chromatin, and Bioinformatics.",
      ],
    },
    {
      date:  "May 2015 — August 2015",
      title: "Bioinformatics Intern",
      org:   "Cancer Genetics Inc.",
      bullets: [
        "Built a cancer variant database using the cBioPortal codebase for internal diagnostic data visualization and analysis.",
        "Designed an automated variant-calling pipeline for WGS/WES datasets using Bash and Python.",
      ],
    },
    {
      date:  "July 2011 — July 2014",
      title: "Software Engineer",
      org:   "Onmobile Global Limited / Hcentive Private Limited",
      bullets: [
        "Developed web-based solutions for US healthcare companies to store post-enrollment details in Medicare plans at Hcentive.",
        "Worked on the User Interface of a video calling Android application at Onmobile.",
      ],
    },
  ],

  /* ----------------------------------------------------------
   *  SKILLS
   *  Each group has a title and a list of skill strings.
   * ---------------------------------------------------------- */
  skills: [
    {
      title: "NGS & Multi-Omics Analysis",
      items: ["scRNA-seq", "Spatial Transcriptomics", "Bulk RNA-seq", "WGS/WES", "ChIP-Seq", "DNA Methylation", "Proteomics", "Hi-C","MOFA", "GWAS", "Trajectory Analysis", "Cell-Cell Communication","WGCNA"],
    },
    {
      title: "Programming",
      items: ["R", "Python", "Bash", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Data Visualization",
      items: ["R Shiny", "ggplot2", "plotly", "VitessceR","CellxGene"],
    },
    {
      title: "Machine Learning & Statistics",
      items: ["Supervised Learning", "Unsupervised Learning", "Classification", "Clustering", "Regression"],
    },
    {
      title: "Infrastructure & Tools",
      items: ["HPC (SLURM)", "AWS", "Distributed Computing", "GitHub/GitLab", "MySQL", "Oracle"],
    },
    {
      title: "Leadership",
      items: ["Cross-functional Project Mgmt", "Mentoring", "Workshop Facilitation", "Study Design"],
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
   *  AWARDS
   * ---------------------------------------------------------- */
  awards: [
    { year: "2023 & 2025", title: '"Way to Shine" Award',                              org: "Boston Children's Hospital"                          },
    { year: "2021 & 2022", title: "Performance Bonus — Outstanding Research Contribution", org: "Frederick National Laboratory for Cancer Research" },
    { year: "2020",        title: "Research Award for Exceptional Doctoral Research",  org: "GPSS, Iowa State University"                         },
    { year: "2019",        title: "Research Excellence Award",                         org: "Graduate College, Iowa State University"              },
    { year: "2015",        title: "MCBIOS Travel Grant",                               org: "MCBIOS-XII Annual Conference"                        },
    { year: "2013",        title: "Employee of the Month",                             org: "Hcentive Private Limited"                            },
    { year: "2011",        title: "First Prize, Training Project",                     org: "Onmobile Private Limited, Bangalore"                },
    { year: "2010",        title: "Summer Research Fellowship",                        org: "Indian Academy of Science, Bangalore"                },
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
