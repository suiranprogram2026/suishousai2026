import "./Header.css";
import { Anton } from 'next/font/google'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
})

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
      <h1 className={anton.className}>{title}</h1>
    </header>
  );
}
