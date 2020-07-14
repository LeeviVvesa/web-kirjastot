import React from 'react'
import { returnStatement } from '@babel/types';
/*
En aivan satavarma ole, onko tämä täysin ohjeen mukainen. Jokatapauksessa, 
lista on täytetty JSON-olioilla ja renderöidään lapsi-luokassa.
*/
export default class Kotitehtava8 extends React.Component {
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
                <table style={{ border: "1px solid black"}}>
                    <TableHeader n="Nimi" o="Osoite" a="Aloitusvuosi"/>
                    
                </table>
                <table style={{ border: "1px solid black"}}>
                    <TableHeader n="Name" o="Address" a="Starting year"/>
                </table>
            </div>
        );
    }
}

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <tr style={{ width: "100%" }}>
                    <th style={{ padding: "15px", borderBottom: "1px solid black"}}>{this.props.n}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black"}}>{this.props.o}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black"}}>{this.props.a}</th>
                </tr>
                <TableRow n="Esa" o="Ratakatu 66" a="2012"/>
                <TableRow n2="Erkki" o2="Syrjälänpolku 1" a2="2019"/>
                <TableRow n3="Junes" o3="Peräkuja 13" a3="1999"/>
                <TableRow n3="Ali" o3="Lammaskatu 66" a3="2000"/>
            </React.Fragment>
        );
    }
}

class TableRow extends React.Component {
    render() {

        return (
            <React.Fragment>
                <tr style={{ width: "100%", padding: "5px"}}>
                    <td>{this.props.n}</td>
                    <td>{this.props.o}</td>
                    <td>{this.props.a}</td>
                </tr>
                <tr style={{ width: "100%", padding: "5px"}}>
                    <td>{this.props.n2}</td>
                    <td>{this.props.o2}</td>
                    <td>{this.props.a2}</td>
                </tr>
                <tr style={{ width: "100%", padding: "5px"}}>
                    <td>{this.props.n3}</td>
                    <td>{this.props.o3}</td>
                    <td>{this.props.a3}</td>
                </tr>
                <tr style={{ width: "100%", padding: "5px"}}>
                    <td>{this.props.n4}</td>
                    <td>{this.props.o4}</td>
                    <td>{this.props.a4}</td>
                </tr>
            </React.Fragment>
        );
    }
}