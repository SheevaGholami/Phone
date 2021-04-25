import React, { Component } from 'react';
import { MDBDataTable,MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBContainer } from 'mdbreact'
import { Button, Form } from 'react-bootstrap'
import './App.css';

class App extends Component {
  state = {
    data: {
      columns: [
        {
          label: 'نام',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'نام خانوادگی',
          field: 'LastName',
          sort: 'asc',
          width: 270
        },
        {
          label: 'شماره تلفن',
          field: 'Phone',
          sort: 'asc',
          width: 200
        },
        {
          label: 'عملیات',
          field: 'Action',
          sort: 'asc',
          width: 200
        },

      ],
      rows: [
        {
          name: 'نفیسه',
          LastName: 'نورانی',
          Phone: '72419104',
          Action:<div><MDBIcon icon="edit" /><MDBIcon icon="trash-alt" className="margin"/></div>,
        },
        {
          name: 'نگین',
          LastName: 'عشقی پور',
          Phone: '72415896',
          Action:<div><MDBIcon icon="edit" /><MDBIcon icon="trash-alt" className="margin"/></div>,
        },
        {
          name: 'علیرضا',
          LastName: 'نجبا',
          Phone: '89313310',
          Action:<div><MDBIcon icon="edit" /><MDBIcon icon="trash-alt" className="margin"/></div>,
        },
      ]
    },
    modal: false,


  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="App">
        <MDBContainer>
          <div className="btnClass">
            <Button className="linear"  onClick={this.toggle}>افزودن</Button>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader
                className="text-center"
                titleClass="w-100 font-weight-bold"
                toggle={this.toggle}
              >
                فرم ثبت
          </MDBModalHeader>
              <MDBModalBody>
                <Form.Label>نام</Form.Label>
                <Form.Control type="Name" placeholder="نام را وارد کنید" />
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control type="LastName" placeholder="نام خانوادگی را وارد کنید" />
                <Form.Label>شماره تلفن</Form.Label>
                <Form.Control type="PhoneNumber" placeholder="شماره تلفن را وارد کنید" />
                <div className="textCenter">
                <Button className="submit" >ثبت</Button>
                <Button className="CBtn" onClick={this.toggle}>بستن</Button>
                </div>
              
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
              </MDBModalFooter>
            </MDBModal>
          </div>
          <MDBDataTable
            striped
            bordered
            hover
            // paging={false}
            paginationLabel={['قبلی', 'بعدی']} 
            data={this.state.data}
            searchLabel= 'جستجو'
             infoLabel={
              ['نمایش', 'از', '-', 'مورد']
             } 
          />
        </MDBContainer>

      </div>

    );
  }
}


export default App;