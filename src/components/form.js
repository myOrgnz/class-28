import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'GET'
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        let url = e.target.url.value;
        this.setState({ url });

        let response = await (await fetch(url)).json()
        // let output = await response.json()
        this.props.updateResults(response);
        // console.log('dddddddddddddd', this.props);

    }

    // handleClick = e => {
    //     let method = e.target.method;
    //     this.setState({method});
    // }



    render() {
        // console.log('wwwwwwwwwww',this.state.method);
        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input name='url' />
                    <button value='GET' type='button' onClick={this.handleClick}>GET</button>
                    <button value='POST' type='button' onClick={this.handleClick}>POST</button>
                    <button value='PUT' type='button' onClick={this.handleClick}>PUT</button>
                    <button value='DELETE' type='button' onClick={this.handleClick}>DELETE</button>
                    <button type='submit'>GOO</button>
                </form>
            </>
        )
    }
}

export default Form;