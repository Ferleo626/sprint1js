document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    header.classList.add("bg-gray-800", "p-4", "flex", "items-center", "justify-between");

    const logoDiv = document.createElement("div");
    logoDiv.classList.add("flex", "items-center", "space-x-3");

    const img = document.createElement("img");
    img.src = "./assest/Moviestack_isotipo.png";
    img.alt = "MOVIESTACK Logo";
    img.classList.add("w-16", "h-16", "rounded-full");
    logoDiv.appendChild(img);

    const span = document.createElement("span");
    span.textContent = "MOVIESTACK";
    span.classList.add("font-bold");
    logoDiv.appendChild(span);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.classList.add("flex", "space-x-4");

    const pages = [
        { name: "HOME", href: "index.html" },
        { name: "MOVIES", href: "#" },
        { name: "FAVS", href: "#" }
    ];
    pages.forEach(page => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = page.name;
        a.href = page.href;
        if (page.name === "MOVIES") {
            a.classList.add("text-black", "bg-white", "p-2", "rounded");
        } else {
            a.classList.add("text-white", "p-2", "rounded");
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(logoDiv);
    header.appendChild(nav);

    
    const footer = document.getElementById("footer");
    footer.classList.add("bg-gray-800", "p-4", "text-center");

    const footerText = document.createElement("div");
    footerText.classList.add("text-gray-400", "text-sm");
    footerText.textContent = "MindHub - Cohort N 55";

    footer.appendChild(footerText);

    
    renderMovies(movies);
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
    description.textContent = movie.description;

    card.appendChild(imgContainer);
    card.appendChild(title);
    card.appendChild(tagline);
    card.appendChild(description);

    return card;
}


function renderMovies(movies) {
    const container = document.getElementById('movieContainer');
    if (!container) return;

    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}
