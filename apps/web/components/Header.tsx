{/* 旧 header.html をReact化*/}
import Nav from './Nav';

type HeaderProps = {
    title?: string;
};

export default function Header({ title = 'WebSitePractice' }: HeaderProps) {
    return (
    <header>
        <h1>{title}</h1>
        <Nav />
    </header>
    );
}
