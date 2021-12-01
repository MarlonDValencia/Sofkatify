import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PlaylistView from "./components/PlaylistView";
import UserLibrary from "./components/UserLibrary";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";



function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
          {/* <SearchPage/> */}
          {/* <LandingPage/> */}
          {/* <UserLibrary/> */}
          <PlaylistView/>
        </div>
      </div>
    </div>
    {/* <Login/> */}
    </>
  )
}

export default App;
