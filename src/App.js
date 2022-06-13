import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const[luciferQuote, setLuciferQuote] = useState([]);
  const[error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        const response = await fetch(
          'https://lucifer-quotes.vercel.app/api/quotes/5'
        );
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setLuciferQuote(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError('Could not fetch the data');
      }
  };
  fetchData();

  },[]);




  return ( 
    <div className='App'>
      <h1>Lucifer Quotes</h1>
            {error && <p>{error}</p>}
      {luciferQuote.map((quotes) => (
        <div className='quotes' key= {quotes.quote}>
        <h3> {quotes.author}</h3>
        <p> "{quotes.quote}"</p>
        </div>
      ))}
    </div>
  )
      };

export default App;