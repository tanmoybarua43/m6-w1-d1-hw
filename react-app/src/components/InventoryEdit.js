import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function InventoryEdit() {
    const [item, setItem] = useState({ prodname: '', qty: '', price: '', status: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`http://localhost:8080/api/inventory/${id}`)
                .then(response => response.json())
                .then(data => setItem(data))
                .catch(error => console.error('Error fetching item:', error));
        }
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (id === 'new') {
            await fetch('http://localhost:8080/api/inventory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
            });
        } else {
            await fetch(`http://localhost:8080/api/inventory/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
            });
        }
        navigate('/inventory');
    };

    return (
        <div className="container my-4">
            <h2>{id === 'new' ? 'Add Inventory' : 'Edit Inventory'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Product Name</label>
                    <input type="text" name="prodname" className="form-control" value={item.prodname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Quantity</label>
                    <input type="number" name="qty" className="form-control" value={item.qty} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" name="price" className="form-control" value={item.price} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Status</label>
                    <input type="text" name="status" className="form-control" value={item.status} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" onClick={() => navigate('/inventory')} className="btn btn-secondary ms-2">Cancel</button>
            </form>
        </div>
    );
}

export default InventoryEdit;
