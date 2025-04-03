
// This selects all elements whose ID starts with "favoriteButton". The ^= means "starts with."

const favoriteButtons = document.querySelectorAll('[id^="favoriteButton"]');
const heartIcons = document.querySelectorAll('[id^="heartIcon"]');

// Add event listeners to all favorite buttons

favoriteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const heartIcon = heartIcons[index];

if (heartIcon.classList.contains("not-favorite")) 
{
      heartIcon.classList.remove("not-favorite");
      heartIcon.classList.add("favorite");
      alert("Your session has timed out! You didn't sign in within 5 minutes, so the action has been canceled.");
}

else 
{
      heartIcon.classList.remove("favorite");
      heartIcon.classList.add("not-favorite");

}

  });
});
