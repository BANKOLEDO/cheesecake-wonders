import * as React from "react"
import { Button } from "../ui/button"
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
    image: "/images/lemon-cheesecake.webp"
  },
  {
    name: "Biscoffs Cheesecake",
    description: "A delightful blend of Biscoff cookies and creamy cheesecake.",
    price: "$9.99",
    image: "/images/biscoff-cheesecake.webp"
  },
  {
    name: "Chocolate Cheesecake",
    description: "Rich and creamy chocolate cheesecake with a chocolate cookie crust.",
    price: "$10.50",
    image: "/images/chocolate-cheesecake.webp"
  },
  {
    name: "Blueberry Cheesecake",
    description: "A classic blueberry cheesecake topped with fresh blueberries and a hint of lemon.",
    price: "$9.50",
    image: "/images/blueberry-cheesecake.webp"
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="px-5 space-y-8 md:px-20 flex flex-col items-center">
        <h1 className="text-xl xs:text-3xl text-center xmd:text-4xl md:text-4xl 2xl:text-5xl font-bold text-primary mx-4 md:mx-0 hover:text-orange-900">Our Cheesecake Menu</h1>
      <Carousel 
        className="w-[15rem] xs:w-[15rem] xsm:w-[17.5rem] xmd:w-[20rem] sm:w-[25rem]  lg:w-[45rem] mx-auto "
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
          <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain"
            />
            <CardHeader>
              <CardTitle className="text-amber-950 font-extrabold">{item.name}</CardTitle>
              <CardDescription className="text-amber-900 font-semibold ">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between gap-2">
              <p className="text-lg font-semibold text-green-600">
                {item.price}
              </p>
              <Button size="sm" variant="outline">
                    Order Now
              </Button>
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