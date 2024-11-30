import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

const DataTable = () => {
  const [data, setData] = useState([]); 
  const [formData, setFormData] = useState({ userId: '', title: '', completed: 'No' }); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => { const limitedData = data.slice(0, 10).map(item => ({...item, completed: item.completed ? 'Yes' : 'No', }));
        setData(limitedData); 
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleUpdate = (id) => {
    setData(prevData =>
      prevData.map(item => item.id === id ? { ...item, completed: item.completed === 'Yes' ? 'No' : 'Yes' } : item)
    );
  };

  const handleDelete = (id) => { setData(prevData => prevData.filter(item => item.id !== id)) };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newRow = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    };
    setData([...data, newRow]);
    setFormData({ userId: '', title: '', completed: 'No' });
  };

  if (error) return <p className="error-message">Error: {error.message}</p>;

  return (
    <div className="container">
      <div className="table-container">
        
        <table className="data-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="table-row">
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
                <td>
                  <button
                    className="update-button"
                    onClick={() => handleUpdate(item.id)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form className="form" onSubmit={handleAdd}>
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={formData.userId}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <select
            name="completed"
            value={formData.completed}
            onChange={handleChange}
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <button type="submit" className="add-button">
            Add Row
          </button>
        </form>

      </div>
    </div>
  );
};

export default DataTable;
