import React from 'react'

//TEHTÄVÄ 9-10, LEEVI VEHREÄVESA
export default class Kotitehtava910 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            a : '',
            autot : [],
        }
    }

lueClicked(a) {
    this.setState({a : a.target.value});
}

lisaaClicked() {
    const merkki = this.state.a;
    const t = [...this.state.autot, merkki];
    this.setState({autot : t, a: ''});
}

render() {

    let varoitus = null;
    const tuloste = this.state.autot.map((a) => <li>Merkki on: {a}</li>)
    
        if (this.state.autot.length > 5)
            varoitus = <p>Ainakin viisi nimeä on jo tulostettu!</p>

        return (
            <div>
                <p>Syötä automerkkejä: </p>

                <label>
                    <input type="text" value={this.state.a} name="auto" onChange={(a) => this.lueClicked(a)} />
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
