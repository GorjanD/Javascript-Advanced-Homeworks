$(document).ready(function () {


    let button = $("button");
    button.on("click", function () {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon",
            success: function (result) {
                let pokemonArray = []
                for (pokemon of result.results) {
                    if (pokemonArray.length < 10) {
                        pokemonArray.push(pokemon.name)
                        $("#pokemonList").append(`<li>${pokemon.name}</li>`);
                    }
                }
                console.log(pokemonArray)
            }
        })
    })
})