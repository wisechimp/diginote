import { login, signup } from "@/actions"

const LoginPage = () => {
  return (
    <form>
      <label htmlFor='email'>Email:</label>
      <input id='email' name='email' type='email' required />
      <label htmlFor='password'>Password:</label>
      <input id='password' name='password' type='password' required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign Up</button>
    </form>
  )
}

export default LoginPage
