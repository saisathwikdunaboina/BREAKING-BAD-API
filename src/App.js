import './App.css';
import Header from './Header';
import { Box } from '@material-ui/core';
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import Characters from './Characters.jsx';

function App() {
  const [text, setText] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
   
    const getData = async () => {
     const result = await fetchData(text)
     setData(result.data)
     console.log(result);

    }
    getData(); 
  }, [text]);

    const getText = (text) => {
      setText(text);
      console.log(text);
    }
  return (
    <div className="App">
    <Box>
    <Header getText={getText}/>
    <Characters data={data} />
    </Box>
    </div>
  );
}

export default App;
