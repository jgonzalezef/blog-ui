import './App.css'
import { GlobalField } from './components/forms/globalField'
import { Paragraph } from './components/globals/Paragraph'

function App() {


  return (
    <>
      <div className='form-content'>

        <Paragraph text="Ùnete a nuestra comunidad estudiantil" />

        <Paragraph 
          text="Bienvenido a nuestra red social estudiantil. Registrate ahora para conectarte con compañeros, acceder a recursos educativos y participar en eventos emocionantes"  
        />

        <GlobalField label="Nombre(s)" placeholder="Nombre(s)" />
        <GlobalField label="Apellido(s)" placeholder="Nombre(s)" />
        <GlobalField label="Correo Electronico" placeholder="Correo Electronico" type="email" />
        <GlobalField label="Contraseña" placeholder="******" type="password" />
        <GlobalField label="Confirmar Contraseña" placeholder="****" type="password" />
        
      </div>
    </>
  )
}

export default App
