import React, { useEffect, useState } from "react";

export default function SplasScreen(props) {
    const [contador, setContador] = useState(0);


    useEffect(() => {
        console.log('on mount - montagem')

        return () => {
            console.log('on UNmount = desmontagem')
        }
    }, [])
    
    useEffect(() => {
        setTimeout(() => {
            setContador(contador + 1);
        }, 2000)
    }, [contador])

    return (
        <div>
            <h1>SplasScreen</h1>

            <p>Contador em: {contador}</p>
        </div>
    )
}