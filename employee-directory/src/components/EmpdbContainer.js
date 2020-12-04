import React, { Component } from "react";
import EmpDetails from "./EmpDetails";
import Wrapper from "./Wrapper";
import Title from "./Title";

import Table from "react-bootstrap/Table";
import SearchForm from "./SearchForm";
import Container from "./Container";
// import SearchResults from "./EmpdbContainer";
// import Container from "./Container";

import API from "../utils/API";
class EmpdbContainer extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    search: "",
    employees: [],
    updatedEmployees:[],
   isSortedUp:true,
   icon: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
 </svg>
  };

  componentDidMount() {
    this.searchName(this.state.search);
  }

  searchName(query) {
  
    console.log(query);
    API.getUsers(query).then((res) => {
      console.log(res.data.results);
     res.data.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
      this.setState({
        employees: res.data.results,
        updatedEmployees:res.data.results
      });
    });
  }
   

  
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    var newArray = this.state.employees.filter((d)=>{
      return d.name.first.toLowerCase().includes(value);
    
    });
    console.log(newArray)
    this.setState({
      updatedEmployees:newArray
    })
    // const empLength=value.length;
 
    // const data = this.state.employees.filter((employee) => {
    
    //   return employee.name - value;
    // });
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };
   sortByName =()=>
    {
      

if(this.state.isSortedUp === true){
this.state.updatedEmployees.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
this.setState({
     isSortedUp: false,
     icon: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
   </svg>
    });
    

}
else if (this.state.isSortedUp === false){

   
  this.state.updatedEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
  this.setState({
     isSortedUp: true,
     icon: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
   </svg>
    });
}

//  this.state.updatedEmployees.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
     
      // this.state.updatedEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.size > b.size) ? 1 : -1) : -1 )
      this.setState({
        updatedEmployees:this.state.updatedEmployees
      })
      
    }

  
  // Filter on your handleInputChange activity 17
  // Sort on a click using array sort by property (google)

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    
   
    return (
      <Wrapper>
        {/* <div className="jumbotron jumbotron-fluid"></div> */}
        <Container>
        <Title>Employee Directory</Title>
        </Container>
        <SearchForm
          value={this.state.search}
          //   handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {/* <h3>Search for an employee using any category. Click on column headers to sort the employees by category.</h3> */}
        <Table striped bordered>
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={this.sortByName}>Name {this.state.icon} </th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.updatedEmployees.map((employee) => (
              
              <EmpDetails
              // results={employee}
                image={employee.picture.thumbnail}
                name={`${employee.name.first} ${employee.name.last}`}
                email={employee.email}
                dob={employee.dob.date.split("T")[0]}
                id={employee.id.value}
              />

              // <FriendCard
              //   id={employee.id.value}
              //   key={employee.id.value}
              //   name={`${employee.name.first} ${employee.name.last}`}
              //   image={employee.picture.thumbnail}
              // />
            ))}
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}

export default EmpdbContainer;
