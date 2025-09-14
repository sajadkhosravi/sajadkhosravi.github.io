(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
      });
    }
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
          if (navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            navToggle.classList.remove("active");
          }
        }
      });
    });
    function updateActiveNavLink() {
      const sections2 = document.querySelectorAll(".section[id]");
      const navLinks2 = document.querySelectorAll('.nav-link[href^="#"]');
      let currentSection = "";
      const scrollPosition = window.scrollY + 150;
      sections2.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.getAttribute("id");
        }
      });
      if (scrollPosition < 200) {
        currentSection = sections2[0]?.getAttribute("id") || "";
      }
      navLinks2.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }
    let scrollTimeout;
    window.addEventListener("scroll", function() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(updateActiveNavLink, 10);
    });
    updateActiveNavLink();
    const nameElement = document.querySelector(".name");
    if (nameElement) {
      const nameText = nameElement.textContent;
      nameElement.textContent = "";
      let i = 0;
      const typeWriter = () => {
        if (i < nameText.length) {
          nameElement.textContent += nameText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      setTimeout(typeWriter, 500);
    }
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    const style = document.createElement("style");
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: var(--text-primary) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        .nav-toggle.active .hamburger:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active .hamburger:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .hamburger:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
    const printButton = document.getElementById("print-button");
    if (printButton) {
      printButton.addEventListener("click", function() {
        window.print();
      });
    }
    const downloadCvLinks = document.querySelectorAll(".download-cv");
    downloadCvLinks.forEach((link) => {
      link.addEventListener("click", function(e) {
      });
    });
    const printMediaQuery = window.matchMedia("print");
    function handlePrintChange(mediaQuery) {
      if (mediaQuery.matches) {
        if (printButton) printButton.style.display = "none";
      } else {
        if (printButton) printButton.style.display = "flex";
      }
    }
    printMediaQuery.addListener(handlePrintChange);
    handlePrintChange(printMediaQuery);
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
        window.print();
      }
    });
    window.addEventListener("load", function() {
      document.body.classList.add("loaded");
    });
    const loadingStyle = document.createElement("style");
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        @media (prefers-reduced-motion: reduce) {
            body {
                opacity: 1;
                transition: none;
            }
        }
    `;
    document.head.appendChild(loadingStyle);
  });
})();
