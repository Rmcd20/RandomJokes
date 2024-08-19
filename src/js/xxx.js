$(document).ready(function() {

    //Atribição de chaves as variáveis
    const $jokeContainer = $('#joke-container');
    const $newJokeBtn = $('#new-joke-btn');


    // Requisição a api para procurar a piada
    function fetchJoke() {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            dataType: 'json', // tem de receber um json
            headers: {
                'Accept': 'application/json'
            },
            success: function(data) {
                $jokeContainer.html(`<p>${data.joke}</p>`); // Mostra a piada dentro do container
            },
            error: function() {
                $jokeContainer.html('<p>Failed to load a joke!</p>'); // Caso não consiga carregar a piada
            }
        });
    }

    $newJokeBtn.on('click', fetchJoke); // Clique no botão para nora requisição à api para carregar uma nova piada

    // Carregar a primeira piada ao carregar a página pela primeira vez
    fetchJoke();
});