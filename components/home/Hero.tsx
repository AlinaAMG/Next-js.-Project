import Link from "next/link";
import { Button } from "../ui/button"
import HeroCarousel from "./HeroCarousel"



const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Alles wat je huis nodig heeft, op één plek.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Maak van je huis een plek waar je graag thuiskomt. Ontdek onze
          zorgvuldig gekozen collectie met stijlvolle, betaalbare en sfeervolle
          items die elke ruimte net dat beetje extra geven. Van zachte textures
          tot tijdloze designs — bij ons vind je alles om jouw thuis
          persoonlijk, warm en uniek te maken.
        </p>
        <Button asChild size="xl" className="mt-10">
          <Link href="/products" className="text-white">
            Our products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
