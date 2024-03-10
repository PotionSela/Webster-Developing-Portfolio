import "../styles/header.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header d-flex flex-row">
      <h1 className="headerText">Gisela Mata</h1>
      <Navigation />
    </header>
  );
}