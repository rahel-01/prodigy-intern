// Example: A simple JavaScript function to toggle a section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
  }

  // Example: Toggling a modal on button click
const modal = document.getElementById('modal');
const button = document.getElementById('modal-button');
const closeButton = document.getElementById('close-modal');

button.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});