import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '../components/HeadMenu';

const links = [
  {
    link: '/home',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/blog',
    label: 'Blog',
  },
];

export default function HomePage() {
  return (
    <>
      <HeaderMenu links={links} />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
