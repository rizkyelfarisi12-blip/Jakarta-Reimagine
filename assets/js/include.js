async function loadComponent(id, file) {
    const response = await fetch(file);
    document.getElementById(id).innerHTML = await response.text();
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    initMain();

});