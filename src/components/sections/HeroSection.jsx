import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="py-20 text-center mt-20 bg-background">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary mx-4 hover:text-orange-900">Bite The World of Cheesecake Wonders</h1>
            <p className="mt-4 text-lg text-brown-600 font-semibold text-center mx-5">
                We always make our customer happy by providing as many choices as possible
            </p>
            <div className="mt-8 flex gap-4 justify-center">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
            </div>
            <img src="/images/hero-cheesecake.svg" alt="Hero Cheesecake" className="mt-3 mx-auto w-full px-7 max-w-md" />
        </section>
    )
}

