import { FC } from "react"
import { IUser } from "./types/types"
import '../App.css'

interface UserProps {
  user: IUser
  getUserProfile: () => void
}

const UserItem: FC<UserProps> = ({ user, getUserProfile }) => {

  return (
    <div key={user.id} className='users'>
      <div className='userID'>
        {user.id}.
      </div>
      <div>
        <div className='userDescribe'>Имя: {user.name},  email: {user.email}</div>
        <div className='userDescribe'>Проживает к городе {user.address.city} на улице {user.address.street}</div>
        <div className='userDescribe'>Работает в компании {user.company.name} со слоганом {user.company.catchPhrase}</div>
        <div style={{ fontWeight: 700, cursor: 'pointer' }}
          onClick={getUserProfile}>Нажми чтобы перейти в профиль
        </div>
      </div>
    </div>
  )
}

export default UserItem