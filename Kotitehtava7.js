import React from 'react'
import { returnStatement } from '@babel/types';
/*
En aivan satavarma ole, onko tämä täysin ohjeen mukainen. Jokatapauksessa, 
lista on täytetty JSON-olioilla ja renderöidään lapsi-luokassa.
*/
export default class Kotitehtava7 extends React.Component {
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
                <table style={{ border: "1px solid black" }}>
                    <TableHeader />
                </table>
                <table style={{ border: "1px solid black" }}>
                    <TableHeader />
                </table>
            </div>
        );
    }
}

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n : "Nimi",
            o : "Osoite",
            a : "Aloitusvuosi",
            n2 : "Name",
            o2 : "Address",
            a2 : "Starting year",
        }
    }

    render() {
        
        
        return (
            <React.Fragment>
                <tr style={{ width: "100%" }}>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{this.state.n}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{this.state.o}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{this.state.a}</th>
                </tr>
                <TableRow />
            
                <tr style={{ width: "100%" }}>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{this.state.n2}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{this.state.o2}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{this.state.a2}</th>
                </tr>
                <TableRow />
            </React.Fragment>
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
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}