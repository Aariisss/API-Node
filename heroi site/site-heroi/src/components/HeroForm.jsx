import { useState } from 'react';

function FormHeroi({ criarHeroi, atualizarHeroi, heroiEditando }) {
    const [name, setName] = useState(heroiEditando?.name || '');
    const [power, setPower] = useState(heroiEditando?.power || '');
    const [universe, setUniverse] = useState(heroiEditando?.universe || '');

    async function SubmitForm(event) {
        event.preventDefault();

        const heroi = {
            name: name,
            universe: universe,
            power: power
        };

        if (heroiEditando) {
            await atualizarHeroi(heroiEditando.id, heroi);
        } else {
            await criarHeroi(heroi);
        }

        setName('');
        setUniverse('');
        setPower('');
    }

    return (
        <form className="bg-gray-300 p-4 rounded-lg shadow-md mb-4" onSubmit={SubmitForm}>
            <h2 className="text-xl font-bold mb-4">Cadastro de Herói</h2>

            <div>
                <label className="block text-gray-700 font-bold mb-2">Nome:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Universo:</label>
                <input type="text" value={universe} onChange={(e) => setUniverse(e.target.value)} className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Poder:</label>
                <input type="text" value={power} onChange={(e) => setPower(e.target.value)} className="bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded mt-4">
                Cadastrar
            </button>
        </form>
    );
}

export default FormHeroi;