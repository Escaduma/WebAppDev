console.log("DOM HW loaded");

// title and main are selected and the title is changed (text and font)
const titleEl = document.getElementById("title");
const mainEl = document.getElementById("main1");
titleEl.textContent = "Olivia R — Powered by JavaScript";
titleEl.style.fontFamily="Pacifico, cursive"

// Set the image source and alt text
const imgEl = document.getElementById("image1");
imgEl.src = "https://hips.hearstapps.com/hmg-prod/images/olivia-rodrigo-attends-the-2023-vanity-fair-oscar-party-news-photo-1699910349.jpg?crop=0.998xw:0.733xh;0.00170xw,0.0212xh&resize=640:*";
imgEl.alt = "The singer Olivia Rodrigo";

// The songs are stored in a constant, the list is called by id, and a loop adds each song to it
const items = [
{ name: "Stupid Song", info: "Explores the overwhelming, irrational, and obsessive side of deep romantic love" },
{ name: "What's wrong with me?", info: "The painful realization that a romantic relationship is the actual source of your anxiety, sadness, and physical exhaustion" },
{ name: "The Cure", info: "The realization that romantic love cannot fix your internal insecurities" }
];
const listEl = document.getElementById("list");
listEl.innerHTML = "";
items.forEach((obj) => {
const li = document.createElement("li");
li.textContent = `${obj.name} — ${obj.info}`;
listEl.appendChild(li);
});

// The button is called by id, and each click adds or removes the highlight class on main
const toggleBtn = document.getElementById("highlightB");
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("highligthButton");
});
// Dark mode is turned on when the page loads
document.body.classList.toggle("dark");

// The swap button is called by id, and each click switches between the two album covers
const swapBtn = document.getElementById("swapB");
let swapped = false;
swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "https://www.udiscovermusic.com/wp-content/uploads/2026/04/olivia-rodrigo-you-seem-pretty-sad.jpg";
imgEl.alt = "Olivia Rodrigo's new album cover";
swapped = true; } else {
imgEl.src = "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d";
imgEl.alt = "Olivia Rodrigo's album guts cover";
swapped = false;
}
});

// The intro is called by its class, then its text is replaced
const intro=document.querySelector(".int");
intro.textContent="The 3 songs shown, are my favorite songs of Olivia's new album You Seem Pretty Sad For A Girl So In Love";

// The paragraph is called by its class, then its text, color, and font are changed
const newP=document.querySelector(".paragraph");
newP.textContent="Olivia Rodrigo is a three-time Grammy-winning American singer-songwriter who rose from Disney stardom to global pop icon status. She made history with three consecutive chart-topping albums—Sour (2021), Guts (2023), and You Seem Pretty Sad for a Girl So in Love (2026)—becoming the first artist to have the lead singles from her first three albums all debut at number one on the Billboard Hot 100";
newP.style.color="#f5adff";
newP.style.fontFamily="Arial, serif";

// The footer is called by id, then its text is replaced
const footer1=document.getElementById("footer");
footer1.textContent="© 2025 Macie";