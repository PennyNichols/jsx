import React from 'react';
import UserItem from './UserItem';

const UsersList = (props) => {

  const { users } = props;
  return (
    <div className='row'>
      <div className="col">
        <UserItem image="https://picsum.photos/200/150" name={ users[0]}/>
      </div>
      <div className="col">
        <UserItem image="https://picsum.photos/200/150" name={ users[1] } />
      </div>
      <div className="col">
        <UserItem image="https://picsum.photos/200/150" name={ users[2] } />
      </div>
    </div>
  )
}

export default UsersList