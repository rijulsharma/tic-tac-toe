import './App.css';
import Quote from './components/quote';
import Mobile from './components/mobile';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {
  const [quote,setQuote] = useState('sample quote');
  useEffect(() => {
    // Function to fetch a new quote
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        
        const newQuote = response.data.content;
        console.log(newQuote);
        setQuote(newQuote);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    // Fetch a new quote when the component mounts
    fetchQuote();

    // Set up an interval to fetch a new quote every minute
    const intervalId = setInterval(fetchQuote, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      <div className='App-content'>
     <Quote QuoteText={quote}></Quote>
     <Mobile></Mobile>
     </div>
    </div>
  );
}

export default App;
