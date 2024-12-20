import "./App.css";
import AuthButtons from "./components/AuthButtons";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className="bg-cyan-50 px-12 py-6 md:col-span-4">
        <AuthButtons />
        <Header />
        <Movies />
        <div className="footer flex">
          <button className="btn-auth m-auto transition duration-500 ease-out hover:scale-125">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
