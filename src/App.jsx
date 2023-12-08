import {useState} from "react";

function App() {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState("")

  const lhsBtnsChars = [["7","8","9"],["4","5","6"],["1","2","3"],[".","0","="]]
  const lhsBtnsCont = document.querySelector("#lhsBtnsCont");

//bg-custom-grey
  return (
    <>
      <div className="w-full min-h-[140px] h-[25vh] p-7 text-custom-off-white text-right">
        <p className="font-semi-bold text-4xl">{input}</p>
        <p className="font-medium text-lg mt-4">{output}</p>
      </div>
      <div className="bg-custom-grey text-custom-off-white flex p-px h-[75vh] font-light text-base">
        <div className="w-10/12 min-h-[370px] h-full" id="lhsBtnsCont">
          <div className="w-full h-1/4">
            <button className="w-1/3 h-full">7</button>
            <button className="w-1/3 h-full">8</button>
            <button className="w-1/3 h-full">9</button>
          </div>
        </div>
        <div className="w-2/12 min-h-[370px] h-full"></div>
      </div>
    </>
  )
}

export default App