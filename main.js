const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Gray with red and green stripes",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://ychef.files.bbci.co.uk/1600x900/p0dnw01b.webp",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2021/12/A-Pterodactyl-is-flying-across-the-mountain-with-a-fish-in-its-mouth.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://static.scientificamerican.com/sciam/cache/file/F4D1E37D-EAAE-49F7-83FC95CAA77563B0_source.jpg?w=590&h=800&DA7F2B49-A23B-49FB-AC7A0603EFEAE05E"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C.jpg?resize=640,426"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.newscientist.com/wp-content/uploads/2022/07/25151808/SEI_116388714.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://cdn.zmescience.com/wp-content/uploads/2018/01/Sharovipteryx_BW.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://4.bp.blogspot.com/-o2s2nB50Qrk/WPkA6NQvdsI/AAAAAAAACy4/SU7wEkQL-bQbb3XMiE9xvrwY06iVtVQNwCLcB/s1600/dog-training-look.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2021/05/funny-cats-pictures-206-60ad01382b0f8__700.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcI9uJvtYRr6awggmo7dJ0lYkL9-bbfb5eW2l3_zbU9AG37aA0RNfGnLH4ZSnyitntEE&usqp=CAU"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/150324154003-01-internet-cats-restricted.jpg?q=w_3000,h_1688,x_0,y_0,c_fill/w_1280"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://bouncymustard.com/wp-content/uploads/2021/06/1-Funny-Dogs-Wearing-Wigs.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://maxsblogosauruscom.files.wordpress.com/2022/05/spino-swim.png?w=1191"
    }
  ];

/////Objective: I want to display all pet info on page and filter through them by type.///

  ////////// 1. I want to be able to display info on webpage. What do I do? //////////

  // Function: call later to attach to id and render something to html browser
const renderToDom = (divId, renderToHTML) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = renderToHTML;
};


////////// 2. I want to display specific info from each array on the web page. //////////
  

  const cardsonDOM = (pets) => {
    let domString ="";
  // pets.forEach((pet) => {
    for (const pet of pets) {
    domString +=
  
 `<div class="card" style="width: 18rem;">
  <img src="${pet.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">'${pet.name}'</h5>
    <p class="card-text">Type: ${pet.type}</p>
    <p class="card-text">Color: ${pet.color}</p>
    <p class="card-text">Special Skill: ${pet.specialSkill}</p>
    <a href="#" class="btn btn-primary" id="delete"--${pet.id}>Delete Me</a>
  </div>
</div>`
  }
//Attachs card with array info to the element ID within the DOM to be displayed
  renderToDom('#blue-card', domString);
  }

////////// 3. How do I filter between animal types? //////////

  //Selects HTML elem for every animal button
  const btn1 = document.querySelector(".btn-dogs");
  const btn2 = document.querySelector(".btn-cats");
  const btn3 = document.querySelector(".btn-dino");
  const btn4 = document.querySelector(".btn-all");

//Display all the info on array first before filtering.
cardsonDOM(pets);

////////// 4. How do I make the buttons filter? //////////

// Loop through pets array and target dino arrays

let dinoArr = [];
 for (let i = 0; i < pets.length; i++) {
  if(pets[i].type === "dino"){
    dinoArr.push(pets[i]); 
  }
 }

 //Loop through pets array and target cat array
 let catArr = [];
for (i=0; i < pets.length; i++){
  if (pets[i].type === "cat"){
  catArr.push(pets[i]);
  }
}

//Loop through pets array and target dog array
let dogArr = [];
for (i=0; i < pets.length; i++){
  if (pets[i].type === "dog"){
    dogArr.push(pets[i]);
  }
}

//for the All button
btn4.addEventListener("click", () => {
    cardsonDOM(pets);
});


//Set array to a button event. Click buttons to filter - calls to anim array to display on DOM

btn1.addEventListener("click", () =>{
  console.log("dog");
  cardsonDOM(dogArr);
});

btn2.addEventListener("click", () =>{
  console.log("cat");
  cardsonDOM(catArr);
    
});

btn3.addEventListener("click", () => {
  console.log("Dino");
  cardsonDOM(dinoArr);
});

////////// 5. How do I add and delete pet info? //////////

/*added forms to CSS from Bootstrap*/

/* Create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate*/

//Add an event listener for the form submit and pass it the function (callback)


const createMember = () => {
  event.preventDefault();

  //1.grabs all the values from the form

  //This selects the info from the ID where users enter their pet info
  const name = document.querySelector("#Name");
  const petType = document.querySelector("#PetType");
  const petColor = document.querySelector("#PetColor");
  const specialSkill = document.querySelector("#SpecialSkill");
  const imgUrl = document.querySelector("#image");

  //2. create an object from values

const newMember = {
  
  //this grabs the value that the user adds to the input field and stores into an object.
  //Every input has a ".value" info within
  name: name.value,
  color: petColor.value,
  specialSkill: specialSkill.value,
  type: petType.value,
  imageUrl: imgUrl.value
};

console.log("new member", newMember);

  //3. push to team array - render to DOM

  pets.push(newMember);

console.log(newMember);

  //Re-renders DOM with pets array with new team member
  cardsonDOM(pets);

}

//3. Add an event listener to the button to add

//grab the button class from HTML and add it to a button value (submitButton).
//Make that button value an Event listener - when clicked on DOm it does X
const btnAdd = document.querySelector("#addButton");

btnAdd.addEventListener("click", createMember);


// Here we will be using event bubbling
// 1. Target the app div

const blueCarddiv = document.querySelector("#blue-card");

// 2. Add an event listener to capture clicks
blueCarddiv.addEventListener("click", (e) =>{
// if (else.target.id === "delete")
if (e.target.id.includes("delete")){
pets.splice(newMember);
}
});


// 3. check e.target.id includes "delete"
// 4. Add logic to remove from array
// 5. Repaint the DOM with the updated array

const startUp = () => {
  cardsonDOM(pets);
}

startUp();
