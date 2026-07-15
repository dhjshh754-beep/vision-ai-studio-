// AI Video API Configuration

const API_CONFIG = {
    provider: "google-veo",
    apiKey: "",
    apiUrl: ""
};

async function generateVideo(prompt) {

    if (!API_CONFIG.apiKey) {
        alert("Please add your Google Veo API Key in api.js");
        return;
    }

    try {

        const response = await fetch(API_CONFIG.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_CONFIG.apiKey
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error);
    }
              }
