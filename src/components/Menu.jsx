import React from 'react';
    import './Menu.css';
    import MenuItem from "./MenuItem";

    function Menu() {
      const menuItems = [
        { id: 1, name: 'Dish 1', description: 'Rice and chicken', price: '$10', image: 'https://github.com/Diego-lg/3dbrocolongo/blob/main/IMG-20220826-WA0026.jpg?raw=true' },
        { id: 2, name: 'Dish 2', description: 'Potato', price: '$12', image: 'https://github.com/Diego-lg/3dbrocolongo/blob/main/IMG-20220826-WA0026.jpg?raw=true' },
        { id: 3, name: 'Dish 3', description: 'Orange juice', price: '$15', image: 'https://github.com/Diego-lg/3dbrocolongo/blob/main/IMG-20220826-WA0026.jpg?raw=true' },
        { id: 4, name: 'Dish 4', description: 'Lemonade', price: '$15', image: 'https://github.com/Diego-lg/3dbrocolongo/blob/main/IMG-20220826-WA0026.jpg?raw=true' },
      ];

      return (
        <section className="menu">
          <div className="container">
            <h2>Our Menu</h2>
            <div className="menu-items">
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default Menu;
