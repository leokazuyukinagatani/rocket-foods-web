import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function SignIn() {
  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center pt-40 bg-dark-400 gap-16">
      <img src={Logo} alt="" />
      <form action="" className='flex flex-col gap-8'>
        <Input label="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input label="Senha" placeholder="No mínimo 6 caracteres" />
        <Button title="Entrar" />
      </form>
      <Link className="text-light-100" to="/register">Criar uma conta</Link>
    </main>
  )
}
