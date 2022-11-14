import './App.css'
import { LoginButton } from './components/LoginButton'
import { LogOutButton } from './components/LogOutButton'
import { Profile } from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0()
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <LoginButton />
      <LogOutButton />
      <Profile />
    </div>
  )
}

export default App
