import Footer from "./components/Footer";
import Welcome from "./components/Sections/Welcome";

function App() {
  return (
    <div className="grid grid-cols-12 gap-12 p-12 grid-rows-[calc(100svh_-_theme(spacing.24))] min-h-svh">
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
