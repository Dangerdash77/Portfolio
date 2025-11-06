// Game Developer Portfolio - Interactive Features & Three.js (FINAL FIX)
// import IMGwhiterabbit from './Assets/white-rabbit.jpg';
// import IMGsolarfarmlocator from './Assets/Solarfarmlocator.png';
// import IMGANB from './Assets/ANB.png';
// import IMGhosteller from './Assets/.jpg';
// import IMGsmartparking from './Assets/Smartparkingsystem.png';
// import IMGclink from './Assets/Clink.png';
// import IMGmines from './Assets/Mines.png';
// import IMGreflex from './Assets/white-rabbit.jpg';
// import IMGchess from './Assets/.jpg';

class GameDevPortfolio {
  constructor() {
    this.projectsData = [
      {
        id: 1,
        title: "White Rabbit",
        description: "Psychological horror game made in UE5 focused on exploration, visual storytelling, and audio design. Level layout design and implemented gameplay systems using Blueprints.",
        image: "https://images.unsplash.com/photo-1613114926807-b86b1cc42692?auto=format&fit=crop&w=1470&q=80",
        technologies: ["Unreal Engine 5", "Blueprints", "Game Design", "UI/UX", "Level Design", "System Design", "GitHub"],
        category: "Unreal Engine",
        video: "https://drive.google.com/file/d/1hZT2nJyYy3p_AKd_u6y_SKUaPS0fBkp7/preview"
      },
      {
        id: 2,
        title: "Solar Farm Locator",
        description: "A MERN-based web app that fetches real-time solar irradiance data using multiple APIs. Helps users locate optimal regions for solar installations by entering city names or coordinates.",
        image: './Assets/Solarfarmlocator.png',
        technologies: ["JavaScript", "HTML", "CSS", "API", "React", "Node"],
        category: "Web development",
        github: "https://github.com/Dangerdash77/Solar-Farm-Locator",
        live: "https://solar-farm-locator-1.onrender.com/"
      },
      {
        id: 3,
        title: "ANB Industries Website",
        description: "A full-stack industrial website with admin panel, login/signup authentication, product catalog management, and dynamic quote system. Deployed on Render with mobile-first design.",
        image: './Assets/ANB.png',
        technologies: ["JavaScript", "HTML", "CSS", "API", "MERN", "Render"],
        category: "Web development",
        github: "https://github.com/Dangerdash77/ANB_Temp",
        live: "https://www.anbindustries.com/"
      },
      {
        id: 4,
        title: "Hosteller",
        description: "A horror exploration game developed in Unreal Engine 5. Designed spooky environments and scripted gameplay using Blueprints to create an immersive narrative experience set in a haunted hostel.",
        image: "https://images.unsplash.com/photo-1613114926807-b86b1cc42692?auto=format&fit=crop&w=1470&q=80",
        technologies: ["Unreal Engine 5", "Blueprints", "Blender", "UI/UX", "Level Design", "GitHub"],
        category: "Unreal Engine",
        github: "", // 🔄 Add GitHub link if available
        live: ""     // 🔄 Add playable link or trailer if available
      },
      {
        id: 5,
        title: "Smart Parking Capacity Tracker",
        description: "IoT-based prototype using Arduino Uno and infrared sensors to monitor and display real-time parking slot availability. Designed embedded logic in C and serial data transmission.",
        image: 'Assets/Smartparkingsystem.png',
        technologies: ["Arduino Uno", "Embedded C", "Sensors"],
        category: "Others"
      },
      {
        id: 6,
        title: "Clink",
        description: "A 2D puzzle-platformer created in 48 hours for the WTF x IGDC Game Jam 2024. I worked as the Level Designer, crafting puzzle layouts and balancing progression for an engaging player experience. Built in Unity and published on Itch.io.",
        image: './Assets/Clink.png',
        technologies: ["Unity", "Level Design", "UI/UX", "Game Jam"],
        category: "Unity",
        github: "https://github.com/shunphoenix55/Snake-Chain-IGDC-Jam",
        live: "https://dasaniket15.itch.io/clink"
      },
      {
        id: 7,
        title: "Mines Game (Luck-based)",
        description: "A UE5 Blueprint-based game inspired by Minesweeper with randomized tile interactions. Designed logic for tile uncovering and created a visually intuitive grid-based UI.",
        image: 'Assets/Mines.png',
        technologies: ["Unreal Engine 5", "Bslueprints", "UI/UX"],
        category: "Unreal Engine"
      },
      {
        id: 8,
        title: "Reflex Game",
        description: "A fast-paced tapping game built in UE5 to test visual reflexes. Designed progressive difficulty logic and responsive UI using Blueprints. Ideal for mobile playtesting scenarios.",
        image: "https://images.unsplash.com/photo-1581090129431-75b42bafc218?auto=format&fit=crop&w=1470&q=80",
        technologies: ["Unreal Engine 5", "Blueprints", "UI/UX"],
        category: "Unreal Engine"
      },
      {
        id: 9,
        title: "Chess 3D",
        description: "Turn-based 3D chess game in Unreal Engine using C++ logic for piece rules, board validation. Developed touch input system for mobile gameplay.",
        image: "https://images.unsplash.com/photo-1581090129431-75b42bafc218?auto=format&fit=crop&w=1470&q=80",
        technologies: ["Unreal Engine 5", "C++", "3D modeling"],
        category: "Unreal Engine"
      },
    ];


    this.skillsData = [
      {
        category: "Game Engines",
        items: [
          { name: "Unity", level: 60, icon: "🧩" },
          { name: "Unreal Engine 5", level: 90, icon: "🌀" },
          { name: "Godot", level: 30, icon: "🤖" },
          { name: "Gamemaker", level: 30, icon: "🎲" }
        ]
      },
      {
        category: "Programming",
        items: [
          { name: "C++", level: 95, icon: "➕➕" },
          { name: "C#", level: 60, icon: "🟣" },
          { name: "JavaScript", level: 75, icon: "✨" },
          { name: "Java", level: 40, icon: "☕" },
          { name: "Python", level: 40, icon: "🐍" },
          { name: "C", level: 40, icon: "🅲" },
          { name: "SQL", level: 40, icon: "🗄️" }
        ]
      },
      {
        category: "Softwares",
        items: [
          { name: "VSC", level: 90, icon: "🖊️" },
          { name: "VSC2022", level: 75, icon: "🏛️" },
          { name: "GitHub", level: 80, icon: "🐙" },
          { name: "MongoDB", level: 90, icon: "🍃" },
          { name: "AWS Cloud", level: 90, icon: "☁️" },
          { name: "Blender", level: 90, icon: "🌀" },
          { name: "Substance Painter", level: 90, icon: "🎨" }
        ]
      }
    ];

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.cube = null;
    this.animationId = null;
    this.cubeParticles = null;

    this.init();
  }

