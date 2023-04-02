const axios = require('axios');

// Replace with your captcha solving service API endpoint
const API_ENDPOINT = 'https://yourcaptchaapi.com/solve';

// Replace with your captcha solving service API key
const API_KEY = 'yourapikey';

// Function to solve captcha
async function solveCaptcha(imageUrl) {
    try {
        // Send a POST request to the captcha solving service API endpoint with the image URL and API key
        const response = await axios.post(API_ENDPOINT, {
            image_url: imageUrl,
            api_key: API_KEY
        });

        // Extract the solved captcha from the API response
        const solvedCaptcha = response.data.solution;

        return solvedCaptcha;
    } catch (error) {
        console.error(error);
        throw new Error('Error solving captcha');
    }
}

// Example usage
const imageUrl = 'https://example.com/captcha.jpg';
solveCaptcha(imageUrl)
    .then(solvedCaptcha => {
        console.log('Solved captcha:', solvedCaptcha);
    })
    .catch(error => {
        console.error(error);
    });