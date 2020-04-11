import React from 'react';
import Form from './components/form.js';
import Results from './components/results.js';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            results:[]
        }
    }

    handleResults = data => {
        let results = [data]
        this.setState({results});
        console.log(';;;;;;;;', this.state.results);
        
    }
    render() {
        return (
            <>
                <h1>class 28</h1>
                <Form updateResults={this.handleResults} />
                <Results passedData={this.state.results[0]} />
            </>
        )
    }
}

export default App;