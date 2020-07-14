import React from 'react';

// LEEVI VEHREÄVESA, KT26

export default class KT26 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  // statessa alustetaan
            data: [],
            nimi: "",
            osoite: "",
        }
    }
    lueTiedotN(nimi) {
        this.setState({ nimi: nimi.target.value }); // luetaan tiedot
    }
    lueTiedotO(osoite) {
        this.setState({ osoite: osoite.target.value });
    }


    async fetchData() {
        let ehto = "Nimi=" + this.state.nimi || "Osoite=" + this.state.osoite; // hakeminen osoitteella ei toimi, ei myöskään eri operaattoreilla
        let response;                                                           // tyhjillä kentillä palauttaa kaikki tiedot
        if (this.state.nimi.length > 0 || this.state.osoite.length > 0) {
            response = await fetch("http://localhost:3002/asiakas?" + ehto);
        }
        else {
            response = await fetch("http://localhost:3002/asiakas");
        }
        console.log("response=", response);

        let data_server = await response.json();
        console.log("data: ", data_server);
        this.setState({ data: data_server });
        
    }

    render() {

        return (   // Lähetetään Asiakkaat funktiolle this.state muodossa haettu data
            <div>
                Asiakkaan nimi:<input type="text" value={this.state.nimi} onChange={(nimi) => this.lueTiedotN(nimi)}></input>
                Asiakkaan osoite: <input type="text" value={this.state.osoite} onChange={(osoite) => this.lueTiedotO(osoite)}></input>
                <button onClick={() => this.fetchData()}>Hae!</button>
                <p>Löytyykö asiakkaita?</p>
                <Asiakkaat data={this.state.data} />
                <br></br>
                <Ilmoitus tiedot={this.state.data}/>
            </div>
        );
    }
}

const Asiakkaat = (props) => {  // nuolisyntaksi funktiolla renderöidään asiakkaat taulukkoon

    const asiakas = props.data;

        return (                // object keys toiminnolla asiakas taulukko käydään läpi valuen perusteella ja avaimena on asiakas.id
            <table>
                {Object.keys(asiakas).map((value) =>
                    <tbody key={asiakas.id}>
                        <td>{asiakas[value].Nimi}</td>,
                        <td>{asiakas[value].Osoite}</td>,
                        <td>{asiakas[value].Postinumero}</td>,
                        <td>{asiakas[value].Postitoimipaikka}</td>,
                        <td>{asiakas[value].Puhnro}</td>,
                        <td>{asiakas[value].Tyyppi_id}</td>,
                        <td>{asiakas[value].Tyyppi_selite}</td>
                    </tbody>
                )}
            </table>
        );
    
}

const Ilmoitus = (props) => {

    const jtn = props.tiedot;

    if (jtn.length === 0)
    {
        return (
            <div>Ei löytynyt asiakkaita (teksti häviää, jos löytyy..)</div>
        );
    }
    else
    {
        return (
            <div>Asiakkaita löytyi!</div>
        );
    }

}