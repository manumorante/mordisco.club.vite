import coverImg from "./img/mordisco-club-people.jpg"

function App() {
  return (
    <div className="App w-screen h-screen">
      <div className="container max-w-3xl mx-auto py-10 px-8 relative z-20">
        <div className="Logo flex gap-2 items-center text-xl sm:text-3xl text-white tracking-tight">
          <span>Mordisco</span>
          <span className="rotate-45 w-9 h-9 bg-white ">
            <div className="-rotate-45 flex justify-center items-center w-full h-full text-gray-600 text-center text-xs">
              Club
            </div>
          </span>
        </div>
      </div>

      <div className="Overlay absolute inset-0 z-10 bg-black opacity-50"></div>

      <div className="Cover absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={coverImg}
          alt="People"
        />
      </div>
    </div>
  )
}

export default App
