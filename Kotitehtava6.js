import React from 'react'
import { returnStatement } from '@babel/types';


/*
En aivan satavarma ole, onko tämä täysin ohjeen mukainen. Jokatapauksessa, 
lista on täytetty JSON-olioilla ja renderöidään lapsi-luokassa.
*/

export default class Kotitehtava6 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div style={{ width: "100%" }}>
                <TableClass />
            </div>
        );
    }
}

// Luokkia on yksi liikaa, mutten jaksanut muokata isä-luokkaa TableClassiksi, 
// joten se on nyt extraluokkana tässä..

class TableClass extends React.Component {
    render() {
        return (
            <div>
                <div style={{ width: "100%" }}>
                    <table style={{ border: "1px solid black" }}>
                        <TableHeader />
                        <TableRow />
                    </table>
                </div>
                <div>
                    <table style={{ border: "1px solid black" }}>
                        <TableHeader />
                        <TableRow />
                    </table>
                </div>
            </div>
        );
    }
}

class TableHeader extends React.Component {
    render() {
        let n = "Nimi";
        let o = "Osoite";
        let a = "Aloitusvuosi";
        return (
            <div>
                <tr style={{ width: "100%" }}>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{n}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{o}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{a}</th>
                </tr>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {

        //tiedot nyt JSON-olioissa, ei varmaan tarvinnut, mutta halusin kokeilla
        let op1 = [{ "n": "Esa", "o": "Ratakatu 66", "a": 2012 }];
        let op2 = [{ "n": "Erkki", "o": "Syrjälänpolku 1", "a": 2019 }];
        let op3 = [{ "n": "Junes", "o": "Peräkuja 13", "a": 1999 }];
        let op4 = [{ "n": "Ali", "o": "Lammaskatu 99", "a": 2000 }];

        return (
            <div>
                <tr style={{ width: "100%" }}>
                    {op1.map(item => <td style={{ padding: "15px" }}>{item.n}</td>)}
                    {op1.map(item => <td style={{ padding: "15px" }}>{item.o}</td>)}
                    {op1.map(item => <td style={{ padding: "15px" }}>{item.a}</td>)}
                </tr>
                <tr style={{ width: "100%" }}>
                    {op2.map(item => <td style={{ padding: "15px" }}>{item.n}</td>)}
                    {op2.map(item => <td style={{ padding: "15px" }}>{item.o}</td>)}
                    {op2.map(item => <td style={{ padding: "15px" }}>{item.a}</td>)}
                </tr>
                <tr style={{ width: "100%" }}>
                    {op3.map(item => <td style={{ padding: "15px" }}>{item.n}</td>)}
                    {op3.map(item => <td style={{ padding: "15px" }}>{item.o}</td>)}
                    {op3.map(item => <td style={{ padding: "15px" }}>{item.a}</td>)}
                </tr>
                <tr style={{ width: "100%" }}>
                    {op4.map(item => <td style={{ padding: "15px" }}>{item.n}</td>)}
                    {op4.map(item => <td style={{ padding: "15px" }}>{item.o}</td>)}
                    {op4.map(item => <td style={{ padding: "15px" }}>{item.a}</td>)}
                </tr>
            </div>
        );
    }
}