import React from 'react';
import { Table} from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Page from './Page';



const user =[{
  "id":1,
  "name":"test1",
  "age" : "11",
  "gender":"male",
  "email" : "test1@gmail.com",
  "phoneNo" : "9415346313"
  },
  {
  "id" : 2,
  "name":"test2",
  "age" : "12",
  "gender":"male",
  "email" : "test2@gmail.com",
  "phoneNo" : "9415346314"
  },
  {
  "id":3,
  "name":"test3",
  "age" : "13",
  "gender":"male",
  "email" : "test3@gmail.com",
  "phoneNo" : "9415346315"
  },
  {
  "id":4,
  "name":"test4",
  "age" : "14",
  "gender":"male",
  "email" : "test4@gmail.com",
  "phoneNo" : "9415346316"
  },
  {
  "id":5,
  "name":"test5",
  "age" : "15",
  "gender":"male",
  "email" : "test5@gmail.com",
  "phoneNo" : "9415346317"
  },
  {
  "id":6,
  "name":"test6",
  "age" : "16",
  "gender":"male",
  "email" : "test6@gmail.com",
  "phoneNo" : "9415346318"
  }
  ];
  

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: user
      
    };
   
   
  }

  render() {
    const { users } = this.state;
    

    return (
      <Page title="Users">
        <Helmet>
          <title> Users List</title>
        </Helmet>

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>PhoneNo</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map(user =>
              (<Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.age}</Table.Cell>
                <Table.Cell>{user.gender}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phoneNo}</Table.Cell>
                
              </Table.Row>),
            )}
          </Table.Body>
        
        </Table>
        
      </Page>
    );
  }
}

export default EmployeeList;
