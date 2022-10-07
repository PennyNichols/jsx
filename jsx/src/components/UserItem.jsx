import {useState} from 'react';
const UserItem = ({ name, image }) => {
  
  const [age, setAge] = useState(26)
    
  return (
    <div className="card">
      <img src={ image} className="card-img-top" alt="user profile"/>
        <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <p> User age : {age }</p>
            <button onClick={ () => setAge(30) }  className="btn btn-primary"> Change age </button>
        </div>
    </div>
  )
}

export default UserItem