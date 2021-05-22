import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './../App.css';
import List from './List';
import { IUser } from './types/types';
import UserItem from './UserItem';

const UsersPage: FC = () => {

  const [users, setUsers] = useState<IUser[]>([])

  const history = useHistory()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  }

  return (
    <div className="app">
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id}
          getUserProfile={() => history.push('/users/' + user.id)} />} />
    </div>
  );
}

export default UsersPage