const apiKey = 'e238b86236mshf7050535a8af2e7p1d688cjsnb7532ad54446';
const apiHost = 'imdb-api12.p.rapidapi.com';

async function fetchSeasonData(seasonNumber) {
  const url = `https://${apiHost}/title/tt6522580/season/${seasonNumber}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    displayEpisodes(data.episodes);
    if (seasonNumber === 10) {
      displayTopRated(data.episodes);
    }
  } catch (error) {
    console.error(error);
  }
}

function displayTopRated(episodes) {
  const topContainer = document.getElementById('top-rated-container');
  topContainer.innerHTML = '';

  // Select two top rated episodes
  const topEpisodes = episodes.sort((a, b) => (b.imDbRating || 0) - (a.imDbRating || 0)).slice(0, 2);

  topEpisodes.forEach(episode => {
    const div = document.createElement('div');
    div.className = 'top-episode-card';
    div.innerHTML = `
      <span class="top-tag">TOP-RATED</span>
      <p>${episode.released}</p>
      <h4>S${episode.seasonNumber}.E${episode.episodeNumber} - ${episode.title}</h4>
      <p>${episode.plot.substring(0, 100)}...</p>
      <span class="episode-rating">⭐ ${episode.imDbRating || '8.2'}</span> <span>Rate</span>
    `;
    topContainer.appendChild(div);
  });
}

function displayEpisodes(episodes) {
  const container = document.getElementById('episodes-container');
  container.innerHTML = '';

  episodes.forEach(episode => {
    const card = document.createElement('div');
    card.className = 'episode-card';

    card.innerHTML = `
      <img src="${episode.image}" alt="${episode.title}" class="episode-image">
      <div class="episode-info">
        <div class="episode-title">S${episode.seasonNumber}.E${episode.episodeNumber} - ${episode.title}.${episode.rating}</div>
        <div class="episode-desc">${episode.plot}</div>
        <div class="episode-meta">
          <span class="episode-rating">⭐ ${episode.imDbRating || '8.2'}</span> • 
          <span>${episode.released}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function loadSeason(seasonNumber) {
  fetchSeasonData(seasonNumber);
}
async function fetchShowHeader() {
    const url = `https://${apiHost}/title/tt6522580`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      // Now set the header fields
      document.getElementById('show-title').textContent = data.title || 'Unknown Show';
      document.getElementById('show-poster').src = data.image || 'https://via.placeholder.com/80x120?text=No+Image';
    } catch (error) {
      console.error('Failed to fetch show info', error);
    }
  }
  
// Load default season
window.onload = () => loadSeason(1);
  