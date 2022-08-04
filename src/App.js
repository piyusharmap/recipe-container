import React, {useState} from "react";
import Counter from "./counter";
import CounterHooks from "./counterHooks";

export const ThemeContext = React.createContext()

function App() {

  const [theme, setTheme] = useState('red')

  function changeTheme(){
    setTheme(
      prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      }
    )
  }

  return(
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    Counter
    <Counter initialCount={0}/>
    CounterHooks
    <CounterHooks initialCount = {0}/>
    <button onClick={changeTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
