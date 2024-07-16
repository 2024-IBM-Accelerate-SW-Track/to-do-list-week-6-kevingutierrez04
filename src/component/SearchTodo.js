import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";

class SearchTodo extends Component {
  
  state = {
    tmpdata: [],
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
      date: Date().toLocaleString('en-US'),
    });
  };
  

  handleSubmit = (e) => {
    //Begin Here
    const [todos, setTodos] = useState([]);
        
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await Axios.get('http://localhost:8080/get/items'); 
                setTodos(JSON.stringify(res.data));
                console.log(JSON.stringify(res.data));
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return <div>{todos}</div>
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search-item-input"
            label="Search for ToDo Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.value}
          /> 
          <Button
            id="search-item-button"
            name='submit'
            style={{ marginLeft: "10px",marginTop:10 }}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
        <div>{this.state.tmpdata}</div>
      </div>
    );
  }
}

export default SearchTodo;
