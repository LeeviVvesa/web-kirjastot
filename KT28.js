import React from 'react'
/*
Tehtävä 28, muuta tehtävää 7 käyttämään funktioita
*/
export default function KT28 () 
{
    return (
        <div style={{ width: "100%"}}>
            <TableClass />
        </div>
    );
}

const TableClass = () =>{  // periaatteessa turha funktio, ei jaksanu muokata
    return (
        <div>
            <TableHeader/>    
        </div>
    );
}

const TableHeader = () => {
   
    let n = "Nimi";
    let o = "Osoite";
    let a = "Aloitusvuosi";
    let n2 = "Name";
    let o2 = "Address";
    let a2 = "Starting year";  
        
    return (  // ei tarvetta propseille sun muille
        <div>
            <table style={{ border: "1px solid black" }}>
                <tr style={{ width: "100%" }}>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{n}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{o}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{a}</th>
                </tr>
                <TableRow />
            </table>
            <table style={{ border: "1px solid black" }}>    
                <tr style={{ width: "100%" }}>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{n2}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{o2}</th>
                    <th style={{ padding: "15px", borderBottom: "1px solid black" }}>{a2}</th>
                </tr>
                <TableRow />
            </table>
            </div>
        );
    }
   
const TableRow = () => {

    let op1 = [{ "n": "Esa", "o": "Ratakatu 66", "a": 2012 }];
    let op2 = [{ "n": "Erkki", "o": "Syrjälänpolku 1", "a": 2019 }];
    let op3 = [{ "n": "Junes", "o": "Peräkuja 13", "a": 1999 }];
    let op4 = [{ "n": "Ali", "o": "Lammaskatu 99", "a": 2000 }];    

    return (  // käydään oliot läpi ja syötetään taulukkoon
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