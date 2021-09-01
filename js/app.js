paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function () {

    const tl = new TimelineMax();


    document.querySelector("#pre-loader").style.background = "transparent";

    tl.to("#pre-loader #preload-img", 1, { opacity: '0', y: "-40%" })
    tl.to("#pre-loader-before h1", 0.5, { opacity: '0', y: "10%" }, "-=1")

    tl.to(".pre-loader-animation-tile", {
        duration: 0.5,
        top: "-100%",
        // delay: 0.5,
        stagger: 0.2,
    }, "-=0.4");

    tl.to("#pre-loader", 0.1, { top: '-100%' })

    tl.fromTo("#slider h1", 1, { opacity: "0", y: "-10%" }, { opacity: "1", y: "0%", ease: "none" }, "-=0.7")
    tl.fromTo("#slider a", 1, { opacity: "0", y: "5%" }, { opacity: "1", y: "0%", ease: "none" }, "-=0.7")
    tl.fromTo(".primary-menu-trigger ", 0.5, { opacity: "0", x: "50%" }, { opacity: "1", x: "0%", ease: "none" }, "-=3")
});