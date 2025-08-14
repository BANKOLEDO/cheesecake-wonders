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
    name: "Lemon Cheesecake",
    description: "A refreshing lemon cheesecake with a buttery crust, perfect for citrus lovers.",
    price: "$8.99",
    image: "/images/lemon-cheesecake.png"
  },
  {
    name: "Biscoffs Cheesecake",
    description: "A delightful blend of Biscoff cookies and creamy cheesecake.",
    price: "$9.99",
    image: "/images/biscoff-cheesecake.png"
  },
  {
    name: "Chocolate Cheesecake",
    description: "Rich and creamy chocolate cheesecake with a chocolate cookie crust.",
    price: "$10.50",
    image: "/images/chocolate-cheesecake.png"
  },
  {
    name: "Blueberry Cheesecake",
    description: "A classic blueberry cheesecake topped with fresh blueberries and a hint of lemon.",
    price: "$9.50",
    image: "/images/blueberry-cheesecake.png"
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 px-5 py-10 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Our Cheesecake Menu
      </h2>

      <Carousel 
        className="w-[15rem] xs:w-[15rem] xsm:w-[17.5rem] xmd:w-[19rem] sm:w-[25rem] lg:w-[50rem] mx-auto"
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
              className="w-full h-48 object-contain"
            />
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-green-600">
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
