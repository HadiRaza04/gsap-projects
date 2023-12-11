# <a href="https://hadiraza04.github.io/gsap-01/">Animation practice 1</a>

## Add <a href="https://cdnjs.com/libraries/gsap">GSAP CDN</a>
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" integrity="sha512-7Au1ULjlT8PP1Ygs6mDZh9NuQD0A5prSrAUiPHMXpU6g3UMd8qesVnhug5X4RoDr35x5upNpx0A6Sisz1LSTXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
## Use GSAP
```javascript
gsap.to(".class OR #id", {
    delay: 18,
    top: "0",
    ease: Expo.easeInOut,
    repeat: -1
    stagger: 2,
    duration: 2,
    repeat: -1
})
```
