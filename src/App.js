import {Routes, Route} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups.js";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layoutt/MainNavigation.js";

function App() {

  return (
    <div>
      <MainNavigation />
    <Routes>
      <Route path="/" element={<AllMeetupsPage />}/>
      <Route path="/new-meetup" element={<NewMeetupsPage />}/>
      <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    </div>
  );
}

export default App;


  //domain is localhost: 3000/products in this project but route is supposed to be in the url after the domain
  //e.g my-page.com/