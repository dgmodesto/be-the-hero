import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

export default function Profile () {
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const [incident, setIncident] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncident(response.data);
    })
  }, [ongId])


  async function hangleDeleteIncident(id) {
    try {
     await api.delete(`incidents/${id}`, {
       headers: {
         Authorization: ongId
       }
     })

     setIncident(incident.filter(incident => incident.id !== id));

    } catch (error) {
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleLogout() {
      localStorage.clear();
      history.push('/');
  }

  return (
    
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem Vinda, { ongName }</span>

        <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
        <button 
        onClick={handleLogout }
        type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>

      <ul>
       {incident.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title }</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description }</p>

            <strong>VALOR:</strong>
            <p>{ Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL'}).format(incident.value) }</p>

            <button 
            onClick={() => hangleDeleteIncident(incident.id)}
            type="button">
              <FiTrash2 size={20} color="a8a8b3" />
            </button>

        </li>
       ))}

      </ul>
    </div>
  )
}