const shareButtons = document.querySelectorAll('button');

function displayShareButtons() {
  const profileSection = document.querySelector('.text-container__profile-container');
  const shareSection = document.querySelector('.text-container__share-container');
  profileSection.classList.toggle('hidden');
  shareSection.classList.toggle('visible');
}

shareButtons.forEach(button => button.addEventListener('click', displayShareButtons));