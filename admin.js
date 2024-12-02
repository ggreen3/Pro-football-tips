// Store for our match data
let matchCards = [
    {
        date: '2024-11-22',
        division: 'Premier League',
        team1: 'Team A',
        team2: 'Team B',
        team1Logo: 'team1_logo.png',
        team2Logo: 'team2_logo.png',
        pick: 'Over 2.5',
        odds: 2.0,
        status: 'Won',
        score: '3-1'
    },
    // Additional cards
];

// Event Listener to handle login
document.getElementById('login-button').addEventListener('click', function() {
    const password = document.getElementById('admin-password').value;
    if (password === 'betsy12') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('admin-section').style.display = 'block';
        getLiveLocation();
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});

// Get live location and send an email to George
function getLiveLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
            sendLocationToEmail(location);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function sendLocationToEmail(location) {
    const email = 'georgeobuya@gmail.com';
    const subject = 'Admin Login Location Confirmation';
    const body = `Admin logged in from the following location: ${location}`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// Load tier selection and match card data based on selected tier
document.getElementById('tier-select').addEventListener('change', function(e) {
    loadTierContent(e.target.value);
});

function loadTierContent(tier) {
    // Fetch and display relevant data for the selected tier
    // For simplicity, we load static match data for now
    // This could be modified to load dynamic data based on the tier
    loadCardData(0); // Load the first card as an example
}

function loadCardData(cardIndex) {
    const card = matchCards[cardIndex];
    if (!card) return;

    // Populate form fields
    document.getElementById('match-date').value = card.date;
    document.getElementById('match-division').value = card.division;
    document.getElementById('match-team1').value = card.team1;
    document.getElementById('match-team2').value = card.team2;
    document.getElementById('match-pick').value = card.pick;
    document.getElementById('match-odds').value = card.odds;
    document.getElementById('match-status').value = card.status;
    document.getElementById('match-score').value = card.score;

    updateLogoPreview('team1-logo-preview', card.team1Logo);
    updateLogoPreview('team2-logo-preview', card.team2Logo);
}

function updateLogoPreview(previewId, logoSrc) {
    const preview = document.getElementById(previewId);
    if (preview) {
        preview.src = logoSrc || '/placeholder-logo.png';
    }
}

function saveCardData() {
    const cardIndex = parseInt(document.getElementById('card-select').value);
    const card = matchCards[cardIndex] || {};

    // Update card data
    card.date = document.getElementById('match-date').value;
    card.division = document.getElementById('match-division').value;
    card.team1 = document.getElementById('match-team1').value;
    card.team2 = document.getElementById('match-team2').value;
    card.pick = document.getElementById('match-pick').value;
    card.odds = parseFloat(document.getElementById('match-odds').value);
    card.status = document.getElementById('match-status').value;
    card.score = document.getElementById('match-score').value;

    matchCards[cardIndex] = card;
    alert('Match card data saved successfully!');
}

document.getElementById('save-card').addEventListener('click', saveCardData);
