import { openPopup, closePopup } from '../../utils/popup';
import { setStorageData, getStorageData } from '../../utils/storage';

export function heroModal(): void {
  const modalName = "popup";

  const units = {
    mage: {
      yellow: {
        preview: "i/u/maz_3_3.gif",
        text: "Placeholder text"
      },
      white: {
        preview: "i/u/mab_3_3.gif",
        text: "Placeholder text"
      },
      dark: {
        preview: "i/u/mac_3_3.gif",
        text: "Wielder of powerful ancient dark magic and artifacts, few can stand against your hero and live to tell the tale."
      },
    }
  }

  const main = async () => {
    // Constants for hero modal
      const options = document.querySelectorAll('[content-option]');
      const heroSkinPreview = document.getElementById("heroImage") as HTMLImageElement;
      const heroText = document.getElementById("heroText");

    // Init close options modal
      document.getElementById("closePopup").addEventListener('click', function() : void {
        closePopup(modalName);
      });

    // Apply selected skin

      interface Hero {
        skin?: string,
      }
      const hero: Hero = await getStorageData("skin");
      const selectedSkin = hero.skin as keyof typeof units.mage;
      
      if(selectedSkin){
        console.log(selectedSkin);
        heroSkinPreview.src = units.mage[selectedSkin].preview;
      }

    options.forEach( option => {
      option.addEventListener('click', async function() : Promise<void> {

        // Get dom elements
        const selectedOption: keyof typeof units.mage = this.getAttribute("content-option");

        // Change skin and persist data
        await setStorageData({"skin": selectedOption });
        heroText.textContent = units.mage[selectedOption].text;
        heroSkinPreview.src = units.mage[selectedOption].preview;

      });
    });
  }

  openPopup('options/popup/hero/hero.html', modalName, main);


}