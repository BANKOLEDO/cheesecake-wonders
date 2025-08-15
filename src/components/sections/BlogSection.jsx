import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal.client";

// Static blog data with fixed release dates
const blogs = [
  {
    title: "Cheesecake Recipes",
    description: "Discover our collection of delicious cheesecake recipes that will satisfy your sweet tooth.",
    img: "/images/cheesecake-recipe.jpg",
    alt: "Cheesecake Recipe",
    content: "Explore the art of cheesecake making with our step-by-step guides and tips for perfecting your cheesecake creations.",
    date: "Feb 12, 2023",
  },
  {
    title: "Cheesecake History",
    description: "Uncover the fascinating history of cheesecake, from its ancient origins to modern variations enjoyed worldwide.",
    img: "/images/cheesecake-history.jpg",
    alt: "Cheesecake History",
    content: "Journey through time and discover how cheesecake has evolved over the centuries, becoming a beloved dessert in many cultures.",
    date: "Jul 8, 2024",
  },
  {
    title: "Cheesecake Tips & Tricks",
    description: "Master the cheesecake with professional tips for baking, flavoring, and presentation.",
    img: "/images/cheesecake-tips.jpg",
    alt: "Cheesecake Tips",
    content: "Learn the secrets to making creamy, perfectly baked cheesecakes every time with insider baking techniques.",
    date: "Nov 21, 2025",
  },
  {
    title: "Mini Cheesecakes",
    description: "Perfect bite-sized cheesecakes for parties and gatherings.",
    img: "/images/mini-cheesecake.jpg",
    alt: "Mini Cheesecake",
    content: "Mini cheesecakes that are easy to serve and fun to enjoy.",
    date: "Mar 15, 2023",
  },
  {
    title: "Vegan Cheesecakes",
    description: "Delicious plant-based alternatives that everyone will love.",
    img: "/images/vegan.jpg",
    alt: "Vegan Cheesecake",
    content: "Creamy vegan cheesecakes made with wholesome ingredients.",
    date: "Sep 9, 2024",
  },
  {
    title: "Chocolate Lovers",
    description: "Indulge in decadent chocolate cheesecake creations.",
    img: "/images/chocolate.jpg",
    alt: "Chocolate Cheesecake",
    content: "Rich, creamy chocolate cheesecakes for the ultimate dessert experience.",
    date: "Dec 1, 2025",
  }
]
export default function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-center mb-8 text-primary">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-6 items-stretch">
        {blogs.map((blog, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <Card className="flex flex-col min-h-[29.3rem] md:min-h-[31rem] lg:min-h-[32rem] xl:min-h-[33rem]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{blog.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                <img
                  src={blog.img}
                  alt={blog.alt}
                  className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground">{blog.content}</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}