import "./Header.css";

type HeaderProps = {
  title: string;
  backgroundImage: string;
};

export default function Header({ title, backgroundImage }: HeaderProps) {
  return (
    <header
      className="custom-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
    </header>
  );
}
