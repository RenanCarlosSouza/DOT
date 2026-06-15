const dadosServicos = [
    {
        titulo: "Higienização de Colchões",
        nota: "⭐ 4,8 (217 avaliações)",
        beneficios: ["Eliminação de fungos, ácaros e bactérias", "Redução de alergias e odores", "Limpeza profunda sem danificar o tecido", "Produto antialérgico e biodegradável", "Secagem acelerada", "Duração média: 1h30 a 2 horas"],
        comentarios: [{ nome: "Aline M.", texto: "Serviço excelente, mudou a qualidade do meu sono." }]
    },
    {
        titulo: "Higienização de Tapetes",
        nota: "⭐ 4,9 (198 avaliações)",
        beneficios: ["Remoção de manchas e sujeiras profundas", "Eliminação de odores e bactérias", "Limpeza segura para todos os tipos de fibras", "Processo com secagem rápida", "Revitalização das cores e textura", "Duração média: 1 a 2 horas"],
        comentarios: [{ nome: "Clara R.", texto: "Meu tapete da sala voltou a ter a cor viva de antes. Recomendo!" }]
    },
    {
        titulo: "Limpeza de Placas Solares",
        nota: "⭐ 4,9 (156 avaliações)",
        beneficios: ["Remoção de poeira, resíduos e sujeiras acumuladas", "Melhoria na eficiência energética das placas", "Limpeza com equipamentos especializados", "Processo seguro sem danificar os painéis", "Atendimento residencial e empresarial", "Duração média: 2 a 4 horas"],
        comentarios: [{ nome: "Marcos V.", texto: "Notei a melhora na geração de energia logo no primeiro mês após a limpeza." }]
    },
    {
        titulo: "Higienização de Cortinas",
        nota: "⭐ 4,8 (143 avaliações)",
        beneficios: ["Limpeza profunda sem danificar o tecido", "Eliminação de ácaros, poeira e odores", "Higienização de cortinas blackout e tradicionais", "Produtos suaves e biodegradáveis", "Secagem rápida e segura", "Duração média: 1 a 3 horas"],
        comentarios: [{ nome: "Patrícia L.", texto: "Limparam a blecaute do quarto perfeitamente, sem nenhum dano." }]
    },
    {
        titulo: "Limpeza de Caixa D’água",
        nota: "⭐ 4,9 (289 avaliações)",
        beneficios: ["Remoção de lodo, sujeiras e impurezas", "Higienização completa e desinfecção", "Processo dentro das normas de segurança", "Ideal para residências e empresas", "Eliminação de bactérias e maus odores", "Duração média: 2 a 5 horas"],
        comentarios: [{ nome: "Eduardo F.", texto: "Equipe técnica muito profissional e cuidadosa com a segurança." }]
    },
    {
        titulo: "Higienização Profissional de Sofás",
        nota: "⭐ 4,9 (342 avaliações)",
        beneficios: ["Limpeza profunda e desodorização", "Eliminação de ácaros e manchas", "Proteção antimanchas", "Duração média: 2 a 3 horas"],
        comentarios: [{ nome: "Juliana S.", texto: "Meu sofá ficou impecável e super cheiroso. O resultado superou as expectativas." }]
    }
];

let servicoInteresse = "";

function abrirDetalhes(index) {
    const servico = dadosServicos[index];

    document.getElementById('detalhe-titulo').innerText = servico.titulo;
    document.getElementById('detalhe-nota').innerText = servico.nota;

    const containerBeneficios = document.getElementById('detalhe-beneficios');
    containerBeneficios.innerHTML = "";
    servico.beneficios.forEach(beneficio => {
        const li = document.createElement('li');
        li.innerHTML = `✔ ${beneficio}`;
        containerBeneficios.appendChild(li);
    });

    const containerComentarios = document.getElementById('detalhe-comentarios');
    containerComentarios.innerHTML = "";
    servico.comentarios.forEach(comentario => {
        const div = document.createElement('div');
        div.classList.add('comentario');
        div.innerHTML = `<strong>${comentario.nome}</strong> ${comentario.texto}`;
        containerComentarios.appendChild(div);
    });

    document.getElementById('modal-details').style.display = 'flex';
}

function solicitarOrcamento() {
    servicoInteresse = document.getElementById('detalhe-titulo').innerText;
    fecharModal('modal-details');
    document.getElementById('modal-acesso').style.display = 'flex';
}

function abrirLogin() {
    fecharModal('modal-acesso');
    fecharModal('modal-cadastro');
    document.getElementById('modal-login').style.display = 'flex';
}

function abrirCadastro() {
    fecharModal('modal-acesso');
    fecharModal('modal-login');
    document.getElementById('modal-cadastro').style.display = 'flex';
}

function abrirSobreNos() {
    fecharModal('modal-details');
    fecharModal('modal-acesso');
    fecharModal('modal-login');
    fecharModal('modal-cadastro');
    document.getElementById('modal-sobre').style.display = 'flex';
}

function processarAcesso(event) {
    event.preventDefault();

    fecharModal('modal-login');
    fecharModal('modal-cadastro');

    if (servicoInteresse !== "") {
        document.getElementById('select-servico').value = servicoInteresse;
    }

    document.getElementById('modal-agendamento').style.display = 'flex';
}

function finalizarAgendamento(event) {
    event.preventDefault();

    document.getElementById('form-agendamento').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'block';

    servicoInteresse = "";

    setTimeout(() => {
        fecharModal('modal-agendamento');
        document.getElementById('form-agendamento').style.display = 'flex';
        document.getElementById('mensagem-sucesso').style.display = 'none';
        document.getElementById('form-agendamento').reset();
    }, 3000);
}

function fecharModal(idModal) {
    document.getElementById(idModal).style.display = 'none';
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}