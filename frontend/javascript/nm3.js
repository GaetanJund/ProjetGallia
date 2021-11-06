// Création partie du haut, photo d'équipe
// A FAIRE, rendre l'url comme variable
fetch('https://qxjpbef.cluster030.hosting.ovh.net/teams?short_name=sm1')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#NM3 .row");
        data.forEach(nm3 => {
            container.innerHTML += `
            <div class="photo-equipe-nm3 col-12">
                <h2>${nm3.division}, Poule ${nm3.group}</h2>
                <img src="../images/nm3/photo-equipe.jpeg" alt="photo-equipe-sm1">
            </div>`;
        })
    });

// Création partie Effectif
fetch('https://qxjpbef.cluster030.hosting.ovh.net/players?teams.short_name=sm1')
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#NM3 .players");
        data.forEach(nm3 => {
            container.innerHTML += `
            <div class="block-joueur row">
                <div class="joueur col-4">
                    <img src="../images/nm3/antoine-remy2.jpeg" alt="">
                    <div class="joueur-texte">
                        <h3>${nm3.number}</h3>
                        <strong>
                        <p>${nm3.lastname} ${nm3.firstname}</p>
                        </strong>
                        <p>Poste ${nm3.position} | ${(nm3.size /100).toFixed(2)}</p>
                    </div>
                </div>
            </div>`;
        })
    });