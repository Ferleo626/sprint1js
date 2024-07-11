document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    footer.classList.add("bg-gray-800", "p-4", "text-center");

    const footerText = document.createElement("div");
    footerText.classList.add("text-gray-400", "text-sm");
    footerText.textContent = "MindHub - Cohort N 55";

    footer.appendChild(footerText);

    renderMovies(movies);

    const genreFilter = document.getElementById("genreFilter");
    const titleSearch = document.getElementById("titleSearch");

    genreFilter.addEventListener("change", () => {
        filterMovies();
    });

    titleSearch.addEventListener("input", () => {
        filterMovies();
    });
});

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('bg-gray-700', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'text-center', 'p-4');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('h-48', 'mb-4', 'flex', 'justify-center', 'items-center', 'bg-gray-600', 'rounded-lg');
    const img = document.createElement('img');
    img.src = movie.image;
    img.alt = movie.title;
    img.classList.add('h-full', 'object-cover');
    imgContainer.appendChild(img);

    const title = document.createElement('h2');
    title.classList.add('text-xl', 'font-bold', 'mb-2', 'text-white');
    title.textContent = movie.title;

    const tagline = document.createElement('h3');
    tagline.classList.add('text-lg', 'italic', 'text-gray-400', 'mb-2');
    tagline.textContent = movie.tagline;

    const description = document.createElement('p');
    description.classList.add('text-gray-300');
    description.textContent = movie.overview;

    card.appendChild(imgContainer);
    card.appendChild(title);
    card.appendChild(tagline);
    card.appendChild(description);

    return card;
}

function renderMovies(movies) {
    const container = document.getElementById('movieContainer');
    if (!container) return;

    container.innerHTML = '';

    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

function filterMovies() {
    const genreFilter = document.getElementById("genreFilter").value;
    const titleSearch = document.getElementById("titleSearch").value.toLowerCase();

    const filteredMovies = movies.filter(movie => {
        const matchesGenre = genreFilter ? movie.genres.includes(genreFilter) : true;
        const matchesTitle = titleSearch ? movie.title.toLowerCase().includes(titleSearch) : true;
        return matchesGenre && matchesTitle;
    });

    renderMovies(filteredMovies);
}
