let listaCarros = [
    {
        "nome": "Lamborghini",
        "img": "img/laferrari.jpg",
        "descricao": "Carro veloz igual um cavalo",
    },
    {
        "nome": "Audi",
        "img": "img/branco.jpg",
        "descricao":"O carro mais confortavel da categoria",
    },
    {
        "nome": "honda",
        "img": "img/camaro.jpg",
        "descricao": "o Japones que se confia",
    },
    {
        "nome": "Laferrari",
        "img": "img/agera.jpg",
        "descricao": "O italiano que é para poucos",
    },
    {
        "nome": "Mercedes",
        "img": "img/potente.jpg",
        "descricao": "O conforto que sua família merece.",
    },
    {
        "nome": "porshe",
        "img": "img/verde.jpg",
        "descricao": "O veloz e atrante alemão.",
    },
    {
        "nome":"momoi",
        "img":"img/verde.jpg",
        "descricao":"a mais linda",
        
    }
]
listaCarros.map((carro, position) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
                <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <a href="#" class="btn btn-secondary"onClick="zoomImg('${position}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    `
})

function zoomImg(position){
    let carroSelecionado = listaCarros[position];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme","dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}