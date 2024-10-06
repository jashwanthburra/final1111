const apiKey = 'DEMO_KEY'; // Replace with your NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      document.querySelector('.hero').style.backgroundImage = `url(${data.url})`;
      document.querySelector('.hero h2').textContent = data.title;
      document.querySelector('.hero p').textContent = data.explanation;
  })
  .catch(error => console.error('Error fetching NASA data:', error));
