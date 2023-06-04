import { openPopup, closePopup } from '../utils/popup';
import { heroModal } from './modals/heroModal';

export function optionsPopup(): void {
  const modalName = "phToolsMenuPopup";

  const main = () => {
    // Close options modal
    document.getElementById("closePopup").addEventListener('click', function() : void {
      closePopup(modalName);
    });

    // Options
    const options = document.querySelectorAll('[content-option]');
    options.forEach( option => {
      option.addEventListener('click', function() : void {
        const selectedOption = this.getAttribute("content-option");
        switch(selectedOption){
          case "hero":
            closePopup(modalName);
            heroModal();
            break;
        }
      });
    });
  };

  openPopup('options/popup/popup.html', modalName, main)



}