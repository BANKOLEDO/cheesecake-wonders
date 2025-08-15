
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-20 px-6 sm:px-6 md:px-10 lg:px-20 text-center py-8 flex flex-col md:flex-row justify-center items-center gap-3 md:items-start md:justify-center lg:mx-auto lg:justify-evenly">
            <div className="w-full max-w-3xl p-3 xl:max-w-4xl flex flex-col items-center justify-center md:items-start md:justify-between md:text-left gap-3">
                <h1 className="text-xl xs:text-3xl xmd:text-4xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-primary hover:text-orange-900">Contact Us</h1>
                <p className=" text-center md:text-left mx-4 my-2 md:mx-0 text-lg xs:text-lg xmd:text-md xl:text-xl text-brown-600 font-semibold">Need to get in touch with us? Either fill out the form with your inquiry or Find the organisation social handles you'd like to connect below. </p>
                <img src="/images/contact-cheesecake.png" alt="Contact Cheesecake" className="hidden md:flex w-full max-w-md mb-6 md:mb-0" />
            </div>
            <form className=" w-full bg-card max-w-sm mx-auto p-3 grid gap-6 border-4 border-primary rounded-md">
               {/* Name */}
                <div className="flex flex-col">
                {/* <Label htmlFor="name">Name</Label> */}
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            className="input-class"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          {/* <Label htmlFor="email">Email</Label> */}
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="input-class"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          {/* <Label htmlFor="message">Your Message</Label> */}
          <Textarea
            id="message"
            placeholder="Write your message here..."
            rows={5}
            className="input-class resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-amber-900 text-white hover:bg-amber-800 w-full sm:w-auto mx-auto"
        >
          Contact Us Now
        </Button>
      </form>
        </section>
    )
}