import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <div className="fixed top-0 w-full h-80 bg-[url(./assets/images/background-pattern-mobile.svg)] md:bg-[url(./assets/images/background-pattern-desktop.svg)]"></div>
      <main className="flex justify-center items-center min-h-screen px-5 py-10 bg-purple-100 font-work-sans">
        <Faqs />
      </main>
    </>
  );
}

export default App;
