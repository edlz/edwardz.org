import "./App.css";
import { ProfilePicture } from "./components/profile-picture/profile-picture";
import { ProfileList } from "./components/profile-list/profile-list";

function App() {
  return (
    <div className="App">
      <ProfilePicture />
      <div>
        <h1>Edward Zhang</h1>
      </div>
      <ProfileList />
    </div>
  );
}

export default App;
