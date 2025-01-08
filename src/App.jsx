import './App.css';
import { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';
import PhoneLogin from './components/PhoneLogin';


function App() {
  // const [exploreData, setExploreData] = useState(explorer);



  return (
    <div>
      {/* <Folder explorer={exploreData}/> */}
      <h1>Login with mobile number</h1>
        <PhoneLogin />
      </div>
  )
}

export default App
