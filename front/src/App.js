import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos básicos

function App() {
    const [clients, setClients] = useState([]);
    const [editingClient, setEditingClient] = useState(null); // Cliente que se está editando
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'http://127.0.0.1:9200/api/clients'; // ¡Importante! Asegúrate que Laravel usa rutas /api

    // Función para obtener todos los clientes
    const fetchClients = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(API_URL);
            setClients(response.data);
        } catch (err) {
            console.error('Error fetching clients:', err);
            setError('Failed to fetch clients.');
        } finally {
            setLoading(false);
        }
    };

    // Carga los clientes al montar el componente
    useEffect(() => {
        fetchClients();
    }, []);

    // Función para añadir un nuevo cliente
    const addClient = async (newClient) => {
        try {
            const response = await axios.post(API_URL, newClient);
            setClients([...clients, response.data]); // Añade el nuevo cliente al estado
            setEditingClient(null); // Limpia el formulario
        } catch (err) {
            console.error('Error adding client:', err);
            setError('Failed to add client.');
        }
    };

    // Función para actualizar un cliente existente
    const updateClient = async (id, updatedClient) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, updatedClient);
            setClients(clients.map(client =>
                client.id === id ? response.data : client
            )); // Actualiza el cliente en el estado
            setEditingClient(null); // Limpia el formulario
        } catch (err) {
            console.error('Error updating client:', err);
            setError('Failed to update client.');
        }
    };

    // Función para eliminar un cliente
    const deleteClient = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setClients(clients.filter(client => client.id !== id)); // Elimina el cliente del estado
        } catch (err) {
            console.error('Error deleting client:', err);
            setError('Failed to delete client.');
        }
    };

    // Iniciar edición de un cliente
    const handleEdit = (client) => {
        setEditingClient(client);
    };

    // Cancelar edición
    const handleCancelEdit = () => {
        setEditingClient(null);
    };

    return (
        <div className="App">
            <h1>Clients Management</h1>

            {error && <p className="error-message">{error}</p>}
            {loading ? (
                <p>Loading clients...</p>
            ) : (
                <>
                    <ClientForm
                        clientToEdit={editingClient}
                        onAddClient={addClient}
                        onUpdateClient={updateClient}
                        onCancelEdit={handleCancelEdit}
                    />

                    <h2>Current Clients</h2>
                    <ClientList
                        clients={clients}
                        onDeleteClient={deleteClient}
                        onEditClient={handleEdit}
                    />
                </>
            )}
        </div>
    );
}

export default App;