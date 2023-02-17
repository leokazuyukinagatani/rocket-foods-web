import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useAuth } from '../hooks/auth'

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSignIn() {
    const error = await signIn({ email, password })
    if (error) {
      return toast.error(String(error))
    }
  }
  function handleSignUp() {
    navigate('/register')
  }
  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center pt-40 bg-dark-400 gap-16">
      <img src={Logo} alt="" />
      <form action="" className="flex flex-col gap-8">
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button title="Entrar" />
      </form>
      <Link className="text-light-100" to="/register">
        Criar uma conta
      </Link>
    </main>
  )
}
