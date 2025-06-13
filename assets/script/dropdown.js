document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("toggle-btn");
	const menu = document.getElementById("dropdown-menu");
	const menuLinks = menu.querySelectorAll(".header__navbar-link");

	button.addEventListener("click", toggleMenu);

	// Fechar ao clicar fora do botão:
	document.addEventListener("click", (event) => {
		// Se o clique não foi no botão E não foi dentro do menu E o menu não está escondido
		if (window.innerWidth < 768) {
			if (
				!button.contains(event.target) &&
				!menu.contains(event.target) &&
				!menu.classList.contains("hidden")
			) {
				menu.classList.add("hidden");
			}
		}
	});

	// Ao clicar em qualquer link, a função toggleMenu será chamada
	menuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth < 768) {
				toggleMenu(); // Chama a função para esconder o menu
			}
		});
	});
});

function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    const buttonIcon = document.getElementById("toggle-img");

	if (window.innerWidth < 768) {
		const menu = document.getElementById("dropdown-menu");
		menu.classList.toggle("hidden");
	}

    if (menu.classList.contains("hidden")) {
        buttonIcon.src = "assets/img/dropdown.svg"; // Ícone de abrir
        buttonIcon.alt = "Abrir menu";
    } else {
        buttonIcon.src = "assets/img/close.svg"; // Ícone de fechar
        buttonIcon.alt = "Fechar menu";
    }
}
