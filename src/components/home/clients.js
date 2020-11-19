import React, { useState } from 'react'
import ClientItem from './client-item'

const clientData = [
  {imageURL: '../img/clients/client-1.png'},
  {imageURL: '../img/clients/client-2.png'},
  {imageURL: '../img/clients/client-3.png'},
  {imageURL: '../img/clients/client-4.png'},
  {imageURL: '../img/clients/client-5.png'},
  {imageURL: '../img/clients/client-6.png'},
]

const Clients = () => {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="row">
          {clientData.map((client, idx) => (
            <ClientItem {...client} key={"client" + idx}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients