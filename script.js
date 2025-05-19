particlesJS("particles-js", {
  particles: {
    number: { value: 305 },
    size: { value: 1.7 },
    color: { value: "#ffe4c4" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      }
    }
  }
});

const rotateWords = () => {
  const wrapper = document.querySelector(".cd-words-wrapper");
  const words = wrapper.querySelectorAll("b");
  let index = 0;

  setInterval(() => {
    words[index].classList.remove("is-visible");
    index = (index + 1) % words.length;
    words[index].classList.add("is-visible");
  }, 2500);
};

document.addEventListener("DOMContentLoaded", rotateWords);
