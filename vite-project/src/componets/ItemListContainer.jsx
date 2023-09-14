
import ItemList from "./ItemList";

import React from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
const {categoria} = useParams ()

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
      reject(new Error("No hay mas datos"));
    }
  });

  getProductos
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });


const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)

  return (

      categoria ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />

  );
};


export default ItemListContainer;