import React, { useState ,useEffect } from 'react';
import Course from "./Course";
import base_url from '../api/bootapi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



const Allcourses=()=>{

useEffect(()=>{

document.title="Courses | Harvard";


},[])


//function to call server
const getAllCoursesFromServer=()=>{





    axios.get(`${base_url}/courses`).then(
        (response)=>{
            //success
           // console.log(response);
            console.log(response.data);
            toast.success("Courses have been Loaded !");
            setCourses(response.data);



        },(error)=>{
            //error occurred
            console.log(error);
            toast.error("something went wrong");


        }
    )
}
useEffect(()=>{

getAllCoursesFromServer();    
    
    },[])
    


const [courses,setCourses]=useState([]);


const updateCourses=(id)=>{
    setCourses(courses.filter((c) => c.id !=id));
};


    return(
<div>
    <br></br>

    <h2 class="text-center" >
        All Harvard Courses
    </h2>
    <br></br>

{

    courses.length>0 ?courses.map((item)=> <Course key={item.id} course={item} update={updateCourses} />


    ):"No courses available"
}

</div>

    )
}


export default Allcourses;





