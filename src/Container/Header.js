import React from 'react'

const Header = () => {

const user = ["Login or Sign up", "Login", "Sign Up" , "Cart", "Favorites"]
const [filter, setFilter] = React.useState("Login or Sign up")
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand'>SHOPLANE

        </a>

        <span className="h4 m-2" > </span>
                <select name="filter" className="p-1" onChange={(e) => console.log(e.target.value)}>
                    {user.map((item,index) => (<option value={item} key={index}> {item}</option>))}
                    <span className="badge bg-secondary" > </span>
                </select>
                
      </nav>
     
    </div>
  )
}

export default Header
