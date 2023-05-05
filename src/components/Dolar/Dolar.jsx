import { useState, useEffect } from "react";

const Dolar = () => {

    const [dolar, setDolar] = useState([])

    useEffect(() => {
        // setInterval(() => {
            fetch("https://criptoya.com/api/dolar")
            .then(response => response.json())
            .then(dolar => {console.log(dolar)
            setDolar(dolar)
            })
        // }, 5000);
    }, [])

    return (
        <div>
            <p>Solidario : {dolar.solidario}</p>
            <p>Blue : {dolar.blue}</p>
        </div>
    );
}

export default Dolar;
