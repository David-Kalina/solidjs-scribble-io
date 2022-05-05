import { Component } from 'solid-js'
import UserCard from './UserCard'

const UsersList: Component = () => {
  return (
    <div>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}

export default UsersList
