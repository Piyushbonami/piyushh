// document.addEventListener('DOMContentLoaded', function () {
//   // Dropdown Menu
//   const dropdownButton = document.getElementById('dropdownButton');
//   const dropdownMenu = document.getElementById('dropdownMenu');
//   const arrow = document.getElementById('arrow');

//   dropdownButton.addEventListener('click', function (e) {
//     e.stopPropagation();
//     dropdownMenu.classList.toggle('show');
//     arrow.textContent = dropdownMenu.classList.contains('show') ? '▲' : '▼';
//   });

//   // Language Dropdown
//   const langDropdown = document.getElementById('langDropdown');
//   const langButton = document.getElementById('langButton');
//   const langMenu = document.getElementById('langMenu');

//   langButton.addEventListener('click', function (e) {
//     e.stopPropagation();
//     langDropdown.classList.toggle('show');
//   });

//   // Close dropdowns when clicking outside
//   window.addEventListener('click', function () {
//     if (dropdownMenu.classList.contains('show')) {
//       dropdownMenu.classList.remove('show');
//       arrow.textContent = '▼';
//     }
//     langDropdown.classList.remove('show');
//   });

//   // Search Functionality
//   const searchBar = document.querySelector('#searchBar');
//   const clickBar = document.querySelector('#clickBar');
//   const divBar = document.querySelector('#main-container');

//   const apiKey = '38e73ae281mshcd7783e705c6b1ep186fe5jsnc3d0936b5109';
//   const apiHost = 'imdb8.p.rapidapi.com';

//   async function fetchMovies(query) {
//     const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(query)}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': apiKey,
//         'x-rapidapi-host': apiHost
//       }
//     };
//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       return data.d || [];
//     } catch (error) {
//       console.error('Failed to fetch movies:', error);
//       return [];
//     }
//   }

//   function displayMovies(movies) {
//     divBar.innerHTML = '';
//     if (movies.length === 0) {
//       divBar.innerHTML = '<p>No results found.</p>';
//       return;
//     }

//     movies.forEach(movie => {
//       const movieElement = document.createElement('div');
//       movieElement.classList.add('movieContent');
//       movieElement.innerHTML = `
//       ${movie.i ? `<a href="https://www.imdb.com/title/${movie.id}/" target="_blank"><img src="${movie.i.imageUrl}" alt="content-not found" width="150"></a>` : ''}

//         <h3>${movie.l}</h3>
//         <div class="inner-div">
//           <p>${movie.q}</p>
//           <h4>${movie.rank}</h4>
//           <h4>${movie.s}</h4>
//         </div>
//       `;
//       divBar.appendChild(movieElement);
//     });
//   }

//   clickBar.addEventListener('click', async function () {
//     const query = searchBar.value.trim();
//     if (query) {
//       const movies = await fetchMovies(query);
//       displayMovies(movies);
//     }
//   });

//   // Load random movie on page load
//   (async function loadRandomMovie() {
//     const defaultQueries = ['Avengers', 'Batman', 'Spider-Man', 'Matrix', 'Star Wars'];
//     const randomQuery = defaultQueries[Math.floor(Math.random() * defaultQueries.length)];
//     const movies = await fetchMovies(randomQuery);
//     displayMovies(movies.slice(0, 30));
//   })();

//   // Navigation Buttons Functionality
//   const imdbButton = document.getElementById('imdb-button');
//   const watchlistButton = document.querySelector('.watchlist-btn');
//   const signInButton = document.querySelector('.signBut');

//   imdbButton.addEventListener('click', function () {
//     // Define behavior for IMDb button
//     console.log('IMDb button clicked');
//     // For example, redirect to IMDb homepage
//     window.open('https://www.imdb.com', '_blank');
//   });

//   watchlistButton.addEventListener('click', function () {
//     // Define behavior for Watchlist button
//     console.log('Watchlist button clicked');
//     // For example, navigate to the watchlist page
//     window.location.href = 'https://www.imdb.com/registration/signin?u=%2Flist%2Fwatchlist%2F%3Fref_%3Dnv_usr_wl_all_0';
//   });

//   signInButton.addEventListener('click', function () {
//     // Define behavior for Sign In button
//     console.log('Sign In button clicked');
//     // For example, open a sign-in modal or redirect to sign-in page
//     window.location.href = 'https://www.imdb.com/registration/signin/?ref=nv_generic_lgin&u=%2F ';
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown Menu
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const arrow = document.getElementById('arrow');

  dropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
    arrow.textContent = dropdownMenu.classList.contains('show') ? '▲' : '▼';
  });

  // Language Dropdown
  const langDropdown = document.getElementById('langDropdown');
  const langButton = document.getElementById('langButton');
  const langMenu = document.getElementById('langMenu');

  langButton.addEventListener('click', function (e) {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
  });

  // Close dropdowns when clicking outside
  window.addEventListener('click', function () {
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
      arrow.textContent = '▼';
    }
    langDropdown.classList.remove('show');
  });

  // Search Functionality
  const searchBar = document.querySelector('#searchBar');
  const clickBar = document.querySelector('#clickBar');
  const divBar = document.querySelector('#main-container');

  const apiKey = '38e73ae281mshcd7783e705c6b1ep186fe5jsnc3d0936b5109';
  const apiHost = 'imdb8.p.rapidapi.com';

  function fetchMovies(query) {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(query)}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };
    return fetch(url, options)
      .then(response => response.json())
      .then(data => data.d || [])
      .catch(error => {
        console.error('Failed to fetch movies:', error);
        return [];
      });
  }

  function displayMovies(movies) {
    divBar.innerHTML = '';
    if (movies.length === 0) {
      divBar.innerHTML = '<p>No results found.</p>';
      return;
    }

    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movieContent');
      movieElement.innerHTML = `
        ${movie.i ? `<a href="https://www.imdb.com/title/${movie.id}/" target="_blank"><img src="${movie.i.imageUrl}" alt="content-not found" width="150"></a>` : ''}
        <h3>${movie.l}</h3>
        <div class="inner-div">
          <p>${movie.q}</p>
          <h4>${movie.rank}</h4>
          <h4>${movie.s}</h4>
        </div>
      `;
      divBar.appendChild(movieElement);
    });
  }

  clickBar.addEventListener('click', function () {
    const query = searchBar.value.trim();
    if (query) {
      fetchMovies(query).then(displayMovies);
    }
  });

  // Load random movie on page load
  const defaultQueries = ['Avengers', 'Batman', 'Spider-Man', 'Matrix', 'Star Wars'];
  const randomQuery = defaultQueries[Math.floor(Math.random() * defaultQueries.length)];
  fetchMovies(randomQuery).then(movies => displayMovies(movies.slice(0, 30)));

  // Navigation Buttons Functionality
  const imdbButton = document.getElementById('imdb-button');
  const watchlistButton = document.querySelector('.watchlist-btn');
  const signInButton = document.querySelector('.signBut');

  imdbButton.addEventListener('click', function () {
    // Redirect to IMDb homepage
    window.open('https://www.imdb.com', '_blank');
  });

  watchlistButton.addEventListener('click', function () {
    // Navigate to the watchlist page
    window.location.href = 'https://www.imdb.com/registration/signin?u=%2Flist%2Fwatchlist%2F%3Fref_%3Dnv_usr_wl_all_0';
  });

  signInButton.addEventListener('click', function () {
    // Redirect to sign-in page
    window.location.href = 'https://www.imdb.com/registration/signin/?ref=nv_generic_lgin&u=%2F';
  });
});
const chaangleContent=document.querySelector('.changContent');
