import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InventoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventories: [],
            loading: true
        };
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/inventories');
        const data = await response.json();
        this.setState({ inventories: data, loading: false });
    }

    async removeInventory(id) {
        await fetch(`http://localhost:8080/api/inventory/${id}`, { method: 'DELETE' });
        this.setState({ inventories: this.state.inventories.filter(item => item._id !== id) });
    }

    render() {
        if (this.state.loading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="container">
                <Link to="/inventory/new" className="btn btn-primary">Add Inventory</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.inventories.map(item => (
                            <tr key={item._id}>
                                <td>{item.prodname}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link to={`/inventory/${item._id}`} className="btn btn-info">Edit</Link> {' '} 
                                    <button onClick={() => this.removeInventory(item._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InventoryList;
