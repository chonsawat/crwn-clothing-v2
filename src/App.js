import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signIn/signIn.component";

const Shop = () => {
  return (
    <div>
      <h1>This is shop page.</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
