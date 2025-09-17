// Colocar efeito na seção que o usuário esteja
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    { id: "apresentacao", name: "Apresentação e contextualização", bgColor: "#F6EBFC", hoverColor: "#B67FD6", active: false },
    { id: "produtos", name: "Alguns produtos que utilizam IA gen", bgColor: "#ECF4F3", hoverColor: "#74C1C3", active: false },
    { id: "matematica", name: "IA em questões matemáticas", bgColor: "#F6F1E4", hoverColor: "#F5C5AD", active: false },
    { id: "como-utilizar", name: "Como utilizar a IA gen?", bgColor: "#F6EBFC", hoverColor: "#74C1C3", active: false },
    { id: "estudos", name: "Como posso usar a IA para meus estudos?", bgColor: "#ECF4F3", hoverColor: "#F5C5AD", active: false },
    { id: "etica", name: "IA: Questão de Ética!", bgColor: "#F6F1E4", hoverColor: "#B67FD6", active: false },
    { id: "rotina-univesp", name: "A IA em sua rotina Univesp", bgColor: "#F6EBFC", hoverColor: "#74C1C3", active: false },
  ];
  const menuLinks = document.querySelectorAll(".nav-menu .nav-item");
  const dropdownLinks = document.querySelectorAll(".mobile-dropdown-menu a");
  const navMobileContainer = document.querySelector(".nav-menu-mobile-container");
  const navMobileText = document.querySelector(".nome-secao-container p");

  function updateMenuHighlight() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;

      if (scrollTop + windowHeight >= sectionTop && scrollTop < sectionBottom) {
        if (!section.active) {
          // Mark only the current section as active
          sections.forEach((sec) => (sec.active = false));
          section.active = true;

          // Update upper menu links
          menuLinks.forEach((link) => {
            link.classList.remove("active");
            link.style.removeProperty("background-color");
          });
          const activeLink = document.querySelector(
            `.nav-menu .nav-item[href="#${section.id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
            activeLink.style.backgroundColor = section.bgColor;
          }

          // Update mobile menu text and container color
          navMobileText.textContent = section.name;
          navMobileContainer.style.backgroundColor = section.bgColor;

          // Update dropdown menu links
          dropdownLinks.forEach((link) => {
            link.classList.remove("active");
            link.style.removeProperty("background-color");
            link.removeEventListener("mouseover", handleHover);
            link.removeEventListener("mouseout", removeHover);
          });

          const activeDropdownLink = document.querySelector(
            `.mobile-dropdown-menu a[href="#${section.id}"]`
          );
          if (activeDropdownLink) {
            activeDropdownLink.classList.add("active");
            activeDropdownLink.style.backgroundColor = section.bgColor;
          }

          // Add hover effect for dropdown links
          dropdownLinks.forEach((link) => {
            link.addEventListener("mouseover", handleHover);
            link.addEventListener("mouseout", removeHover);
          });

          // Define hover handlers
          function handleHover() {
              this.style.backgroundColor = section.hoverColor;

          }

          function removeHover() {
              this.style.removeProperty("background-color");

          }
        }
      }
    });
  }

  window.addEventListener("scroll", updateMenuHighlight);
});

   /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */


/* Menu*/
let previouslyInViewportMobile = false; 
function isBottomTouchingTopOfScreen(element) {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  return rect.bottom <= 0;
}

function checkElementVisibilityMobile() {
  const element = document.querySelector('.banner-titulo-parte-1');
  const isBottomTouchingTop = isBottomTouchingTopOfScreen(element);
  const menu = document.querySelector('.nav-menu-mobile-container');

  if (isBottomTouchingTop && !previouslyInViewportMobile) {
    menu.classList.add('fixed');
    previouslyInViewportMobile = true;  
  } else if (!isBottomTouchingTop && previouslyInViewportMobile) {
    menu.classList.remove('fixed');
    previouslyInViewportMobile = false;  
  }
}

document.addEventListener('DOMContentLoaded', checkElementVisibilityMobile);
window.addEventListener('scroll', checkElementVisibilityMobile);

// Menu Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector(".ham-icon");
  const icon = hamButton.querySelector("img"); 
  const dropdownMenu = document.querySelector(".mobile-dropdown-menu");
  const menuLinks = document.querySelectorAll(".mobile-dropdown-menu a");

  // Toggle visibilidade
  hamButton.addEventListener("click", (event) => {
    dropdownMenu.classList.toggle("visible");
    
    dropdownMenu.classList.toggle("hidden");
    icon.classList.toggle("rotate-horizontal"); 
    event.stopPropagation();
  });

  // Fechar o menu quando clicar numa seção
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); 
      const targetId = link.getAttribute("href"); 
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); 
      }
      dropdownMenu.classList.remove("visible");
      dropdownMenu.classList.add("hidden");
      icon.classList.remove("rotate-horizontal"); 
    });
  });

  // Fechar o menu quando clicar fora dele
  document.addEventListener("click", (event) => {
    const isClickInsideMenu =
      dropdownMenu.contains(event.target) || hamButton.contains(event.target);

    if (!isClickInsideMenu && dropdownMenu.classList.contains("visible")) {
      dropdownMenu.classList.remove("visible");
      dropdownMenu.classList.add("hidden");
      icon.classList.remove("rotate-horizontal"); 
    }
  });
});
 /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */







 /* Highlight */
// Checar se tá no viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Highlight de acordo com a classe
function highlightOnScroll() {
  const highlights = document.querySelectorAll('.highlight-lilas, .highlight-azul, .highlight-preto, .highlight-laranja');
  
  highlights.forEach((highlight) => {
    if (isInViewport(highlight)) {
      highlight.classList.add('active-highlight');
    } else {
      highlight.classList.remove('active-highlight');
    }
  });
}


window.addEventListener('scroll', highlightOnScroll);
/* -- */ /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */


// Saiba Mais
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".saiba-mais-botao").forEach(button => {
      button.addEventListener("click", () => {

          const subContainer = button.nextElementSibling;
          
          if (subContainer.classList.contains("hide-saiba-mais")) {
              subContainer.classList.remove("hide-saiba-mais");
              subContainer.classList.add("appear-saiba-mais");
              
              const image = button.querySelector("img");
              if (image) {
                  image.classList.add("rotate");
              }

   
          } else {
              subContainer.classList.remove("appear-saiba-mais");
              subContainer.classList.add("hide-saiba-mais");

              const image = button.querySelector("img");
              if (image) {
                  image.classList.remove("rotate");
              }
          }
      });
  });
});
/* -- */ /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */






// Efeito typewriter
document.addEventListener("DOMContentLoaded", () => {
  const speed = 1; // Typing speed in milliseconds
  const typewriterElements = document.querySelectorAll(".typewriter");

  function type(element, htmlContent) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      // Queue system with parent tracking
      const queue = [...tempDiv.childNodes].map(node => ({
          node,
          parent: element
      }));

      function processNext() {
          if (queue.length === 0) return;

          const { node: currentNode, parent: currentParent } = queue.shift();

          if (currentNode.nodeType === Node.TEXT_NODE) {
              // Handle text nodes
              const text = currentNode.textContent;
              let index = 0;

              function addChar() {
                  if (index < text.length) {
                      currentParent.appendChild(
                          document.createTextNode(text[index])
                      );
                      index++;
                      setTimeout(addChar, speed);
                  } else {
                      processNext();
                  }
              }
              addChar();
          } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
              // Handle element nodes
              const clone = currentNode.cloneNode();
              currentParent.appendChild(clone);

              // Add children to queue with correct parent
              queue.unshift(...[...currentNode.childNodes].map(child => ({
                  node: child,
                  parent: clone
              })));

              processNext();
          }
      }

      processNext();
  }

  // Intersection Observer (keep this the same)
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const element = entry.target;
              if (!element.dataset.typed) {
                  element.style.opacity = "1";
                  type(element, element.dataset.content);
                  element.dataset.typed = "true";
              }
          }
      });
  });

  // Initialize elements (keep this the same)
  typewriterElements.forEach((element) => {
      element.dataset.content = element.innerHTML;
      element.innerHTML = "";
      observer.observe(element);
  });
});




// Box
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".box-botao").forEach(button => {
      button.addEventListener("click", () => {

          const subContainer = button.nextElementSibling;
          
          if (subContainer.classList.contains("hide-box")) {
              subContainer.classList.remove("hide-box");
              subContainer.classList.add("appear-box");
              
              const image = button.querySelector("img");
              if (image) {
                  image.classList.add("rotate");
              }


          } else {
              subContainer.classList.remove("appear-box");
              subContainer.classList.add("hide-box");

              const image = button.querySelector("img");
              if (image) {
                  image.classList.remove("rotate");
              }
          }
      });
  });
});
/* -- */ /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */




// Glossário e Referências
document.addEventListener('DOMContentLoaded', () => {
  const btnReferences = document.getElementById('botao-referencias');
  const btnGlossary = document.getElementById('botao-glossario');
  const referencesContent = document.getElementById('referencias-container');
  const glossaryContent = document.getElementById('glossario-container');

  let activeButton = null; 

  btnReferences.addEventListener('click', () => {
    if (activeButton === btnReferences) {
     
      referencesContent.classList.remove('visible');
      activeButton = null;
    } else {
    
      referencesContent.classList.add('visible');
      glossaryContent.classList.remove('visible');
      activeButton = btnReferences; 
    }
  });

  btnGlossary.addEventListener('click', () => {
    if (activeButton === btnGlossary) {

      glossaryContent.classList.remove('visible');
      activeButton = null; 
    } else {

      glossaryContent.classList.add('visible');
      referencesContent.classList.remove('visible');
      activeButton = btnGlossary; 
    }
  });
});
/* -- */ /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */




// Gap
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".parte-2-produtos .logos-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add("in-view");
      } else {
        target.classList.remove("in-view");
      }
    });
  });

  observer.observe(target);
});
/* -- */ /* -- */   /* -- */   /* -- */ /* -- */   /* -- */   /* -- */




// Efeito shadow banner
document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll(".banner"); 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const banner = entry.target;
          const color = getComputedStyle(banner).filter.match(/rgba?\(([^)]+)\)/);
          
        
          if (color) {
            const shadowColor = color[0]; 
            banner.style.animation = `slide-shadow 3s forwards`;

   
            banner.style.setProperty('--shadow-color', shadowColor);
          }
        }
      });
    },
    { threshold: 0.1 } 
  );

  banners.forEach((banner) => {
    observer.observe(banner);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const triangles = document.querySelectorAll("[id^='triangle']"); 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const triangle = entry.target;
        if (entry.isIntersecting) {
       
          if (!triangle.classList.contains("animated")) {
            triangle.classList.add("animated");
            triangle.style.animation = "triangle-fade-in 2s ease-out forwards"; 
          }
        }
      });
    },
    { threshold: 0.1 } 
  );

  triangles.forEach((triangle) => {
    observer.observe(triangle); 
  });
});


