const photoGrid = document.getElementById("photoGrid");
const searchInput = document.getElementById("search");
const photoCards = document.querySelectorAll(".photo-card");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  let visibleCards = 0;

  photoCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const isVisible = title.includes(searchTerm);
    card.style.display = isVisible ? "block" : "none";
    if (isVisible) visibleCards++;
  });

  const noResultsMsg = document.querySelector(".no-results");
  if (visibleCards === 0) {
    if (!noResultsMsg) {
      const noResults = document.createElement("p");
      noResults.className = "no-results";
      noResults.textContent = "Nenhuma foto encontrada";
      photoGrid.appendChild(noResults);
    }
  } else if (noResultsMsg) {
    noResultsMsg.remove();
  }
});
