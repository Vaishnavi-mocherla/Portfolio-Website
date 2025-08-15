// Skills Flashcard Functionality
class SkillsFlashcards {
  constructor() {
    this.skillCategories = [
      {
        title: "Programming Languages",
        icon: "💻",
        color: "#4F46E5",
        backgroundImage: "assets/skills/programming-languages.png",
        skills: [
          { name: "Python", icon: "assets/icons/python.svg" },
          { name: "SQL", icon: "assets/icons/mysql.svg" },
          { name: "R", icon: "assets/icons/R_logo.svg.png" },
          { name: "PySpark", icon: "assets/icons/pyspark.png" },
          { name: "React", icon: "assets/icons/react.svg" },
          { name: "JavaScript", icon: "assets/icons/javascript.svg" }
        ]
      },
      {
        title: "Data Engineering",
        icon: "🔧",
        color: "#059669",
        backgroundImage: "assets/skills/data-engineering.png",
        skills: [
          { name: "Apache Spark", icon: "assets/icons/spark.svg" },
          { name: "Apache Airflow", icon: "assets/icons/airflow.png" },
          { name: "Apache Kafka", icon: "assets/icons/kafka.svg" },
          { name: "Informatica", icon: "assets/icons/iics.png" },
          { name: "Hadoop", icon: "assets/icons/hadoop-svgrepo-com.svg" },
          { name: "BigQuery", icon: "assets/icons/bigquery-svgrepo-com.svg" },
          { name: "Databricks", icon: "assets/icons/databricks.svg" },
          { name: "Azure Data Factory", icon: "assets/icons/azure.svg" },
          { name: "Azure Blob Storage", icon: "assets/icons/azure.svg" }
        ]
      },
      {
        title: "Cloud",
        icon: "☁️",
        color: "#DC2626",
        backgroundImage: "assets/skills/cloud.png",
        skills: [
          { name: "Azure", icon: "assets/icons/azure.svg" },
          { name: "GCP (Google Cloud Platform)", icon: "assets/icons/gcp.svg" },
          { name: "AWS", icon: "assets/icons/aws.svg" },
          { name: "Snowflake", icon: "assets/icons/snowflake-svgrepo-com.svg" }
        ]
      },
      {
        title: "AI / ML",
        icon: "🤖",
        color: "#7C3AED",
        backgroundImage: "assets/skills/aiml.png",
        skills: [
          { name: "TensorFlow", icon: "assets/icons/tensorflow.svg" },
          { name: "PyTorch", icon: "assets/icons/pytorch.svg" },
          { name: "spaCy", icon: "assets/icons/spacy.svg" },
          { name: "LLM", icon: "assets/icons/ai-svgrepo-com.svg" },
          { name: "NLP", icon: "assets/icons/nlp-neurolinguistic-programation-svgrepo-com.svg" },
          { name: "OpenCV", icon: "assets/icons/opencv.svg" },
          { name: "Multi-Agent System", icon: "assets/icons/ai-svgrepo-com.svg" },
          { name: "LangChain", icon: "assets/icons/langchain.svg" },
          { name: "Semantic Kernel", icon: "assets/icons/sk_logo.png" },
          { name: "MLflow", icon: "assets/icons/mlflow.svg" },
          { name: "Azure OpenAI", icon: "assets/icons/azure.svg" },
          { name: "RAG", icon: "assets/icons/soundwave-svgrepo-com.svg" },
          { name: "Pinecone", icon: "assets/icons/pinecone-icon-seeklogo.svg" },
          { name: "Hugging Face", icon: "assets/icons/hugging-face-svgrepo-com.svg" },
          { name: "Transformers", icon: "assets/icons/hugging-face-svgrepo-com.svg" },
          { name: "AI Agents", icon: "assets/icons/ai-svgrepo-com.svg" }
        ]
      },
      {
        title: "Databases",
        icon: "🗄️",
        color: "#16A34A",
        backgroundImage: "assets/skills/database.png",
        skills: [
          { name: "PostgreSQL", icon: "assets/icons/postgresql-logo-svgrepo-com.svg" },
          { name: "MySQL", icon: "assets/icons/mysql.svg" },
          { name: "MongoDB", icon: "assets/icons/mongodb.svg" },
          { name: "SQL Server", icon: "assets/icons/microsoftsqlserver-svgrepo-com.svg" },
          { name: "HDFS", icon: "assets/icons/hadoop-svgrepo-com.svg" }
        ]
      },
      {
        title: "Data Analytics",
        icon: "📈",
        color: "#0891B2",
        backgroundImage: "assets/skills/data-analytics.png",
        skills: [
          { name: "Pandas", icon: "assets/icons/pandas-svgrepo-com.svg" },
          { name: "NumPy", icon: "assets/icons/numpy-svgrepo-com.svg" },
          { name: "PySpark", icon: "assets/icons/pyspark.png" },
          { name: "Scikit-learn", icon: "assets/icons/scikitlearn.svg" },
          { name: "TensorFlow", icon: "assets/icons/tensorflow.svg" }
        ]
      },
      {
        title: "Business Intelligence",
        icon: "📊",
        color: "#EA580C",
        backgroundImage: "assets/skills/bi.png",
        skills: [
          { name: "Power BI", icon: "assets/icons/Power-BI-Logo.png" },
          { name: "Tableau", icon: "assets/icons/tableau.svg" },
          { name: "Looker", icon: "assets/icons/looker-icon-svgrepo-com.svg" },
          { name: "QuickSight", icon: "assets/icons/aws-quicksight-svgrepo-com.svg" },
          { name: "Matplotlib", icon: "assets/icons/Matplotlib.svg" },
          { name: "Seaborn", icon: "assets/icons/seaborn-1.svg" },
          { name: "Excel", icon: "assets/icons/excel-svgrepo-com.svg" }
        ]
      },
      {
        title: "DevOps",
        icon: "⚙️",
        color: "#B91C1C",
        backgroundImage: "assets/skills/devops.png",
        skills: [
          { name: "Docker", icon: "assets/icons/docker-svgrepo-com.svg" },
          { name: "Kubernetes", icon: "assets/icons/kubernetes-svgrepo-com.svg" },
          { name: "Terraform", icon: "assets/icons/terraform-svgrepo-com.svg" },
          { name: "CI/CD", icon: "assets/icons/cicd-svgrepo-com.svg" }
        ]
      }
    ];
    
    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.isAutoplay = true;
    
    this.init();
  }
  
