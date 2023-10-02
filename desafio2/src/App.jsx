import "./App.css";
import React, { useState } from "react";

export default function App() {
const [contador, setContador] = useState(0);

const Add = () => {
    if (contador < 10) setContador(contador + 1);
};

const Diminuir = () => {
    if (contador > 0) setContador(contador - 1);
};

return (
    <main>
    <section>
        <h1>Título</h1>
        <h2>{contador}</h2>

        <button onClick={Add}>+</button>
        <button onClick={Diminuir}>-</button>
</section>
    </main>
);
}
