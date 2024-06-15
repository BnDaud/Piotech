import "./App.css";
import Sidenavbar from "./components/sidenav";
import Homepage from "./page/Homepage";
import About from "./page/aboutpage";
import Dashboardpage from "./page/dashboardpage";
import Loginpage from "./page/login";
import Signup from "./page/signuppage";

function App() {
  return (
    <div className="App">
      <Dashboardpage />{" "}
    </div>
  );
}

export default App;
