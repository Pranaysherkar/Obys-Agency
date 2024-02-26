function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
};
function loadingAnimation() {
    var t1 = gsap.timeline();
    t1.from(".line > h1, .line > h2", {
        y: 150,
        stagger: .25,
        duration: .6,
        delay: .5,
    });

    t1.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var counter = document.querySelector(`#line1-part1 h5`);
            var loader = document.querySelector("#line-loader");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    counter.innerHTML = grow++;
                    loader.style.width = grow + "%";
                    loader.style.display = "block";
                    loader.style.opacity = 1;
                }
                else {
                    counter.innerHTML = grow;
                    loader.style.display = "none";
                }
            }, 27);
        },
    });

    t1.to(".line > h2", {
        animationName: "anime",
        opacity: 1,
    });

    t1.to("#loader", {
        opacity: 0,
        duration: 0.2,
        y: -1600,
        delay: 3,
    });
    t1.to("#loader", {
        display: "none",
    });
    t1.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.6,
        ease: Power4,
    });

    t1.from("#nav", {
        opacity: 0,
    });

    t1.from(".hero h1, .hero h2, .hero h3", {
        y: 140,
        stagger: .2,
    });

    t1.from("#hero1, #page2", {
        opacity: 0,
    }, "-=1.2");


}
function cursor() {

    document.addEventListener("mousemove", function (e) {
        gsap.to("#cursor", {
            left: e.x,
            top: e.y,
        });
    });

    const videoContainer = document.querySelector("#video-con");
    const video = document.querySelector("#video-con video");
    const btnElement = document.querySelector("#video-con #btn");
    const cursorElement = document.querySelector("#cursor");

    let isVideoPlaying = false;

    videoContainer.addEventListener("mouseenter", function () {
        this.addEventListener("mousemove", function (e) {
            gsap.to(cursorElement, {
                opacity: 0,
            });
            gsap.to(btnElement, {
                left: e.x - 570,
                top: e.y - 250,
            });
        });
    });

    video.addEventListener("mouseleave", function () {
        gsap.to(cursorElement, {
            opacity: 1,
        });
        gsap.to(btnElement, {
            top: "-10%",
            left: "80%",
        });

    });

    videoContainer.addEventListener("click", function () {
        if (isVideoPlaying) {
            video.pause();
            gsap.to(video, { opacity: 0 });
            btnElement.innerHTML = `<i class="ri-play-fill"></i>`;
            gsap.to(btnElement, { scale: 1 });
        } else {
            video.play();
            gsap.to(video, { opacity: 1 });
            btnElement.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            gsap.to(btnElement, { scale: 0.5 });
        }
        isVideoPlaying = !isVideoPlaying;
    });

};
function sheryAnimation() {

    Shery.imageEffect(".image-div", {
        style: 2,
        config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -10 }, "mousemove": { "value": 3 }, "modeA": { "value": 1 }, "modeN": { "value": 3 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7666557722625823 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.76, "range": [0, 10] }, "metaball": { "value": 0.6, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.37, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] }, "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": -0.91, "range": [-1, 1] } },
        gooey: true,
    });
    Shery.makeMagnet("#nav h4,#nav svg:nth-child(1),.circle-div,.element", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .5,
    });
};
function flagAnimation() {
    document.addEventListener("mousemove", function (e) {
        gsap.to("#flag", {
            left: e.x,
            top: e.y,
        });
    });
    document.querySelector("#hero3").addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1,

        });
    });
    document.querySelector("#hero3").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0,

        });
    });
};
function scrollAnimation() {
    let x = gsap.timeline();

    x.from("#page3 h1", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        },
    });
    x.to("#page3 #line1", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#page3 #line1",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from("#page3 #element1 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element1 h2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element1 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element1 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.to("#page3 #element1 .under-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#element1 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element--1 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element--1 h2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element--1 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element--1 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.to("#page3 #element--1 .under-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#element--1 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element2 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element2 h2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element2 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element2 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.to("#page3 #element2 .under-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#element2 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element3 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element3 h2",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top 50%",
            scrub: 3
        }
    });
    x.from("#page3 #element3 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element3 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.to("#page3 #element3 .under-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#element3 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element4 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element4 h2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 60%",
            scrub: 3
        }
    });
    x.from("#page3 #element4 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element4 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.to("#page3 #element4 .under-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#element4 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element5 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element5 h2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element5 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element5 .info",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.to("#page3 #element5 .under-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#element5 .under-line",
            scroller: "#main",
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
        }
    });
    x.from(" #container h1", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#container h1",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
        },
    });
    x.to("#container .bottom-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#container .bottom-line",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from("#container p", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#container p",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 55%",
            scrub: 4,
        },
    });
    x.to("#container #bottom-line2", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#container #bottom-line2",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from(" #footer h1", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#footer h1",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
        },
    });
    x.to("#footer .bottom-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#footer .bottom-line",
            scroller: "#main",
            // markers: true,
            start: "top 65%",
            end: "top 55%",
            scrub: 3,
        }
    });
    x.from("#footer .box", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#footer .box",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 55%",
            scrub: 4,
        },
    });
}
function mobileScreen() {

    window.addEventListener("load", function () {
        window.scrollTo(0, 0);
    });
    window.addEventListener("beforeunload", function () {
        window.scrollTo(0, 0);
    });
    gsap.to("#nav", {
        position: 'fixed',
        backdropFilter: 'blur(50px)',
        scrollTrigger: {
            trigger: "#nav",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3,
            ease: 'power2.inOut'
        }

    });

    const videoContainer = document.querySelector("#video-con");
    const video = document.querySelector("#video-con video");
    const btnElement = document.querySelector("#video-con #btn");
    let isVideoPlaying = false;
    videoContainer.addEventListener("click", function () {
        if (isVideoPlaying) {
            video.pause();
            gsap.to(video, { opacity: 0 });
            btnElement.innerHTML = `<i class="ri-play-fill"></i>`;
            btnElement.style.mixBlendMode = "normal";
            gsap.to(btnElement, { scale: 1 });
        } else {
            video.play();
            gsap.to(video, { opacity: 1 });
            btnElement.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            btnElement.style.mixBlendMode = "difference";
            gsap.to(btnElement, { scale: 0.6 });
        }
        isVideoPlaying = !isVideoPlaying;
    });

};

