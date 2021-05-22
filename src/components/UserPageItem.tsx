import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router"
import { IUser } from "./types/types"

interface useParamsProps {
  id: string
}

const UserPageItem: FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<useParamsProps>()

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    }

    fetchUser()
  }, [params.id])

  return (
    <div key={user?.id} className='users' style={{ textAlign: 'center' }}>
      <div>
        <h1 className='userDescribe'>Имя: {user?.name}</h1>
        <div className='userDescribe'>Проживает к городе {user?.address.city} на улице {user?.address.street}</div>
        <div className='userDescribe'>Работает в компании {user?.company.name} со слоганом {user?.company.catchPhrase}</div>
      </div>
    </div>
  )
}

export default UserPageItem