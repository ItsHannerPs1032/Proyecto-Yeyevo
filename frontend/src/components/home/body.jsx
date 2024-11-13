
import React from 'react'

const Body = () => {
  const products = [
    { id: 1, name: 'Buso Gris', price: '$35.000', image: '/images/busogris.jpg'},
    { id: 2, name: 'Crop top', price: '$25.000', image: '/images/croptop.jpg'},
    { id: 3, name: 'Camiseta estampada', price: '$20.000', image: '/images/camisamanoesqueleto.jpg'},
    { id: 4, name: 'Camiseta estampada', price: '$20.000', image: '/images/okeyboomer.jpg'}
  ]

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Lo Nuevo</h2>
      <div className="row">
        {products.map((product) => ( 
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <a href="#" className="btn btn-primary">Ver Producto</a>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </section>
  )
}

export default Body; 
