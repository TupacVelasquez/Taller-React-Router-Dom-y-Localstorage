import React, { useState } from 'react';

interface Departamento {
    id: number;
    nombre: string;
}

const Departamentos: React.FC = () => {
    const [departamentos, setDepartamentos] = useState<Departamento[]>([
        { id: 1, nombre: 'DCCO' },
        { id: 2, nombre: 'Ciencias de la Tierra' },
        { id: 3, nombre: 'Administrativas' },
    ]);
    const [nombre, setNombre] = useState<string>('');

    const agregarDepartamento = () => {
        if (nombre.trim()) {
            const nuevoDepartamento: Departamento = {
                id: departamentos.length + 1,
                nombre,
            };
            setDepartamentos([...departamentos, nuevoDepartamento]);
            setNombre('');
        } else {
            alert('Nombre y descripción son requeridos');
        }
    };

    return (
        <div>
            <h1>Gestión de Departamentos</h1>
            <div className='formulario'>
                <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <button onClick={agregarDepartamento}>Guardar</button>
            </div>

            <h2>Lista de Departamentos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {departamentos.map((departamento) => (
                        <tr key={departamento.id}>
                            <td>{departamento.id}</td>
                            <td>{departamento.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Departamentos;
