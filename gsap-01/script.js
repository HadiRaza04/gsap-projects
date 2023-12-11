gsap.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 3,
    // repeat: -1
    // duration: 4,
})
gsap.to("#text h1", {
    ease: Expo.easeInOut,
    top: "0",
    stagger: 3
})
gsap.to("#text h1", {
    delay: 3,
    ease: Expo.easeInOut,
    top: "-100%",
    stagger: 3
})
gsap.to("#text h1:last-child", {
    delay: 27,
    top: "0",
    // ease: Expo.easeInOut,
    // repeat: -1
    // stagger: 2,
    // duration: 2,
    // repeat: -1
})