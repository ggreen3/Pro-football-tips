// Replace with your actual API key
const apiKey = "8ebb12f821ca960d83de48f6d2e6b477";

// Set up headers for the API request
const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", apiKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

// Fetch live scores from the 'fixtures' endpoint
fetch("https://v3.football.api-sports.io/fixtures?live=all", requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Parse and display live scores
    const liveFixtures = data.response;
    if (liveFixtures.length > 0) {
      liveFixtures.forEach((fixture) => {
        const homeTeam = fixture.teams.home.name;
        const awayTeam = fixture.teams.away.name;
        const homeScore = fixture.goals.home || 0;
        const awayScore = fixture.goals.away || 0;
        const matchStatus = fixture.fixture.status.long;

        console.log(
          `${homeTeam} (${homeScore}) - (${awayScore}) ${awayTeam} [Status: ${matchStatus}]`
        );

        // Example: Inject scores into your HTML
        const scoresDisplay = document.getElementById("scores-display");
        if (scoresDisplay) {
          scoresDisplay.innerHTML += `
            <div class="score-card">
              <p>${homeTeam} (${homeScore}) - (${awayScore}) ${awayTeam}</p>
              <small>Status: ${matchStatus}</small>
            </div>
          `;
        }
      });
    } else {
      console.log("No live matches right now.");
      const scoresDisplay = document.getElementById("scores-display");
      if (scoresDisplay) {
        scoresDisplay.innerHTML = "<p>No live matches right now.</p>";
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching live scores:", error);
  });
