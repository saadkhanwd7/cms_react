import React from "react";
import { Card, CardBody } from "reactstrap";


function Header({name , title}){


    return(

        <div>

            <Card className=" bg-warning">
                <CardBody>
                    <h1 className="text-center my-5 ">Harvard Course Application</h1>
                </CardBody>
            </Card>

        </div>
    )
}

export default Header;