import {useState} from "react";

const lhsBtnsChars = [["7","8","9"],["4","5","6"],["1","2","3"],[".","0","="]]
const rhsBtnsChars = ["DEL","/", "*", "+", "-"]

const lhsBtns = lhsBtnsChars.map(
  row => (
    <div className="w-full h-1/4" key={row[0]}>
      <button className="w-1/3 h-full cursor-default">{row[0]}</button>
      <button className="w-1/3 h-full cursor-default">{row[1]}</button>
      <button className={row[2] == "=" ? "bg-custom-orange text-custom-grey w-1/3 h-full cursor-default" : "w-1/3 h-full cursor-default"}>{row[2]}</button>
    </div>
  )
)

const rhsBtns = rhsBtnsChars.map(
  row => (
    <button className="block w-full h-1/5 cursor-default" key={rhsBtnsChars.indexOf(row)}>
      {row}
    </button>
  )
)

function App() {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState("")


//bg-custom-grey
  return (
    <>
      <div className="w-full min-h-[140px] h-[25vh] p-7 text-custom-off-white text-right">
        <p className="font-semi-bold text-4xl">{input}</p>
        <p className="font-medium text-lg mt-4">{output}</p>
      </div>
      <div className="bg-custom-grey text-custom-off-white flex p-px h-[75vh] font-light text-base">
        <div className="w-3/4 min-h-[370px] h-full">
          {lhsBtns}
        </div>
        <div className="w-1/4 min-h-[370px] h-full text-custom-orange">
          {rhsBtns}
        </div>
      </div>
    </>
  )
}

export default App