import { useState } from "react";
import FormLogin from "../Components/FormLogin";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailErro, setEmailErro] = useState("");
    const [senhaErro, setSenhaErro] = useState("");

    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        let formularioValido = true;

        if (!email) {
            setEmailErro("O campo de email é obrigatório.");
            formularioValido = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailErro("Formato de e-mail inválido."); 
            formularioValido = false;
        } else {
            setEmailErro("");
        }

        if (!senha) {
            setSenhaErro("O campo de senha é obrigatório.");
            formularioValido = false;
        } else if (senha.length < 6) {
            setSenhaErro("A senha deve ter no mínimo 6 caracteres."); 
            formularioValido = false;
        } else {
            setSenhaErro("");
        }

        if (formularioValido) {
            login({
                email: email,
                senha: senha
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
            <div className="bg-white p-8 rounded-lg border-1 border-[#d7d7d7] w-full max-w-[460px]">
                <div className="flex flex-col items-center mb-8">
                    <img src="/learn.svg" alt="Logo Aluno Online" className="w-30 h-30 mb-4"/>
                    <h1 className="font-bold text-4xl text-gray-900">Aluno Online</h1>
                </div>

                <FormLogin 
                    email={email}
                    senha={senha}
                    emailErro={emailErro}
                    senhaErro={senhaErro}
                    aoMudarEmail={(e) => setEmail(e.target.value)}
                    aoMudarSenha={(e) => setSenha(e.target.value)}
                    aoSubmeter={handleSubmit}
                />
            </div>
            
            <footer className="mt-17 text-base font-medium text-[#545454]">
                © 2026. Todos os direitos reservados.
            </footer>
        </div>
    );
}