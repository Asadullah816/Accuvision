/**
 * ACCUVISION LASIK - MAIN JAVASCRIPT
 * Vanilla JS implementation for navigation, forms, accordions, quiz & accessibility
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. STICKY HEADER
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. WORDPRESS / ELEMENTOR MOBILE MENU TOGGLE & ACCORDION
  const menuToggle = document.getElementById('elementor-menu-toggle') || document.querySelector('.elementor-menu-toggle') || document.querySelector('.mobile-toggle');
  const dropdownMenu = document.getElementById('elementor-nav-menu-mobile') || document.querySelector('.elementor-nav-menu--dropdown') || document.querySelector('.mobile-nav-drawer');

  if (menuToggle && dropdownMenu) {
    function toggleMobileMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const isExpanded = menuToggle.classList.contains('elementor-active') || dropdownMenu.classList.contains('elementor-active');
      if (isExpanded) {
        menuToggle.classList.remove('elementor-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('elementor-active');
        dropdownMenu.setAttribute('aria-hidden', 'true');
      } else {
        menuToggle.classList.add('elementor-active');
        menuToggle.setAttribute('aria-expanded', 'true');
        dropdownMenu.classList.add('elementor-active');
        dropdownMenu.setAttribute('aria-hidden', 'false');
      }
    }

    menuToggle.addEventListener('click', toggleMobileMenu);

    // Submenu accordion toggles (Elementor / WordPress style)
    const subMenuTriggers = dropdownMenu.querySelectorAll('.sub-arrow, .menu-item-has-children > .elementor-item-wrapper > a');
    subMenuTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        const parentLi = this.closest('.menu-item-has-children');
        if (parentLi) {
          e.preventDefault();
          e.stopPropagation();
          const wasActive = parentLi.classList.contains('active');

          // Collapse sibling submenus
          dropdownMenu.querySelectorAll('.menu-item-has-children').forEach(function (li) {
            if (li !== parentLi) {
              li.classList.remove('active');
            }
          });

          if (!wasActive) {
            parentLi.classList.add('active');
          } else {
            parentLi.classList.remove('active');
          }
        }
      });
    });

    // Close menu when clicking outside header
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) {
        menuToggle.classList.remove('elementor-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('elementor-active');
        dropdownMenu.setAttribute('aria-hidden', 'true');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        menuToggle.classList.remove('elementor-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('elementor-active');
        dropdownMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // 3. FAQ ACCORDION
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');

      // Close all items in current accordion container
      const parentWrap = item.closest('.accordion-wrapper');
      if (parentWrap) {
        parentWrap.querySelectorAll('.accordion-item').forEach(function (el) {
          el.classList.remove('active');
        });
      }

      // If clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. ANIMATED COUNTERS
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  function runCounters() {
    if (animated || !statNumbers.length) return;
    const firstStat = statNumbers[0];
    const rect = firstStat.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.9) {
      animated = true;
      statNumbers.forEach(function (stat) {
        const target = parseFloat(stat.getAttribute('data-target') || '0');
        const isDecimal = target % 1 !== 0;
        const suffix = stat.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 40;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            stat.innerHTML = (isDecimal ? count.toFixed(1) : Math.ceil(count)) + '<span>' + suffix + '</span>';
            requestAnimationFrame(updateCount);
          } else {
            stat.innerHTML = target + '<span>' + suffix + '</span>';
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', runCounters);
  runCounters();

  // 5. ACCESSIBILITY TOOLBAR
  const a11yToggle = document.querySelector('.a11y-toggle-btn');
  const a11yPanel = document.querySelector('.a11y-panel');
  const a11yClose = document.querySelector('.a11y-close');

  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', function () {
      a11yPanel.classList.toggle('open');
    });

    if (a11yClose) {
      a11yClose.addEventListener('click', function () {
        a11yPanel.classList.remove('open');
      });
    }

    const a11yButtons = document.querySelectorAll('.a11y-btn');
    a11yButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        switch (action) {
          case 'increase-text':
            document.body.classList.remove('a11y-smaller-text');
            document.body.classList.toggle('a11y-larger-text');
            break;
          case 'decrease-text':
            document.body.classList.remove('a11y-larger-text');
            document.body.classList.toggle('a11y-smaller-text');
            break;
          case 'grayscale':
            document.body.classList.toggle('a11y-grayscale');
            break;
          case 'high-contrast':
            document.body.classList.toggle('a11y-high-contrast');
            break;
          case 'underline-links':
            document.body.classList.toggle('a11y-underline-links');
            break;
          case 'readable-font':
            document.body.classList.toggle('a11y-readable-font');
            break;
          case 'reset':
            document.body.className = '';
            break;
        }
      });
    });
  }

  // 6. CANDIDATE SELF-ASSESSMENT QUIZ
  const quizCard = document.querySelector('.quiz-card');
  if (quizCard) {
    let currentStep = 1;
    const totalSteps = 5;
    const progressFill = document.querySelector('.quiz-progress-fill');
    const answers = {};

    function showStep(step) {
      document.querySelectorAll('.quiz-step').forEach(function (s) {
        s.classList.remove('active');
      });
      const targetStep = document.querySelector(`.quiz-step[data-step="${step}"]`);
      if (targetStep) {
        targetStep.classList.add('active');
      }
      if (progressFill) {
        const percent = (step / totalSteps) * 100;
        progressFill.style.width = percent + '%';
      }
    }

    quizCard.querySelectorAll('.quiz-opt-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const stepWrap = this.closest('.quiz-step');
        const stepNum = parseInt(stepWrap.getAttribute('data-step'), 10);
        const questionKey = stepWrap.getAttribute('data-question');
        const val = this.getAttribute('data-val');

        answers[questionKey] = val;

        // Visual selection state
        stepWrap.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');

        setTimeout(function () {
          if (stepNum < totalSteps) {
            currentStep = stepNum + 1;
            showStep(currentStep);
          } else {
            // Compute Result
            displayQuizResult(answers);
          }
        }, 280);
      });
    });

    function displayQuizResult(answers) {
      document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
      const resultWrap = document.querySelector('.quiz-result-box');
      if (resultWrap) {
        resultWrap.style.display = 'block';

        const isGoodAge = answers.age === '18-40' || answers.age === '40+';
        const isStable = answers.stable === 'yes';
        const notPregnant = answers.pregnant === 'no';
        const noEyeDisease = answers.disease === 'no';

        const resultHeading = document.getElementById('quiz-result-heading');
        const resultDesc = document.getElementById('quiz-result-desc');

        if (isGoodAge && isStable && notPregnant && noEyeDisease) {
          resultHeading.textContent = 'Great News! You Are Likely an Excellent LASIK Candidate';
          resultDesc.textContent = 'Based on your responses, you meet the primary health and prescription criteria for laser vision correction (LASIK or PRK). The next step is a comprehensive complimentary consultation with Dr. Hammonds and Dr. Rauch to take detailed corneal scans.';
        } else {
          resultHeading.textContent = 'You May Benefit From Advanced Evaluation or PRK';
          resultDesc.textContent = 'While some factors may require special evaluation (such as pregnancy, prescription stability, or corneal thickness), alternatives such as PRK or specialized co-managed treatment may be ideal for you. Schedule your free consultation to get personalized clinical advice.';
        }
      }
    }
  }

  // 7. FORM VALIDATION FOR SCHEDULING & CONTACT
  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      const name = document.getElementById('form-name');
      const email = document.getElementById('form-email');
      const phone = document.getElementById('form-phone');

      if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please fill out all required fields (Name, Email, and Phone).';
        }
        return;
      }

      // Successful client-side submission simulation
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thank you! Your complimentary LASIK consultation request has been received. Our patient coordinator will contact you promptly to confirm your appointment time.';
        consultationForm.reset();
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const feedback = document.getElementById('contact-feedback');
      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const message = document.getElementById('contact-message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please provide your Name, Email, and Message before submitting.';
        }
        return;
      }

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thank you for reaching out! A member of the Accuvision LASIK team will reply to your message shortly.';
        contactForm.reset();
      }
    });
  }
});
