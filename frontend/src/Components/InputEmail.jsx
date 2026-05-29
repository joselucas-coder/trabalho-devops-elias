export default function InputEmail({ email, erro, mudaValor }) {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 mb-1">E-mail</label>
            <input 
                className="w-full border border-[#d7d7d7] p-2 rounded-md focus:outline-none focus:border-gray-400" 
                value={email} 
                onChange={mudaValor} 
                type="email" 
                id="email" 
                name="email" 
            />
            {erro && <p className="text-[#A10D0D] text-base font-medium mt-1">{erro}</p>}
        </div>
    );
}
