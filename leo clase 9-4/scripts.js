const URLAPI = "https://cataas.com/api/cats?tags=cute";

fetch(URLAPI)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error)) 


const obtenerGatos = async () => {
    try {
        const response = await fetch(URLAPI);
        const gatos = await response.json();
        console.log(gatos);
    } catch (error) {
        console.log(error);
    }
};

obtenerGatos()
function obtenerGatos2(APIData) {
    APIData.forEach(gato => {
        const img = document.createElement("img");
        img.src = " https://cdn2.thecatapi.com/images/7ce.jpg${gato.id}";
        document.body.append(img);
    });
}

obtenerGatos();