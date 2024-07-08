document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    header.classList.add("bg-gray-800", "p-4", "flex", "items-center", "justify-between");

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.classList.add("flex", "space-x-4");

    const pages = [
        { name: "HOME", href: "index.html" },
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
    header.appendChild(nav);

    const footer = document.getElementById("footer");
    footer.classList.add("bg-gray-800", "p-4", "text-center");

    const footerText = document.createElement("div");
    footerText.classList.add("text-gray-400", "text-sm");
    footerText.textContent = "MindHub - Cohort N 55";
    footer.appendChild(footerText);
});
