export default function UserGreeting(props) {
const welcome_message =   <h2 className="welcome_message" >Welcome {props.username} ternary </h2>
const loggin = <h2 className="loggin">Please Log in for continue ternary</h2>


      return(props.isLogged ? welcome_message : loggin)
}