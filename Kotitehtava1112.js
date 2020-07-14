import React from 'react'

//TEHTÄVÄ 11 ja 12, LEEVI VEHREÄVESA
export default class Kotitehtava1112 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            n : '',
            o : '',
            a : '',
            tiedot : [],
            testaus: 'true',
        } 
        
    }

lueTiedotN(n) {
    this.setState({n : n.target.value});
}
lueTiedotO(o) {
    this.setState({o : o.target.value});
}
lueTiedotA(a) {
    this.setState({a : a.target.value});
}

lisaaClicked() {
    let nimi = this.state.n;
    let osoite = this.state.o;
    let vuosi = this.state.a;

    if (nimi.length < 4 || osoite.length < 4 || vuosi.length < 4)
        this.setState({testaus: 'false'});
        
    else 
    {
        let taulu = {nimi: nimi, osoite: osoite, vuosi: vuosi};
        this.setState({testaus: 'true'});
        const t = [...this.state.tiedot, taulu];
        this.setState({tiedot : t});
        this.setState({n: '', o: '', a: ''});
    }
}

render() {

    let varoitus = null;
    if (this.state.testaus == 'false')
        {   
            varoitus = <p style={{color: "red"}}>Jokin syöte on liian lyhyt, syötä vähintään 4 kirjainta!</p>
        }
    if (this.state.testaus == 'true')
    {
        varoitus = null;
    }
    const tuloste = this.state.tiedot.map((x) => <li>{x.nimi}, {x.osoite}, {x.vuosi}</li>)
    

    return (
        <div>
            <p>Syötä nimi, osoite ja syntymäaika!?!?!?! : </p>

            <label>
                Nimi: <input type="text" value={this.state.n} name="nimi" onChange={(n) => this.lueTiedotN(n)} />
                Osoite: <input type="text" value={this.state.o} name="osoite" onChange={(o) => this.lueTiedotO(o)} />
                Syntymävuosi: <input type="text" value={this.state.a} name="vuosi" onChange={(a) => this.lueTiedotA(a)} />
            </label>

            <button onClick={() => this.lisaaClicked()}>Save ja tyhjennys</button>

            <form>
                <ul>
                    {tuloste}
                </ul>
            </form>
            {varoitus}
                
        </div>
        );
    }
}
