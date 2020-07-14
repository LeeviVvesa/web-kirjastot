import React from 'react';

export default class Kotitehtava1_4kaks extends React.Component {

    //LEEVI VEHREÄVESA, KT 1-4
    // Muodostin /rakentaja tai constructor, pittää olla
    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);

        //Tilan hallinta
        //Tämä on ainoa paikka, jossa state-muuttujaan voi sijoittaa jotain

        this.state = {
            nimi: "tyhjä",
            laskuri: 0,
        }
    }

    buttonClicked() {

        console.log("Painoit nappia");
        this.setState((prevState) => ({ laskuri: prevState.laskuri + 1, nimi: "aloit laskemaan" }));
        
    }

    //huom tälle ei ole bind-metodin kutsua constructorissa
    nappiClicked() {
        this.setState({ laskuri: 0, nimi: "menit nollaamaan!"});
    }

    render() //render metodi on ainoa pakollinen metodi
    {

        //Pitää palauttaa yksi html-elementti
        return (
            <div>

                <p style={{backgroundColor : 'pink'}}>Laskuritehtävä {this.state.nimi}</p>

                <button onClick={this.buttonClicked}>LASKURI</button>
                <button onClick={() => this.nappiClicked()}>NOLLAA</button>
                
                <Laskin laskuri1={this.state.laskuri} /> 
                {
                //tässä viedään tietoa tästä luokasta toiseen luokkaan
                }
            </div>
        )
    }
}

//Tässä luodaan uusi komponentti, joka vie laskurin tiedot elementtiin
class Laskin extends React.Component {
    constructor(props) 
    {
        super(props);
    }

    render() 
    {
        let vari = "black";
        let paksu = ""; // annetaan arvoksi tyhjä

        if (this.props.laskuri1 > 10) //käytetään props. lausetta, kun tieto tuodaan toisesta luokasta
        {
           vari = "red";
           paksu = "bold"; //tyhjän arvoksi boldattu teksti
        }


        return ( //fontin tyyliä muutetaan allaolevalla lauseella
            <div style={{color : vari, fontWeight : paksu}}> 
                <p>Laskuri on {this.props.laskuri1}</p>
            </div>
        );
    }
}