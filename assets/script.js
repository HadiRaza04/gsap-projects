gsap.to('.imgDiv', {
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    width: "100%",
    // repeat: -1
})
gsap.to('#text h1', {
    duration: 2.1,
    stagger: 2,
    ease: Expo.easeInOut,
    top: "0",
    // repeat: -1
})
gsap.to('#text h1', {
    delay: 2,
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    top: "50px",
    // repeat: -1
})
gsap.to('#text h1:last-child', {
    delay: 8,
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    top: "0",
})