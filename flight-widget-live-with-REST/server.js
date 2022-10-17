const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())

app.get('/flight', (req, res)=>{

    const options = {
        method: 'GET',
        url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/Arrivals',
        headers: {
          'X-RapidAPI-Key': 'ed4add34cbmsh242f6f368cf59e5p140522jsn0eb705b75da6',
          'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
        }
      }
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      })
})

