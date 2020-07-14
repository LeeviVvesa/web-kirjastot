import React from 'react'
import { returnStatement } from '@babel/types';


/*
En aivan satavarma ole, onko tämä täysin ohjeen mukainen. Jokatapauksessa, 
lista on täytetty JSON-olioilla ja renderöidään lapsi-luokassa.
*/

export default class Kotitehtavat1 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let opiskelijat = [{ "etunimi": "Lucas", "sukunimi": "Rangel", "aloitusvuosi": 2012 },
        { "etunimi": "Glen", "sukunimi": "Kamara", "aloitusvuosi": 2015 },
        { "etunimi": "Markku", "sukunimi": "Kanerva", "aloitusvuosi": 2018 },
        { "etunimi": "Teemu", "sukunimi": "Pukki", "aloitusvuosi": 2019 }];

        return (
            <div style={{ backgroundColor: "pink", color: "blue", textAlign: "center" }}>
                <p>Luodaan tähän alle taulukko opiskelijoista:</p>
                <ul>
                    <Taulukko data={opiskelijat} />
                </ul>
            </div>
        );
    }
}

class Taulukko extends React.Component {
    render() {
        let op = this.props.opiskelijat;
        return (
            <div>
                <ul>
                    {this.props.data.map(item => <li>{item.etunimi}, {item.sukunimi}, {item.aloitusvuosi}</li>)}
                </ul>
            </div>
        );
    }
}