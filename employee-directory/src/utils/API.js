import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  },

  getResults:function(){
    
      let headers = new Headers();
      const apiKey = "605ce036-2745-47d5-a34c-a58f081cd82c";
      
      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
      headers.append('Access-Control-Allow-Credentials', 'true');
  
      headers.append('Content-Type', 'application/json');
      headers.append('GET', 'POST', 'OPTIONS');
  
      // let lat = getCookie("lat");
      // let lon = getCookie("lon");
  
      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const queryURL =`https://ridb.recreation.gov/api/v1/activities?limit=50&offset=0"`;
       // site that doesn’t send Access-Control-*
      // console.log(queryURL);
  
      fetch( queryURL,{
          // credentials:"include",
          headers:{
              "Access-Control-Allow-Origin":`http://localhost:8080`,
              "Access-Control-Allow-Credentials":`true`,
              "Content-Type":`application/json`,
              "method":"GET",
          "Authorization":`Bearer ${apiKey}`,  
          }
      }) 
      .then(response => response.json())
      // .then(contents => console.log(contents))
      .then( (data) => {
  
  
      }).catch(() => console.log("Can’t access  response. Blocked by browser?"));
  
  
  }
};

