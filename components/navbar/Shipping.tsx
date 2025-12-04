import { MdOutlineLocalShipping } from 'react-icons/md';

const Shipping = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-6xl mx-auto xl:max-w-7xl  items-center w-full justify-between  px-8 py-2 border-b border-b-blue-300 cursor-pointer hover:text-primary text-sm">
      <div className="flex items-center gap-x-3 ">
        <p>
          <span className="font-semibold ">Gratis</span> verzending vanaf 25,-
        </p>
        <MdOutlineLocalShipping size="20" />
      </div>
      <p>
        <span className="font-semibold">Gratis</span> retourneren binnen 30
        dagen
      </p>
    </section>
  );
};

export default Shipping;
