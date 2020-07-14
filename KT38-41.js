import React, { useState } from 'react';

/* 
KT 38-41
*/
// LEEVI VEHREÄVESA

export default function KT38() {

    const [maalista, setMaalista] = useState([]);  // käytetään usestatea taas tässä
    const [ekalista, setKaikkilista] = useState(false);   // tämä näyttää kaikki maat

    function lisaaMaa(tiedot) 
    {
        if (tiedot) 
        {
            setMaalista(lista => [...lista, tiedot]); // tässä lisätään listaan tiedot
        } else 
        {
            setMaalista([]);
        }
    }   
    return(       //tässä kutsutaan eri funktioita, jotka sitten kyselee maata ja muuta
        <div>
            <KysyTiedot lisaaMaa={(e) => lisaaMaa(e)} maalista={maalista} /> 
            {maalista.length > 0 && ekalista ? <TulostaMaat maat={maalista} /> : null}
            {maalista.length > 0 ? <TulostaEdellinen viimeisin={maalista[(maalista.length - 1)]} /> : null}
            <KaikkiMaat setKaikkilista={setKaikkilista} />
        </div>
    );

}

const KysyTiedot = (props) => {                                 //propsilla liikkuu tieto, arrow syntaksi vaikuttaa kätevimmältä

    const [maa, setMaa] = useState("");
    const [kaupunki, setKaupunki] = useState("");
    const [luku, setLuku] = useState("");
    const [virhe, setVirhe] = useState(false);
    const [maavirhe, setMaavirhe] = useState(false);

    function tallenna() {

        let virhe1 = false;                                     //vertailumuuttuja

        setMaavirhe(false);
        if (props.maalista) {                                   // nollaa virhe ennen vertailua
            Object.keys(props.maalista).forEach((index) => {

                if (props.maalista[index].maa === maa) {            // onko sama maa jo syötetty?
                    setMaavirhe(true);
                    virhe1 = true;
                }
            });
        }

        if (maa.length >= 3 && kaupunki.length >= 3 && luku >= 10000) {
            setVirhe(false);                                                // nollaa virheen
            if (!virhe1) {
                const maatieto = { 'maa': maa, 'kaupunki': kaupunki, 'luku': luku };  // tämmöinen olio luodaan
                props.lisaaMaa(maatieto);
            }
        }
        else {
            setVirhe(true);
        }
        setMaa('');
        setKaupunki('');
        setLuku('');
    }

    function tyhjenna() {  // tyhjennetään kentät
        setMaa('');
        setKaupunki('');
        setLuku('');
        props.lisaaMaa('');
        setVirhe(false);
        setMaavirhe(false);
    }

    return (
        <div>
            <div><h3>Syötä maa ja tiedot:</h3></div>
            <p>Virheilmoitus: {maavirhe ? <VirheMaa /> : null}</p>
            <div>
                Maan nimi: <input type="text" name="Maa" value={maa} onChange={(event) => setMaa(event.target.value)} />
            </div>
            <div>
                Pääkaapunni: <input type="text" name="Kaupunki" value={kaupunki} onChange={(event) => setKaupunki(event.target.value)} />
            </div>
            <div>
                Asukasluku: <input type="text" name="Luku" value={luku} onChange={(event) => setLuku(event.target.value)} />
            </div>
            <button type="button" onClick={() => { tallenna() }} >Tallenna</button>
            <button type="button" onClick={() => { tyhjenna() }} >Tyhjennä</button>
            {virhe ? <VirheIlmoitus /> : null}
        </div>
    );
};

const TulostaMaat = (props) => { // täällä tulostetaan listaus

    const taulu = props.maat;

    return (
        <div>
            <ul>
                {Object.keys(taulu).map((value, index) =>
                    <li className={index % 2 === 0 ? "parillinen" : "pariton"} key={index}>
                        {taulu[value].maa}, {taulu[value].kaupunki}, {taulu[value].luku / 1000000} miljoonaa
                    </li>
                )}
            </ul>
        </div>
    );
};

const TulostaEdellinen = (props) => {  // tässä saadaan viiminen maa

    const data = props.viimeisin;
    return (<div><p>Edellinen syöte: {data.maa}, {data.kaupunki}, {data.luku / 1000000} miljoonaa</p></div>)
}

const KaikkiMaat = (props) => {  // näytä kaikki maat

    const [kaikki, setKaikki] = useState(true);

    function boxClicked() {
        setKaikki(prevState => !prevState);
        props.setKaikkilista(kaikki);
    }

    return (
        <div>
            <p>Näytä jo syötetyt maat:</p>
            <input type="checkbox" onChange={() => boxClicked()} value={kaikki} checked={!kaikki} />
        </div>
    );
}
// tässä virheet, arrow syntaksi on helppoa ja kivaa...
const VirheIlmoitus = () => (<div><p>Tarkista syötetyt tiedot</p></div>);

const VirheMaa = () => (<div><p>Tämä maa on jo tallennettu</p></div>)