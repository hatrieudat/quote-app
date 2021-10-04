import React from "react";
import QuoteSection from "./QuoteSection";
//http://api.quotable.io/random
//https://goquotes-api.herokuapp.com/api/v1/random?count=1

class QuoteAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      animate: true,
    };
    this.randomQuote = this.randomQuote.bind(this);
  }
  randomQuote() {
    this.fetchQuoteJSON().then((json) => {
      json.quotes.map(quote => {
        this.setState({
          quote: quote.text,
          author: quote.author,
          animate: true
        });

        setTimeout(() => {
          this.setState({
            animate: false
          })
        }, 1000);
      })
    })
  }
  componentDidMount() {
    this.randomQuote();
  }
  async fetchQuoteJSON() {
    const response = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
    const quote = response.json();
    return quote;
  }

  render() {
    return (
      <div> 
        <section id="action">
          <a id="new-quote" href="#" onClick={this.randomQuote} className="btn">
            Random new quote
          </a>
        </section>

        <QuoteSection quote={this.state.quote} author={this.state.author} animate={this.state.animate}/>
      </div>
    );
  }
}

export default QuoteAction;
