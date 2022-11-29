// TODO: add event listener for when page loads
window.addEventListener("load", function() {
    const container = document.getElementById('container');
    const count = document.getElementById('count');

     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            count.innerHTML = `There are ${data.length} astronauts!`;
            // Turnery operator sorting mechanicsm 
            data.sort(function(a, b){
                return a.hoursInSpace < b.hoursInSpace ? 1: -1
            })

            for (let i=0; i < data.length; i++){
                let astronaut = data[i]
                let activeClass = 'class="green"';
                container.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio"
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                                <li class=${astronaut.active ? "green" : ""}>Active: ${astronaut.active}</>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                        `;
                }

        });
    });
});
