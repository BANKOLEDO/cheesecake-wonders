import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const menuItems = [
  {
    name: "Classic Cheesecake",
    description: "Rich, creamy, and perfectly smooth.",
    price: "$8.99",
    image: "/images/classic-cheesecake.png"
  },
  {
    name: "Strawberry Swirl",
    description: "Velvety cheesecake with a fresh strawberry swirl.",
    price: "$9.99",
    image: "/images/strawberry-swirl.png"
  },
  {
    name: "Chocolate Fudge",
    description: "Decadent chocolate cheesecake with fudge drizzle.",
    price: "$10.50",
    image: "/images/chocolate-fudge.png"
  },
  {
    name: "Blueberry Delight",
    description: "Tangy blueberries on a creamy cheesecake base.",
    price: "$9.50",
    image: "/images/blueberry-delight.png"
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="px-5 py-10 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Our Cheesecake Menu
      </h2>

      <Carousel 
        className="w-[18rem] sm:w-[25rem] lg:w-[50rem] mx-auto"
        opts={{
          slidesToScroll: {
            xs: 1,
            sm: 2,
            lg: 2
          }
        }}
      >
  <CarouselContent>
    {menuItems.map((item, index) => (
      <CarouselItem
        key={index}
        className="sm:basis-full md:basis-full lg:basis-1/2"
      >
        <div className="p-2">
          <Card className="overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-orange-600">
                {item.price}
              </p>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </section>
  )
}
