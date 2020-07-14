import React, {useState, useEffect} from 'react'
 
/*KT36 ja 37. Tee React sovellus, jossa käyttäjä voi syöttää urheilujoukkueiden nimiä. 
Kun käyttäjä painaa Tallenna-nappia, lisätään tiedot nappien alla olevaan select-elementtiin. 
Muuta käyttäjän syöte aina isoiksi kirjaimiksi. Tyhjennä myös syötetyt kentät Tallenna-napin 
painamisen jälkeen.*/

// LEEVI VEHREÄVESA

export default function KT36 ()
{
    const [nimi, setSeura] = useState('');                 //Tämä kerää joukkueen nimen state-muuttujaan
    const [seurat, setSeurat] = useState([]);               //tässä on lista jossa joukkueen nimi on, saattaa jopa olla turha osa
    const nimi2 = nimi.toUpperCase();

    function addSeura()
    {
        let t = [...seurat, nimi2];
        setSeurat(t);
        setSeura('');
    }

    let jengit = seurat.map((s, i) => <option key={i}>{s}</option>);  // kaivetaan seuran nimi listasta

    let ilmoitus;
    
    if (jengit.length >= 5)     // tulostetaan ilmoitus
    {
        ilmoitus = <p>Viisi seuraa syötetty!</p>
    }

    return (
        <div style={{backgroundColor : "grey", fontSize : "30px", textAlign: "center"}}>
            <p>Syötä urheilu(jalkapallo)seuroja:</p>
        
            <input id="k" value={nimi} onChange={(e) => setSeura(e.target.value)} /> 

            <button onClick={() => addSeura()}>Tallenna</button>
            <br/>
            <select>{jengit}</select>
            <p>Mitteeköhän tulostuu? : {ilmoitus}</p>
        </div>                                  // note to myself: input valueksi kannattaa laittaa se asia,
                                                // joka on tarkoitus tyhjentää, ettei mene hermot..
    )
}