function HeroiCard({ heroi, atualizarHeroi, deletarHeroi }) {
    return (
        <div className="bg-gray-600 p-4 rounded-lg shadow-md">
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold">
                    {heroi.name}
                </h2>
                <p className="text-gray-600">{heroi.universe}</p>
                <p className="text-gray-600">{heroi.power}</p>
            </div>
            <div className="mt-4">
                <button className="bg-green-500 hover:bg-green-700 cursor-pointer text-white font-bold py-2 px-4 rounded mr-2" onClick={() => atualizarHeroi(heroi)}>
                    Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => deletarHeroi(heroi.id)}>
                    Excluir
                </button>
            </div>
        </div>
    )   
}

export default HeroiCard