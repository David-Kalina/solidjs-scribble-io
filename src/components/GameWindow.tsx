import { Component } from 'solid-js'
import Canvas from './Canvas'
import ChatWindow from './ChatWindow'
import UsersList from './UsersList'

const GameWindow: Component = () => {
  return (
    <div class="h-screen mx-auto border border-green-500">
      <div class="h-12 flex items-center justify-between px-4">
        <div>Round 2 of 4</div>
        <div class="space-x-6 flex">
          <div class="border border-t-none border-x-none border-b-black">
            <p>0</p>
          </div>
          <div class="border border-t-none border-x-none border-b-black">
            <p>0</p>
          </div>
          <div class="border border-t-none border-x-none border-b-black">
            <p>0</p>
          </div>
          <div class="border border-t-none border-x-none border-b-black">
            <p>0</p>
          </div>
        </div>
        <div></div>
      </div>
      <div class="flex">
        <div class="border border-green-500 grow-[6]">
          <UsersList />
        </div>
        <div class="border border-green-500 grow-[8]">
          <Canvas />
        </div>
        <div class="border border-green-500 grow-[1]">
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}

export default GameWindow
