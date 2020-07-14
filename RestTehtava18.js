import React from 'react';

// LEEVI VEHREÄVESA, KT18
export default class RestComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data : [],
            nimi : "",
            osoite : ""
        }
    }
    lueTiedotN(nimi) {
        this.setState({nimi : nimi.target.value}); // luetaan tiedot
    }
    lueTiedotO(osoite) {
        this.setState({osoite : osoite.target.value});
    }
    

    async fetchData()
    {   
        let ehto = "Nimi=" + this.state.nimi || "Osoite=" + this.state.osoite; // hakeminen osoitteella ei toimi, ei myöskään eri operaattoreilla
        let response;                                                           // tyhjillä kentillä palauttaa kaikki tiedot
        if (this.state.nimi.length > 0 || this.state.osoite.length > 0)
        {
            response = await fetch("http://localhost:3002/asiakas?" + ehto);
        }
        else
        {
            response = await fetch("http://localhost:3002/asiakas");
        }
        console.log("response=", response);

        let data_server = await response.json();
        console.log("data: ", data_server);
        this.setState({data : data_server});
    }

    

    render()
    {
        const asiakkaat = this.state.data.map((asiakas) => {
            return <tbody key={asiakas.id}><td>{asiakas.Nimi}</td>,<td>{asiakas.Osoite}</td>, 
            <td>{asiakas.Postinumero}</td>,<td>{asiakas.Postitoimipaikka}</td>, 
            <td>{asiakas.Puhnro}</td>,<td>{asiakas.Tyyppi_id}</td>,<td>{asiakas.Tyyppi_selite}</td></tbody>
            });
        
        return(
            <div>
                Asiakkaan nimi:<input type="text" value={this.state.nimi} onChange={(nimi) => this.lueTiedotN(nimi)}></input>
                Asiakkaan osoite: <input type="text" value={this.state.osoite} onChange={(osoite) => this.lueTiedotO(osoite)}></input>
                <button onClick={() =>this.fetchData()}>Hae!</button>
                <p>Löytyykö asiakkaita?</p>
                <table>{asiakkaat}</table>
            </div>
        );
    }
}



}