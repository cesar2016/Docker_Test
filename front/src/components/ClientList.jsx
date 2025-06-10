import React from 'react';
import './ClientList.css'; // Para estilos específicos de la lista

function ClientList({ clients, onDeleteClient, onEditClient }) {
    if (clients.length === 0) {
        return <p>No clients available.</p>;
    }

    return (
        <div className="client-list-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.lastname}</td>
                            <td>{client.phone}</td>
                            <td>{client.city}</td>
                            <td>{client.age}</td>
                            <td>{client.sex}</td>
                            <td>{client.country}</td>
                            <td>
                                <button className="edit-btn" onClick={() => onEditClient(client)}>Edit</button>
                                <button className="delete-btn" onClick={() => onDeleteClient(client.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;