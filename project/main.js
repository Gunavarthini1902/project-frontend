const mockData = {
  stats: {
    activeCourses: 5,
    learningStreak: 12,
    hoursLearned: 47.5,
    achievements: 18
  },
  courses: [
    {
      id: 1,
      title: "Deep Learning Fundamentals",
      description: "Master the foundations of deep learning and neural networks with practical examples.",
      category: "Deep Learning",
      level: "Intermediate",
      progress: 68,
      duration: "8 weeks",
      lessons: 42,
      status: "in-progress",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description: "Learn to build NLP applications using transformers and modern techniques.",
      category: "NLP",
      level: "Advanced",
      progress: 45,
      duration: "10 weeks",
      lessons: 56,
      status: "in-progress",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "💬"
    },
    {
      id: 3,
      title: "Computer Vision Essentials",
      description: "Explore image processing, object detection, and image classification techniques.",
      category: "Computer Vision",
      level: "Intermediate",
      progress: 82,
      duration: "6 weeks",
      lessons: 38,
      status: "in-progress",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "👁️"
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description: "Start your AI journey with fundamental machine learning concepts and algorithms.",
      category: "Machine Learning",
      level: "Beginner",
      progress: 100,
      duration: "4 weeks",
      lessons: 24,
      status: "completed",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "🤖"
    },
    {
      id: 5,
      title: "Reinforcement Learning",
      description: "Discover how agents learn through interaction and reward-based systems.",
      category: "RL",
      level: "Advanced",
      progress: 28,
      duration: "12 weeks",
      lessons: 64,
      status: "in-progress",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: "🎮"
    },
    {
      id: 6,
      title: "AI Ethics & Responsible AI",
      description: "Understanding ethical considerations and best practices in AI development.",
      category: "Ethics",
      level: "Beginner",
      progress: 0,
      duration: "3 weeks",
      lessons: 18,
      status: "recommended",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      icon: "⚖️"
    },
    {
      id: 7,
      title: "Generative AI & GANs",
      description: "Create stunning AI-generated content with generative adversarial networks.",
      category: "Generative AI",
      level: "Advanced",
      progress: 0,
      duration: "9 weeks",
      lessons: 48,
      status: "recommended",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      icon: "🎨"
    },
    {
      id: 8,
      title: "Data Preprocessing & Feature Engineering",
      description: "Master data cleaning, transformation, and feature selection techniques.",
      category: "Data Science",
      level: "Intermediate",
      progress: 0,
      duration: "5 weeks",
      lessons: 30,
      status: "recommended",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      icon: "📊"
    }
  ],
  achievements: [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first course",
      icon: "🎯",
      unlocked: true,
      date: "2 weeks ago"
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Maintain a 7-day learning streak",
      icon: "🔥",
      unlocked: true,
      date: "1 week ago"
    },
    {
      id: 3,
      title: "Knowledge Seeker",
      description: "Complete 5 courses",
      icon: "📚",
      unlocked: false,
      date: null
    },
    {
      id: 4,
      title: "Perfect Score",
      description: "Get 100% on a final exam",
      icon: "💯",
      unlocked: true,
      date: "3 days ago"
    },
    {
      id: 5,
      title: "Marathon Learner",
      description: "Spend 50 hours learning",
      icon: "⏱️",
      unlocked: false,
      date: null
    },
    {
      id: 6,
      title: "Social Butterfly",
      description: "Join 3 study groups",
      icon: "🦋",
      unlocked: true,
      date: "5 days ago"
    },
    {
      id: 7,
      title: "Night Owl",
      description: "Complete lessons after midnight",
      icon: "🦉",
      unlocked: true,
      date: "1 day ago"
    },
    {
      id: 8,
      title: "Master Mind",
      description: "Complete 10 advanced courses",
      icon: "🧙",
      unlocked: false,
      date: null
    }
  ],
  notifications: [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out the new Generative AI course!",
      time: "5 minutes ago",
      unread: true
    },
    {
      id: 2,
      title: "Achievement Unlocked",
      message: "You've earned the 'Night Owl' achievement!",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      title: "Assignment Due Soon",
      message: "Complete your NLP assignment by tomorrow",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 4,
      title: "Course Update",
      message: "New lessons added to Computer Vision",
      time: "1 day ago",
      unread: false
    }
  ]
};

