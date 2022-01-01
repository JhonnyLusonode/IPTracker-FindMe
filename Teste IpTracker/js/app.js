const lookupbutton = document.querySelector(".lookup-button"); //atribui a variável lookupbutton para a classe .lookup-button
const ipDisplay = document.querySelector(".ip-display");//atribui a variável ipDisplay para a classe .ip-display
const ipType = document.querySelector(".type");//atribui a variável ipType para a classe .Type
const locationDisplay = document.querySelector(".location-display");//atribui a variável locationDisplay para a classe .location-display
const CountryFlag = document.querySelector(".CountryFlag-display");//atribui a variável CountryFlag para a classe .CountryFlag-display
const loader = document.querySelector(".loader-container");//Script Loader branco quando clicas no botão
const details = document.querySelector(".details");//Script Ao clicar no botão os detalhes só aparecem depois do loader branco
const map = document.querySelector(".map");//Script Ao clicar no botão o mapa só aparece depois do loader branco


//Criei um evento para click. Ao clicar no botão as três barras em branco("loader") aparecem e mostram os "details".
lookupbutton.addEventListener("click", () => { //Ao clicar no botão cria um evento para cada variável que foi criada. Ex: ipdisplay, locationDisplay, GeolocationDisplay e CountryFlag
    loader.style.display = "flex"; 
    details.style.display ="none";
    axios.get("http://api.ipstack.com/check?access_key=f01d968110c94e3b6500ff8c8145d535&format=1").then((response) => { //criei uma api neste site ipstack.com
            loader.style.display ="none"; //desaparece depois de ir buscar os detalhes
            details.style.display ="block";//Os detalhes aparecem depois de o loader acabar
           
            ipDisplay.textContent = `IP: ${response.data.ip}`;
            //Api vai buscar o ip

            ipType.textContent = `Type: ${response.data.type}`;
            //Api vai buscar o tipo de Endereço
            
            locationDisplay.textContent = `Location: ${response.data.continent_name},
                                                     ${response.data.country_name},
                                                     ${response.data.region_name}`;
            //Api vai buscar o continent_name, country_name e oregion_name

            CountryFlag.innerHTML = ` `+ '<img width="60" height="60" src="https://flagpedia.net/data/flags/emoji/apple/160x160/pt.png">';  //Api vai buscar o country_flag
        });
           
});



