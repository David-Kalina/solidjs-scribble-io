import { Component } from 'solid-js'

const messages = [
  'Dog',
  'Cat',
  'Mouse',
  'Hamster',
  'Rabbit',
  'Parrot',
  'Lion',
  'Tiger',
  'Bear',
  'Elephant',
  'Monkey',
  'Giraffe',
  'Hippo',
  'Chimp',
  'Elephant',
  'Monkey',
  'Giraffe',
  'Hippo',
  'Chimp',
  'Elephant',
  'Monkey',
  'Giraffe',
  'Hippo',
  'Dog',
  'Cat',
  'Mouse',
  'Hamster',
  'Rabbit',
  'Parrot',
  'Lion',
  'Tiger',
  'Bear',
  'Elephant',
  'Monkey',
  'Giraffe',
  'Hippo',
  'Chimp',
  'Elephant',
  'Monkey',
  'Giraffe',
  'Hippo',
  'Chimp',
  'Elephant',
  'Monkey',
  'Giraffe',
  'Hippo',
]

const ChatWindow: Component = () => {
  return (
    <div>
      {messages.map(m => (
        <p>{m}</p>
      ))}
      <input />
    </div>
  )
}

export default ChatWindow
