import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import Register from "./Components/Register";
import EventInfo from "./Components/EventInfo";
import AddEvent from "./Components/AddEvent";
import Footer from "./Components/Footer";

function App() {

 
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/EventInfo" element={<EventInfo />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;








// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import { Navbar } from "./components/navbar";
// import Wrong from "./components/Wrong";
// import AddEvent from "./pages/AddEvent";
// import Auth  from "./pages/auth";
// import EventInfo from "./pages/EventsInfo";
// import Register from "./pages/Register";


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Wrong" element={<Wrong />} />
//           {/* <Route path="/create-event" element={<CreateRecipe />} />
//           <Route path="/saved-events" element={<SavedRecipes />} /> */}
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/events" element={<AddEvent />} />
//           <Route path="/bookings" element={<EventInfo />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



