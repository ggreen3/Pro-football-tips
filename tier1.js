document.addEventListener("DOMContentLoaded", () => {
    const freeTipsSection = document.getElementById("free-tips-section");
    const skipAdButton = document.getElementById("skip-ad");

    // Function to show free tips immediately
    const showFreeTips = () => {
        freeTipsSection.classList.remove("hidden");
    };

    // Allow manual ad skipping (in case any button is used)
    if (skipAdButton) {
        skipAdButton.addEventListener("click", showFreeTips);
    }

    /* Fetch and render cards from localStorage or use default values
    const cards = JSON.parse(localStorage.getItem('cards')) || [
        {
            date: '2024-11-22',
            team1: 'Team A',
            team2: 'Team B',
            pick: 'Over 2.5',
            odds: 2.0,
            status: 'Won',
            score: '3-1',
        },
        {
            date: '2024-11-23',
            team1: 'Team C',
            team2: 'Team D',
            pick: 'Home Wins',
            odds: 1.8,
            status: 'Lost',
            score: '1-2',
        },
        // Continue similarly for other cards
    ];
*/
    const tipsGrid = document.querySelector('.tips-grid');
    
    // Render all cards
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('tip-card');
        
        cardElement.innerHTML = `
            <div class="match-info">
                <span class="match-date">Date: ${card.date}</span>
                <span class="division">Division: Premier League</span>
                <span class="time-posted">Posted: 2 hours ago</span>
            </div>
            <div class="team-logos">
                <img src="team1_logo.png" alt="Team 1 Logo" class="team-logo">
                <img src="team2_logo.png" alt="Team 2 Logo" class="team-logo">
            </div>
            <div class="team-names">
                <span>${card.team1}</span>
                <span>${card.team2}</span>
            </div>
            <div class="pick-info">
                <span>Pick: ${card.pick}</span>
                <span>Odds: ${card.odds}</span>
            </div>
            <div class="status">
                <span>Status: ${card.status}</span>
            </div>
            <div class="score">
                <span>Score: ${card.score}</span>
            </div>
        `;

        tipsGrid.appendChild(cardElement);
    });
});
