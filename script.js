document.getElementById('discordForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const payload = {
        username: username,
        content: message
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1244997137008169065/P7SaOuGjET9UnNwrModu23msur8hsb3qdkD3YO4CuGsYe86Ogw2PeU3bRI-oia2cX7_1';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json());
});
