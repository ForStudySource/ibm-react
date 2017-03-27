


class NameComponent extends React.Component{

    render() {
        let ele = (
            <div className="list-group-item">
                <h1>{this.props.name}</h1>
            </div>
        );
        return ele;
    }

}



class NamesComponent extends React.Component{

    render() {
       
        let names = this.props.names.map((name, idx) => <NameComponent key={idx} name={name} /> );
       
        let ele = (
            <div className="list-group">
                {names}
            </div>
        );
        return ele;
    }

}




class App extends React.Component{

    constructor() {
        super();
        this.state = {
            names: [
                "Murgaih",
                "rehina",
                "Tom",
                "sneha"
            ]
        };
    }

    render() {
        let ele = (
            <div className="jumbotron">
                <h1>{this.props.name}</h1>
                <hr />
                
                <NamesComponent names={this.state.names}/>

            </div>
        );
        return ele;
    }

}






ReactDOM.render(<App name="simple app"/>,document.getElementById('root'));