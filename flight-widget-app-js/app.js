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

function populateTbl(){
    for(const flight of flights){
        const tblRow = document.createElement("tr");

        for(const eachFlightdetail in flight){
            const tblCell = document.createElement("td");
            //breaking the data further into latter
            const word = Array.from(flight[eachFlightdetail]);

            for(const letter of word){
                const ltrElement = document.createElement('div');
                ltrElement.classList.add('flip');
                ltrElement.textContent = letter;
                tblCell.append(ltrElement);
            }

            //tblCell.innerText = flight[eachFlightdetail];
            tblRow.append(tblCell)
        }

        tblBody.append(tblRow);
    }
}

populateTbl();