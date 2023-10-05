function enableLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }

  // Function to toggle the dark mode
  function enableDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }

  // Event listeners for the light and dark mode buttons
  const lightModeBtn = document.getElementById('lightModeBtn');
  lightModeBtn.addEventListener('click', enableLightMode);
  lightModeBtn.innerText ="☀️";

  const darkModeBtn = document.getElementById('darkModeBtn');
  darkModeBtn.addEventListener('click', enableDarkMode);
  darkModeBtn.innerText = "🌚"


// ----------------------------------lightdark---------------
  // var icons = document.getElementById("icon");

  // icons.onclick = function(){
  //   document.body.classList.toggle("dark-theme");
  //   if(document.body.classList.toggle("dark-theme")){
  //     icons.innerText = "☀️"
  //   }else{
  //     icons.innerText ="🌚";
  //   }
  // }










function handleSkillsIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an Intersection Observer to observe the skills section
  const skillsSection = document.querySelector('.skills');
  const skillsObserver = new IntersectionObserver(handleSkillsIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Adjust this threshold as needed
  });

  // Start observing the skills section
  skillsObserver.observe(skillsSection);
  function handleSkillInfoIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an Intersection Observer to observe each skill block
  const skillInfoBlocks = document.querySelectorAll('.skill-info');
  const skillInfoObserver = new IntersectionObserver(handleSkillInfoIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Adjust this threshold as needed
  });

  // Start observing each skill block
  skillInfoBlocks.forEach(block => skillInfoObserver.observe(block));
  function handleTagIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }
  function handleTagIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an Intersection Observer to observe the "tag" section
  const tagSection = document.querySelector('.tag');
  const tagObserver = new IntersectionObserver(handleTagIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Adjust this threshold as needed
  });

  // Start observing the "tag" section
  tagObserver.observe(tagSection);

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    var image = document.querySelector('.image-2');
    if (isElementInViewport(image)) {
      image.classList.add('active');
      window.removeEventListener('scroll', handleScroll); // Remove the event listener once the animation is triggered
    }
  }

  window.addEventListener('scroll', handleScroll);