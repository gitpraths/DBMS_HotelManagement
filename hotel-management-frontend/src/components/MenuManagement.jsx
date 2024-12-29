import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({
    title: '',
    description: '',
    price: '',
    image_url: '',
    category: '',
  });

  // Fetch all menu items when the component mounts
  useEffect(() => {
    axios.get('/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  // Handle add new menu item
  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/menu', newMenuItem);
      setMenuItems([...menuItems, result.data]);
      setNewMenuItem({
        title: '',
        description: '',
        price: '',
        image_url: '',
        category: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Handle delete menu item
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`/menu/${id}`);
      setMenuItems(menuItems.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Handle updating menu item (add logic here if needed)
  const handleUpdateItem = async (id) => {
    const updatedItem = { ...newMenuItem, id };
    try {
      const result = await axios.put(`/menu/${id}`, updatedItem);
      setMenuItems(menuItems.map(item => (item.id === id ? result.data : item)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="menu-management">
      <h2>Menu Management</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Title"
          value={newMenuItem.title}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMenuItem.description}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMenuItem.price}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newMenuItem.image_url}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, image_url: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newMenuItem.category}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, category: e.target.value })}
        />
        <button type="submit">Add Menu Item</button>
      </form>

      <div className="menu-list">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            <button onClick={() => handleUpdateItem(item.id)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
