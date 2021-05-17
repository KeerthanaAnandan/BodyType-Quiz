let  first = sessionStorage.getItem("first");
let  second = sessionStorage.getItem("second");
let third = sessionStorage.getItem("third");

document.querySelector(".firsthide").style.display = "none";
document.querySelector(".secondhide").style.display = "none";
document.querySelector(".thirdhide").style.display = "none";

let mess;
let typo;
//first
if (
   first >  second &&
   first > third 
  
) {
  typo = "ECTOMORPH";
  mess = [
    "Ectomorphs typically do not fare well on high-fat diets. This is because their fast metabolisms crave carbohydrates. However, the type of carbohydrates consumed is of importance. Ectomorphs should stick to complex carbohydrates. This will leave them feeling fuller longer. They should also avoid highly processed carbohydrate foods like chips and candy. Such foods will break down very quickly. This leads to hunger pains shortly after consumption and then overconsumption of excess calories. For ectomorphs, this can result in a “skinny fat” physique. This term describes individuals that look relatively thin from the outside but carry a lot of visceral fat internally. Visceral fat consists of fat cells that pack around the organs of the body. Increased visceral fat leads to increased risk of cardiovascular issues as well as other metabolic conditions. Ectomorphs will fair best when sticking to whole, unrefined carbohydrates accompanied by moderate protein and healthy fats. ",
      
    "In terms of macronutrient (carbs, protein, fat) breakdown, we suggest ectomorphs eat a 45-35-20 split of carbohydrates, protein, and fat. This means you’ll be eating a moderate protein, lower fat, and higher carbohydrate diet compared with the other diets.",
  ];
  document.querySelector(".firsthide").style.display = "block";
}

// second
else if (
   second >  first &&
   second > third 
  
) {
  typo = "MESOMORPH";
  mess = [
"Mesomorphs should watch out for foods notorious for hidden sugars. Foods like yogurts, sauces, instant oatmeal, and non-natural peanut butters. Even peanut butters with “natural” on the label should be checked. Often, they sneak in added sugars but can still label it as “natural”. The best way to avoid added sugars is to read the nutrition facts label. "
  
  ]; 
  document.querySelector(".secondhide").style.display = "block";
}
//third
else if (
  third >  second &&
  third >  first 
 
) {
  typo = "ENDOMORPH";
  mess = [
    "Endomorphs should cut back on their carb intake and focus more on healthy proteins and fats. However, this does not mean they must nix all carbohydrates. Endomorph’s carbs should come from mostly vegetables and whole-grain foods.  Limit breads, beverages, pastas, junk food, and high-sugar fruits. These foods will be digested very quickly and lead to blood sugar spikes. ",
    "The endomorph will want to stick with a 20-40-40 split of calories between carbohydrates, protein, and fat in order to shed body fat, (Read: High protein, lower in carbs.) Consume grains with lunch or dinner, depending on the time of your workout.",
    
  ];
  document.querySelector(".thirdhide").style.display = "block"; 
}


//first === second
else if (
  first ==  second &&
  first >  third 
  
) {
  typo = "ECTO-MESOMORPH";
  mess = [
"This body type is lean and muscular."
  
  ]; 
  document.querySelector(".secondhide").style.display = "block";
  
}

//SECOND == THIRD
else if (
  second ==  third &&
  second >  first 
 
) {
  typo = "MESO-ENDOMORPHS";
  mess = [
    "This means strong but the muscles aren’t well defined, like a football player."
    
  
  ];
  document.querySelector(".thirdhide").style.display = "block";
  
 
  
}
//third == first
else if (
  third ==  first &&
  third >  second 

) {
  typo = "ECTO-ENDOMORPHS";
  mess = [
 "The “skinny fat” person who is naturally thin but has gained weight due to lack of exercise and a poor diet."
    
  ];
  document.querySelector(".thirdhide").style.display = "block";
  
}

 

  

   


else{
  {
    typo = "ENDOMORPH";
    mess = [
      "Endomorphs should cut back on their carb intake and focus more on healthy proteins and fats. However, this does not mean they must nix all carbohydrates. Endomorph’s carbs should come from mostly vegetables and whole-grain foods.  Limit breads, beverages, pastas, junk food, and high-sugar fruits. These foods will be digested very quickly and lead to blood sugar spikes. ",
      "The endomorph will want to stick with a 20-40-40 split of calories between carbohydrates, protein, and fat in order to shed body fat, (Read: High protein, lower in carbs.) Consume grains with lunch or dinner, depending on the time of your workout.",
      
    ];
    document.querySelector(".thirdhide").style.display = "block"; 
  }
}




const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
    const headmsg = document.querySelector(".headmsg");
   
    headmsg.innerHTML = typo;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";
//console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
