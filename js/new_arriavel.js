
// Your Unsplash API access key
const accessKey = "_MJ_YZZ9Z3ylaZLRLKGR1HwlSqko3ffNlXDIZtveQaA";

// Function to fetch furniture images from Unsplash based on a query
async function fetchFurnitureImages(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?count=100&query=furniture&client_id=${accessKey}`
    );
    const data = await response.json();
    displayImages(data);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Function to display images in the gallery
function displayImages(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear existing images

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.urls.regular;
    imgElement.alt = image.alt_description;

    gallery.appendChild(imgElement);
  });
}

// Search button click event handler
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value.trim();
  if (query !== "") {
    fetchFurnitureImages(query);
  }
});

// Load initial images when the page is loaded
window.addEventListener("load", () => {
  fetchFurnitureImages("furniture");
});
