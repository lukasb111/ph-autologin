import { optionsPopup } from './optionsModal';

export function optionsMenu(): void {
    fetch(chrome.runtime.getURL('options/options.html'))
    .then(response => response.text())
    .then(htmlContent => {
  
      const div = document.createElement('div');
      div.innerHTML = htmlContent;
      div.setAttribute("id", "optionsWrap");
      div.onclick = function() { 
        if(!document.getElementById('phToolsMenuPopup')){
          optionsPopup();
        }
      };
  
      const body = document.querySelector('body');
      body.appendChild(div);
  
      document.getElementById("optionsLogo").src = chrome.runtime.getURL("icons/tools.png");
  
    })
    .catch(error => {
      console.error('Error fetching HTML file:', error);
    });
  }