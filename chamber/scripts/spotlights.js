const memberUrl = 'https://jordenoliver.github.io/wdd230/chamber/data/members.json';

const cards = document.querySelector('.tier2');
const array = [];
let newArray = [];
let spotNumber = 3;
var count = 0;

async function GetMemberData() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    displaySpotlight(data.members);
    
}
GetMemberData();

const displaySpotlight = (members) => {
    members.forEach((member) => {
        
        if (member.membership == "Gold" || member.membership == "Silver") {
            array.push(member);
        }   
        array.forEach((member) => {  
            if (count < spotNumber) {    
                let randoMember = array[Math.floor(Math.random() * array.length)];
                if (!newArray.includes(randoMember)) {
                    newArray.push(randoMember);
                
                    newArray.forEach((member) => {
                        let card = document.createElement('section');
                        let header = document.createElement('h3');
                        let icon = document.createElement('img');
                        let phone = document.createElement('p');
                        let website = document.createElement('a');

                        phone.textContent = `${member.phone}`;
                        website.innerHTML = `${member.url}`;
                        website.setAttribute('href', `${member.url}`);
                
                        icon.setAttribute('src', member.icon);
                        icon.setAttribute('alt', `${member.name}`);
                        icon.setAttribute('loading', 'lazy');
                        icon.setAttribute('width', '200');
                        icon.setAttribute('height', '100');

                        header.appendChild(icon);
                        card.appendChild(header);
                        card.appendChild(phone);
                        card.appendChild(website);
                        count++;
                        cards.appendChild(card);
                        
                    })
}
            } 
        } )
        }
        
        )  
    };  
        
console.log(newArray);