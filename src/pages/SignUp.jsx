import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import Logo from '../assets/logo.svg'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useAuth } from '../hooks/auth'

const formValidationSchema = zod.object({
  name: zod.string().min(6, 'Insira um nome que contenha 6 caracteres'),
  email: zod.string().email({ message: 'Digite um email válido' }),
  password: zod.string().min({ message: 'Digite um password válido' }),
})

export function SignUp() {
  const { signUp } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formValidationSchema) })

  const onSubmit = handleSubmit(async (data) => {
    const { email, password, name } = data
    signUp({ email, password, name })
  })

  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center pt-40 bg-dark-400 gap-16">
      <img src={Logo} alt="" />
      <form action="" className="flex flex-col gap-8">
        <Input label="Seu nome" placeholder="Exemplo: Maria da Silva" id="name" {...register('name')} />
        <Input label="Email" placeholder="Exemplo: exemplo@exemplo.com.br" id="email" {...register('email')} />
        <Input label="Senha" placeholder="No mínimo 6 caracteres" id="password" {...register('password')}/>
        <Button title="Criar" />
      </form>
      <Link className="text-light-100" to="/">
        Já tenho uma conta
      </Link>
    </main>
  )
}
