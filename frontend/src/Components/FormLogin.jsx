import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";


export default function FormLogin({ email, senha, emailErro, senhaErro, aoMudarEmail, aoMudarSenha, aoSubmeter }) {
    return (
        <form onSubmit={aoSubmeter} noValidate>
            <InputEmail 
                email={email} 
                erro={emailErro} 
                mudaValor={aoMudarEmail} 
            />
            
            <InputSenha 
                senha={senha} 
                erro={senhaErro} 
                mudaValor={aoMudarSenha} 
            />
            
            <InputSubmit texto="Entrar" />
        </form>
    );
}