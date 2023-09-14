import React from 'react'
import { useState } from 'react'
import { Button, Spacer } from '@chakra-ui/react'

const ItemCount = () => {

const [contador, setContador] = useState (0)

const sumarContador = () => {
    if(contador < 10){
        setContador (contador + 1)
    }
}


const restarContador = () => {
    if (contador > 0){
        setContador (contador - 1)
    }
}

const onAdd = () => {
    if(contador > 0){
        alert(`Agregaste ${contador} items al carrito`)
    }
    
}
return (
<>
    <div>
    <Button id='botonsuma' colorScheme='blue'onClick={sumarContador}>+</Button>
    <h4>{contador}</h4> 
    <Button id='botonresta' colorScheme='red' onClick={restarContador}>-</Button>
    <Spacer/>
    <Button id='botonAlert' colorScheme='green' onClick={onAdd}>Agregar</Button>
    </div>
</>
)
}

export default ItemCount