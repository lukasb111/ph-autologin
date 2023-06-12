function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export const waitForElementLoad = (elementID: string, maxAttempts: number, retryCooldown: number, callback?: () => void, loops = 0): void => {
    async function afterContentLoad() {
      let contentLoaded = false;
  
      await delay(retryCooldown);
      while(!contentLoaded){
        if(loops < maxAttempts){
          const submitButtonOne = document.getElementById(elementID) as HTMLInputElement;
          if(submitButtonOne){
            contentLoaded = true;
            console.log("Content loaded in about " + (retryCooldown * loops) + " ms");
          }
          await delay(retryCooldown);
          loops++;
        }
      }
      if(callback) callback();
    };
    afterContentLoad();
}
  