import React from "react";

class DogCard extends React.Component {


  state = {
    barked:0
  }

  handleClick = () => {
    if(this.state.barked === 0){
      this.setState({
        barked: this.state.barked + 1
      })
    } else {
      this.setState({
        barked: 0
      })
    }

  }

  render() {
    return (
      <div>
        <h2>{this.props.dogName}</h2>
        <img alt={this.props.dogName} src={this.props.img} />
        <button onClick={this.handleClick}>Bark</button>
        <div className="bark" style={{display : this.state.barked < 1 ? 'none' : 'block' }} ><h1>Ruff</h1></div>
      </div>
    );
  }
}

export default DogCard;
