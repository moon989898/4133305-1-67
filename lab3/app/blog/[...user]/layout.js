export default function BlogLayout({Children}){
    return(
        <layout>
        <div>Menu</div>
        <div>{Children}</div>
        </layout>
    );
}