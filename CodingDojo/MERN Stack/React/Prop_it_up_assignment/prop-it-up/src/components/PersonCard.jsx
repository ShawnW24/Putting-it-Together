import React,{Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            personAge : props.age
        }

        this.handleAge = this.handleAge.bind(this);
    }

    handleAge = () => {this.setState({personAge: this.state.personAge +1})}

    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h2>Name: {lastName}, {firstName}</h2>
                <p>Age:{this.state.personAge} </p>
                <p>Hair Color: {hairColor} </p>
                <button onClick={this.handleAge}>Birthday Age for {firstName} {lastName}</button>
            </div>
        ); 
    }
}
export default PersonCard