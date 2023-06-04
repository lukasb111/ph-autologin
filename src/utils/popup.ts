export function openPopup( pathToPopup: string, popupId: string, callback?: () => void ): void {
  fetch(chrome.runtime.getURL(pathToPopup))
  .then(response => response.text())
  .then(htmlContent => {

    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    div.classList.add("popup");
    div.classList.add("visible");
    div.setAttribute("id", popupId);

    const body = document.querySelector('body');
    body.appendChild(div);

    if(callback) callback();

  })
  .then()
  .catch(error => {
    console.error('Error fetching HTML file:', error);
  });
}

export function closePopup( popupId: string): void {
  const popupToBeClosed = document.getElementById(popupId);
  popupToBeClosed.remove();
}