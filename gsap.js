var tl = gsap.timeline()

tl.from("a",{
    y:-20,
    opacity:0,
    duration:1.5,
    delay:.05
})

// tl.from("p",{
//     y:-20,
//     opacity:0,
//     duration:1.5,
//     delay:.05,
//     stagger:0.3
// })

tl.from("h",{
    y:-20,
    opacity:0,
    duration:1.5,
    delay:.05,
    stagger:0.3
})

// GSAP Scroll

gsap.to("#page4 #text",{
    transform: "translate(-30%)",
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        markers: true,
        start:"top 0%",
        end:"top -800%",
        scrub:2,
        pin:true
    }
})

// Crusor

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function(dets){
    gsap.to(crusor,{
        x:dets.x,
        y:dets.y,
        duration:.6,
        // ease:"back.out"
    })
})

imageDiv.addEventListener("mouseenter", function() {
    crusor.innerHTML = "View More";
   gsap.to(crusor,{
    scale:2,
    backgroundColor:"#ffffff7c"
   })
})

imageDiv.addEventListener("mouseleave", function() {
    crusor.innerHTML = "";
   gsap.to(crusor, {
    scale:1,
    backgroundColor:""
   })
})
