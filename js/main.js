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
        { name: "HOME", href: "#" },
        { name: "MOVIES", href: "movies.html" },
        { name: "FAVS", href: "#" }
    ];

    pages.forEach(page => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = page.name;
        a.href = page.href;
        if (page.name === "HOME") {
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

    const ctaContainer = document.createElement("div");
    ctaContainer.classList.add("flex", "justify-center", "space-x-4", "mt-6");

    const ctaMovies = document.createElement("div");
    ctaMovies.classList.add("bg-gray-600", "h-48", "w-1/3", "flex", "items-center", "justify-center", "text-xl");
    ctaMovies.textContent = "CALL TO ACTION (MOVIES)";

    const ctaFavs = document.createElement("div");
    ctaFavs.classList.add("bg-gray-600", "h-48", "w-1/3", "flex", "items-center", "justify-center", "text-xl");
    ctaFavs.textContent = "CALL TO ACTION (FAVS)";

    ctaContainer.appendChild(ctaMovies);
    ctaContainer.appendChild(ctaFavs);

    const descriptionText = document.createElement("p");
    descriptionText.classList.add("mt-4", "text-gray-400");
    descriptionText.textContent = "MOVIESTACK not only gives you access to a vast collection of movies, but also connects you with a community passionate about cinema. Engage in lively discussions about your favorite films, discover hidden gems recommended by other movie enthusiasts, and stay updated with the latest news and trends in the cinematic world. Our website is designed to offer you a personalized experience, allowing you to discover new movies based on your tastes and preferences. With MOVIESTACK, every visit is a new cinematic adventure waiting to be discovered.";

    const secondDescriptionText = document.createElement("p");
    secondDescriptionText.classList.add("mt-4", "text-gray-400");
    secondDescriptionText.textContent = "In MOVIESTACK, we are committed to providing you with the best cinematic experience possible. Our intuitive and user-friendly interface makes finding and watching your favorite movies a pleasure. Plus, with our personalized recommendations and exclusive content, you will always have something new and exciting to watch. Whether you're looking for a comedy to make you laugh, a thriller to keep you on the edge of your seat, or a heartwarming drama, MOVIESTACK has everything you need. Join us and make every movie night an unforgettable experience.";

    footer.appendChild(descriptionText);
    footer.appendChild(secondDescriptionText);
    footer.appendChild(ctaContainer);
    footer.appendChild(footerText);
});
