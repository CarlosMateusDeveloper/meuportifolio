import Profile from "./components/profile/index";
import Button from "./components/button/button";
import fotoPerfil from "./assets/fotoperfil.png";

export default function App(){
  return(
    <div className="app">
      <Profile
      avatar ={fotoPerfil}
      name="Carlos Mateus"
      bio="Fullstack Javascript"
      phone ={"+55 84 99203-3516"}
      email={"carlosmateuscg2019@gmail.com"}
      />
      
      
    </div>
  )
}