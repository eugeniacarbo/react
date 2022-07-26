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
export const getFetch = (id) => {   
    
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            } else {
                resolve(productos)
            }
        }, 1200)
    })

}
