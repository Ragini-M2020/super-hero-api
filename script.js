const accessToken = "3367089886878627";

const getSuperHero = (id) => {
  fetch(`https://superheroapi.com/api.php/${accessToken}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      document.getElementById(
        "imgBlock"
      ).innerHTML = `<img src="${json.image.url}" height="150" width="150">`;
      document.getElementById("name").innerText = json.name;
      document.getElementById("speed").innerText = json.powerstats.speed;
      document.getElementById("intelligence").innerText =
        json.powerstats.intelligence;
      document.getElementById("strength").innerText = json.powerstats.strength;
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const buttonDiv = document.getElementById("buttonid");
buttonDiv.onclick = () => {
  const randomId = Math.floor(Math.random() * 730);
  getSuperHero(randomId);
};