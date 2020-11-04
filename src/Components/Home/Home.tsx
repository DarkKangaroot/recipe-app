import * as React from 'react';
// import  axios from 'axios'
import {Button, Form, List} from 'semantic-ui-react'

interface Recipe {
    label: String,
    ingredientLines: String[]
}

interface Hits {
    recipe: Recipe
}

interface IState {
    search: string,
    data: Hits[],
}

class Home extends React.Component {

    state: IState = {
        search: "",
        data: [],
    }

    componentDidMount(){
        document.title = `Home`
    }

    onSearchRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({ search: value })
        // axios.get(``, { headers:  })
        fetch(`https://api.edamam.com/search?q=${value}&app_id=77f7adb6&app_key=38e6f739eadf6447e154a8daffcbd935`)
        .then(result => result.json())
        .then(result => {
            const data: Hits[] = result.hits;
            this.setState({data: data})
        })
    }

    componentWillUnmount = () => {
        this.setState({ data: [], search: "" })
    }

    render(){
        const recipe = this.state.data.map((x, index) => {
            return <div key={index}>
                <p>{x.recipe.label}</p>
                <p>Ingridients</p>
                <List>
                    {
                        x.recipe.ingredientLines.map((z, index) => {
                        return <List.Item key={index}>{ z }</List.Item>
                        })
                    }
                </List>
                <br/>
            </div>
        });
        return (
            <div>
                <h1>Sample Home</h1>
                {/* <Button color='red' compact>Test</Button>
                <br/>
                <br/> */}
                <Form>
                    <Form.Field>
                        <label>Search</label>
                        <input placeholder='Search' name="search" onChange={this.onSearchRecipe} value={this.state.search}/>
                    </Form.Field>
                </Form>
                {
                    recipe
                }
            </div>
        )
    }
}

export default Home