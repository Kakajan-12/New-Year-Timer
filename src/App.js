import moment from 'moment/moment';
import './App.css';
import { useState } from 'react';
import Timer from './Timer';
import NewYear from './NewYear'

function App() {
  const [time, setTime] = useState(new Date());

  const newYear = moment("1/1/2024 00:00:00");
  const currentDate = moment()

  function updatetime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  setInterval(updatetime, 1000);

  

  return (
    <div className="App">
      {currentDate > newYear ? <NewYear />: <Timer newYear={newYear} />}
    </div>
  );
}

export default App;
