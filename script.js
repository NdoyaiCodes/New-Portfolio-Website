//parallax effect
      window.addEventListener('scroll', function() {
       const body = document.body;
       let scrollPosition = window.scrollY;
       body.style.transform = 'translateZ(' + scrollPosition + 'px)'; /* Apply 3D transformation based on scroll position */
     });

    

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


    //Skills tab navigation
    var tabLinks = document.getElementsByClassName("tab-links");
      var tabContents = document.getElementsByClassName("tab-contents");

      function openTab(tabName) {
        for (tabLink of tabLinks) {
          tabLink.classList.remove("active-link");
        }
        for (tabContent of tabContents) {
          tabContent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
      }