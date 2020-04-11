import React from 'react';

class Results extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('eeeeeeeeeeeee', this.props.passedData);
        
        return(
            <>
            <ul>

            {this.props.passedData && this.props.passedData.map(city => {
                return(

                    <li key={city.id}>
                    {city.name}

                </li>
                    )
            })}
            </ul>

            </>
        )
    }
}

export default Results