import { NavLink, useNavigate } from 'solid-app-router'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const IndexPage = () => {
  const navigate = useNavigate()

  const createLobby = async () => {
    try {
      const lobbyRef = collection(db, 'lobbies')
      const newDoc = await addDoc(lobbyRef, {
        name: '',
      })
      navigate(`/create/${newDoc.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NavLink href="/create">
      <button class="bg-green-400 w-32 p-2 text-white font-bold shadow-md rounded" onClick={createLobby}>
        Play
      </button>
    </NavLink>
  )
}

export default IndexPage
