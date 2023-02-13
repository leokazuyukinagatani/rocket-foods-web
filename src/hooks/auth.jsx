import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data
      localStorage.setItem('@rocketfood:user', JSON.stringify(user))
      localStorage.setItem('@rocketfood:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
      console.log(user, token)
    } catch (error) {
      if (error.response) {
        return error.response.data.message
      } else {
        return 'Não foi possível entrar.'
      }
    }
  }
  function signOut() {
    localStorage.removeItem('@rocketfood:user')
    localStorage.removeItem('@rocketfood:token')
    setData({})
  }

  // async function updateProfile({ user, avatarFile }) {
  //   try {
  //     if (avatarFile) {
  //       const fileUploadForm = new FormData()
  //       fileUploadForm.append('avatar', avatarFile)

  //       const response = await api.patch('/users/avatar', fileUploadForm)

  //       user.avatar = response.data.avatar
  //     }

  //     await api.put('/users', user)
  //     localStorage.setItem('@rocketfood:user', JSON.stringify(user))

  //     setData({ user, token: data.token })
  //   } catch (error) {
  //     if (error.response) {
  //       return String(error.response.data.message)
  //     } else {
  //       return 'Não foi possível atualizar o perfil.'
  //     }
  //   }
  // }

  useEffect(() => {
    const user = localStorage.getItem('@rocketfood:user')
    const token = localStorage.getItem('@rocketfood:token')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        // updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
