const Button = (props) => {
  //  Write your code here.
  const { name } = props;
  const button = "button";
  return <button className={name + " " + button}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button name="Like" />
      <Button name="Comment" />
      <Button name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
