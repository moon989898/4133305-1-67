export function Get(resquest, { params}) {
    return Response.json({
        name: "Niti",
        major: "IT",
        lv: "3",
        id: params.id
    })
}