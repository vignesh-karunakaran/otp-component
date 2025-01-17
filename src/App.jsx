import './App.css';
import PhoneLogin from './components/PhoneLogin';


function App() {
  // const [exploreData, setExploreData] = useState(explorer);



  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
        <h1>Login with mobile number</h1>
        <PhoneLogin />
      </div>
    </div>
  )
}

export default App
