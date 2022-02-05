import { useEffect, useState } from "react";
import { Quote } from "./componentes/Quote";

const initialQuote = {
  text: "text",
  author: "autor",
};

function App() {
  const [quote, setQuote] = useState(initialQuote);

  const updateQuote = async ()=>{
    const url = "https://www.breakingbadapi.com/api/quote/random"
    const res = await fetch(url);
    const [newQuote] = await res.json();
    console.log(`--> `,newQuote)

    setQuote({
      text:newQuote.quote,
      author:newQuote.author,
    })
    
  }

  useEffect(() => {
        updateQuote();
    
  }, []);
  
  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button>Get Another</button>
      <Quote quote={quote}/>
    </div>
  );
}

export default App;
