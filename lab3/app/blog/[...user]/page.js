async function getblong(){
    const host = "http://127.0.0.1:3000"
    const data = await fetch(host+"/api/blog/1")

    if(!resizeBy.ok) throw new Error("Can't fecth")

    return resizeBy.json()
}

export default async function Blog({ params }){

    const data = await getblog()

    return (
    <div>
        Blog
        {params.user}
        {data.name}{data.major}{data.id}
    </div>
    );
}