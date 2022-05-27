import { useState, useEffect } from "react";

const Hooks = () => {
    //Variável
    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40);
    
    //Função
    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    const changeNewAge = () => {
        setNovaIdade(45);
    };
    
    useEffect(() => {
        console.log("Testando!!!");
    });


    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova Idade</button>
        </div>

    );
};

export default Hooks;