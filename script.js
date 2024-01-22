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
    document.body.style.overflow = 'hidden';

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
        delay: 3,
    });

    t1.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.6,
        ease: Power4,
    });

    t1.to("#loader", {
        display: "none",
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

    t1.call(function () {
        document.body.style.overflow = 'auto';
    });
}

function cursor() {

    document.addEventListener("mousemove", function (e) {
        gsap.to("#cursor", {
            left: e.x,
            top: e.y,
        });
    });
    Shery.makeMagnet("#nav h4,#nav svg:nth-child(1)", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .5,
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
            scale:1,
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
    Shery.makeMagnet(".circle-div,.element", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
};
function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        config: { "a": { "value": 0.69, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272749637004141 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.21, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.46, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.39, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.29, "range": [0, 2] }, "noise_scale": { "value": 22.9, "range": [0, 100] } },
        gooey: true,
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

loadingAnimation();
locomotive();
cursor();
sheryAnimation();
flagAnimation();