  init() {
    this.createFlashcardContainer();
    this.bindEvents();
    this.startAutoplay();
  }
  
  createFlashcardContainer() {
    const skillsSection = document.getElementById('technical-expertise');
    if (!skillsSection) return;
    
    // Create the flashcard HTML structure
    const flashcardHTML = `
      <div class="skills-label">Skills</div>
      <div class="content-wrapper">
        <h2 class="what-i-do-title">What I do</h2>
        <p class="what-i-do-description">I specialize in building end-to-end data solutions, from ETL pipelines to advanced AI systems, leveraging modern cloud technologies and machine learning frameworks.</p>
        
        <!-- Skills Flashcards -->
        <div class="skills-flashcards-container">
          <div class="flashcard-navigation">
            <button class="nav-btn prev-btn" id="prevBtn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            
            <div class="flashcard-indicators">
              ${this.skillCategories.map((_, index) => 
                `<div class="flashcard-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
              ).join('')}
            </div>
            
            <button class="nav-btn next-btn" id="nextBtn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
          
          <div class="flashcards-stack">
            ${this.skillCategories.map((category, index) => this.createFlashcard(category, index)).join('')}
          </div>
          
          <div class="autoplay-controls">
            <button class="autoplay-btn" id="autoplayBtn">
              <svg class="play-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
              <span>Pause</span>
            </button>
          </div>
        </div>
      </div>
    `;
    
    skillsSection.innerHTML = flashcardHTML;
  }
  
  createFlashcard(category, index) {
    const isActive = index === this.currentIndex;
    const zIndex = this.skillCategories.length - Math.abs(index - this.currentIndex);
    const translateX = (index - this.currentIndex) * 20;
    const scale = isActive ? 1 : 0.9 - (Math.abs(index - this.currentIndex) * 0.1);
    const opacity = isActive ? 1 : 0.3;
    
    return `
      <div class="flashcard ${isActive ? 'active' : ''}" 
           data-index="${index}"
           style="z-index: ${zIndex}; transform: translateX(${translateX}px) scale(${scale}); opacity: ${opacity};">
        <div class="flashcard-inner">
          <!-- Front of card -->
          <div class="flashcard-front" 
               style="background: linear-gradient(135deg, ${category.color}CC, ${this.adjustBrightness(category.color, -20)}CC), url('${category.backgroundImage}') center/cover;">
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-title">${category.title}</h3>
            <div class="skill-count">${category.skills.length} Skills</div>
            <div class="flip-hint">Click to view skills</div>
          </div>
          
          <!-- Back of card -->
          <div class="flashcard-back">
            <div class="category-header">
              <span class="category-icon-small">${category.icon}</span>
              <h4>${category.title}</h4>
            </div>
            <div class="skills-grid">
              ${category.skills.map(skill => `
                <div class="skill-item-flashcard">
                  ${skill.icon === 'text' ? 
                    `<div class="skill-icon-text">${skill.name.split(' ')[0]}</div>` :
                    `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon">`
                  }
                  <span class="skill-name">${skill.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  bindEvents() {
    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
      this.pauseAutoplay();
      this.goToPrevious();
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
      this.pauseAutoplay();
      this.goToNext();
    });
    
    // Indicator clicks
    document.querySelectorAll('.flashcard-indicator').forEach(indicator => {
      indicator.addEventListener('click', (e) => {
        this.pauseAutoplay();
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });
    
    // Flashcard flip on click
    document.querySelectorAll('.flashcard').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('active')) {
          // Pause autoplay when user interacts with card
          this.pauseAutoplay();
          card.classList.toggle('flipped');
        }
      });
    });
    
    // Autoplay toggle
    document.getElementById('autoplayBtn').addEventListener('click', () => {
      this.toggleAutoplay();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.pauseAutoplay();
        this.goToPrevious();
      } else if (e.key === 'ArrowRight') {
        this.pauseAutoplay();
        this.goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        this.toggleAutoplay();
      }
    });
  }
  
  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.skillCategories.length;
    this.updateFlashcards();
  }
  
  goToPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.skillCategories.length) % this.skillCategories.length;
    this.updateFlashcards();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateFlashcards();
  }
  
  updateFlashcards() {
    const flashcards = document.querySelectorAll('.flashcard');
    const indicators = document.querySelectorAll('.flashcard-indicator');
    
    flashcards.forEach((card, index) => {
      const isActive = index === this.currentIndex;
      const zIndex = this.skillCategories.length - Math.abs(index - this.currentIndex);
      const translateX = (index - this.currentIndex) * 20;
      const scale = isActive ? 1 : 0.9 - (Math.abs(index - this.currentIndex) * 0.1);
      const opacity = isActive ? 1 : 0.3;
      
      card.classList.toggle('active', isActive);
      card.classList.remove('flipped'); // Reset flip state
      card.style.zIndex = zIndex;
      card.style.transform = `translateX(${translateX}px) scale(${scale})`;
      card.style.opacity = opacity;
    });
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }
  
  startAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
    
    this.autoplayInterval = setInterval(() => {
      if (this.isAutoplay) {
        this.goToNext();
      }
    }, 4000);
  }
  
  pauseAutoplay() {
    this.isAutoplay = false;
    const btn = document.getElementById('autoplayBtn');
    const playIcon = btn.querySelector('.play-icon');
    const span = btn.querySelector('span');
    
    playIcon.innerHTML = `
      <polygon points="5,3 19,12 5,21"></polygon>
    `;
    span.textContent = 'Play';
    clearInterval(this.autoplayInterval);
  }
  
  toggleAutoplay() {
    this.isAutoplay = !this.isAutoplay;
    const btn = document.getElementById('autoplayBtn');
    const playIcon = btn.querySelector('.play-icon');
    const span = btn.querySelector('span');
    
    if (this.isAutoplay) {
      playIcon.innerHTML = `
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      `;
      span.textContent = 'Pause';
      this.startAutoplay();
    } else {
      playIcon.innerHTML = `
        <polygon points="5,3 19,12 5,21"></polygon>
      `;
      span.textContent = 'Play';
      clearInterval(this.autoplayInterval);
    }
  }
  
  adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SkillsFlashcards();
});
