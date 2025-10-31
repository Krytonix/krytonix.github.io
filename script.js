// Parallax effect: move bg-image slightly based on scroll for depth
(function() {
  const bgImage = document.querySelector('.bg-image');
  const clouds = document.querySelector('.bg-clouds');
  let lastScroll = window.scrollY;

  function onScroll() {
    const sc = window.scrollY || window.pageYOffset;
    const d = sc * 0.15; // slower movement (parallax)
    // translate background slightly
    if (bgImage) bgImage.style.transform = `translate3d(0, ${d}px, 0) scale(1.01)`;
    // clouds opposite speed for depth
    if (clouds) clouds.style.transform = `translate3d(${d * -0.4}px, 0, 0)`;
    lastScroll = sc;
  }

  // limiter for perf
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  });

  // Open Map button behaviour: prompt for seed and open Chunkbase
  const openMapBtn = document.getElementById('openMap');
  if (openMapBtn) {
    openMapBtn.addEventListener('click', () => {
      const seed = prompt("Enter your Minecraft seed:");
      if (seed && seed.trim() !== "") {
        const url = `https://www.chunkbase.com/apps/seed-map#${seed.trim()}`;
        window.open(url, "_blank");
      } else {
        alert("Please enter a valid seed!");
      }
    });
  }

  // small safety: pause cloud animation on low-power devices
  if (navigator.deviceMemory && navigator.deviceMemory < 1) {
    if (clouds) clouds.style.animation = 'none';
  }
})();
