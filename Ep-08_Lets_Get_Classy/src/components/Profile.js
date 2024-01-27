import { useEffect, useState } from "react"

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // API call
        const timer = setInterval(() => {
            console.log("useEffect OP")
        }, 1000);

        // return is called while unmounting
        return () => {
            clearInterval(timer);
            console.log("UseEffect returned React unmounting")
        };
    });
    console.log("render");

  return (
    <div>Profile</div>
  )
}

export default Profile