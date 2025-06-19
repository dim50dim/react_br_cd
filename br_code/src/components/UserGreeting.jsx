export default function UserGreeting(props) {
      if(props.isLogged){
        return <h2>Welcome {props.username} </h2>
      }
}