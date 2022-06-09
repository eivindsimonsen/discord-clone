import Nav from "./Nav";

function Header({ content }) {
  return (
    <header>
      <Nav />
      <div className="header-content">{content}</div>
    </header>
  );
}

export default Header;
