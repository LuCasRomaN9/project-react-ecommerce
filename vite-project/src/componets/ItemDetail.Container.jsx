import React from "react";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
  const productos = [
    
        {id: 1 , nombre:"producto nike" , descipcion:"descripcion del producto a", stock:10, precio:1000, categoria:"nike"},
    
        {id: 1 , nombre:"producto nike" , descipcion:"descripcion del producto a", stock:10, precio:1000, categoria:"nike"},
    
        {id: 1 , nombre:"producto adidas" , descipcion:"descripcion del producto a", stock:10, precio:1000, categoria:"adidas"},
    
        {id: 1 , nombre:"producto adidas" , descipcion:"descripcion del producto a", stock:10, precio:1000, categoria:"adidas"},
    
        {id: 1 , nombre:"producto puma" , descipcion:"descripcion del producto a", stock:10, precio:1000, categoria:"puma"},
    
        {id: 1 , nombre:"producto puma" , descipcion:"descripcion del producto a", stock:10, precio:1000, categoria:"puma"}
  ];


  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
  .then((res) =>{
  })
  .catch((error) =>{
    console.log(error);
  })

  return (
    <>
      <ItemDetail productos={productos}
      />
    </>
  );
};

export default ItemDetailContainer;