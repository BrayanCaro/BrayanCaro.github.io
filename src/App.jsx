import Footer from "./components/Footer";
import Welcome from "./components/Sections/Welcome";

function App() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-12 p-6 sm:p-12 grid-rows-[calc(100svh_-_theme(spacing.12))] sm:grid-rows-[calc(100svh_-_theme(spacing.24))] min-h-svh">
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
