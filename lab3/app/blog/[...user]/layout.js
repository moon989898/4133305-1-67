export default function BlogLayout({ children }) {
  return (
    <layout>
      <div>Blog Menu</div>
      <div>{children}</div>
    </layout>
  );
}
