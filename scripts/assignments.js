const jsonurl = "https://jordenoliver.github.io/wdd230/data/weeks.json"
const giturl = "https://jordenoliver.github.io/wdd230/"
const card = document.querySelector('.learningactivities');

async function GetActivities() {
    const response = await fetch(jsonurl);
    const links = await response.json();
    displayLinks(links);
    
}
GetActivities();

    
const displayLinks = (links) => {
    console.log(links);
    const one = links['week 01'];
    const two = links['week 02'];
    const three = links['week 03'];
    const four = links['week 04'];
    const five = links['week 05'];
            
    let weekOne = document.createElement('li'); 
    weekOne.append("Week 01: ");
    one.forEach((link) => {
        
        let assignment = document.createElement('a');  
        assignment.append(link.name);
        assignment.href = `${link.link}`;
        weekOne.appendChild(assignment);  
        card.append(weekOne);
    })
    let weekTwo = document.createElement('li'); 
    weekTwo.append("Week 02: ");
        two.forEach((link) => {
            let assignment = document.createElement('a');  
            assignment.append(link.name);
            assignment.href = `${link.link}`;
            weekTwo.appendChild(assignment); 
            card.append(weekTwo); 
        })
    let weekThree = document.createElement('li'); 
    weekThree.append("Week 03: ");
     three.forEach((link) => {
        let assignment = document.createElement('a');  
        assignment.append(link.name);
        assignment.href = `${link.link}`;
         weekThree.appendChild(assignment); 
         card.append(weekThree); 
     })
    
    let weekFour = document.createElement('li'); 
    weekFour.append("Week 04: ");
     four.forEach((link) => {
        let assignment = document.createElement('a');  
        assignment.append(link.name);
        assignment.href = `${link.link}`;
        weekFour.appendChild(assignment); 
        card.append(weekFour); 
     })
    
    
    let weekFive = document.createElement('li'); 
    weekFive.append("Week 05: ");
     five.forEach((link) => {
        let assignment = document.createElement('a');  
        assignment.append(link.name);
        assignment.href = `${link.link}`;
         weekFive.appendChild(assignment); 
         card.append(weekFive); 
     })
};