import { Suspense } from 'react';
import Container from '../global/Container';
import CardButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import LoadingContainer from '../global/LoadingContainer';

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense fallback={<LoadingContainer />}>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center ">
          <CardButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
