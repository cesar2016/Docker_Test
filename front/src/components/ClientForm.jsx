import React, { useState, useEffect } from 'react';
import './ClientForm.css'; // Para estilos del formulario

function ClientForm({ clientToEdit, onAddClient, onUpdateClient, onCancelEdit }) {
    const initialState = {
        name: '',
        lastname: '',
        phone: '',
        city: '',
        age: '',
        sex: '',
        country: ''
    };
    const [client, setClient] = useState(initialState);

    // Si hay un cliente para editar, poblar el formulario
    useEffect(() => {
        if (clientToEdit) {
            setClient(clientToEdit);
        } else {
            setClient(initialState); // Resetear el formulario si no hay cliente para editar
        }
    }, [clientToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (clientToEdit) {
            onUpdateClient(client.id, client); // Actualizar cliente existente
        } else {
            onAddClient(client); // Añadir nuevo cliente
        }
        setClient(initialState); // Limpiar el formulario después de enviar
    };

    return (
        <div className="client-form-container">
            <h2>{clientToEdit ? 'Edit Client' : 'Add New Client'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={client.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname:</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={client.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={client.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={client.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={client.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sex">Sex:</label>
                    <input
                        type="text"
                        id="sex"
                        name="sex"
                        value={client.sex}
                        onChange={handleChange}
                        placeholder="e.g., Male, Female, Other"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={client.country}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">{clientToEdit ? 'Update Client' : 'Add Client'}</button>
                    {clientToEdit && (
                        <button type="button" className="cancel-btn" onClick={onCancelEdit}>Cancel</button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ClientForm;