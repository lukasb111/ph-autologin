import { waitForElementLoad } from "./utils/waitForElementLoad";
import { getStorageItem } from './storage';

// range
type raceType = "0"|"5";


const fillFormPartOne = (id_race: string, id_existing_player: string, id_area: string, id_existing_hero: string) => {

    // Select race ( lidé = 0 čb = 5 )
    if(id_race === "5"){
      const raceButton = document.getElementById("lb_race") as HTMLInputElement;
      raceButton.value = id_race;
      raceButton.dispatchEvent(new Event('change'));
    }

    // Select acc
    const playerButton = document.getElementById("cb_exist_name") as HTMLInputElement;
    playerButton.value = id_existing_player;
    playerButton.dispatchEvent(new Event('change'));

    // Select map area
    const areaButton = document.getElementById("lb_area") as HTMLInputElement;
    areaButton.value = id_area;
    areaButton.dispatchEvent(new Event('change'));

    // Select hero
    const heroButton = document.getElementById("cb_heroes_" + id_existing_player) as HTMLInputElement;
    heroButton.value = id_existing_hero;
    heroButton.dispatchEvent(new Event('change'));
    // Select flag
    /*
    const flagButton = document.getElementById("lb_flag") as HTMLInputElement;
    flagButton.value = id_flag;
    flagButton.dispatchEvent(new Event('change'));*/
}

const fillFormPartTwo = (id_race: string, id_castle_profile: string, id_technology: string, id_unit: string) => {
  switch(id_race){
    case "0": {

      // castle profile
      /*
      const castleprofileButton = document.getElementById(id_castle_profile + "_cb_technologies") as HTMLInputElement;
      technologyButton1.value = id_technology;
      technologyButton1.dispatchEvent(new Event('change'));*/

      // tech
      const technologyButton1 = document.getElementById(id_castle_profile + "_cb_technologies") as HTMLInputElement;
      technologyButton1.value = id_technology;
      technologyButton1.dispatchEvent(new Event('change'));

      // unit
      const unitButton5 = document.getElementById(id_castle_profile + "_cb_units") as HTMLInputElement;
      unitButton5.value = id_unit;
      unitButton5.dispatchEvent(new Event('change'));
      
      break;
    }
    case "5": {
      // tech
      const technologyButton5 = document.getElementById("div_bratrstvo1_cb_technologies") as HTMLInputElement;
      technologyButton5.value = id_technology;
      technologyButton5.dispatchEvent(new Event('change'));

      // unit
      const unitButton5 = document.getElementById("div_bratrstvo1_cb_units") as HTMLInputElement;
      unitButton5.value = id_unit;
      unitButton5.dispatchEvent(new Event('change'));
      break;
    }
  }
}

const main = async (): Promise<void> => {


    // Load user defined values 
    const id_race: raceType = await getStorageItem("id_race") || undefined;
    const id_existing_player = await getStorageItem("id_existing_player") || undefined;
    const id_area = await getStorageItem("id_area") || undefined;
    const id_existing_hero = await getStorageItem("id_existing_hero") || undefined;
    const id_castle_profile = await getStorageItem("id_technology") || undefined;
    const id_technology = await getStorageItem("id_technology") || undefined;
    const id_unit = await getStorageItem("id_unit") || undefined;

    // Fill first form
    fillFormPartOne(id_race, id_existing_player, id_area, id_existing_hero);
  
    // After clicking on submit, fill the second form
    const submitButtonOne = document.getElementById("butt_submit") as HTMLInputElement;
    submitButtonOne.addEventListener("click", () => {
      waitForElementLoad("cb_castle_profiles", 50, 10, () => fillFormPartTwo(id_race, id_castle_profile, id_technology, id_unit) );
    });
  }

// Run
waitForElementLoad("butt_submit", 50, 10, main);