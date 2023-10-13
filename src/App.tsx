import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-full bg-primary flex justify-center items-center">
      <div className="card w-[500px] h-auto bg-white rounded-md">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
