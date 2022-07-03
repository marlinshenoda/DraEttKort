let button=document.querySelector('#btn');  
let imgDiv= document.querySelector('#mainDiv');

button.onclick= function (){
    getRepos();
  }

  function getRepos(){
  
       
      fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
      
        .then((response) => response.json())
  
        .then((data)=> {
            console.log(data);
            let Card = document.createElement("img");
            Card.src =data.cards[0].images["svg"]; 
            Card.classList.add('rounded');
            Card.style.Width="100px";
            Card.style.Height="100px";
           

            imgDiv.appendChild(Card);
         
            
  
          })
         imgDiv.innerHTML="";

         
    }
  
  