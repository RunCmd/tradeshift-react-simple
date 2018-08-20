import React, { Component } from 'react'

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceTriangle1: '0',
      choiceTriangle2: '0',
      choiceTriangle3: '0',
      result: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    //Target value setState
    this.setState({ [e.target.name]: e.target.value });
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

        <form data-ts="Form" style={{ "width": "50%", "margin": "auto" }} onSubmit={this.onSubmit}>
          <fieldset>
            <label className="ts-left"  style={{ "width": "35%", "display":"inline-block" }}>
              <span>Triangle side 1</span>
              <input type="number" name="choiceTriangle1" onChange={this.onChange} value={this.state.choiceTriangle1} />
            </label>
            <label className="ts-left" style={{ "width": "35%", "display": "inline-block" }}>
              <span>Triangle side 2</span>
              <input type="number" name="choiceTriangle2" onChange={this.onChange} value={this.state.choiceTriangle2} />
            </label>
            <label className="ts-left" style={{ "width": "30%", "display": "inline-block" }}>
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
          <button onClick={this.onSubmit} data-ts="Button" className="ts-primary">
            <span>Check type </span>
          </button>
        </form>
      </div>
    )
  }
}

export default Triangle;

