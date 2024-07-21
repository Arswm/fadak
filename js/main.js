var fadak = {};
fadak.Global = fadak.Global || {};
fadak.Global.init = function () {
  try {
    const emptyLinks = document.querySelectorAll('[href="#"]');
    emptyLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  } catch (error) {
    console.log("Error on fadak.Global.init() : " + error);
  }
};



fadak.homeTabs = fadak.homeTabs || {};
fadak.homeTabs.init = function () {
  try {

    const tabLinks = document.querySelectorAll(".home-tabs-category-item");
    const tabContents = document.querySelectorAll(".home-tabs-content");

    tabLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor link behavior

        // Remove active class from all tabs and tab contents
        tabLinks.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add active class to the clicked tab and its content
        link.classList.add("active");
        document.querySelector(link.dataset.target).classList.add("active");
      });
    });

    
  } catch (error) {
    console.log("Error on fadak.homeTabs.init() : " + error)
  }
}

// fadak.Global = fadak.Global || {};
// fadak.Global.init = function () {
//   try {

//   } catch (error) {
//     console.log("Error on fadak.Global.init() : " + error)
//   }
// }

window.addEventListener("DOMContentLoaded", function () {
  fadak.homeTabs.init()
});
