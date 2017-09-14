$("object").each(function(){
  this.addEventListener("load", function(){
    let drawing = this.contentDocument;
    drawing.querySelector("svg").setAttribute("preserveAspectRatio", "none");
  });
});
var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
.add([
  TweenMax.to(".layer1", 1, {y: "+=60", ease: Linear.easeNone}),
  TweenMax.to(".layer2", 1, {y: "+=100", ease: Linear.easeNone}),
  TweenMax.to(".layer3", 0.75, {y: "+=150", ease: Linear.easeNone}),
  TweenMax.to(".layer4", 0.7, {y: "-300", ease: Linear.easeNone}),
  TweenMax.to(".logo", 0.8, {y: "+=250", ease: Linear.easeNone}),
]);

// build scene
var scene = new ScrollMagic.Scene({offset: 0, duration: 300})
        .setTween(tween)
        .addIndicators()
        .addTo(controller);