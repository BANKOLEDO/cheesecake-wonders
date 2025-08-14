import { Button } from "../ui/button";

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-20 pt-10 md:py-6 mx-7 md:mx-10 lg:px-20 flex flex-col md:flex-row-reverse items-center md:justify-between gap-2 xl:gap-4 text-center">
            <div className="flex flex-col text-center md:items-start md:text-left lg:p-2 gap-2 xl:pr-20">
                <h1 className="text-2xl xmd:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary hover:text-orange-900">We Love Cheesecake</h1>
                <h2 className="text-xl xmd:text-md lg:text-3xl  font-semibold text-primary hover:text-orange-900">Discover Our Cheesecake Story</h2>
            <p className="mt-4 text-lg xl:text-xl 2xl:text-2xl text-brown-600 font-semibold">
                At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity
            </p>
            <p className="mt-4 text-lg xl:text-xl 2xl:text-2xl text-brown-600 font-semibold">
                We believe in delivering not just deserts but an experience that delights the senses and warms the heart. 
            </p>
            <div className="mt-10 flex gap-4 justify-center">
                <Button size="lg">Read More</Button>
            </div>
            </div>
            <img src="/images/about-cheesecake.png" alt="About Cheesecake" className="w-full my-5 mx-auto md:mx-0 md:max-w-md lg:max-w-xl" />
        </section>
    )
}