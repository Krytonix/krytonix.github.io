document.getElementById("openMap").addEventListener("click", () => {
  const seed = prompt("Enter your Minecraft seed:");
  if (seed && seed.trim() !== "") {
    const url = `https://www.chunkbase.com/apps/seed-map#${seed.trim()}`;
    window.open(url, "_blank");
  } else {
    alert("Please enter a valid seed!");
  }
});