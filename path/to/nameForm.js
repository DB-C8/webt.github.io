export class NameForm {
  static toggleForm() {
    const nameForm = document.getElementById('name-form');
    const fab = document.getElementById('fab');
    const topRightButton = document.getElementById('top-right-button');

    if (nameForm.classList.contains('active')) {
      nameForm.classList.remove('active');
      fab.classList.remove('hidden');
    } else {
      nameForm.classList.add('active');
      fab.classList.add('hidden'); 
    }

    if (nameForm.classList.contains('active')) {
      this.updateNameFormPosition();
    }
  }

  static updateNameFormPosition() {
    const fab = document.getElementById('fab');
    const nameForm = document.getElementById('name-form');
    const fabRect = fab.getBoundingClientRect();
    let leftPosition = fabRect.left - nameForm.clientWidth - 10;
    let topPosition = fabRect.top + (fabRect.height / 2) - (nameForm.clientHeight / 2);

    if (topPosition < 10) {
      topPosition = 10;
    }

    if (topPosition + nameForm.clientHeight > window.innerHeight) {
      topPosition = window.innerHeight - nameForm.clientHeight - 10;
    }

    nameForm.style.left = `${leftPosition}px`;
    nameForm.style.top = `${topPosition}px`;
  }
} 