// Função para exibir produtos
function showProducts() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 1; i <= 10; i++) {
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/200x200?text=Produto+${i}`;
        img.alt = `Produto ${i}`;
        content.appendChild(img);
    }
}

// Função para exibir serviços
function showServices() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 1; i <= 10; i++) {
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/200x200?text=Serviço+${i}`;
        img.alt = `Serviço ${i}`;
        content.appendChild(img);
    }
}

// Manipulação do formulário
document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Obrigado, ${name}! Você será notificado em ${email}.`);
    this.reset(); // Limpa o formulário após o envio
});