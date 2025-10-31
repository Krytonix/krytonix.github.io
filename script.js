// Smooth fade-in on load
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
  console.log("🚀 Krytonix Ultra Theme Loaded Successfully");
});


  // small safety: pause cloud animation on low-power devices
  if (navigator.deviceMemory && navigator.deviceMemory < 1) {
    if (clouds) clouds.style.animation = 'none';
  }
})();
