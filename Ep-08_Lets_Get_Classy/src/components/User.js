import { useState } from "react"

const User = (props) => {
  const { count } = useState(0);

  return (
    <div className="user-card">
        <h1>Name: { props.name }</h1>
        <h2>Location: { props.location }</h2>
        <h3>Contact: { props.contact } </h3>
        <h4>Count : { count } </h4>
    </div>
  )
}

export default User