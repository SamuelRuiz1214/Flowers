import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost/Tienda_Flores/register.php', form);
      navigate('/Login');
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Nombre" />
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido" />
        <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Usuario" />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes una cuenta? 
          <Link to="/Login">
              Inicia sesión
          </Link>
          </p>
    </div>
  );
}

export default Register;
