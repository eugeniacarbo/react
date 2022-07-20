import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Item from './Item'

let productos = [{
    id: "1",
    marca: "El Refugio 1",
    categoría: "Promos",
    nombre: "Promo finde fuera de temporada",
    img: ""
},
{
    id: "2",
    marca: "El Refugio 2",
    categoría: "Promos",
    nombre: "Promo finde con 6 amigos",
    img: ""
},
{
    id: "3",
    marca: "El Refugio 2",
    categoría: "Promos",
    nombre: "Promo fiestas",
    img: ""
},
{
    id: "4",
    marca: "El Refugio 1",
    categoría: "Promos",
    nombre: "Promo relax finde largo",
    img: ""
},
{
    id: "5",
    marca: "El Refugio 1",
    categoría: "Promos",
    nombre: "Promo solari",
    img: ""
},
{
    id: "6",
    marca: "El Refugio 1",
    categoría: "Promos",
    nombre: "Promo en pareja",
    img: ""
},
]

  const getFetch = ( ) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
          resolve(productos)
        }, 3000)
  
    })
  }

  const cardSize = {
    width: "18rem",
  }

const ItemList = () => {
    const [productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        getFetch()   
        .then (respuesta => setProductos(respuesta)) 
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
      }, [])

      console.log(productos)

  return (
    <div className='row m-3'>
            { loading ? <div className='spinner container'></div> 
            :
            productos?.map( producto =>
            <div className='col-12 mb-2 col-md-4' key={producto.id}>
            <div className='card' style={cardSize}>
                <img className='card-img-top imagenCard' src={producto.img} alt="" />
                <div className='card-body'>
                    <h3 className='productoTitulo'>{producto.nombre}</h3>
                    <Item></Item>
                    <ItemCount></ItemCount>
                </div>
            </div>
        </div>)}
        
    </div>
  )
}

export default ItemList