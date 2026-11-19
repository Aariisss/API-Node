
import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/header';
import HeroiLista from './components/heroLista';
import HeroiCard from './components/HeroCard';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function BuscarHerois() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch('http://localhost:3000/heroes');

      if (!response.ok) {
        throw new Error('Erro ao buscar os heróis');
      }

      const data = await response.json();

      console.log("Dados recebidos:", data);
      console.log("Primeiro herói:", data[0]);
      setHeroes(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    BuscarHerois();
  }, []);

  // POST - Criar herói
  async function CriarHeroi(NovoHeroi) {
    try {
      setError("");

      const response = await fetch('http://localhost:3000/heroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(NovoHeroi)
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar herói');
      }

      await BuscarHerois();

    } catch (err) {
      setError(err.message);
    }
  }

  async function AtualizarHeroi(id, AtualizarHeroi) {
    try {
      setError("");

      const response = await fetch(`http://localhost:3000/heroes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(AtualizarHeroi)
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar herói');
      }

      await BuscarHerois();

    } catch (err) {
      setError(err.message);
    }
  }

  async function DeletarHeroi(id) {
    try {
      setError("");

      const response = await fetch(`http://localhost:3000/heroes/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir herói');
      }

      await BuscarHerois();

    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Header />

      <HeroiLista
        heroes={heroes}
        loading={loading}
        error={error}
        CriarHeroi={CriarHeroi}
        AtualizarHeroi={AtualizarHeroi}
        DeletarHeroi={DeletarHeroi}
      />
    </>
  );
}

export default App;
