import React from 'react'
import axios from 'axios'


export default class PostList extends React.Component  {
constructor(props) {
    super(props)

    this.state = {
        products:[]
    }
}

componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://vinylaloca.herokuapp.com/api/product')
    .then(response => {
        console.log(response)
        this.setState({products: response.data});
    })
    .catch(error => {
        console.log(error)
    })
}

    render() {
        const {products} = this.state
        return (
        <div>
            <h1>Post List</h1>
            {products.map(product => <div key={product.id}>{product.name}</div>
                
            )}
        </div>
    )
}
}

