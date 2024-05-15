import './App.css';
import React from "react";

function Total(props){
  return <div>{props.value}</div>
}

function Input(props){
  function inputChangeHandler(element){
    props.setValue(element.target.value);
  }
  return (
    <input value={props.value} onChange={inputChangeHandler}/>
  );
}

function Button(props){
  let buttonStyle = {
    backgroundColor: "lightgrey",
    color: "black"
  }
  if(props.type == "reset input" || props.type == "reset result"){
    buttonStyle = {
      backgroundColor: "orange",
      color: "white"
    }
  }
  

  function buttonClickHandler(element){
    switch(props.type) {
      case "add":
        props.setTotal(Number(props.total) + Number(props.value));
        props.setValue('');
        break;
      case "subtract":
        props.setTotal(Number(props.total) - Number(props.value));
        props.setValue('');
        break;
      case "multiply":
        props.setTotal(Number(props.total) * Number(props.value));
        props.setValue('');
        break;
      case "divide":
        props.setTotal(Number(props.total) / Number(props.value));
        props.setValue('');
        break;
      case "reset input":
        props.setValue('');
        break;
      case "reset result":
        props.setTotal(0);
        break;
      default:
        console.log('Not handled yet');
    }
  }
  return (
    <button onClick={buttonClickHandler} style={buttonStyle}>{props.type}</button>
  );
}

function App() {
  const [value, setValue] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <Total value={total}/>
      <div>
        <Input value={value} setValue={setValue}/>
      </div>
      <div>
        <Button type="add" value={value} setValue={setValue} total={total} setTotal={setTotal} />
        <Button type="subtract" value={value} setValue={setValue} total={total} setTotal={setTotal} />
        <Button type="multiply" value={value} setValue={setValue} total={total} setTotal={setTotal} />
        <Button type="divide" value={value} setValue={setValue} total={total} setTotal={setTotal} />
        <Button type="reset input" value={value} setValue={setValue} total={total} setTotal={setTotal} />
        <Button type="reset result" value={value} setValue={setValue} total={total} setTotal={setTotal} />
      </div>
    </div>
  );
}

export default App;
