import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, doc, getDoc, getFirestore} from 'firebase/Firebase'
import { getFetch } from '../../helpers/getFetch'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../Items/ItemList'

useEffect(() =>{
  const db = getFirestore() 
  const queryProducto = doc (db, 'productos', '0VETbnqV6Cz89Sf9Ih3I')
  getDoc(queryProducto)
  .then(resp=> setProducto({id: resp.id, ...resp.data() } ) )
}, [])

console.log(producto)

useEffect(() =>{
  const db = getFirestore() 
  const queryCollection = collection (db, 'productos' )
  getDocs(queryCollection)
  .then(resp=> setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data() }) )) )
  .catch (err => console.log (err))
  .finally(() => setLoading(false))
}, [])

console.log(productos)

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])  
  const [ loading, setLoading ] = useState(true)

  const {categoriaId} = useParams()

 useEffect(()=>{
    if(categoriaId){
        getFetch() 
        .then(respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId)))    
        .catch( err => console.log(err) )
        .finally(()=> setLoading(false) )
    }else{
        getFetch()
        .then(respuesta => setProductos(respuesta))    
        .catch( err => console.log(err) )
        .finally(()=> setLoading(false) )
    }
  }, [categoriaId])

  

  return (
    <div>

      {loading ?
      <div className='spinner container'></div>
      :
      <ItemList productos={productos}/>
      }


    </div>
  )
}

export default ItemListContainer



