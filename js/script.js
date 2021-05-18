//secondeNavbar
var hmbMenu = document.getElementById('hmbMenu');
var secondeNavbar = document.getElementById('second-navbar');
hmbMenu.addEventListener("click",function(){
    secondeNavbar.style.visibility ='visible';
})

secondeNavbar.addEventListener("click",function(){
    secondeNavbar.style.visibility="hidden";
})

////////////////////MANUAL SLIDE/////////////////////
////////////////////MENU/////////////////////

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var currentSlide = 1;

var manualNav = function(manual){
  slides.forEach(function(slide){
    slide.classList.remove('active');

    btns.forEach(function(btn){
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach(function(btn, i){
  btn.addEventListener("click",function(){
    manualNav(i);
    currentSlide = i;
  });
});
////////////////////TESTIMONIALS/////////////////////
var testimonial = document.querySelectorAll('.testimonial');
var btnsT = document.querySelectorAll('.btnT');
var currentSlideT = 1;

var manualNavT = function(manual){
  testimonial.forEach(function(testimonial){
   testimonial.classList.remove('active');

    btnsT.forEach(function(btnT){
      btnT.classList.remove('active');
    });
  });

  testimonial[manual].classList.add('active');
  btnsT[manual].classList.add('active');
}

btnsT.forEach(function(btnT, i){
  btnT.addEventListener("click", function(){
    manualNavT(i);
    currentSlideT = i;
  });
});
////////////////////GALERY/////////////////////
var galery = document.querySelectorAll('.galery');
var btnsG = document.querySelectorAll('.btnG');
var currentSlideG = 1;

// Javascript for image slider manual navigation
var manualNavG = function(manual){
  galery.forEach(function(galery){
   galery.classList.remove('active');

    btnsG.forEach(function(btnG){
      btnG.classList.remove('active');
    });
  });

  galery[manual].classList.add('active');
  btnsG[manual].classList.add('active');
}

btnsG.forEach(function(btnG, i){
  btnG.addEventListener("click", function(){
    manualNavG(i);
    currentSlideG = i;
  });
});

////////////////////FORM VALIDATION/////////////////////

var inputs = Array.from(document.querySelectorAll("input"));
var form = document.getElementById("form");
var formError = document.getElementById("form-error");

function isValid(element){
var isValid = false ;
element.forEach(function(el){
  if (el.value) 
  return isValid = true ;
})
return isValid
}

function formValid(event){
event.preventDefault() ;
var validation = isValid(inputs);
if(validation){
  inputs.forEach(function(input){
    input.value = "";
  })
  alert("Thanks for subscribing")
}
else{
  formError.style.visibility = "visible" ;
}
}

inputs.forEach(function(input){
input.addEventListener("keypress" , function(event){
  var targetValue = event.target.value ;
  if(targetValue)
  return formError.style.visibility = "hidden" ;
})
})
 ////////////////////Menu/////////////////////

      ////////////////////Breakfast/////////////////////

  //source of thruth
  var breakfasts = [
    {
      name : "Shakshuka",
      description : "tomato ,eggs ,onion ,Toasted baguette",
      quantity : 0,
      price : 10,
      index :1,
    },
    {
      name : "El Burrito",
      description : "tomatillos ,jalapeño ,eggs ,onion",
      quantity : 0,
      price : 15,
      index :2,
    },
    {
      name : "La Frittata",
      description :"sweet potatoes ,onion , cheese ,eggs",
      quantity : 0,
      price : 20,
      index :3,
    },
    {
      name : "Smoothie",
      description : "pineapple ,mango ,banana ,almond milk",
      quantity : 0,
      price : 20,
      index :4,
    },
    ]
   //Adjust Quantity
function increment(index){
  breakfasts[index].quantity++ ;
  printBreakfasts();
}
function decrement(index){
  breakfasts[index].quantity-- ;
  if(breakfasts[index].quantity <= 0){
      breakfasts[index].quantity =0
  }
  printBreakfasts();
}
  //selectors
var breakfastsContainer = document.getElementById('breakfasts');
var totalQuantity = document.getElementById('totalQuantity');
var totalPrice = document.getElementById('totalPrice');

//countNumbers
function printBreakfastsNumbers(){
  breakfastsNumber = 0 ;
  breakfasts.forEach(function(breakfast){
    breakfastsNumber += breakfast.quantity 
  })
}
 //countPrice
function calcBreakfastsPrice(){
  breakfastsPrice = 0 ;
  breakfasts.forEach(function(breakfast){
    breakfastsPrice += breakfast.price * breakfast.quantity 
  })
  

} 

function printBreakfasts(){
  breakfastsContainer.innerHTML="";
  
  breakfasts.forEach(function(breakfast , index){
    breakfastsContainer.innerHTML +=`
  <div class="breakfast">
    <span>${breakfast.name}</span>
    <span class="FoodDescription">${breakfast.description}</span>
    <span>
    <button class="counter-action increment" onclick="increment(${index})">+</button>
    <span class="counter-quantity">${breakfast.quantity}</span>
    <button class="counter-action decrement" onclick="decrement(${index})">-</button> </span>
    <span>$${breakfast.price * breakfast.quantity}.00</span>
  </div>`
  })
  printBreakfastsNumbers()
  calcBreakfastsPrice()
  
}

function init(){
  printBreakfasts()
 
}

init();

   ////////////////////Lunch/////////////////////

  //source of thruth
 var lunchs =[
   {
     name:"Risotto alla Milanese",
     description : "Meat,Cheese,Orange juice and Zest",
     quantity :0 ,
     price : 25 ,
     index :1 ,
   },
   {
    name:"Cheese Souffle",
    description : "Cheese , Cream , Creme Fraiche",
    quantity :0 ,
    price : 15 ,
    index :2 ,
  },
  {
    name:"Mushroom Salad",
    description : "Mushroom , Pomegranate , Sesame Seeds",
    quantity :0 ,
    price : 10,
    index :3 ,
  },
  {
    name:"Grilled Kabobs",
    description : "Beef ,Sausages,Shallots",
    quantity :0 ,
    price : 20,
    index :4 ,
  },
 ]
 //Adjust Quantity
function incrementLunch(index){
  lunchs[index].quantity++ ;
  printLunchs();
}
function decrementLunch(index){
  lunchs[index].quantity-- ;
  if(lunchs[index].quantity <= 0){
      lunchs[index].quantity = 0
  }
  printLunchs();
}
//countNumbers
function printLunchsNumbers(){
  lunchsNumber = 0 ;
  lunchs.forEach(function(lunch){
    lunchsNumber += lunch.quantity 
  })
}

//countPrice
function calcLunchsPrice(){
 lunchsPrice = 0 ;
 lunchs.forEach(function(lunch){
   lunchsPrice +=lunch.price *lunch.quantity 
  })
  totalPrice.innerText = breakfastsPrice + lunchsPrice ;

} 
 var lunchsContainer = document.getElementById('lunchs');
 
 function printLunchs(){
   lunchsContainer.innerHTML="";
   lunchs.forEach(function(lunch , index){
     lunchsContainer.innerHTML +=`<div class="lunch">
     <span>${lunch.name}</span>
     <span class="FoodDescription">${lunch.description}</span>
     <span>
     <button class="counter-action increment" onclick="incrementLunch(${index})">+</button>
     <span class="counter-quantity">${lunch.quantity}</span>
     <button class="counter-action decrement" onclick="decrementLunch(${index})">-</button> </span>
     <span>$${lunch.price * lunch.quantity}.00</span>
 </div>`
   })
   printLunchsNumbers()
   calcLunchsPrice()
 }

 function initL(){
  printLunchs()

}

initL();
 
 ////////////////////Dinner/////////////////////

  //source of thruth
  var dinners =[
    {
      name:"Grilled Salmon",
      description : "Salmon , Zucchini,Shrimps",
      quantity :0,
      price : 35 ,
      index :1 ,
    },
    {
     name:"Beef Tenderloin",
     description : "Veal Tail ,beef ,leeks",
     quantity :0 ,
     price : 30 ,
     index :2 ,
   },
   {
     name:"Butter Chicken",
     description : "Spinach,Almonds,Garam Masala",
     quantity :0 ,
     price : 30 ,
     index :3 ,
   },
   {
     name:"Coconut Chicken",
     description : "Chicken,Sunflower Oil,Red Chili Paste",
     quantity :0 ,
     price : 15 ,
     index :4 ,
   },
  ]
 //Adjust Quantity
function incrementDinner(index){
  dinners[index].quantity++ ;
  printDinners();
}
function decrementDinner(index){
  dinners[index].quantity-- ;
  if(dinners[index].quantity <= 0){
      dinners[index].quantity = 0
  }
  printDinners();
}
//countNumbers
function printDinnersNumbers(){
  dinnersNumber = 0 ;
  dinners.forEach(function(dinner){
    dinnersNumber += dinner.quantity 
  })
}
//countPrice
function calcDinnersPrice(){
  dinnersPrice = 0 ;
  dinners.forEach(function(dinner){
    dinnersPrice +=dinner.price *dinner.quantity 
   })
 
 } 
  var dinnersContainer = document.getElementById('dinners');
  
  function printDinners(){
    dinnersContainer.innerHTML="";
    dinners.forEach(function(dinner , index){
      dinnersContainer.innerHTML +=`<div class="dinner">
      <span>${dinner.name}</span>
      <span class="FoodDescription">${dinner.description}</span>
      <span>
      <button class="counter-action increment" onclick="incrementDinner(${index})">+</button>
      <span class="counter-quantity">${dinner.quantity}</span>
      <button class="counter-action decrement" onclick="decrementDinner(${index})">-</button> </span>
      <span>$${dinner.price * dinner.quantity}.00</span>
  </div>`
    })
    printDinnersNumbers()
    calcDinnersPrice()
  }
 
  function initD(){
   printDinners()
 }
 
 initD();


 ////////////////////Drink/////////////////////

  //source of thruth
  var drinks =[
    {
      name:"The Sidecar",
      description : "Cognac,Triple Sec,Lemon Juice",
      quantity :0 ,
      price : 10 ,
      index :1 ,
    },
    {
     name:"The Vesper",
     description : "Jin , Vodka ,Lillet Blanc",
     quantity :0 ,
     price : 10 ,
     index :2 ,
   },
   {
     name:"The Margarita",
     description : "Cucumber ,Lime Juice,Cointreau",
     quantity :0 ,
     price : 10 ,
     index :3 ,
   },
   {
     name:"The Mojito",
     description : "Limes , Mint , Rum",
     quantity :0 ,
     price : 10 ,
     index :4 ,
   },
  ]
 //Adjust Quantity
function incrementDrink(index){
  drinks[index].quantity++ ;
  printDrinks();
}
function decrementDrink(index){
  drinks[index].quantity-- ;
  if(drinks[index].quantity <= 0){
      drinks[index].quantity = 0
  }
  printDrinks();
}
//countNumbers
function printDrinksNumbers(){
  drinksNumber = 0 ;
  drinks.forEach(function(drink){
    drinksNumber += drink.quantity 
  })
  
}
//countPrice
function calcDrinksPrice(){
  drinksPrice = 0 ;
  drinks.forEach(function(drink){
    drinksPrice +=drink.price *drink.quantity 
   })
 
 } 
  var drinksContainer = document.getElementById('drinks');
  
  function printDrinks(){
    drinksContainer.innerHTML="";
    drinks.forEach(function(drink , index){
      drinksContainer.innerHTML +=`<div class="drink">
      <span>${drink.name}</span>
      <span class="FoodDescription">${drink.description}</span>
      <span>
      <button class="counter-action increment" onclick="incrementDrink(${index})">+</button>
      <span class="counter-quantity">${drink.quantity}</span>
      <button class="counter-action decrement" onclick="decrementDrink(${index})">-</button> </span>
      <span>$${drink.price * drink.quantity}.00</span>
  </div>`
    })
    printDrinksNumbers()
    calcDrinksPrice()
  }
 
  function initDR(){
   printDrinks()
 }
 
 initDR();


  ////////////////////Dessert/////////////////////
  //source of truth
  var desserts=[
    {
      name:'Cherry Muffin',
      price:20,
      quantity:0,
      index :1,
    },
    {
      name:'Rose Muffin',
      price:20,
      quantity:0,
      index :2,
    },
    {
      name:'Sweet Donut',
      price:20,
      quantity:0,
      index :3,
    },
    {
      name:'Choco Cake',
      price:20,
      quantity:0,
      index :4,
    },
  ]
//Adjust Quantity
function incrementDessert(index){
  desserts[index].quantity++ ;
  printDesserts();
}
function decrementDessert(index){
    desserts[index].quantity-- ;
    if(desserts[index].quantity <= 0){
        desserts[index].quantity = 0
    }
    printDesserts();
}
//countNumbers
function printDessertsNumbers(){
  dessertsNumber = 0 ;
  desserts.forEach(function(dessert){
    dessertsNumber += dessert.quantity 
  })
  totalQuantity.innerText = breakfastsNumber + lunchsNumber + dinnersNumber + drinksNumber + dessertsNumber ;
}
   //countPrice
function calcDessertsPrice(){
  dessertsPrice = 0 ;
  desserts.forEach(function(dessert){
    dessertsPrice +=dessert.price *dessert.quantity 
   })
   totalPrice.innerText = breakfastsPrice + lunchsPrice + dinnersPrice + drinksPrice + dessertsPrice ;
 
 }   
  var dessertsContainer = document.getElementById('desserts');

  function printDesserts(){
    dessertsContainer.innerHTML="";
    desserts.forEach(function(dessert,index){
      dessertsContainer.innerHTML+=`<div class="dessert">
      <span>${dessert.name}</span>
      <span style="color: rgb(255, 165, 0);font-family: var(--font-secondary);">$${dessert.price * dessert.quantity}.00</span>
     <div>
      <button class="counter-action increment" onclick="incrementDessert(${index})">+</button>
      <span class="counter-quantity">${dessert.quantity}</span>
      <button class="counter-action decrement" onlick="decrementDessert(${index})">-</button> </span> 
    </div>
    </div>`
    })
    printDessertsNumbers()
    calcDessertsPrice()
  }

  function initDessert(){
    printDesserts()
  }
 
  initDessert();


 ////////////////////Modal/////////////////////

 var modal = document.getElementById('modal');
 var cartButton = document.getElementById('cartBtn');
 var hideBtn = document.getElementById('hide');
 var validateBtn = document.getElementById('validate');

 cartButton.addEventListener("click" , function(){
   modal.style.visibility ="visible"; 
 }) 

 hideBtn.addEventListener("click" , function(){
   modal.style.visibility ="hidden"; 
 })

 validateBtn.addEventListener("click" , function(){
   alert ("Thank you for choosing us");
   modal.style.visibility ="hidden";
 })   
 
 