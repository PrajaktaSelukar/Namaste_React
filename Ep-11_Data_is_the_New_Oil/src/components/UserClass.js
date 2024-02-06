import React from "react";

class UserClass extends React.Component {
    // props are received in Constructor
    constructor(props) {
        super(props);

        this.state = {
            // count: 0
            userInfo: {
                name: 'Dummy',
                bio: 'school',
                avatar_url: "https://avatars.githubusercontent.com/u/34501121?v=4"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/PrajaktaSelukar");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
    }

    render() {
        // const { name, location, contact } = this.props;
        const { count, name, bio, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={ avatar_url } />
                <h1>Name: { name }</h1>
                <h2>Bio: { bio }</h2>
                {/* <h3>Contact: { contact } </h3> */}
                {/* <h4>Count : { count } </h4>
                <button onClick={() => {
                    // Never update State variables directly like (this.state.count++)
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Count Increase</button> */}
            </div>
        )
    }
}

export default UserClass;

/**
 * ------ Mounting
 * Constructor (Dummy)
 * Render (Dummy)
 *      <HTML Dummy >
 * Component Did Mount
 *      <API call>
 *      <this.state -> State variable is updated
 * 
 * ------ Update
 * 
 *      Render(API state)
 *      <HTML new API data >
 *      Component Did Update  // runs after every render
 * 
 * ------- Unmounting
 *      Component Will Unmount
 */