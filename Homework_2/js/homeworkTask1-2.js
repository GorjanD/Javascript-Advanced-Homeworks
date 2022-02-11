$(document).ready(() => {
    $("#nextBtn").hide()
    $("#prevBtn").hide()

    let firstBtn = $("#firstBtn");
    firstBtn.on("click", () => {
        $.ajax({
            url: "https://swapi.dev/api/planets/?page=1",
            success: (result) => {
                for (planet of result.results) {
                    $("table").append(`
                    <tr><td>${planet.name}</td>
                    <td>${planet.population}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.gravity}</td></tr>
                    `)
                }
            }
        })
        $("#firstBtn").hide()
        $("#nextBtn").show()
    })
    let nextBtn = $("#nextBtn");
    nextBtn.on("click", () => {
        $.ajax({
            url: "https://swapi.dev/api/planets/?page=2",
            success: function (result) {
                for (planet of result.results) {
                    $("table").append(`
                    <tr><td>${planet.name}</td>
                    <td>${planet.population}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.gravity}</td></tr>
                    `)
                }
            }
        })
        $("#nextBtn").hide()
        $("#prevBtn").show()
    })
    let prevBtn = $("#prevBtn");
    prevBtn.on("click", () => {
        $("tr").remove()
        $("table").append(`
        <tr>
            <th>Planet Name</th>
            <th>Population</th>
            <th>Climate</th>
            <th>Gravity</th>
        </tr>
        `)
        $.ajax({
            url: "https://swapi.dev/api/planets/?page=1",
            success: (result) => {
                for (planet of result.results) {
                    $("table").append(`
                    <tr><td>${planet.name}</td>
                    <td>${planet.population}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.gravity}</td></tr>
                    `)
                }
            }
        })
        $("#nextBtn").show()
        $("#prevBtn").hide()
    })
})