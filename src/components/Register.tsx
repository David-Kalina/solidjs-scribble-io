import { Component, createSignal } from 'solid-js'

const Register: Component = () => {
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    console.log(username(), password())
  }

  return (
    <div class="max-w-sm mx-auto h-screen flex flex-col justify-center">
      <h1 class="text-2xl font-bold">Register</h1>
      <form
        onSubmit={e => handleSubmit(e)}
        class="space-y-4 flex flex-col align-stretch"
      >
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            onChange={(e: any) => setUsername(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            onChange={(e: any) => setPassword(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button class="bg-green-300 p-3">Submit</button>
      </form>
    </div>
  )
}

export default Register
