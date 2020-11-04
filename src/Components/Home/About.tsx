import * as React from 'react';
import { List } from 'semantic-ui-react'
interface Recipe {
    label: String,
    ingredientLines: String[]
}

interface IState {
    data: Recipe[]
}

class About extends React.Component {

    state: IState = {
        data: []
    }

    componentDidMount(){
        document.title = "About"
        fetch(`http://localhost:7105/api/Home/SampleFecthing`)
        .then(result => result.json())
        .then(result => {
            this.setState({data: result})
        })
    }

    render(){
        
        return (
            <div>
                <p>OnLoadComponent</p>
                {
                    this.state.data.map((x, index) => {
                        return <div key={index}>
                            <p>{x.label}</p>
                            <p>Ingridients</p>
                            <List>
                                {
                                    x.ingredientLines.map((z, index) => {
                                    return <List.Item key={index}>{ z }</List.Item>
                                    })
                                }
                            </List>
                            <br/>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default About