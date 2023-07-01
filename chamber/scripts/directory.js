const url = 'https://jordenoliver.github.io/wdd230/chamber/data/members.json';

const cards = document.querySelector('.cards');

async function GetMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}
GetMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let icon = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        

        fullName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.innerHTML = `${member.url}`;
        website.setAttribute('href', `${member.url}`);
        
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '100');

        card.appendChild(icon);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        

        cards.appendChild(card);
    });
}