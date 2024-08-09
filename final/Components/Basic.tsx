"use client";

import { verify } from "crypto";
import { init } from "next/dist/compiled/webpack/webpack";
import { FC, use } from "react";

const staticNum:number = 5;

type Gender = "Malle" | "Famale" |"LGBTQ";

interface Props{
    initVal:number;
    gender:Gender;
}

interface Person{
    firstName:String;
    lastName:string;
    age?:number;
    single:boolean;
}

const person:Person ={
    firstName:"GTR",
    lastName:"UUU",
    age:21,
    single:false,
}

const Basic:FC <Props> = ({initVal,gender}) => {
    const verifyGender = (gd:Gender) =>{
        if(gd === "Famale") 
            console.log(gd);
           
        else
        console.log("Not Famale");
    };
    

    return(
        <>
            <p>Basic</p>
            <div>{staticNum}</div>
            <div>{person.firstName}</div>
            <div>{initVal}</div>
            <div>{gender}</div>

            <button>Increase</button>
            <button onClick={() => verifyGender(gender)}>Gender</button>
        </>
    )
};

Basic.defaultProps={
    initVal : 0,
    gender : "Famale"
}

export default Basic;