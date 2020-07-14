import React from 'react';

export default function FunktioKt15 (props)
{
    return(
        <table>
            <Tieto data={props.data} />
        </table>
    );
    
}

function Tieto(props) {
    const vari = {color: 'red'}

    const tuloste = props.data.map((x) => {
        if(x.rivi % 2 == 0) {
            return <tr style={vari}><td>{x.rivi}</td>,<td>{x.nimi}</td>,<td>{x.osoite}</td>,<td>{x.vuosi}</td>,<td>{x.ammatti}</td></tr>
        }
        else {
            return <tr><td>{x.rivi}</td>,<td>{x.nimi}</td>,<td>{x.osoite}</td>,<td>{x.vuosi}</td>,<td>{x.ammatti}</td></tr>
        }
    });

    return(
        <tbody>
            {tuloste}
        </tbody>
    );
}