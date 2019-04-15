import React, {Component} from "react";

class Formulaire extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            globalTitle: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange (event) {
        this.setState({
          title: event.target.value
        })
    }

    componentDidMount(){
        console.log('Formulaire rendu')
    }

    componentDidUpdate(){
        console.log('Titre changé')
    }

    changeGlobalTitle = (e) => {
        e.preventDefault();
        this.setState({globalTitle: `Mon formulaire - valeur du state ${this.state.title}`})
    }   

    render(){
        return(
            <form action="" method="get" onSubmit={this.changeGlobalTitle}>
                <h1>{this.state.globalTitle}</h1>
                <div>
                    <input type="text" name="name" id="name" value={this.state.title} onChange={this.onChange} required/>
                </div>
                <div>
                    <input type="submit" value="Post !"/>
                </div>
            </form>
        )
    }
}

export default Formulaire;