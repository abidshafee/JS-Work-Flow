const tblBody = document.getElementById('tbl-body');

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
       },
      {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 320",
        gate: "C 31",
        remarks: "CANCELLED"
       },
      {
        time: "13:21",
        destination: "DUBAI",
        flight: "DXB 201",
        gate: "A 19",
        remarks: "CANCELLED"
      },
      {
        time: "14:01",
        destination: "FRANKFURT",
        flight: "FR 402",
        gate: "B 02",
        remarks: "ON TIME"
      },
      {
        time: "15:22",
        destination: "TOKYO",
        flight: "TK 211",
        gate: "A 32",
        remarks: "DELAYED"
      }
];

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUTH"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15;

// generating table data
function populateTbl(){
    for(const flight of flights){
        const tblRow = document.createElement("tr");

        for(const eachFlightdetail in flight){
            const tblCell = document.createElement("td");
            //breaking the data further into latter
            const word = Array.from(flight[eachFlightdetail]);

            for(const [index, letter] of word.entries()){
                const ltrElement = document.createElement('div');

                //set Amination for each latter
                setTimeout(()=>{
                ltrElement.classList.add('flip');
                ltrElement.textContent = letter;
                tblCell.append(ltrElement);
                }, 100*index)
                
            }

            //tblCell.innerText = flight[eachFlightdetail];
            tblRow.append(tblCell)
        }

        tblBody.append(tblRow);
    }
}
//calling the populate table function
//populateTbl();

function generateRandomLetter(){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random()*alphabet.length));
}

function generateRandomNumber(maxNumber){
  const numbers = "0123456789";
  if(maxNumber) {
    const newNumber = numbers.slice(0, maxNumber+1)
    return newNumber.charAt(Math.floor(Math.random()*newNumber.length))
  }
  return numbers.charAt(Math.floor(Math.random()*numbers.length));
}

function generateTime(){
  let dispHour = hour;
  if(hour < 24){
    hour++
  }
  if (hour >= 24){
    hour = 1;
    dispHour = hour;
  }
  if (hour<10){
    dispHour = "0" + hour;
  }
  return dispHour + ":" + generateRandomNumber(5)+generateRandomNumber();
}

function shuffleUp(){
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random()*destinations.length)],
    flight: generateRandomLetter()+generateRandomLetter() + " " +generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter()+" "+generateRandomNumber()+generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random()*remarks.length)],
  });
  tblBody.textContent = "";
  populateTbl();
}

setInterval(shuffleUp(), 1000);