function gsapMobileScroll() {
    let x = gsap.timeline();

    x.from("#page3 h1", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3,
        }
    });
    x.to("#page3 #line1", {
        "--width": "90vw",
        scrollTrigger: {
            trigger: "#page3 #line1",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from("#page3 #element1 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element1 h2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element1 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element1 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element1 .under-line", {
        scale: 0,
        scrollTrigger: {
            trigger: "#element1 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element--1 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element--1 h2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element--1 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element--1 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element--1 .under-line", {
        scale: 0,
        scrollTrigger: {
            trigger: "#element--1 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element2 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element2 h2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element2 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element2 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element2 .under-line", {
        scale: 0,
        scrollTrigger: {
            trigger: "#element2 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element3 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element3 h2",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top 50%",
            scrub: 3
        }
    });
    x.from("#page3 #element3 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element3 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element3 .under-line", {
        scale: 0,
        scrollTrigger: {
            trigger: "#element3 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element4 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element4 h2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 60%",
            scrub: 3
        }
    });
    x.from("#page3 #element4 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element4 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element4 .under-line", {
        scale: 0,
        scrollTrigger: {
            trigger: "#element4 .under-line",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3
        }
    });
    x.from("#page3 #element5 h2", {
        y: 100,
        scrollTrigger: {
            trigger: "#page3 #element5 h2",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3
        }
    });
    x.from("#page3 #element5 .info", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#element5 .info",
            scroller: "#main",
            // markers: true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    });
    x.from("#page3 #element5 .under-line", {
        scale: 0,
        scrollTrigger: {
            trigger: "#element5 .under-line",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from("#circle-4", {
        scale: .5,
        scrollTrigger: {
            trigger: "#circle-4",
            scroller: "#main",
            // markers:true,
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
        }
    });
    x.from(" #container h1", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#container h1",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 80%",
            scrub: 3,
        },
    });
    x.to("#container .bottom-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#container .bottom-line",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from("#container p", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#container p",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 65%",
            scrub: 4,
        },
    });
    x.to("#container #bottom-line2", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#container #bottom-line2",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 70%",
            scrub: 3,
        }
    });
    x.from(" #footer h1", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#footer h1",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 3,
        },
    });
    x.to("#footer .bottom-line", {
        "--width": "100%",
        scrollTrigger: {
            trigger: "#footer .bottom-line",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
        }
    });
    x.from("#footer .box", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: "#footer .box",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 70%",
            scrub: 4,
        },
    });
}
loadingAnimation();
locomotive();
if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    cursor();
    flagAnimation();
    sheryAnimation();
    scrollAnimation();
}
else {
    var extraImg = document.querySelectorAll(".extraImg");
    extraImg.forEach(function (img) {
        img.style.display = "none";
    })
    mobileScreen();
    gsapMobileScroll();
}
