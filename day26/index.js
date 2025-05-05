// const div1 = document.querySelector('#mydiv');
// const but1 = document.querySelector('#start');
// const but2 = document.querySelector('#stop');

// let intervalId; // Store interval ID globally

// function saymyname(name) {
//     const p = document.createElement('p');
//     p.textContent = `Hi, ${name}, have a great day!`;
//     div1.appendChild(p);
// }

// but1.addEventListener('click', function () {
//     intervalId = setInterval(() =>
//          saymyname("Piyush"), 1000);
        
// });

// but2.addEventListener('click', function () {
//     console.log("stopped");
//     clearInterval(intervalId);
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }   
// // });
// let colorInterval;

// but1.addEventListener('click', () => {
//     colorInterval = setInterval(() => {
//         document.body.style.backgroundColor = getRandomColor();
//     }, 1000);
// });

// but2.addEventListener('click', () => {
//     clearInterval(colorInterval);
// })



// //crate promise
// const mypromise=new Promise((resolve, reject) => {
//     resolve({name:"piyush",email:"example.com"});
    
// })
// mypromise.then(function(user){
//     console.log(user.name)

// })
// const searchBar = document.querySelector('#search-bar');
// const searchButton = document.querySelector('#searchButton');
// const divBar = document.querySelector('.main-Div');
// const apiKey = "7a66c57647754f179c88fc7c3041e5dc";

// function fetchData(query) {
//   const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then(data => {
//       displayResults(data);
//     })
//     .catch(error => {
//       console.error("There was a problem with the fetch operation:", error);
//       divBar.innerHTML = `<p style="color: red;">Something went wrong. Please try again.</p>`;
//     });
// }

// function displayResults(data) {
//   divBar.innerHTML = "";

//   if (!data || data.articles.length === 0) {
//     divBar.innerHTML = "<p>No results found.</p>";
//     return;
//   }

//   data.articles.forEach(item => {
//     const itemDiv = document.createElement('div');
//     itemDiv.classList.add('item-card');
//     itemDiv.innerHTML = `
//       <h3>${item.title}</h3>
//       <img src="${item.urlToImage || 'https://via.placeholder.com/250'}" alt="${item.title}">
//       <p>${item.description || "No description available."}</p>
//       <a href="${item.url}" target="_blank">Read more</a>
//     `;
//     divBar.appendChild(itemDiv);
//   });
// }

// searchButton.addEventListener('click', function (e) {
//   e.preventDefault();
//   const query = searchBar.value.trim();
//   if (query) {
//     divBar.innerHTML = ""; // Clear previous results
//     fetchData(query);
//   }
// });
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#searchButton');
const divBar = document.querySelector('.main-Div');
const apiKey = "7a66c57647754f179c88fc7c3041e5dc";

// Globals for pagination
let currentArticles = [];
const articlesPerPage = 6;

// Fetch API Data
function fetchData(query) {
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      displayResults(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      divBar.innerHTML = `<p style="color: red;">Something went wrong. Please try again.</p>`;
    });
}

// Display Results and Setup Pagination
function displayResults(data) {
  divBar.innerHTML = "";

  if (!data || data.articles.length === 0) {
    divBar.innerHTML = "<p>No results found.</p>";
    return;
  }

  currentArticles = data.articles;
  renderPage(1); // Load first page
  createPaginationButtons();
}

// Render One Page of Articles
function renderPage(page) {
  divBar.innerHTML = "";

  const start = (page - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  const articlesToShow = currentArticles.slice(start, end);

  articlesToShow.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-card');
    itemDiv.innerHTML = `
      <h3>${item.title}</h3>
      <img src="${item.urlToImage || 'https://via.placeholder.com/250'}" alt="${item.title}">
      <p>${item.description || "No description available."}</p>
      <a href="${item.url}" target="_blank">Read more</a>
    `;
    divBar.appendChild(itemDiv);
  });
}

// Create Pagination Buttons
function createPaginationButtons() {
  const totalPages = Math.ceil(currentArticles.length / articlesPerPage);

  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.classList.add('page-btn');
    btn.innerText = i;

    btn.addEventListener('click', () => renderPage(i));
    paginationDiv.appendChild(btn);
  }

  // Remove existing pagination if any
  const existingPagination = document.querySelector('.pagination');
  if (existingPagination) existingPagination.remove();

  // Append below results container
  divBar.parentElement.appendChild(paginationDiv);
}

// Search button click
searchButton.addEventListener('click', function (e) {
  e.preventDefault();
  const query = searchBar.value.trim();
  if (query) {
    divBar.innerHTML = "";
    fetchData(query);
  }
});
// On page load – show random news
window.addEventListener('load', () => {
    const randomTopics = ["technology", "science", "health", "sports", "music", "nature", "space", "india", "politics", "climate"];
    const randomQuery = randomTopics[Math.floor(Math.random() * randomTopics.length)];
    fetchData(randomQuery);
  });
  