const umbrellaImage = document.getElementById("umbrella");
const colorSwatches = document.querySelectorAll(".swatch");

// Handle logo upload
const logoInput = document.getElementById("logoUpload");
const logoImage = document.getElementById("logo-image");

logoInput.addEventListener("change", function () {
  const file = logoInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageData = event.target.result;
      logoImage.src = imageData;
    };

    reader.readAsDataURL(file);
  } else {
    logoImage.src = ""; // Reset the logo image if no file is selected
  }
});

// Handle color swatch clicks
colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const color = swatch.dataset.color;
    umbrellaImage.src = `${color} umbrella.png`;
  });
});
