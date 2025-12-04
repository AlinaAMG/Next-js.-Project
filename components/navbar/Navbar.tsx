import { Suspense } from 'react';
import Container from '../global/Container';
import CardButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import LoadingContainer from '../global/LoadingContainer';
import Shipping from './Shipping';

const Navbar = () => {
  return (
    <nav className="border-b">
      <Shipping />
      <Container className="flex gap-y-5  sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense fallback={<LoadingContainer />}>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center ">
          <LinksDropdown />

          <DarkMode />
          <CardButton />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
