import {Jumbotron} from "reactstrap";
import React, { useEffect } from 'react'


const Home=()=>{


  useEffect(()=>{

    document.title="Home | Harvard ";
    
    },[])



return(

<div>

      <div class="col-md-12">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Join Us Towards The Future !</h2><br></br>
            <p>Harvard University radiates a beacon of academic excellence, melding tradition with innovation. It stands as a testament to scholarly prowess, cultivating an environment where curious minds thrive and diverse perspectives converge. Seamlessly blending rich heritage with groundbreaking research, the homepage welcomes visitors with a tapestry of achievements, illuminating its commitment to the pursuit of knowledge, discovery, and societal impact. A gateway to an intellectual haven, it beckons with a mosaic of academic programs, a glimpse into vibrant student life, and a canvas showcasing the transformative power of education. Harvard's homepage encapsulates a legacy of academic rigor, global influence, and a nurturing community that propels individuals to transcend boundaries and shape the future.</p>
        </div>
      </div>

</div>
)

}

export default Home;