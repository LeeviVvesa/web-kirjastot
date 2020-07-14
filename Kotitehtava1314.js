import React from 'react';

//TEHTÄVÄ 13 ja 14, LEEVI VEHREÄVESA
export default class Kotitehtava13 extends React.Component {

    constructor(props) {
        super(props);

        this.state = { //Alustetaan state-muuttujat täällä
            n : '',
            o : '',
            v : '',
            a : '',

            tiedot : [],
            testaus : false,
            testaus2 : false, // testaus boolean-muuttujalla
        }
            
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
        
        let nimi = this.state.n;
        let osoite = this.state.o;
        let vuosi = this.state.v;
        let ammatti = document.querySelector(".ammatit").value; // haetaan ammatti
          
        if (!this.tarkistus(nimi))
        {
            this.setState({ tarkistus2 : false });

            let taulu = {nimi: nimi, osoite: osoite, vuosi: vuosi, ammatti: ammatti}; // tauluun arvot ->
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

    let nimet;
    if (this.state.tiedot.length > 0) {                 //  tulostetaan jos taulukossa on sisÃ¤ltÃ¶Ã¤
        nimet = this.state.tiedot.map((value) => {
        return <li>{value.nimi}, {value.osoite}, {value.vuosi}</li>
        });
    }
    //const tuloste = this.state.tiedot.map((x) => <li>{x.nimi}, {x.osoite}, {x.vuosi}, {x.ammatti}</li>)

    let varoitus;
    if (this.state.testaus)
        {   
            varoitus = <p style={{color: "red"}}>Jokin syöte on liian lyhyt, syötä vähintään 4 kirjainta!</p>
        }
    
    let varoitus2; // Jostain syystä en millään saa tulostumaan tätä ilmoitusta.. 
    if (this.state.testaus2 == true)
    {
        varoitus2 = <p style={{color: "red"}}>Nimi on jo syötetty!</p>
    }

    return (
        <div>
            {varoitus2}
            <p>Tähän pitäisi tulla virheilmoitus, mutta ei vaan tulostu.. nimeä ei saa kuitenkaan syötettyä, joten puolet oikein ;)...?</p>
            <p>Syötä nimi, osoite, syntymäaika ja toiveammattisi!?!?!?! : </p>

            <label>
                Nimi: <input type="text" value={this.state.n} name="nimi" onChange={(n) => this.lueTiedotN(n)} />
                Osoite: <input type="text" value={this.state.o} name="osoite" onChange={(o) => this.lueTiedotO(o)} />
                Syntymävuosi: <input type="text" value={this.state.v} name="vuosi" onChange={(v) => this.lueTiedotV(v)} />
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

            <form>
                <ul>
                    {nimet}
                </ul>
            </form>
            {varoitus}
                
        </div>
        );
    }
}
