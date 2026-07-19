export const COURSES = [
  {
    id: "gen-ai",
    title: "Generative AI",
    category: "AI Courses",
    description: "Master Large Language Models (LLMs), LangChain, Vector Databases, and building production-grade AI agents.",
    duration: "10 Weeks",
    level: "Advanced",
    price: "₹49,999",
    rating: 4.9,
    reviews: 320,
    featured: true,
    timings: "Sat & Sun, 10:00 AM - 1:00 PM EST",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Dr. Aris Thorne",
      role: "Former Lead AI Scientist",
      company: "Google DeepMind"
    },
    syllabus: [
      "Introduction to Transformers & Attention Mechanism",
      "Fine-tuning LLMs with PEFT & LoRA",
      "Retrieval Augmented Generation (RAG) Architecture",
      "Building Multi-Agent Systems with LangGraph & CrewAI",
      "Deploying AI Models at Scale with Triton & vLLM"
    ]
  },
  {
    id: "prompt-eng",
    title: "ChatGPT & Prompt Engineering",
    category: "AI Courses",
    description: "Learn advanced prompting techniques, system prompts, prompt chaining, and API integration for automated workflows.",
    duration: "4 Weeks",
    level: "Beginner",
    price: "₹9,999",
    rating: 4.8,
    reviews: 540,
    featured: true,
    timings: "Mon & Wed, 7:00 PM - 9:00 PM EST",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Sarah Jenkins",
      role: "Prompt Architect",
      company: "OpenAI Client Partner"
    },
    syllabus: [
      "Foundations of Prompting & Tokenization",
      "Few-Shot, Chain-of-Thought, and ReAct Frameworks",
      "Managing Context Windows and System Messages",
      "Automating Workflows with OpenAI & Anthropic APIs",
      "Mitigating Hallucinations and Security Risks (Prompt Injection)"
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Engineering",
    category: "AI Courses",
    description: "Deep dive into regression, classification, clustering, hyperparameter tuning, and ML pipelines using Scikit-Learn.",
    duration: "12 Weeks",
    level: "Intermediate",
    price: "₹39,999",
    rating: 4.7,
    reviews: 420,
    featured: true,
    timings: "Tue & Thu, 6:00 PM - 8:30 PM EST",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Marcus Aurelius",
      role: "ML Platform Engineer",
      company: "Meta"
    },
    syllabus: [
      "Linear & Logistic Regression, Decision Trees",
      "Ensemble Methods: Random Forests & XGBoost",
      "Feature Engineering & Dimensionality Reduction (PCA)",
      "Model Evaluation, Cross-Validation, and Tuning",
      "Deploying Models with FastAPI and Docker"
    ]
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Neural Networks",
    category: "AI Courses",
    description: "Build convolutional neural networks (CNNs) and recurrent networks (RNNs) using TensorFlow and PyTorch.",
    duration: "12 Weeks",
    level: "Advanced",
    price: "₹44,999",
    rating: 4.8,
    reviews: 190,
    featured: false,
    timings: "Sat & Sun, 2:00 PM - 5:00 PM EST",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Dr. Elena Rostova",
      role: "Neural Network Researcher",
      company: "NVIDIA"
    },
    syllabus: [
      "Artificial Neural Networks (ANN) & Backpropagation",
      "Convolutional Networks (CNN) for Image Recognition",
      "Sequence Models: RNN, LSTM, and GRUs",
      "Generative Adversarial Networks (GANs) and Autoencoders",
      "Optimization & Regularization (Dropout, Adam, Batch Norm)"
    ]
  },
  {
    id: "nlp-speech",
    title: "Natural Language Processing (NLP)",
    category: "AI Courses",
    description: "Learn sentiment analysis, text summarization, speech-to-text, translation, and tokenizers using Hugging Face.",
    duration: "8 Weeks",
    level: "Advanced",
    price: "₹29,999",
    rating: 4.7,
    reviews: 150,
    featured: false,
    timings: "Mon & Wed, 6:00 PM - 8:00 PM EST",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "David Vance",
      role: "Staff NLP Engineer",
      company: "Apple Siri Team"
    },
    syllabus: [
      "Tokenization, Stemming, and Lemmatization",
      "Word Embeddings: Word2Vec, GloVe, and FastText",
      "Fine-tuning BERT and RoBERTa for Classification",
      "Sequence-to-Sequence Models and Machine Translation",
      "Speech-to-Text Pipelines & Whisper Integration"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    category: "AI Courses",
    description: "Build object detection systems, image segmentation models, and face recognition apps with OpenCV, YOLO, and PyTorch.",
    duration: "10 Weeks",
    level: "Advanced",
    price: "₹34,999",
    rating: 4.8,
    reviews: 180,
    featured: false,
    timings: "Tue & Thu, 7:00 PM - 9:00 PM EST",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Kenji Sato",
      role: "Vision Architect",
      company: "Tesla Autopilot Team"
    },
    syllabus: [
      "Image Processing Fundamentals with OpenCV",
      "Edge Detection, Contours, and Feature Matching",
      "Object Detection with YOLOv8 & SSD",
      "Semantic Segmentation with U-Net",
      "Real-time Video Processing & Edge Deployment"
    ]
  },
  /* {
    id: "react-js",
    title: "React JS Development",
    category: "Development Courses",
    description: "Master React 19, hooks, state management (Redux Toolkit/Zustand), styling with Tailwind CSS, and API integrations.",
    duration: "8 Weeks",
    level: "Intermediate",
    price: "₹19,999",
    rating: 4.8,
    reviews: 680,
    featured: true,
    timings: "Sat & Sun, 10:00 AM - 12:30 PM EST",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Alex Rivera",
      role: "Senior UI Engineer",
      company: "Vercel"
    },
    syllabus: [
      "Modern JS ES6+ & React Elements",
      "State Management: useState, useEffect, and Context API",
      "Custom Hooks and Performance Optimization (memo, useMemo)",
      "Routing with React Router DOM v6",
      "State Management using Zustand and Redux Toolkit"
    ]
  }, */
  {
    id: "next-js",
    title: "Next.js Production Framework",
    category: "Development Courses",
    description: "Build production-ready SEO-optimized React websites using Next.js App Router, SSR, SSG, ISR, and Server Actions.",
    duration: "6 Weeks",
    level: "Advanced",
    price: "₹24,999",
    rating: 4.9,
    reviews: 310,
    featured: false,
    timings: "Mon & Wed, 8:00 PM - 10:00 PM EST",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Clara Dupont",
      role: "Framework Developer",
      company: "Vercel"
    },
    syllabus: [
      "Next.js App Router & Server Components vs Client Components",
      "Data Fetching, Caching, and Revalidation (ISR)",
      "Dynamic Routing & Layouts",
      "Server Actions & Form Handling",
      "Next.js Optimization (Image, Font, Script) & Vercel Deployment"
    ]
  },
  /* {
    id: "mern-stack",
    title: "MERN Full Stack Development",
    category: "Development Courses",
    description: "Create interactive SaaS applications using MongoDB, Express.js, React, Node.js, and secure JWT authentication.",
    duration: "16 Weeks",
    level: "Intermediate",
    price: "₹49,999",
    rating: 4.8,
    reviews: 820,
    featured: true,
    timings: "Sat & Sun, 1:00 PM - 4:00 PM EST",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Vikram Malhotra",
      role: "Full Stack Lead",
      company: "Netflix"
    },
    syllabus: [
      "Node.js Core & Express REST API Design",
      "MongoDB Schema Modeling & Mongoose Queries",
      "Secure JWT Authentication & Role-Based Access Control",
      "Integrating React Frontend with Node Backend",
      "Payment Gateway Integration (Stripe) and Cloud Deployment"
    ]
  }, */
  {
    id: "python-fullstack",
    title: "Python Full Stack Development",
    category: "Development Courses",
    description: "Learn Python programming, database integration, and build web applications with Django, PostgreSQL, and React.",
    duration: "16 Weeks",
    level: "Beginner",
    price: "₹44,999",
    rating: 4.8,
    reviews: 470,
    featured: true,
    timings: "Tue & Thu, 7:00 PM - 9:30 PM EST",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Rachel Green",
      role: "Backend Architect",
      company: "Spotify"
    },
    syllabus: [
      "Python Core Syntax, OOP, and Scripting",
      "Relational Database Design with PostgreSQL & SQL",
      "Django Web Framework & REST API Development",
      "Frontend Integration with Tailwind & JavaScript",
      "Unit Testing, CI/CD, and Heroku/AWS Deployment"
    ]
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Developer",
    category: "Development Courses",
    description: "Build robust enterprise applications using Java 17, Spring Boot, Microservices, Hibernate, and Angular/React.",
    duration: "20 Weeks",
    level: "Intermediate",
    price: "₹54,999",
    rating: 4.7,
    reviews: 350,
    featured: false,
    timings: "Mon & Wed, 6:30 PM - 9:00 PM EST",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Sanjay Gupta",
      role: "Enterprise Solutions Lead",
      company: "Amazon Web Services"
    },
    syllabus: [
      "Java OOPs, Streams, and Multithreading",
      "Spring Boot Architecture, MVC & Data JPA",
      "Microservices Communication (REST, Spring Cloud, Kafka)",
      "Database Layer with Hibernate & PostgreSQL",
      "Dockerizing Microservices & Deploying on AWS ECS"
    ]
  },
  {
    id: "python-prog",
    title: "Python Programming",
    category: "Development Courses",
    description: "Learn Python from scratch. Covers variables, control structures, OOP, file handling, and basic scripting projects.",
    duration: "6 Weeks",
    level: "Beginner",
    price: "₹9,999",
    rating: 4.8,
    reviews: 950,
    featured: true,
    timings: "Tue & Thu, 5:30 PM - 7:30 PM EST",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Nate Robinson",
      role: "Automation Engineer",
      company: "Google"
    },
    syllabus: [
      "Python Installation & Syntax Essentials",
      "Control Flow, Loops, and Custom Functions",
      "Data Structures: Lists, Tuples, Dictionaries, Sets",
      "Object-Oriented Programming (OOP) in Python",
      "File Handling, Exception Catching, and API Consumption"
    ]
  },
  /* {
    id: "data-science",
    title: "Data Science & Analytics",
    category: "AI Courses",
    description: "Master NumPy, Pandas, Matplotlib, SQL, and Tableau. Extract insights, build dashboards, and perform data stories.",
    duration: "10 Weeks",
    level: "Beginner",
    price: "₹24,999",
    rating: 4.7,
    reviews: 580,
    featured: true,
    timings: "Sat & Sun, 9:00 AM - 11:30 AM EST",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Aisha Patel",
      role: "Lead Analytics Consultant",
      company: "Uber"
    },
    syllabus: [
      "Data Manipulation with NumPy & Pandas",
      "Data Visualization using Seaborn & Matplotlib",
      "Advanced SQL Queries for Data Analysts",
      "Statistical Hypothesis Testing & A/B Testing",
      "Building Dashboards with Tableau & PowerBI"
    ]
  }, */
  {
    id: "aws-cloud",
    title: "AWS Cloud Architect",
    category: "Cloud & DevOps",
    description: "Master AWS Core Services (EC2, S3, RDS, Lambda, IAM, VPC) and prepare for the AWS Solutions Architect Certification.",
    duration: "8 Weeks",
    level: "Intermediate",
    price: "₹29,999",
    rating: 4.8,
    reviews: 290,
    featured: false,
    timings: "Mon & Wed, 7:00 PM - 9:00 PM EST",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "John Miller",
      role: "Principal Cloud Engineer",
      company: "Microsoft Azure"
    },
    syllabus: [
      "AWS Global Infrastructure & IAM Permissions",
      "Compute Services: EC2, Auto Scaling, Elastic Beanstalk",
      "AWS Networking: VPC, Subnets, Route53, CloudFront",
      "AWS Databases: RDS, DynamoDB, ElastiCache",
      "Serverless Architecture: Lambda, API Gateway, S3 Hosting"
    ]
  },
  {
    id: "docker-containers",
    title: "Docker & Containerization",
    category: "Cloud & DevOps",
    description: "Understand containers, images, volumes, network namespaces, multi-stage builds, and Docker Compose orchestration.",
    duration: "4 Weeks",
    level: "Beginner",
    price: "₹9,999",
    rating: 4.8,
    reviews: 410,
    featured: false,
    timings: "Fri, 6:00 PM - 9:00 PM EST",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Viktor Ivanov",
      role: "DevOps Engineer",
      company: "Kubernetes Foundation Contributor"
    },
    syllabus: [
      "Virtualization vs Containerization Concept",
      "Creating Dockerfiles & Custom Images",
      "Managing Containers, Volumes, and Ports",
      "Multi-container Networking with Docker Compose",
      "Securing Images & Publishing to Docker Hub"
    ]
  },
  {
    id: "kubernetes-production",
    title: "Kubernetes in Production",
    category: "Cloud & DevOps",
    description: "Learn Kubernetes architecture, Pods, Deployments, Services, Helm charts, Ingress, and cluster troubleshooting.",
    duration: "8 Weeks",
    level: "Advanced",
    price: "₹34,999",
    rating: 4.9,
    reviews: 260,
    featured: false,
    timings: "Sat & Sun, 3:00 PM - 5:30 PM EST",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Marcus Aurelius",
      role: "Infrastructure Lead",
      company: "Meta"
    },
    syllabus: [
      "K8s Control Plane & Worker Node Components",
      "Deployments, ReplicaSets, and Pod Lifecycle",
      "Service Discovery, ClusterIP, NodePort, LoadBalancer",
      "Configuring Ingress Controllers & SSL/TLS Certificates",
      "Persistent Storage (PV/PVC) and Statefulness"
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineering Masterclass",
    category: "Cloud & DevOps",
    description: "Bridge the gap between development and operations. Learn CI/CD pipelines, GitOps, Terraform, and Ansible.",
    duration: "12 Weeks",
    level: "Intermediate",
    price: "₹44,999",
    rating: 4.9,
    reviews: 580,
    featured: true,
    timings: "Tue & Thu, 7:00 PM - 9:30 PM EST",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    mentor: {
      name: "Liam O'Connor",
      role: "VP of Infrastructure",
      company: "Cloudflare"
    },
    syllabus: [
      "Version Control, Branching Models & Git workflows",
      "Infrastructure as Code (IaC) with Terraform",
      "Configuration Management using Ansible",
      "CI/CD Pipeline Construction with GitHub Actions & Jenkins",
      "Monitoring & Alerting with Prometheus and Grafana"
    ]
  }
];
