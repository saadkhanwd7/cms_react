import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import React, { Fragment,useState ,useEffect } from 'react';
import axios from "axios";
import base_url from "../api/bootapi";
import { ToastContainer, toast } from 'react-toastify';



const AddCourse=()=>{

    useEffect(()=>{

        document.title="Add Courses | Harvard ";
        
        },[])
    
const[course,setCourse] = useState({});



//form handler function
const handleForm=(e)=>{
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
    };
    

  //creating a function to add the course details to the server
const postDatatoServer=(course)=>{
    axios.post(`${base_url}/courses`,course).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Course added successfully !")
        },
        (error)=>{

            console.log(error);
            console.log("error occured");
            toast.error("Oops , an error has occurred!")

        }
    )

}

return(

<Fragment>
 <div class="h-100 p-5 text-white bg-dark rounded-3">
<h1 className="text-center my-3 ">Fill Course Detail</h1>
    <Form onSubmit={handleForm} > 
        <FormGroup>
        <label for ="userId">Course Id</label>
        <Input type="text" placeholder="Enter here"
         name="userid" id="userId"   
         onChange={(e)=>{
            setCourse({ ...course,id:e.target.value})

         }}
         />
        
        </FormGroup>


        <FormGroup>
            <label for="title">Course Title </label>
            <Input type="text" placeholder="Enter title here"
             id="title" 
             onChange={(e)=>{
                setCourse({...course,title: e.target.value});
                
             }}
             
             />
 

        </FormGroup>

        <FormGroup>
            <label for="description">Course Description</label>
            <Input style={{ height :150 }}   type="textarea" placeholder="Enter description here"
             id="description" 
             onChange={(e)=>{
                setCourse({...course,description: e.target.value});
                
             }}
             
             />
        </FormGroup>

        <Container className="text-center">
            <Button type="submit"  color="success">Add Course</Button>
            {' '}
            <Button type="reset"  color="warning ml 2">Clear</Button>
        </Container>
    </Form>

    </div>   
</Fragment>

);




};

export default AddCourse;