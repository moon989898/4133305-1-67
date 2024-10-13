export function GET(request, { params }) {
  return Response.json({
    name: "Drusawin",
    major: "IT",
    lv: "3",
    id: params.id
  });
}
