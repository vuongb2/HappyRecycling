// game.js

window.onload = function() {
    var playSpace = document.getElementById('play-space');
    var card = document.getElementById('card');
    var dropBins = document.getElementsByClassName('drop-bin');
  
    var activeItemIndex = 0; // Index of the active game item
    // This part will be replaced with database
    var gameItems = [
    {"image":"../../img/bread.png", "description":"Bread", "correctBin":"compost"},
    {"image":"../../img/cardboard.png", "description":"Cardboard", "correctBin":"recycle"},
    {"image":"../../img/dentalfloss.png", "description":"Dental Floss", "correctBin":"trash"},
    {"image":"../../img/eggshells.png", "description":"Egg Shells", "correctBin":"compost"},
    {"image":"../../img/gloves.png", "description":"Used Gloves", "correctBin":"trash"},
    {"image":"../../img/jug.png", "description":"Clean Plastic Jug", "correctBin":"recycle"},
    {"image":"../../img/mask.png", "description":"Disposable Masks", "correctBin":"trash"},
    {"image":"../../img/paper.png", "description":"Paper", "correctBin":"recycle"},
    {"image":"../../img/papertowel.png", "description":"Used Paper Towels", "correctBin":"compost"},
    {"image":"../../img/pizzabox.png", "description":"Greasy Pizza Box", "correctBin":"compost"},
    {"image":"../../img/snackwrappers.png", "description":"Candy Wrappers", "correctBin":"trash"},
    {"image":"../../img/soda.png", "description":"Empty Soda Can", "correctBin":"recycle"},
    {"image":"../../img/vegetables.png", "description":"Vegetables", "correctBin":"compost"},
    {"image":"../../img/waterbottle.png", "description":"Empty Plastic Bottle", "correctBin":"recycle"},
    {"image":"../../img/wipes.png", "description":"Baby Wipes", "correctBin":"trash"}
    ];
  
    // Event listener for the "new item" button
document.getElementById('new-item').addEventListener('click', function() {
  var placeholder = document.getElementById("placeholder");

  // If there is a "Great job!" message, remove it
  if (placeholder.firstChild && placeholder.firstChild.tagName.toLowerCase() === 'p') {
    placeholder.innerHTML = '';
  }
  
  // Clear messages from the bins
  Array.from(dropBins).forEach(function(bin) {
    var msgContainer = bin.getElementsByClassName('message-container')[0]; // Get the message container within the bin
    msgContainer.innerHTML = ''; // Clear the message container
  });

  // Increase the activeItemIndex to point to the next item
  activeItemIndex = (activeItemIndex + 1) % gameItems.length;

  
  // Create the new card and add it to the placeholder
  createNewCard(); 
});

// Function for creating the new card
function createNewCard() {
    var placeholder = document.getElementById("placeholder");

    // If there's an existing card, remove it
    while (placeholder.firstChild) {
      placeholder.removeChild(placeholder.firstChild);
  }

    var card = document.createElement('div');
    card.id = 'card';
    card.className = 'card';
    card.draggable = true;
    var activeItem = gameItems[activeItemIndex]; // Get the current active item using activeItemIndex

    // Create the new image element
    var imgElement = document.createElement('img');
    imgElement.src = activeItem.image;
    imgElement.alt = "Game Item";
    imgElement.style.backgroundColor = "white"; // Set the background color to white
    
    // Append the imgElement to the card
    card.appendChild(imgElement);

    card.innerHTML = `<img src="${activeItem.image}" alt="Game Item"><p>${activeItem.description}</p>`;
    placeholder.appendChild(card);

    // Add draggable events to the new card
    addDraggableEvents(card);
}
  
    // Event listeners for the draggable card
    function addDraggableEvents(card) {
        card.addEventListener('mousedown', function() {
            this.classList.add('clicked');
        });
      
        card.addEventListener('mouseup', function() {
            this.classList.remove('clicked');
        });
      
        card.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', ''); // Required for dragging
            this.style.opacity = '0'; // Hide the card
            this.classList.add('dragged'); // Add the 'dragged' class
            let messageContainer = document.querySelector(".message-container");
  messageContainer.style.zIndex = "3";
        });
      
        card.addEventListener('dragend', function() {
            this.style.opacity = '1'; // Show the card again
            this.classList.remove('dragged'); // Remove the 'dragged' class
            
        });
    }
    
    // Add draggable events to the initial card
    addDraggableEvents(card);
  
  
    // Event listeners for the drop bins
    Array.from(dropBins).forEach(function(bin) {
      var imgElement = document.createElement('img');
      var msgContainer = document.createElement('div');  // New div for the messages
      msgContainer.className = 'message-container';  // Assigning a class to it
      bin.appendChild(msgContainer);
      switch (bin.id) {
        case 'recycle-bin':
          imgElement.src = '../../img/recyclebin.png'; // Set the image source
          imgElement.style.backgroundColor = "white";
          break;
        case 'compost-bin':
          imgElement.src = '../../img/compostbin.png'; // Set the image source
          imgElement.style.backgroundColor = "white";
          break;
        case 'trash-bin':
          imgElement.src = '../../img/trashbin.png'; // Set the image source 
          imgElement.style.backgroundColor = "white";
          break;
      }
      bin.appendChild(imgElement);
      
      bin.addEventListener('dragenter', function(event) {
        event.preventDefault();
        this.classList.add('highlight');
      });
  
      bin.addEventListener('dragover', function(event) {
        event.preventDefault();
      });
  
      bin.addEventListener('dragleave', function() {
        this.classList.remove('highlight');
      });
      
      bin.addEventListener('drop', function(event) {
        event.preventDefault();
        this.classList.remove('highlight');
  
        var isCorrect = false;
        var activeBin = this.id;
        var activeItem = gameItems[activeItemIndex];
        var msgContainer = this.getElementsByClassName('message-container')[0]; // Get the message container within the bin

        msgContainer.innerHTML = '';  // Reset the message container
        // Check if the dropped item matches the correct bin
        if (activeBin === 'recycle-bin' && activeItem.correctBin === 'recycle') {
          isCorrect = true;
        } else if (activeBin === 'trash-bin' && activeItem.correctBin === 'trash') {
          isCorrect = true;
        } else if (activeBin === 'compost-bin' && activeItem.correctBin === 'compost') {
          isCorrect = true;
        }
        // Can include additional interaction with item to describe why its correct
        if (isCorrect) {
          var correctMessage = document.createElement('div');
          correctMessage.innerHTML = '<h2 class="correct">Correct</h2><p>You dropped the item into the correct bin.</p>';
          msgContainer.appendChild(correctMessage); // Add the message to the message container
          var placeholder = document.getElementById("placeholder");
          var img = document.createElement('img'); 
          img.src = '../../img/Greatjob.png'; // replace with your image source
          img.alt = "Great job!"; // replace with your image alt text
          img.className = "gameItemSize"
          placeholder.innerHTML = ''; // Clear the placeholder
          placeholder.appendChild(img); // Append the image to the placeholder
        } else {
          var incorrectMessage = document.createElement('div');
          incorrectMessage.innerHTML = '<h2 class="incorrect">Incorrect</h2>';
          msgContainer.appendChild(incorrectMessage); // Add the message to the message container
          card.style.transform = 'translate(0, 0)'; // Reset the card position
      }
      });
    }); 
    createNewCard();
  };
