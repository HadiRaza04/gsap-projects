gsap.to('#image', {
    duration: 1,
    stagger: 2,
    width: '100%',
})
document.querySelector("#card").addEventListener("mouseover", () => {
    gsap.to('#text', {
        duration: 1,
        stagger: 1,
        height: '100%',
    })
    gsap.to('#image', {
        duration: 1,
        stagger: 1,
        width: '0%',
    })
})
document.querySelector("#card").addEventListener("mouseout", () => {
    gsap.to('#text', {
        duration: 1,
        stagger: 1,
        height: '0%',
    })
    gsap.to('#image', {
        duration: 1,
        stagger: 1,
        width: '100%',
    })
})