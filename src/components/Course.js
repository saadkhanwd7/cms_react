import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card, CardBody, CardTitle , CardSubtitle, CardText, CardFooter,Button,Container
}from "reactstrap"
import base_url from '../api/bootapi';
import { useNavigate } from 'react-router-dom';




 const Course=({course ,update})=>{

//function for deleting a course
const deleteCourse=(id)=>{

    axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
            toast.success ( "Course Deleted Successfully !")
            update(id);
        },
        (error)=>{
            toast.error("Couldn't be deleted ! Server Error")

        }

    )

}

//function for course updation

const navigate = useNavigate();

const goupdate=()=>{
navigate('/add-course');
};



    return(

         
<Card className="text-center">
<div class="h-100 p-5 text-white bg-dark rounded-3">
 <CardBody >

    <h3><CardTitle  >{course.title}</CardTitle></h3>
        <CardText>{course.description}</CardText>
            <Container className="text-center">
                 <Button color="danger" onClick={()=>{
            
                     deleteCourse(course.id);

                 }}>Delete</Button>
         {' '}
                 <Button onClick={goupdate} color="warning">Update</Button>
            </Container>

 </CardBody>
</div>

 </Card>

    )


 }
 export default Course;