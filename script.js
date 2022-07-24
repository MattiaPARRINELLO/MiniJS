document.body.style.display = "none";

const url = new URLSearchParams(window.location.search);
const beta = url.get("beta");
var datas = "";

var date = new Date();
var endDate = new Date("July 1, 2022 12:00:00");

var allow = false;

var json = $.getJSON("../beta.json").done(function () {
  datas = json.responseJSON;
  if (datas.includes(beta)) {
    allow = true;
  } else if (date > endDate) {
    allow = false;
  }
});

setTimeout(() => {
  if (allow) {
    document.body.style.display = "block";
    console.log("Access granted");
    console.log(
      "Welcome to the beta version of the website!, if you find any bugs please report them to the developer, this project will be released the" +
        endDate
    );
  } else {
    document.body.style.display = "none";
    console.log("Access denied");
    window.location.replace("/soon");
  }
}, 1500);

window.onload = () => {
  const runAllScripts = () => {
    initializeAllAccordions();
  };

  const listenForUrlChanges = () => {
    let url = location.href;
    document.body.addEventListener(
      "click",
      () => {
        requestAnimationFrame(() => {
          if (url !== location.href) {
            runAllScripts();
            url = location.href;
          }
        });
      },
      true
    );
  };

  const initializeAllAccordions = () => {
    const allAccordions = document.querySelectorAll('[data-role="Accordion"]');

    allAccordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(
        '[data-type="accordion-header"]'
      );
      const accordionContent = accordion.querySelector(
        '[data-type="accordion-content"]'
      );

      accordionHeader.addEventListener("click", () => {
        if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = "";
        } else {
          accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
        }
      });
    });
  };

  listenForUrlChanges();
  runAllScripts();
};
