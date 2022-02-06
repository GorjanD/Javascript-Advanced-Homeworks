$(document).ready(function () {

    let button = $("button");
    button.on("click", function () {

        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                response.json()
                    .then(result => {
                        $("table").append(`
                        <tr>
                            <td><b>Id</b></td>
                            <td>${result.id}</td>
                        </tr>
                        <tr>
                            <td><b>Name</b></td>
                            <td>${result.name}</td>
                        </tr>
                        <tr>
                            <td><b>Username</b></td>
                            <td>${result.username}</td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td>${result.email}</td>
                        </tr>
                        <tr>
                            <td rowspan="6"><b>Address</b></td>
                            <td>Street</td>
                            <td>${result.address.street}</td>
                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>${result.address.suite}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>${result.address.city}</td>
                        </tr>
                        <tr>
                            <td>Zipcode</td>
                            <td>${result.address.zipcode}</td>
                        </tr>
                        <tr>
                            <td rowspan="2">Geo</td>
                            <td>Lat</td>
                            <td>${result.address.geo.lat}</td>
                        </tr>
                        <tr>
                            <td>Lng</td>
                            <td>${result.address.geo.lng}</td>
                        </tr>
                        <tr>
                            <td><b>Phone</b></td>
                            <td>${result.phone}</td>
                        </tr>
                        <tr>
                            <td><b>Website</b></td>
                            <td>${result.website}</td>
                        </tr>
                        <tr>
                            <td rowspan="3"><b>Company</b></td>
                            <td>Name</td>
                            <td>${result.company.name}</td>
                        </tr>
                        <tr>
                            <td>Catch Phrase</td>
                            <td>${result.company.catchPhrase}</td>
                        </tr>
                        <tr>
                            <td>BS</td>
                            <td>${result.company.bs}</td>
                        </tr>
                        `);
                    })
            })
    })
})