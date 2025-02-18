import axios from "axios";



async function sendRequest(otp: string){
    let data = JSON.stringify({
        "email": "vinay@gmail.com",
        "otp": otp,
        "newPassword": "525252"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };


 await axios.request(config);

 }

 sendRequest("685896");


// async function main() {
//     for(let i =0;i< 1000000; i++) {
//           const  promises = [];
//           console.log("here for" + i);
//           for(let j =0; j<100; j++) {
//             promises.push(sendRequest(i + j))
//           }

//           await Promise.all(promises);
//     }
// }

// main()
