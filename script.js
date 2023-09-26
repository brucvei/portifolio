// https://youtu.be/b5s55FzPTac?feature=shared&t=1405
particlesJS("particles", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
})

function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
    const scroll = document.querySelector(".scroll-top");
    scroll.classList.toggle("hidden", window.scrollY < 200);
})