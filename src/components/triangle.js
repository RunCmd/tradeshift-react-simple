import React, { Component } from 'react'

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceTriangle1: "",
      choiceTriangle2: "",
      choiceTriangle3: "",
      result: ''
    }
    //Bind
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    //Target value setState
    const val = e.target.value;
    if (val.length <= 2 && /^(\s*|\d+)$/.test(val)) {
      this.setState({
        [e.target.name]: e.target.value 
      });
    }
    this.setState({result:""});
  }

  onSubmit(e) {
    e.preventDefault();
    //Check sides
    if ((this.state.choiceTriangle1 === this.state.choiceTriangle2 
      && this.state.choiceTriangle2 === this.state.choiceTriangle3)){
      this.setState({ result: "Equilateral" })
    } else if ((this.state.choiceTriangle1 === this.state.choiceTriangle2 || 
      this.state.choiceTriangle1 === this.state.choiceTriangle3 || 
      this.state.choiceTriangle2 === this.state.choiceTriangle3 )){
      this.setState({ result: "Isosceles" })
    }else{
      this.setState({ result: "Scalene" })
    }
 
  }
  render() {
    return (
      <div>
          <p>Insert points to draw Triangle:</p>

        <form data-ts="Form" className="form-style" id="myform" onSubmit={this.onSubmit}>
          <fieldset>
            <label className="ts-left label-style">
              <span>Triangle side 1</span>
              
              <input type="number" name="choiceTriangle1" onChange={this.onChange} value={this.state.choiceTriangle1} />
            </label>
            <label className="ts-left label-style">
              <span>Triangle side 2</span>
              <input type="number" name="choiceTriangle2" onChange={this.onChange} value={this.state.choiceTriangle2} />
            </label>
            <label className="ts-left label-style">
              <span>Triangle side 3</span>
              <input type="number" name="choiceTriangle3" onChange={this.onChange} value={this.state.choiceTriangle3} />
            </label>
          </fieldset>
          <hr/>
          <div style={{
            "width": "0", "margin": "auto", "height": "0", "borderBottom": this.state.choiceTriangle1 + "px solid rgb(114, 177, 72)",
            "borderLeft": this.state.choiceTriangle2 + "px solid transparent",
            "borderRight": this.state.choiceTriangle3 + "px solid transparent"
          }}></div>
          <h2 style={{"textAlign":"center"}}>{this.state.result}</h2>
          <hr />
          <div style={{"textAlign":"center"}}>          
          <button onClick={this.onSubmit} data-ts="Button" className="ts-primary">
            <span>Check type </span>
          </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Triangle;

