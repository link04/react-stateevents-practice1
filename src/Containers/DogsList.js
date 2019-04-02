import React, { Component } from "react";
import DogCard from "../Components/DogCard";


console.log('yes')

class DogList extends Component {

  state = {
    dogs:[]
  }

  componentDidMount(){
    fetch('http://localhost:3005/dogs')
    .then(response => response.json())
    .then(parsedResponse => {
      this.setState({dogs: parsedResponse});
    })
  }

  render() {
    const dogList = this.state.dogs.map(dog => {
      return <DogCard key={dog.id} dogName={dog.name} img={dog.img} />
    })

    return (
      <div className="dogContainer">{dogList}</div>
    )

  }
}

export default DogList;
