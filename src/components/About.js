import React, { useEffect } from "react";


const About=()=>{

useEffect(()=>{

    document.title="About | Harvard"

},[])

return(


<div>

<div class="col-md-12">
  <div class="h-100 p-5 text-white bg-dark rounded-3">
    <h2>About Harvard</h2>
<p>Those who venture here—to learn, research, teach, work, and grow—join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and a better world.</p>
   
   <br></br><br></br> <h3>25,266</h3>
undergraduate and graduate students

<h3 >19,639</h3>
faculty and staff

<h3>400k+</h3>
alumni worldwide


</div>
</div>

</div>

    
)

}


export default About;