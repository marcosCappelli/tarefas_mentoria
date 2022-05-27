const AnotherComponent = () => {
    const handleClick = () => {
        console.log("clickou o botão!!");
    };
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => console.log("testexxx")}>Evento no elemento</button>
        </div>
    );
}

export default AnotherComponent;