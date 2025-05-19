document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.querySelector(".enter-btn");
  const nav = document.querySelector("nav");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // Unlock all main sections
      document.querySelectorAll("main section").forEach(sec => {
        sec.style.display = "block";
      });

      // Scroll to about section
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });

      // Show the navbar by adding the 'show' class
      if (nav) nav.classList.add("show");

      // Set unlock flag
      unlocked = true;
    });
  }

  // Prevent nav links before "Explore" is clicked
  let unlocked = false;
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (!unlocked) {
        e.preventDefault();
        alert("Click 'Explore My Work' first to access the portfolio.");
      } else {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Animate skill progress bars on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".progress div");
        bars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll(".skill").forEach(skill => {
    observer.observe(skill);
  });
});


// Function to handle the form submission
