import React from 'react'
/*
Tehtävä 35, luo annetun mukainen design, nk. "holy grail" siis kyseessä
*/
// LEEVI VEHREÄVESA

// HUOM EI TOIMI ILMAN CSS-tiedostoa, joka mukana palautuksessa
export default function KT35K() {
    return (
        <div style={{ width: "100%" }}>
            <body>
                <header>Welcome to main page of Savonia AMK</header>
                <main>
                    <article>Introduction of our company...</article>
                    <nav>Please log in!</nav>
                    <aside>Lot's of info about our company...</aside>
                </main>
                <footer>Copyright by leeviv@Savonia</footer>
            </body>
        </div>
    );
}
