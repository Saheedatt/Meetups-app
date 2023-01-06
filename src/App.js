import {Routes, Route} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups.Js";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
  //domain is localhost: 3000/products in this project but route is supposed to be in the url after the domain
  //e.g my-page.com/
  return (
    <div>
    <Routes>
      <Route path="/" element={<AllMeetupsPage />}/>
      <Route path="/new-meetup" element={<NewMeetupsPage />}/>
      <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    </div>
  );
}

export default App;
