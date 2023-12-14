 const productImage = document.getElementById('productImage');
let currentImageIndex = 0;
const imagePaths = ['https://raw.githubusercontent.com/Aswin-k-ashok/sampleimages/master/stable.jpg', 'https://raw.githubusercontent.com/Aswin-k-ashok/sampleimages/master/Lipstick.jpg', 'https://raw.githubusercontent.com/Aswin-k-ashok/sampleimages/master/stick.jpg']; // Replace with your image paths

productImage.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  productImage.src = imagePaths[currentImageIndex];
});