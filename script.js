
/* ==================================
   C# DEVLAB - INTERACÇÕES
================================== */

// DETALHES DAS FERRAMENTAS

const tools = {
    visual: {
        title: "Microsoft Visual Studio",
        text: "O Visual Studio é um IDE completo. Inclui editor de código, compilador, depurador e ferramentas para desenvolver aplicações. É especialmente utilizado em projectos .NET e C#.",
        link: "https://visualstudio.microsoft.com/"
    },

    vscode: {
        title: "Visual Studio Code",
        text: "O VS Code é um editor de código leve e multiplataforma. Para desenvolver em C#, pode ser configurado com extensões e com o .NET SDK. É uma opção flexível para diferentes projectos.",
        link: "https://code.visualstudio.com/"
    },

    rider: {
        title: "JetBrains Rider",
        text: "O Rider é um IDE multiplataforma da JetBrains, especializado em .NET. Disponibiliza ferramentas de análise de código, navegação, depuração e refatoração.",
        link: "https://www.jetbrains.com/rider/"
    }
};

function showDetails(tool) {
    const selected = tools[tool];

    if (!selected) return;

    document.getElementById("detailsTitle").textContent = selected.title;
    document.getElementById("detailsText").textContent = selected.text;
    document.getElementById("detailsLink").href = selected.link;

    const panel = document.getElementById("detailsPanel");

    panel.classList.add("active");

    panel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

function closeDetails() {
    document.getElementById("detailsPanel").classList.remove("active");
}


// SIMULAÇÃO DO PROGRAMA C#

function runCode() {
    const input = document.getElementById("userName");
    const output = document.getElementById("output");

    const name = input.value.trim();

    if (name === "") {
        output.innerHTML =
            '<span style="color:#ff7777">Erro: escreve primeiro o teu nome.</span>';
        return;
    }

    const safeName = document.createElement("span");
    safeName.textContent = "Olá, " + name + "! Bem-vindo ao C# DevLab.";

    output.replaceChildren();

    const success = document.createElement("span");
    success.style.color = "#67e8b5";
    success.textContent = "> Programa executado com sucesso!";

    const result = document.createElement("p");
    result.style.marginTop = "15px";
    result.appendChild(safeName);

    output.appendChild(success);
    output.appendChild(result);
}


// CONFIGURAÇÃO DO A HASLIDES

// SUBSTITUI O TEXTO ABAIXO PELO LINK DA TUA APRESENTAÇÃO.

const AHASLIDES_LINK = "";

function setupAhaSlides() {
    const button = document.getElementById("ahaslidesButton");
    const qrArea = document.getElementById("qrArea");

    if (!AHASLIDES_LINK.trim()) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("O link do AhaSlides ainda não foi configurado.");
        });

        return;
    }

    button.href = AHASLIDES_LINK;

    const image = document.createElement("img");

    image.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        encodeURIComponent(AHASLIDES_LINK);

    image.alt = "Código QR para abrir a apresentação AhaSlides";

    qrArea.replaceChildren(image);
}

setupAhaSlides();


// ANIMAÇÃO SUAVE AO ENTRAR NAS SECÇÕES

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".concept-card, .tool-card").forEach(card => {
    observer.observe(card);
});

console.log("C# DevLab iniciado com sucesso.");
