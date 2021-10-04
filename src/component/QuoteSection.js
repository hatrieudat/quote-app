const QuoteSection = (props) => {
  return (
    <section 
      id="quote" 
      className={props.animate ? 'animation' : ''}
    >
      <blockquote id="text">{props.quote}</blockquote>
      <p id="author"> — {props.author}</p>
    </section>
  );
};
export default QuoteSection;
