import TestBtn from "./testBtn"
import Plus from "@/lib/plus"

export default function Item({params}){

    const added = Plus(2,7)

    return (
        <div>
            <p>Item : {params.id}</p>
            <p>{added}</p>
            <TestBtn/>
        </div>
    )
}