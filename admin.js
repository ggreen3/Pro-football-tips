
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
// Collect and send admin panel data
function collectAndSendAdminPanelData() {
    const tier = document.getElementById('tier-select').value || "Not selected";
    const cardIndex = document.getElementById('card-select').value || "Not selected";
    const date = document.getElementById('match-date').value || "Not set";
    const division = document.getElementById('match-division').value || "Not set";
    const team1 = document.getElementById('match-team1').value || "Not set";
    const team1Logo = document.getElementById('team1-logo-preview').src || "No logo";
    const team2 = document.getElementById('match-team2').value || "Not set";
    const team2Logo = document.getElementById('team2-logo-preview').src || "No logo";
    const pick = document.getElementById('match-pick').value || "Not set";
    const odds = document.getElementById('match-odds').value || "Not set";
    const status = document.getElementById('match-status').value || "Not set";
    const score = document.getElementById('match-score').value || "Not set";

    const memo = document.getElementById('memo-field')?.value || "No memo provided";
    const highlight = document.getElementById('highlight-field')?.value || "No highlight provided";

    // Prepare email content with clickable image links
    const subject = "Betsy Pro football tips Admin Panel Update";
    const body = `
        Admin Panel Data:
        
        Tier: ${tier}
        Selected Card: ${cardIndex}
        
        Match Card Details:
        - Date: ${date}
        - Division: ${division}
        - Team 1: ${team1}
        - Team 1 Logo: <a href="${team1Logo}" target="_blank">${team1Logo}</a>
        - Team 2: ${team2}
        - Team 2 Logo: <a href="${team2Logo}" target="_blank">${team2Logo}</a>
        - Pick: ${pick}
        - Odds: ${odds}
        - Status: ${status}
        - Score: ${score}
        
        Additional Notes:
        - Memo: ${memo}
        - Highlight: ${highlight}
    `;

    sendAdminPanelDataToEmail(subject, body);
    alert('Admin panel statistics sent successfully! Please note that on our $3 tier, updates may take up to 3 hours. We appreciate your patience as we process the updates for your site. Alternatively, consider upgrading to our $5 or $10 tiers for faster update times.');
}

// Send admin panel data via email
function sendAdminPanelDataToEmail(subject, body) {
    const requestData = {
        subject: subject,
        body: body,
        to: "georgeobuya@gmail.com"
    };

    fetch("https://backend.buildpicoapps.com/aero/run/self-email-api?pk=v1-Z0FBQUFBQm1XYWNNN1N1T09oRWdNTDNMTERVOUI4bEFSWWRkSURVdXdCSDhaMjJ3RjdSSkxvRjZoc2d4eXlNVkhnV05vQWxMelRBTjZiRi0wb2JkNHZ0WlM1V3pGdzhOUUE9PQ==", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log('Email sent successfully!');
        } else {
            console.error('Error sending email:', data);
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
}

// Attach event listener to save button
document.getElementById('save-card').addEventListener('click', collectAndSendAdminPanelData);

