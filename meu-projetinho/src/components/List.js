import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca="Ferrari" ano_lancamento={1985} />
               <Item marca="Fiat" ano_lancamento={1995} />
               <Item marca="Chevrolet" ano_lancamento={2003} />
               <Item marca="Renault" ano_lancamento={2023} />
               <Item marca="Mustang" ano_lancamento={1945} />
               <Item marca="Camaro" ano_lancamento= {2001} />
            </ul>
        </>
    )
}

export default List