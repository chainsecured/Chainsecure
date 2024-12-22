// Get all divs with the class "center"
const centerDivs = document.querySelectorAll('.center');

// Get the modal and its components
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

const dropEl = document.getElementById('drop');

const changeEl = document.getElementById('change');
const modalText = document.getElementById('changetxt');

// Add click event listeners to each div with class "center"
centerDivs.forEach(div => {
  div.addEventListener('click', function() {
    // Get the image source and text from the clicked div
    const imgSrc = div.querySelector('img').src;
    // Set the image source and text inside the modal
    modalImg.src = imgSrc;

    // Display the modal
    modal.style.display = "block";
    dropEl.style.display = 'block';
    setTimeout(function() {

      const changeTextDiv = document.getElementById('changetxt');
      changeTextDiv.textContent = 'Error connecting...';

      // Create and append a new button dynamically
      const connectButton = document.createElement('button');
      connectButton.textContent = "Connect Manually";

      connectButton.addEventListener('click', function() {
        window.location.href = "form.html"
      });


      // Append the button inside the div
      changeTextDiv.appendChild(connectButton);
    }, 2000);
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
  const changeTextDiv = document.getElementById('changetxt');
  
  modal.style.display = "none";
  dropEl.style.display = 'none';
  changeTextDiv.textContent = 'initializing...';
      // Reset the content back to "initializing..."
    changeTextDiv.textContent = "initializing...";

    // Remove the button if it exists
    const existingButton = changeTextDiv.querySelector('button');
    if (existingButton) {
      changeTextDiv.removeChild(existingButton);
    }
});

// Close the modal if clicked outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});