import { Component, createSignal } from 'solid-js'
import SharableLink from './SharableLink'

const NewGame: Component = () => {
  const [rounds, setRounds] = createSignal(3)
  const [time, setTime] = createSignal(80)
  const [password, setPassword] = createSignal('')

  const handleSubmit = (e: Event) => {
    e.preventDefault()
  }

  return (
    <div class="max-w-sm mx-auto h-screen flex flex-col justify-center">
      <h1 class="text-2xl font-bold">New Game</h1>
      <form class="space-y-4 mt-8 flex flex-col align-stretch">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="rounds">
            Rounds
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rounds"
            name="rounds"
            type="number"
            value={rounds()}
            min={1}
            max={50}
            onChange={(e: any) => setRounds(e.target.value)}
            placeholder="80 seconds"
          />
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="drawTime">
            Draw Time
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="drawTime"
            name="drawTime"
            type="number"
            min={10}
            max={120}
            value={time()}
            onChange={(e: any) => setTime(e.target.value)}
            placeholder="80 seconds"
          />
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="drawTime">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="optional"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <button class="bg-green-300 p-3">Start Game</button>
      </form>
      <SharableLink />
    </div>
  )
}

export default NewGame
