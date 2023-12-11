gsap.to('.imgContainer', {
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    width: "100%",
    repeat: -1,
})
gsap.to('#text h1', {
    left: "0",
    stagger: 2,
    duration: 2,
    ease: Expo.easeInOut,
    repeat: -1,
})
gsap.to('#text h1', {
    delay: 1,
    top: "-100%",
    stagger: 2,
    duration: 2,
    ease: Expo.easeInOut,
    repeat: -1,
})
gsap.to('#text h1:last-child', {
    delay: 6,
    top: "0",
    stagger: 2,
    duration: 2,
    ease: Expo.easeInOut,
})