class Dashboard {
  constructor() {
    this.currentView = 'overview';
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.renderStats();
    this.renderContinueCourses();
    this.renderRecommendedCourses();
    this.renderAllCourses();
    this.renderProgressView();
    this.renderAchievements();
    this.renderNotifications();
    this.attachEventListeners();
    this.animateStats();
  }

  animateStats() {
    const animateValue = (element, target, duration = 1000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = Math.floor(target);
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    };

    setTimeout(() => {
      animateValue(document.getElementById('activeCourses'), mockData.stats.activeCourses);
      animateValue(document.getElementById('learningStreak'), mockData.stats.learningStreak);
      animateValue(document.getElementById('hoursLearned'), mockData.stats.hoursLearned);
      animateValue(document.getElementById('achievementsCount'), mockData.stats.achievements);
    }, 100);
  }

  renderStats() {
    document.getElementById('activeCourses').textContent = '0';
    document.getElementById('learningStreak').textContent = '0';
    document.getElementById('hoursLearned').textContent = '0';
    document.getElementById('achievementsCount').textContent = '0';
  }

  renderContinueCourses() {
    const container = document.getElementById('continueCoursesGrid');
    const inProgressCourses = mockData.courses.filter(c => c.status === 'in-progress').slice(0, 3);
    container.innerHTML = inProgressCourses.map(course => this.createCourseCard(course, true)).join('');
  }

  renderRecommendedCourses() {
    const container = document.getElementById('recommendedCoursesGrid');
    const recommendedCourses = mockData.courses.filter(c => c.status === 'recommended').slice(0, 3);
    container.innerHTML = recommendedCourses.map(course => this.createCourseCard(course, false)).join('');
  }

  renderAllCourses() {
    const container = document.getElementById('allCoursesGrid');
    container.innerHTML = mockData.courses.map(course => this.createCourseCard(course, course.status === 'in-progress')).join('');
  }

  filterCourses(filter) {
    this.currentFilter = filter;
    const container = document.getElementById('allCoursesGrid');
    let filteredCourses = mockData.courses;

    if (filter === 'in-progress') {
      filteredCourses = mockData.courses.filter(c => c.status === 'in-progress');
    } else if (filter === 'completed') {
      filteredCourses = mockData.courses.filter(c => c.status === 'completed');
    } else if (filter === 'recommended') {
      filteredCourses = mockData.courses.filter(c => c.status === 'recommended');
    }

    container.innerHTML = filteredCourses.map(course =>
      this.createCourseCard(course, course.status === 'in-progress')
    ).join('');
  }

