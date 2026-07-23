import llmPromptImg from '../assets/LLM and Prompt Engineering.png';
import pythonLlmFoundationsImg from '../assets/Python for LLM development foundations.png';
import appliedLlmImg from '../assets/Applied LLM.png';
import pythonProgrammingImg from '../assets/Python Programming.png';

export const COURSES = [
  {
    id: "llm-prompt-engineering",
    title: "Prompt Engineering and LLM",
    category: "AI Courses",
    description: "A practitioner-focused course on getting real work done with large language models — through prompting skill, Microsoft's LLM-in-Excel integration, no-code automation via Power Automate, and building agentic AI solutions with Copilot Studio.",
    duration: "8 Weeks",
    level: "Beginner",
    price: "₹19,999",
    rating: 4.8,
    reviews: 240,
    featured: true,
    timings: "Sat & Sun, 10:00 AM - 12:30 PM IST",
    image: llmPromptImg,
    mentor: {
      name: "Ananya Sharma",
      role: "Prompt Architect",
      company: "OpenAI Client Partner"
    },
    syllabus: [
      {
        title: "1(a) Prompt Engineering",
        topics: [
          "What LLMs are and how they interpret and respond to prompts",
          "Core prompting techniques: zero-shot, few-shot, chain-of-thought, role prompting",
          "Structuring prompts with clear instructions, context, constraints, and output format",
          "Using delimiters, system/user/assistant roles, and XML/JSON-style formatting for reliable outputs",
          "Techniques for reducing hallucination and improving factual accuracy",
          "Iterative prompt refinement and A/B testing prompts",
          "Designing prompts for summarization, extraction, classification, and content generation",
          "Common pitfalls (ambiguity, prompt injection, context overload) and how to avoid them",
          "Hands-on exercises building a personal prompt library for reusable tasks"
        ]
      },
      {
        title: "1(b) LLM in Excel",
        topics: [
          "Overview of AI-powered functions available inside Excel (e.g., Copilot for Excel / LLM-driven formulas)",
          "Using natural language to generate formulas, clean data, and summarize tables",
          "Building AI-assisted data classification and text-analysis columns",
          "Automating repetitive spreadsheet tasks (categorization, sentiment tagging, data extraction) using LLM functions",
          "Combining traditional Excel formulas with AI-generated outputs",
          "Best practices for accuracy checking and auditing AI-generated spreadsheet content",
          "Practical use cases: report summarization, survey analysis, and data enrichment"
        ]
      },
      {
        title: "1(c) Power Automate",
        topics: [
          "Introduction to Power Automate and low-code workflow automation",
          "Building flows that trigger on events (email, forms, files, schedules)",
          "Connecting Power Automate with AI Builder and LLM/Copilot connectors",
          "Automating document processing, approvals, and notifications",
          "Integrating Power Automate with Excel, SharePoint, Teams, and Outlook",
          "Error handling, conditions, loops, and variables within flows",
          "Building an end-to-end automated business process (e.g., AI-assisted email triage or approval workflow)"
        ]
      },
      {
        title: "1(d) Copilot Studio — Agentic AI Development",
        topics: [
          "Fundamentals of agentic AI and how Copilot Studio fits into the Microsoft AI ecosystem",
          "Designing conversational topics, triggers, and dialog flows",
          "Connecting Copilot agents to knowledge sources (SharePoint, websites, files)",
          "Building custom actions/plugins that call APIs and Power Automate flows",
          "Adding memory, variables, and multi-turn context handling to an agent",
          "Deploying agents across Teams, web chat, and other channels",
          "Testing, monitoring, and iterating on agent performance",
          "Capstone: build and deploy a working agentic assistant for a real business task"
        ]
      }
    ]
  },
  {
    id: "python-llm-foundations",
    title: "Applied AI with Python - Foundation",
    category: "AI Courses",
    description: "A grounding in the technical building blocks behind modern AI systems — machine learning, deep learning, NLP, computer vision, and LLMs — using Python.",
    duration: "12 Weeks",
    level: "Intermediate",
    price: "₹29,999",
    rating: 4.9,
    reviews: 310,
    featured: true,
    timings: "Sat & Sun, 2:00 PM - 4:30 PM IST",
    image: pythonLlmFoundationsImg,
    mentor: {
      name: "Rajesh Varma",
      role: "ML Platform Engineer",
      company: "Meta"
    },
    syllabus: [
      {
        title: "2(a) ML Basics",
        topics: [
          "Supervised vs. unsupervised vs. reinforcement learning",
          "Data preprocessing, feature engineering, and train/test splits",
          "Regression and classification algorithms (linear/logistic regression, decision trees, random forests, SVM, KNN)",
          "Model evaluation metrics (accuracy, precision, recall, F1, ROC-AUC, RMSE)",
          "Overfitting, underfitting, cross-validation, and regularization",
          "Using scikit-learn to build and evaluate ML pipelines",
          "A hands-on end-to-end ML project (data → model → evaluation)"
        ]
      },
      {
        title: "2(b) DL Basics",
        topics: [
          "Neural network fundamentals: neurons, layers, activation functions",
          "Forward propagation, backpropagation, and gradient descent",
          "Loss functions and optimizers (SGD, Adam, etc.)",
          "Building neural networks with PyTorch/TensorFlow/Keras",
          "Convolutional Neural Networks (CNNs) fundamentals",
          "Recurrent Neural Networks (RNNs), LSTMs, and sequence modeling basics",
          "Regularization techniques: dropout, batch normalization",
          "Training, validating, and tuning a deep learning model"
        ]
      },
      {
        title: "2(c) NLP Basics",
        topics: [
          "Text preprocessing: tokenization, stemming, lemmatization, stop-word removal",
          "Text representation: Bag-of-Words, TF-IDF, word embeddings (Word2Vec, GloVe)",
          "Introduction to the Transformer architecture and attention mechanism",
          "Using Hugging Face libraries for common NLP tasks (classification, NER, summarization)",
          "Sequence-to-sequence models and their applications",
          "Evaluation metrics for NLP tasks (BLEU, ROUGE, perplexity)",
          "Building a simple NLP pipeline (e.g., sentiment analysis or text classifier)"
        ]
      },
      {
        title: "2(d) Computer Vision",
        topics: [
          "Image representation, preprocessing, and augmentation",
          "CNN architectures (LeNet, ResNet, VGG) and transfer learning",
          "Object detection and image segmentation fundamentals",
          "Using OpenCV and PyTorch/TensorFlow for vision tasks",
          "Introduction to multimodal models connecting vision and language",
          "Practical project: image classification or object detection pipeline"
        ]
      },
      {
        title: "2(e) LLM Basics",
        topics: [
          "Evolution from RNNs to Transformers to modern LLMs",
          "Tokenization, embeddings, and the attention mechanism explained",
          "Pretraining vs. fine-tuning vs. instruction-tuning vs. RLHF",
          "Understanding context windows, temperature, and sampling parameters",
          "Using LLM APIs (OpenAI, Anthropic, open-source models) programmatically in Python",
          "Basics of Retrieval-Augmented Generation (RAG) and embeddings-based search",
          "Prompt-driven application development using Python SDKs"
        ]
      }
    ]
  },
  {
    id: "applied-llm-engineering",
    title: "Agentic AI & LLM Engineering: LangChain, LangGraph, MLOps & AI Agents",
    category: "AI Courses",
    description: "Moving from foundational knowledge to building, orchestrating, and operationalizing real LLM-powered applications using industry-standard frameworks and tools.",
    duration: "12 Weeks",
    level: "Advanced",
    price: "₹39,999",
    rating: 4.9,
    reviews: 180,
    featured: true,
    timings: "Mon & Wed, 8:00 PM - 10:00 PM IST",
    image: appliedLlmImg,
    mentor: {
      name: "Dr. Aditya Kulkarni",
      role: "Former Lead AI Scientist",
      company: "Google DeepMind"
    },
    syllabus: [
      {
        title: "3(a) MLOps Basics",
        topics: [
          "The ML/LLM lifecycle: data → training/fine-tuning → deployment → monitoring",
          "Version control for data and models (DVC, model registries)",
          "Experiment tracking (MLflow, Weights & Biases)",
          "CI/CD concepts applied to ML/LLM pipelines",
          "Model monitoring, drift detection, and retraining triggers",
          "Reproducibility and environment management best practices"
        ]
      },
      {
        title: "3(b) LangChain and LangGraph",
        topics: [
          "Core LangChain concepts: chains, prompts, memory, tools, and agents",
          "Building RAG pipelines with vector databases (e.g., FAISS, Chroma, Pinecone)",
          "Introduction to LangGraph for building stateful, multi-step agent workflows",
          "Designing agent graphs with nodes, edges, and conditional routing",
          "Multi-agent orchestration and tool-calling patterns",
          "Debugging and tracing LLM applications (LangSmith or equivalent)",
          "Hands-on project: a RAG-based or multi-agent application"
        ]
      },
      {
        title: "3(c) N8N",
        topics: [
          "Introduction to n8n as an open-source workflow automation tool",
          "Building automation workflows with triggers, nodes, and integrations",
          "Connecting n8n to LLM APIs and vector databases",
          "Automating data pipelines and notifications using n8n",
          "Combining n8n with LangChain/LangGraph agents for hybrid automation",
          "Deploying and self-hosting n8n workflows"
        ]
      },
      {
        title: "3(d) Project Development Using Local LLMs",
        topics: [
          "Overview of open-source/local LLMs (Llama, Mistral, etc.) and when to use them over hosted APIs",
          "Running local LLMs using tools like Ollama or LM Studio",
          "Quantization and hardware considerations for local inference",
          "Building a privacy-preserving, offline-capable LLM application",
          "Integrating local LLMs with LangChain/LangGraph pipelines",
          "Capstone project: an end-to-end application powered entirely by a local LLM"
        ]
      }
    ]
  },
  {
    id: "python-production-deployment",
    title: "Python Backend Development & Deployment",
    category: "Development Courses",
    description: "Core software engineering skills — programming fundamentals, data structures and algorithms, API development, containerization, and deployment — needed to turn an AI prototype into a production-ready application.",
    duration: "16 Weeks",
    level: "Intermediate",
    price: "₹34,999",
    rating: 4.8,
    reviews: 420,
    featured: true,
    timings: "Tue & Thu, 6:00 PM - 8:30 PM IST",
    image: pythonProgrammingImg,
    mentor: {
      name: "Kavya Nair",
      role: "Framework Developer",
      company: "Vercel"
    },
    syllabus: [
      {
        title: "4(a) Python Programming",
        topics: [
          "Python syntax, data types, control flow, and functions",
          "Object-oriented programming in Python (classes, inheritance, polymorphism)",
          "File handling, error handling, and exception management",
          "Working with modules, packages, and virtual environments",
          "List/dict comprehensions, generators, and decorators",
          "Writing clean, Pythonic, and well-documented code"
        ]
      },
      {
        title: "4(b) Data Structures & Algorithms (DSA)",
        topics: [
          "Core data structures: arrays, linked lists, stacks, queues, trees, graphs, hash maps",
          "Algorithmic techniques: recursion, sorting, searching, dynamic programming, greedy algorithms",
          "Time and space complexity analysis (Big-O notation)",
          "Problem-solving strategies for coding interviews and real-world efficiency",
          "Practical implementation of DSA concepts in Python"
        ]
      },
      {
        title: "4(c) FastAPI",
        topics: [
          "Building REST APIs with FastAPI: routes, request/response models, path/query parameters",
          "Data validation using Pydantic",
          "Handling authentication, middleware, and error handling",
          "Building async endpoints for high-performance applications",
          "Exposing ML/LLM models as API endpoints",
          "API documentation with Swagger/OpenAPI (auto-generated by FastAPI)",
          "Testing APIs with pytest and Postman/cURL"
        ]
      },
      {
        title: "4(d) Docker",
        topics: [
          "Containerization concepts and why they matter for deployment",
          "Writing Dockerfiles for Python/ML applications",
          "Building, tagging, and running Docker images",
          "Managing multi-container applications with Docker Compose",
          "Environment variables, volumes, and networking in Docker",
          "Best practices for lightweight, production-ready containers"
        ]
      },
      {
        title: "4(e) End-to-End Deployment of a Project",
        topics: [
          "Structuring a full-stack AI project for deployment (API + model + frontend/UI)",
          "Deploying containerized applications to a cloud platform (AWS/Azure/GCP or a PaaS)",
          "Setting up CI/CD pipelines for automated build, test, and deploy",
          "Environment configuration, secrets management, and scaling considerations",
          "Basic monitoring, logging, and error tracking in production",
          "Capstone: deploy a working LLM-powered application end-to-end, from code to a live, accessible URL"
        ]
      }
    ]
  }
];
