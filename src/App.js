import moment from 'moment/moment';
import './App.css';
import { useState } from 'react';
import Timer from './Timer';
import NewYear from './NewYear'

function App() {
  const [time, setTime] = useState(new Date());

  const newYear2 = moment("1/1/2024 00:00:00");
  const currentDate2 = moment()

  function updatetime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  setInterval(updatetime, 1000);

  

  return (
    <div className="App">
      {currentDate2 > newYear2 ? <NewYear />: <Timer />}
    </div>
  );
}

export default App;
