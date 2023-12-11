gsap.to('.imgContainer', {
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    height: "100%"
})
gsap.to('#text h1', {
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    top: "0",
})
gsap.to('#text h1', {
    delay: 2,
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    top: "-100&"
})
gsap.to('#text h1:last-child', {
    delay: 14,
    duration: 2,
    stagger: 2,
    ease: Expo.easeInOut,
    top: "0"
})