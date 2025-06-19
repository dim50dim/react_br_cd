export default function UserGreeting(props) {
      return(props.isLogged ?
                            <h2>Welcome {props.username} ternary </h2> :
                            <h2>Please Log in for continue ternary</h2>)
}