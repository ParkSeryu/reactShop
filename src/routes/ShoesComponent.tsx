import React from "react";

const ShoesComponent = (props: any) => {

    return (
        <>
            <div className="col-md-4">
                <img src={`https://codingapple1.github.io/shop/shoes${props.id + 1}.jpg`} width={"80%"}></img>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </>
    )
}

export default ShoesComponent;