  init() {
    console.log('Initializing portfolio...');

    // Initialize core features first
    this.setupNavigation();
    this.setupTheme();
    this.setupTypewriter();
    this.setupParticles();
    this.renderProjects();
    this.renderSkills();
    this.setupProjectFilters();
    this.setupModal();
    this.setupContactForm();
    this.setupScrollAnimations();
    this.setupVideoPopup();
    this.setupBackToTop();
    this.updateYear();

    // Initialize Three.js after a delay to ensure library is loaded
    setTimeout(() => {
      this.setupThreeJS();
    }, 500);

    console.log('Portfolio initialization complete');
  }

  // Fixed Navigation with proper event handling
  setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.toggle('open');
        console.log('Hamburger menu toggled');
      });
    }

    // Fixed smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const targetId = href?.substring(1); // Remove the # symbol
        const target = document.getElementById(targetId);

        console.log('Navigation clicked:', href, 'Target found:', !!target);

        if (target) {
          // Close mobile menu
          if (navMenu) navMenu.classList.remove('open');

          // Smooth scroll to target
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // CTA buttons with data-scroll attribute
    document.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = btn.dataset.scroll;
        const target = document.querySelector(targetSelector);
        console.log('CTA button clicked:', targetSelector, 'Target found:', !!target);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    console.log('Navigation setup complete');
  }

  // Theme Toggle
  setupTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const currentScheme = html.getAttribute('data-color-scheme');
        const newScheme = currentScheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-color-scheme', newScheme);
        if (themeIcon) {
          themeIcon.textContent = newScheme === 'dark' ? '🌙' : '☀️';
        }
        console.log('Theme toggled to:', newScheme);
      });
    }
  }

  // Typewriter Animation
  setupTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;

    const text = typewriterElement.dataset.text || "Hi, I'm Manav Kalola";
    let index = 0;

    const typeText = () => {
      if (index < text.length) {
        typewriterElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 100);
      }
    };

    setTimeout(typeText, 1000);
  }

  // Enhanced Three.js Setup with better error handling
  setupThreeJS() {
    console.log('Setting up Three.js...');

    if (typeof THREE === 'undefined') {
      console.warn('Three.js not available, skipping 3D features');
      return;
    }

    const canvas = document.getElementById('hero-canvas');
    if (!canvas) {
      console.warn('Hero canvas not found');
      return;
    }

    try {
      // Scene setup
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
      });

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Create wireframe cube
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const edges = new THREE.EdgesGeometry(geometry);
      const material = new THREE.LineBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.8
      });

      this.cube = new THREE.LineSegments(edges, material);
      this.scene.add(this.cube);

      // Add particle system
      this.createCubeParticles();

      this.camera.position.z = 5;

      // Mouse interaction variables
      let mouseX = 0, mouseY = 0;
      let targetRotationX = 0, targetRotationY = 0;

      document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        targetRotationX = mouseY * 0.3;
        targetRotationY = mouseX * 0.3;
      });

      // Animation loop
      const animate = () => {
        this.animationId = requestAnimationFrame(animate);

        if (this.cube) {
          // Base rotation
          this.cube.rotation.x += 0.005;
          this.cube.rotation.y += 0.01;

          // Smooth mouse follow effect
          this.cube.rotation.x += (targetRotationX - this.cube.rotation.x) * 0.05;
          this.cube.rotation.y += (targetRotationY - this.cube.rotation.y) * 0.05;
        }

        // Update particles
        this.updateCubeParticles();

        this.renderer.render(this.scene, this.camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (this.camera && this.renderer) {
          this.camera.aspect = window.innerWidth / window.innerHeight;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
      };

      window.addEventListener('resize', handleResize);
      console.log('Three.js setup successful');

    } catch (error) {
      console.error('Three.js setup failed:', error);
    }
  }

  createCubeParticles() {
    if (!this.scene) return;

    try {
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 150;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 15;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x00f5ff,
        size: 0.03,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });

      this.cubeParticles = new THREE.Points(particleGeometry, particleMaterial);
      this.scene.add(this.cubeParticles);
    } catch (error) {
      console.warn('Particle creation failed:', error);
    }
  }

  updateCubeParticles() {
    if (this.cubeParticles) {
      this.cubeParticles.rotation.y += 0.001;
      this.cubeParticles.rotation.x += 0.0005;
    }
  }

  // Background Particles
  setupParticles() {
    const particlesContainer = document.getElementById('particles-bg');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background-color: #00f5ff;
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 6px #00f5ff;
        pointer-events: none;
        animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
      `;

      particlesContainer.appendChild(particle);
    }

    // Add CSS animation for particles if not exists
    if (!document.getElementById('particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
          50% { transform: translateY(0px) translateX(-5px); opacity: 0.2; }
          75% { transform: translateY(10px) translateX(-10px); opacity: 0.5; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Enhanced Projects Rendering
  renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
      console.error('Projects grid element not found');
      return;
    }

    projectsGrid.innerHTML = '';

    this.projectsData.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.dataset.category = project.category;
      projectCard.style.animationDelay = `${index * 0.1}s`;

      projectCard.innerHTML = `
  <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" />
  <div class="project-content">
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-tech">
      ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
    </div>
    ${project.video ? `<button class="play-video-btn" data-video="${project.video}">🎬 Play Video</button>` : ""}
  </div>
`;


      // Add click event with better event handling
      projectCard.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Project card clicked:', project.title);
        this.openProjectModal(project);
      });

      projectCard.style.cursor = 'pointer';
      projectCard.setAttribute('tabindex', '0');
      projectCard.setAttribute('role', 'button');

      // Add keyboard support
      projectCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openProjectModal(project);
        }
      });

      projectsGrid.appendChild(projectCard);
    });

    console.log(`Rendered ${this.projectsData.length} projects`);
  }

  // Project Filters
  setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.dataset.filter;
        console.log('Filter clicked:', filter);

        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter projects
        this.filterProjects(filter);
      });
    });
  }

  filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;

      if (shouldShow) {
        card.style.display = 'block';
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
      } else {
        card.style.display = 'none';
      }
    });

    console.log(`Filtered projects by: ${filter}`);
  }

  // Enhanced Skills Rendering
  renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) {
      console.error('Skills grid element not found');
      return;
    }

    skillsGrid.innerHTML = '';

    this.skillsData.forEach((category, index) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'skill-category';
      categoryDiv.style.animationDelay = `${index * 0.1}s`;

      categoryDiv.innerHTML = `
        <h3>${category.category}</h3>
        ${category.items.map(skill => `
          <div class="skill-item">
            <div class="skill-name">
              <span class="skill-icon">${skill.icon}</span>
              <span>${skill.name}</span>
            </div>
            <span class="skill-level">${skill.level}%</span>
          </div>
        `).join('')}
      `;

      skillsGrid.appendChild(categoryDiv);
    });

    console.log(`Rendered ${this.skillsData.length} skill categories`);
  }

  // Enhanced Modal System
  setupModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const backdrop = modal?.querySelector('.modal-backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeProjectModal();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.closeProjectModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        this.closeProjectModal();
      }
    });

    console.log('Modal system setup complete');
  }

  openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const image = document.getElementById('modal-image');
    const description = document.getElementById('modal-description');
    const technologies = document.getElementById('modal-technologies');
    const liveBtn = document.getElementById('modal-live');
    const githubBtn = document.getElementById('modal-github');

    if (!modal) {
      console.error('Modal element not found');
      return;
    }

    console.log('Opening modal for:', project.title);

    // Update modal content
    if (title) title.textContent = project.title;
    if (image) {
      image.src = project.image;
      image.alt = project.title;
    }
    if (description) description.textContent = project.description;

    if (technologies) {
      technologies.innerHTML = project.technologies
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join('');
    }
    // Conditional rendering for Live button
    if (liveBtn) {
      if (project.live) {
        liveBtn.href = project.live;
        liveBtn.setAttribute('target', '_blank');
        liveBtn.classList.remove('hidden');
      } else {
        liveBtn.classList.add('hidden');
      }
    }

    // Conditional rendering for GitHub button
    if (githubBtn) {
      if (project.github) {
        githubBtn.href = project.github;
        githubBtn.setAttribute('target', '_blank');
        githubBtn.classList.remove('hidden');
      } else {
        githubBtn.classList.add('hidden');
      }
    }
    // if (liveBtn) {
    //   liveBtn.href = project.live;
    //   liveBtn.setAttribute('target', '_blank');
    // }
    // if (githubBtn) {
    //   githubBtn.href = project.github;
    //   githubBtn.setAttribute('target', '_blank');
    // }

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Focus trap
    setTimeout(() => {
      const firstFocusable = modal.querySelector('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    }, 100);
  }

  closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    console.log('Closing modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Enhanced Contact Form with proper feedback
  setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitText = document.getElementById("submit-text");
    const loader = document.getElementById("submit-loader");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      submitText.classList.add("hidden");
      loader.classList.remove("hidden");

      const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      };

      try {
        const response = await fetch("https://portfolio-mx60.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        const data = await response.json();
        loader.classList.add("hidden");
        submitText.classList.remove("hidden");

        if (response.ok) {
          status.classList.remove("hidden");
          status.textContent = data.success;
          status.classList.add("status--success");
          form.reset();
        } else {
          status.classList.remove("hidden");
          status.textContent = data.error;
          status.classList.add("status--error");
        }
      } catch (error) {
        console.error("Contact form error:", error);
        loader.classList.add("hidden");
        submitText.classList.remove("hidden");
        status.textContent = "Something went wrong. Try again later.";
        status.classList.add("status--error");
        status.classList.remove("hidden");
      }
    });
  }

  // Scroll Animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.project-card, .skill-category, .contact-info, .contact-form').forEach(el => {
      observer.observe(el);
    });
  }
  // ===============================
// Project Video Popup (Google Drive / YouTube Compatible)
// ===============================
setupVideoPopup() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.querySelector(".close-video");
  const videoContainer = modal?.querySelector(".video-content");

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".play-video-btn");
    if (!btn || !videoContainer) return;

    const src = btn.dataset.video;
    if (!src) return;

    // Clear any previous iframe
    videoContainer.innerHTML = "";

    // Detect Google Drive or standard mp4
    if (src.includes("drive.google.com")) {
      // Convert to /preview if needed
      const previewUrl = src.includes("/preview")
        ? src
        : src.replace("/view", "/preview");
      const iframe = document.createElement("iframe");
      iframe.src = previewUrl;
      iframe.width = "100%";
      iframe.height = "480";
      iframe.allow = "autoplay";
      iframe.style.border = "none";
      videoContainer.appendChild(iframe);
    } else {
      // Normal MP4 support
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.style.width = "100%";
      videoContainer.appendChild(video);
    }

    modal.style.display = "flex";
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (videoContainer) videoContainer.innerHTML = "";
  });

  // Close when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      if (videoContainer) videoContainer.innerHTML = "";
    }
  });
}

  // Back to Top
  setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Show/hide back to top button
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          backToTopBtn.style.opacity = '1';
          backToTopBtn.style.pointerEvents = 'auto';
        } else {
          backToTopBtn.style.opacity = '0';
          backToTopBtn.style.pointerEvents = 'none';
        }
      });
    }
  }

  // Update current year
  updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Cleanup
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing portfolio...');
  new GameDevPortfolio();
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden');
  } else {
    console.log('Page visible');
  }
});