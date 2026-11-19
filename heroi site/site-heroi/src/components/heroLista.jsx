import HeroiCard from './HeroCard';
import HeroiForm from './HeroForm';
import { useState } from 'react';

function HeroiLista({ heroes, CriarHeroi, AtualizarHeroi, DeletarHeroi }) {
    const [mostrarForm, setMostrarForm] = useState(false);
    const [heroiEditando, setHeroiEditando] = useState(null);
    
    return (
        <div className="w-full max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Heróis Cadastrados</h2>
            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded mb-4" onClick={() => {setHeroiEditando(null); setMostrarForm(!mostrarForm)}}>
                Criar Herói
            </button>
            {mostrarForm && ( <HeroiForm criarHeroi={CriarHeroi} atualizarHeroi={AtualizarHeroi} heroiEditando={heroiEditando} />)}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {heroes.map((heroi) => (
                    <div key={heroi.id}>

                        <HeroiCard
                            heroi={heroi}
                            atualizarHeroi={(heroi) => {
                                setHeroiEditando(heroi);
                                setMostrarForm(true);   
                            }}
                            deletarHeroi={DeletarHeroi}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroiLista