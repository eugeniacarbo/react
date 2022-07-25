import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../Items/ItemList'


const ItemListContainer = () => {
 const [productos,setProductos] = useState([])

const[loading,setLoading] = useState(true)

 useEffect(()=>{
 getFetch()
 .then(respuesta=>(setProductos(respuesta)))
 .catch(err=>(console.log(err)) )
 .finally(()=>setLoading(false))
 },[])

 const onAdd = (cant)=>{
  console.log(`la cantidad es: ${cant}`)
  }
 console.log(productos)
  
  return (
    <div>
        <ItemList></ItemList>
    </div>
  )
}

export default ItemListContainer



