import "./App.css";
import Sidenavbar from "./components/sidenav";
import Homepage from "./page/Homepage";
import Loginpage from "./page/login";
import Signup from "./page/signuppage";

function App() {
  return (
    <div className="App">
      <div>
        <Sidenavbar homepage={Homepage} />
      </div>
    </div>
  );
}

export default App;
