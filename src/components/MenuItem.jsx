import React from 'react';
    import './MenuItem.css'

    function MenuItem({ item }) {
      return (
        <div className="menu-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">{item.price}</p>
        </div>
      );
    }

    export default MenuItem;
