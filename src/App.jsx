import {useState, useEffect} from "react";

const lhsBtnsChars = [["7","8","9"],["4","5","6"],["1","2","3"],[".","0","="]]
const rhsBtnsChars = ["DEL","/", "*", "+", "-"]

const lhsBtns = lhsBtnsChars.map(
  row => (
    <div className="w-full h-1/4" key={row[0]}>
      <button className="w-1/3 h-full cursor-default hover:bg-custom-black/20">{row[0]}</button>
      <button className="w-1/3 h-full cursor-default hover:bg-custom-black/20">{row[1]}</button>
      <button className={row[2] == "=" ? "bg-custom-orange text-custom-grey w-1/3 h-full cursor-default hover:opacity-75" : "w-1/3 h-full cursor-default hover:bg-custom-black/20"}>{row[2]}</button>
    </div>
  )
)

const rhsBtns = rhsBtnsChars.map(
  row => (
    <button className="block w-full h-1/5 cursor-default hover:bg-custom-black/20" key={rhsBtnsChars.indexOf(row)}>
      {row}
    </button>
  )
)

const evaluate = expression => {
  try {
    return eval(expression)
  }
  catch(error) {
    return false
  }
}

function App() {
  const [input, setInput] = useState("0")
  const [output, setOutput] = useState("")

  useEffect(
    () => {
      const handleClick = event => {
        const btnChar = event.target.innerText;

        try {
          if(btnChar !== "=" && btnChar !== "DEL") {
            setInput(
              input === "Syntax error" || input === "Internal error" || input === "0" ?
                btnChar : input + btnChar
              )
          }
          else if (btnChar === "DEL")
            setInput(
              input === "Syntax error" || input === "Internal error" || input.length === 1 ? 
                "0" : new String(input).slice(0, -1)
            )
          else {
            setOutput(evaluate(input) ? evaluate(input) : "Syntax error")
          }
        }
        catch(error) {
          setOutput("")
          setInput("Internal error")
          console.log(error)
        }
      }

      const buttons = document.querySelectorAll("button");
      const screen = document.querySelector("#screen")

      screen.scrollBy(100, 0)
      setOutput(evaluate(input) ? evaluate(input) : "")

      if(buttons)
        buttons.forEach(
          button => button.addEventListener("click", handleClick)
        )

      return () =>  buttons.forEach(
        button => button.removeEventListener("click", handleClick)
      )
    }, [input]
  )


//bg-custom-grey
  return (
    <>
      <div className="w-full min-h-[140px] h-[25vh] p-7 text-custom-off-white text-right font-ss">
        <p id="screen" className="font-semi-bold text-4xl overflow-y-hidden overflow-x-auto">{input}</p>
        <p className="font-medium text-lg mt-4 overflow-y-hidden overflow-x-auto">{output}</p>
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