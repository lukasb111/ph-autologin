
import axios from 'axios';
import { optionsMenu } from './components/optionsMenu';



// 1 --> Collect player data and sell it to the chinese
/*
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
*/

// 2 --> Inject options button
optionsMenu();

