import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal.client";
import { Button } from "../ui/button";
// Static blog data with fixed release dates
const blogs = [
  {
    title: "Cheesecake Recipes",
    description: "Discover our collection of delicious cheesecake recipes that will satisfy your sweet tooth.",
    img: "/images/blog-img1.svg",
    alt: "Cheesecake Recipe",
    content: "Explore the art of cheesecake making with our step-by-step guides and tips for perfecting your cheesecake creations. From classic New York-style to fruity variations, we have recipes for every cheesecake lover. Satisfy your sweet tooth with our delicious cheesecake recipes.",
    date: "Feb 12, 2023",
  },
  {
    title: "Cheesecake History",
    description: "Uncover the fascinating history of cheesecake, from its ancient origins to modern variations enjoyed worldwide.",
    img: "/images/blog-img2.svg",
    alt: "Cheesecake History",
    content: "Journey through time and discover how cheesecake has evolved over the centuries, becoming a beloved dessert in many cultures. Did you know that cheesecake dates back to ancient Greece? Learn about its rich history and how it has transformed into the diverse range of flavors and styles we enjoy today.",
    date: "Jul 8, 2024",
  },
  {
    title: "Cheesecake Tips & Tricks",
    description: "Master the cheesecake with professional tips for baking, flavoring, and presentation.",
    img: "/images/blog-img3.jpg",
    alt: "Cheesecake Tips",
    content: "Learn the secrets to making creamy, perfectly baked cheesecakes every time with insider baking techniques. Start impressing your friends and family with your cheesecake skills. From crust perfection to flavor combinations, our tips will elevate your cheesecake game.",
    date: "Nov 21, 2025",
  },
  {
    title: "Mini Cheesecakes",
    description: "Perfect bite-sized cheesecakes for parties and gatherings.",
    img: "/images/blog-img2.svg",
    alt: "Mini Cheesecake",
    content: "Mini cheesecakes that are easy to serve and fun to enjoy. Whether you're hosting a party or just want a small treat, these mini cheesecakes are the perfect solution. With various flavors and toppings, they are sure to be a hit at any gathering.",
    date: "Mar 15, 2023",
  },
  {
    title: "Vegan Cheesecakes",
    description: "Delicious plant-based alternatives that everyone will love.",
    img: "/images/blog-img3.jpg",
    alt: "Vegan Cheesecake",
    content: "Creamy vegan cheesecakes made with wholesome ingredients. Healthy and indulgent, these vegan cheesecakes are perfect for those who want to enjoy a guilt-free dessert. Made with cashews, coconut cream, and natural sweeteners, they are both delicious and nutritious.",
    date: "Sep 9, 2024",
  },
  {
    title: "Chocolate Lovers",
    description: "Indulge in decadent chocolate cheesecake creations. ",
    img: "/images/blog-img1.svg",
    alt: "Chocolate Cheesecake",
    content: "Rich, creamy chocolate cheesecakes for the ultimate dessert experience. Every bite is a chocolate lover's dream come true. From classic chocolate to unique flavor combinations, our chocolate cheesecakes are sure to satisfy your cravings.",
    date: "Dec 1, 2025",
  }
]
export default function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 px-6 sm:px-6 md:px-10 lg:px-20 py-10">
      <h2 className="text-xl xs:text-3xl xmd:text-4xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-center mb-8 text-primary">
       Our Latest Blog Posts
      </h2>

      <div className="
        grid gap-6
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3
        items-stretch 
        max-w-7xl 
        mx-auto
      ">
        {blogs.map((blog, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <Card className="
              flex flex-col 
              h-full
              min-h-[600px]
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1
            ">
              <CardHeader className="flex-none">
                <CardTitle className="text-xl font-semibold line-clamp-1 text-primary">{blog.title}</CardTitle>
                <CardDescription className="text-md  line-clamp-2 text-amber-900 font-semibold">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-evenly space-y-4">
                <div className="space-y-4">
                  <p className="text-md text-green-800 font-bold">{blog.date}</p>
                  <div className="overflow-hidden rounded-lg h-[200px]">
                    <img
                      src={blog.img}
                      alt={blog.alt}
                      className="
                        w-full h-full object-cover rounded-lg
                        transition-transform duration-500 hover:scale-110
                      "
                    />
                  </div>
                  <p className="text-sm text-amber-900 font-semibold line-clamp-4">{blog.content}</p>
                </div>
                <div className="  flex justify-center">
                  <Button className="w-[12rem]" variant="outline" size="lg">Read More</Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}