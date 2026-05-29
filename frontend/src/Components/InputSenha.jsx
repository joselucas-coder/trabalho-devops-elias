export default function InputSenha({ senha, erro, mudaValor }) {
    return (
        <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-800 mb-1">Senha</label>
            <input 
                className="w-full border border-[#d7d7d7] p-2 rounded-md focus:outline-none focus:border-gray-400" 
                value={senha} 
                onChange={mudaValor} 
                type="password" 
                id="senha" 
                name="senha" 
            />
            {erro && <p className="text-[#A10D0D] text-base font-medium mt-1">{erro}</p>}
        </div>
    );
}