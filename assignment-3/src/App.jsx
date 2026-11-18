import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar cartCount={0} onOpenCart={() => console.log("cart clicked")} />
    </>
  );
}

export default App;
