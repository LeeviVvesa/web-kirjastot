import React from 'react';
import FunktioKt15 from './FunktioKt15'

//TEHTÄVÄ 15 ja 16, LEEVI VEHREÄVESA
export default class Kotitehtava14 extends React.Component {

    constructor(props) {
        super(props);

        this.state = { //Alustetaan state-muuttujat täällä
            r : '',
            n : '',
            o : '',
            v : '',
            a : '',

            tiedot : [],
            testaus : false,
            testaus2 : false, // testaus boolean-muuttujalla
        }           
    }
lueTiedotR(r) {
    this.setState({r : r.target.value});
}
lueTiedotN(n) {
    this.setState({n : n.target.value}); // luetaan tiedot
}
lueTiedotO(o) {
    this.setState({o : o.target.value});
}
lueTiedotV(v) {
    this.setState({v : v.target.value});
}

lisaaClicked() {
    if ((this.state.n.length > 3) && (this.state.o.length > 3) && (this.state.v.length > 3))
    {
        this.setState({testaus: false}); // ei ollu virhe
        
        let rivi = this.state.r;
        let nimi = this.state.n;
        let osoite = this.state.o;
        let vuosi = this.state.v;
        let ammatti = document.querySelector(".ammatit").value; // haetaan ammatti
          
        if (!this.tarkistus(nimi))
        {
            this.setState({ tarkistus2 : false });

            let taulu = {rivi: rivi, nimi: nimi, osoite: osoite, vuosi: vuosi, ammatti: ammatti}; // tauluun arvot ->
            const t = [...this.state.tiedot, taulu];
            this.setState({tiedot : t});
            this.setState({n: '', o: '', v: ''}); // nollataan syötteet
        }
        else
        {
            this.setState({ tarkistus2 : true });
        }
    } else {
        this.setState({testaus: true}); // oli virhe, boolean on true
    }
}

tarkistus(comp) {
    let result = false;
    this.state.tiedot.forEach(lohko => {
        if (comp === lohko.nimi) {
            result = true;
        }
    });
    return result;
}

render() {

    let varoitus;
    if (this.state.testaus)
        {   
            varoitus = <p style={{color: "red"}}>Jokin syöte on liian lyhyt, syötä vähintään 4 kirjainta!</p>
        }
    
    let varoitus2; // Jostain syystä en millään saa tulostumaan tätä ilmoitusta.. 
    if (this.state.testaus2)
    {
        varoitus2 = <p style={{color: "red"}}>Nimi on jo syötetty!</p>
    }

    return (
        <div>
            {varoitus2}
            <p>Tähän pitäisi tulla virheilmoitus, mutta ei vaan tulostu.. nimeä ei saa kuitenkaan syötettyä, joten puolet oikein ;)...?</p>
            <p>Syötä nimi, osoite, syntymäaika ja toiveammattisi!?!?!?! : </p>
            <p><b>Muista syöttää oikea rivinumero, on tärkeä!!!</b></p>

            <label>
                Rivinro: <input type="text" value={this.state.r} name="rivi" onChange={(r) => this.lueTiedotR(r)} />
                <br></br>
                Nimi: <input type="text" value={this.state.n} name="nimi" onChange={(n) => this.lueTiedotN(n)} />
                <br></br>
                Osoite: <input type="text" value={this.state.o} name="osoite" onChange={(o) => this.lueTiedotO(o)} />
                <br></br>
                Syntymävuosi: <input type="text" value={this.state.v} name="vuosi" onChange={(v) => this.lueTiedotV(v)} />
                <br></br>
                Ammatti: <label>
                        <select class="ammatit">
                            <option value="Kokki">Kokki</option>
                            <option value="Talonmies">Talonmies</option>
                            <option value="Lentäja">Lentäjä</option>
                            <option value="Koodari">Koodari</option>
                        </select>
                        <br></br>
                    </label>
            </label>

            <button onClick={() => this.lisaaClicked()}>Save ja tyhjennys</button>

            <FunktioKt15 data={this.state.tiedot} />

            {varoitus}
                
        </div>
        );
    }
}
