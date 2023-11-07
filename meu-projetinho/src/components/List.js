import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca="Ferrari" />
               <Item marca="Fiat" />
               <Item marca="Chevrolet" />
               <Item marca="Renault" />
               <Item marca="Mustang" />
               <Item marca="Camaro" />
            </ul>
        </>
    )
}

export default List