const shareButtons = document.querySelectorAll('button');
let hasBeenToggled = false;

function displayShareButtons() {
  if (document.documentElement.clientWidth < 768) {
    // if client width is lower than tablet
    const profileSection = document.querySelector('.text-container__profile-container');
    const shareSection = document.querySelector('.text-container__share-container');
    profileSection.classList.toggle('hidden');
    shareSection.classList.toggle('visible');
  } else {
      const popUpShareBox = document.querySelector('.profile-container__share-btn-popout');
      const mainShareButton = document.querySelector('button');
      const buttonCoords = mainShareButton.getBoundingClientRect();
      const arrow = document.querySelector('.arrow');

      if (hasBeenToggled === false) {
        // This runs for the first time the share popup is toggled, as it needs to position it over the button
        popUpShareBox.classList.remove('hidden');
        popUpShareBox.classList.toggle('visible-pop');
        
        // Position popup box
        popUpCoords = popUpShareBox.getBoundingClientRect();
        popUpShareBox.style.top = (buttonCoords.top - popUpCoords.height) - 15 + 'px';
        popUpShareBox.style.left = (buttonCoords.left - (popUpCoords.width / 2) + (buttonCoords.width / 2)) + 'px';

        // Position arrow
        arrowCoords = arrow.getBoundingClientRect();
        arrow.style.left = ((popUpCoords.width / 2) - 10) + 'px';
        arrow.style.top = (popUpCoords.height / 1.25) + 'px';

        hasBeenToggled = true;
      } else {
        popUpShareBox.classList.toggle('visible-pop');
      }

  }
}

shareButtons.forEach(button => button.addEventListener('click', displayShareButtons));