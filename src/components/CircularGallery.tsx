import { Card, Carousel } from "./ui/apple-cards-carousel";
import { portfolios } from "@/lib/exporter";

function CircularGallery() {
  const cards = portfolios.map((card, index) => (
    <Card key={index} card={card} index={index} layout={true} />
  ));
  return (
    <div>
      <Carousel items={cards} />
    </div>
  );
}

export default CircularGallery;
