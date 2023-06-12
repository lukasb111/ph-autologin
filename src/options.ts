import '../styles/options.scss';
import { openPopup, closePopup } from './utils/popup';
import { getStorageData, getStorageItem, setStorageData } from './storage';

// Data
import castle_profiles from "../static/data/castle_profiles";
import technologies from "../static/data/technologies";
import units from "../static/data/units";

console.log("OLONGJOHNOSON");
//servers_table


const setTechnologies = async (id_race: string, id_castle_profile: string, forceValue?: string): Promise<void> => {
    if(forceValue) await setStorageData({ "id_technology": forceValue});
    const technologyElement = document.getElementById("id_technology");
    technologyElement.innerHTML = "";
    technologies[id_race][id_castle_profile].map( (technologyValue, index) => {
        const option = document.createElement("option");
        option.innerHTML = technologyValue;
        option.value = index;
        technologyElement.appendChild(option);
    });
};

const setUnits = async (id_race: string, id_castle_profile: string, forceValue?: string): Promise<void> => {
    if(forceValue) await setStorageData({ "id_unit": forceValue});
    const unitElement = document.getElementById("id_unit");
    unitElement.innerHTML = "";
    units[id_race][id_castle_profile].map( (unitValue, index) => {
        const option = document.createElement("option");
        option.innerHTML = unitValue;
        option.value = index;
        unitElement.appendChild(option);
    });
};

const table = document.getElementById("servers_table");
const div = document.createElement("div");
div.innerHTML = "Nastavení registrace";
div.classList.add("options");
div.onclick = () => {
    openPopup("options/popup/popup.html", "autologin1", async () => {
        const img = chrome.runtime.getURL('icons/background.jpg');
        const closeImage = chrome.runtime.getURL('icons/ui-icons_e9cd86_256x240.png');

        document.getElementById("autologin1").style.backgroundImage = "url(" + img + ")";
        document.getElementById("closeButton").style.backgroundImage = "url(" + closeImage + ")";

        document.getElementById("closeButton").onclick = () => {
            closePopup("autologin1");
        }

        console.log(await getStorageData());

        const id_existing_player = document.getElementById("id_existing_player");
        const id_existing_hero = document.getElementById("id_existing_hero");
        const settingsFields = document.getElementsByClassName("autologinSettings");
        // Handle text fields
        Array.from([id_existing_player, id_existing_hero]).forEach(async function (element) {
            const savedValue = await getStorageItem(element.id);
            if(savedValue) element.value = savedValue;
            (element as HTMLTextAreaElement ).onchange = async (e) => {
                const target = e.target as HTMLInputElement;
                await setStorageData({ [target.id]: target.value});
            }
        });

        // Handle option select fields 260906 1001
        Array.from(settingsFields).forEach(async function (element) {

            // Load saved data 
            const valueSet = await getStorageItem(element.id);
            if(element.id === "id_castle_profile" && valueSet){
                const raceSelected = await getStorageItem("id_race");
                const castleProfileElement = document.getElementById("id_castle_profile");
                castleProfileElement.innerHTML = "";
                castle_profiles[raceSelected].map( async (castleProfile) => {

                    const key = Object.keys(castleProfile)[0];
                    const value = Object.values(castleProfile)[0];
                    await setStorageData({ "id_castle_profile": key });
                    const option = document.createElement("option");
                    option.innerHTML = value;
                    option.value = key;
                    castleProfileElement.appendChild(option);
                });
            }
            if(valueSet){
                element.value = valueSet;
            }
            (element as HTMLTextAreaElement ).onchange = async (e) => {
                const value = (e.target as HTMLTextAreaElement ).value;
                const key = element.id;
                //await setStorageData({ [key]: value });
                await setStorageData({ [key]: value});

                switch(key){
                    case "id_race":{
                        // Change castle profile
                        const castleProfileElement = document.getElementById("id_castle_profile");
                        castleProfileElement.innerHTML = "";
                        castle_profiles[value].map( async (castleProfile) => {
    
                            const key = Object.keys(castleProfile)[0];
                            const value = Object.values(castleProfile)[0];
    
                            // add castle profile
                            const option = document.createElement("option");
                            option.innerHTML = value;
                            option.value = key;
                            castleProfileElement.appendChild(option);
                        });
                        const id_race = await getStorageItem("id_race") as string;
                        const newCastleProfile = Object.keys(Object.values(castle_profiles[value])[0])[0];
                        await setStorageData({ "id_castle_profile": newCastleProfile});
    
                        setTechnologies(id_race, newCastleProfile, "1");
                        setUnits(id_race, newCastleProfile, "1");
                        }
                        break;
                    case "id_castle_profile":{
                        const id_race = await getStorageItem("id_race");
                        setTechnologies(id_race, value);
                        setUnits(id_race, value);
                        }
                        break;
                }
            }
        });




    });


}

table.appendChild(div);