// Select the elements you want to animate
const text = document.getElementById('text');
const leaf = document.getElementById('leaf');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Get the vertical scroll position
    let value = window.scrollY;

    // Apply animation to elements based on scroll position
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});



window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var whoAmIHeader = document.getElementById('who-am-i-header');
    var scrollPosition = window.scrollY;

    // Check if the scroll position is within the about section
    if (scrollPosition >= aboutSection.offsetTop - window.innerHeight / 2) {
        // Add a class to trigger the animation
        whoAmIHeader.classList.add('slide-from-top');
    } else {
        // Remove the class if the scroll position is outside the about section
        whoAmIHeader.classList.remove('slide-from-top');
    }
});


// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate project header when it comes into view
window.addEventListener('scroll', function() {
    var projectSection = document.getElementById('project');
    var projectHeader = document.getElementById('My-Project-header');

    if (isElementInViewport(projectSection)) {
        projectHeader.classList.add('animate-project-header');
    } else {
        projectHeader.classList.remove('animate-project-header');
    }
});
function animateTitle(card) {
    card.querySelector('.card__title').style.transition = 'none'; // Reset transition
    card.querySelector('.card__title').offsetHeight; /* Trigger reflow */
    card.querySelector('.card__title').style.transition = null; // Remove inline transition style to reset
}
document.getElementById("download-btn").addEventListener("click", function() {
    // Assuming your PDF file is named "resume.pdf"
    var pdfFilePath = "Rinki.pdf";
    
    // Create an anchor element
    var link = document.createElement("a");
    
    // Set the href attribute to the PDF file path
    link.href = pdfFilePath;
    
    // Set the download attribute to force download
    link.download = "Rinki_Das_CV.pdf";
    
    // Append the anchor element to the body
    document.body.appendChild(link);
    
    // Trigger a click event on the anchor element
    link.click();
    
    // Remove the anchor element from the body
    document.body.removeChild(link);
});

function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show-toast");
    setTimeout(function() {
      toast.classList.remove("show-toast");
    }, 3000);
  }
  
  document.getElementById("send-button").addEventListener("click", function() {
    showToast("Message Sent!");
  });
  
// JavaScript to toggle menu
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
}
const scrollCursor = document.getElementById("scroll-cursor");
let scrollTimeout = null;

// Show cursor on mousemove
window.addEventListener("mousemove", (e) => {
  showScrollCursor(e.clientX, e.clientY);
});

// Show cursor on one-finger touch
window.addEventListener("touchmove", (e) => {
  if (e.touches.length === 1) {
    showScrollCursor(e.touches[0].clientX, e.touches[0].clientY);
  } else {
    hideCursor();
  }
});

// Hide cursor during scroll (trackpad, wheel, keyboard, etc.)
window.addEventListener("scroll", () => {
  hideCursor();

  // Optional: restore cursor after scroll ends
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollCursor.style.opacity = 0;
  }, 500);
});

// Optional: hide on gesture (Safari)
window.addEventListener("gesturestart", () => {
  hideCursor();
});

// Helper to show scroll cursor
function showScrollCursor(x, y) {
  scrollCursor.style.left = `${x}px`;
  scrollCursor.style.top = `${y}px`;
  scrollCursor.style.opacity = 1;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollCursor.style.opacity = 0;
  }, 1000);
}

// Hide function
function hideCursor() {
  scrollCursor.style.opacity = 0;
}