  createCourseCard(course, showProgress) {
    return `
      <div class="course-card" style="animation: fadeIn 0.5s ease forwards">
        <div class="course-thumbnail" style="background: ${course.gradient}">
          <span style="position: relative; z-index: 1; font-size: 56px">${course.icon}</span>
        </div>
        <div class="course-content">
          <div class="course-header">
            <span class="course-category">${course.category}</span>
            <span class="course-level">${course.level}</span>
          </div>
          <h4 class="course-title">${course.title}</h4>
          <p class="course-description">${course.description}</p>
          ${showProgress ? `
            <div class="course-progress-section">
              <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${course.progress}%"></div>
              </div>
              <div class="progress-text">${course.progress}% Complete</div>
            </div>
          ` : ''}
          <div class="course-footer">
            <div class="course-meta">
              <div class="course-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${course.duration}
              </div>
              <div class="course-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                ${course.lessons} lessons
              </div>
            </div>
            <button class="course-cta ${!showProgress ? 'secondary' : ''}">
              ${showProgress ? 'Continue' : course.status === 'completed' ? 'Review' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderProgressView() {
    const container = document.getElementById('progressCards');
    const inProgressCourses = mockData.courses.filter(c => c.status === 'in-progress');

    container.innerHTML = inProgressCourses.map(course => `
      <div class="progress-card">
        <div class="progress-card-header">
          <div class="progress-card-icon" style="background: ${course.gradient}">
            <span>${course.icon}</span>
          </div>
          <div class="progress-card-info">
            <h3 class="progress-card-title">${course.title}</h3>
            <p class="progress-card-subtitle">${course.category} • ${course.level}</p>
          </div>
        </div>
        <div class="progress-bar-container" style="height: 8px; margin-bottom: 24px">
          <div class="progress-bar" style="width: ${course.progress}%"></div>
        </div>
        <div class="progress-stats">
          <div class="progress-stat">
            <div class="progress-stat-value">${course.progress}%</div>
            <div class="progress-stat-label">Completed</div>
          </div>
          <div class="progress-stat">
            <div class="progress-stat-value">${Math.floor(course.lessons * (course.progress / 100))}</div>
            <div class="progress-stat-label">Lessons Done</div>
          </div>
          <div class="progress-stat">
            <div class="progress-stat-value">${course.lessons - Math.floor(course.lessons * (course.progress / 100))}</div>
            <div class="progress-stat-label">Remaining</div>
          </div>
          <div class="progress-stat">
            <div class="progress-stat-value">${course.duration}</div>
            <div class="progress-stat-label">Duration</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderAchievements() {
    const container = document.getElementById('achievementsGrid');
    container.innerHTML = mockData.achievements.map(achievement => `
      <div class="achievement-card ${!achievement.unlocked ? 'locked' : ''}">
        <div class="achievement-icon">
          <span style="font-size: 40px">${achievement.icon}</span>
        </div>
        <h4 class="achievement-title">${achievement.title}</h4>
        <p class="achievement-description">${achievement.description}</p>
        <div class="achievement-date">
          ${achievement.unlocked ? `Unlocked ${achievement.date}` : 'Locked'}
        </div>
      </div>
    `).join('');
  }

  renderNotifications() {
    const container = document.getElementById('notificationList');
    container.innerHTML = mockData.notifications.map(notification => `
      <div class="notification-item ${notification.unread ? 'unread' : ''}">
        <div class="notification-title">${notification.title}</div>
        <div class="notification-message">${notification.message}</div>
        <div class="notification-time">${notification.time}</div>
      </div>
    `).join('');
  }

  attachEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const view = item.dataset.view;
        this.switchView(view);
      });
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterCourses(btn.dataset.filter);
      });
    });

    const notificationBtn = document.getElementById('notificationBtn');
    const notificationPanel = document.getElementById('notificationPanel');
    const closeNotifications = document.getElementById('closeNotifications');

    notificationBtn.addEventListener('click', () => {
      notificationPanel.classList.toggle('hidden');
    });

    closeNotifications.addEventListener('click', () => {
      notificationPanel.classList.add('hidden');
    });

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
      }
      if (!notificationPanel.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationPanel.classList.add('hidden');
      }
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });
  }

  handleSearch(query) {
    if (!query.trim()) {
      this.renderAllCourses();
      return;
    }

    const container = document.getElementById('allCoursesGrid');
    const filteredCourses = mockData.courses.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.category.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredCourses.length === 0) {
      container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No courses found matching your search.</p>';
    } else {
      container.innerHTML = filteredCourses.map(course =>
        this.createCourseCard(course, course.status === 'in-progress')
      ).join('');
    }
  }

  switchView(view) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');

    document.querySelectorAll('.view-container').forEach(container => {
      container.classList.add('hidden');
    });

    document.getElementById(`${view}View`).classList.remove('hidden');
    this.currentView = view;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Dashboard();
});
