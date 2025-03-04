import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";

Button;
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="ClearView Glass Railings Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold">Imperio Glass Railings</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>Get a Quote</span>
            </Link>
            <Button className="hidden md:inline-flex">Contact Us</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="relative flex justify-center items-center px-10"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Modern glass railing installation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Elegant Glass Railings for Modern Spaces
              </h1>
              <p className="mt-6 text-lg md:text-xl">
                Transform your property with our premium glass railing
                solutions. Combining safety, durability, and stunning aesthetics
                for residential and commercial spaces.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm"
                >
                  View Our Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-16 md:py-24 bg-slate-50 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  About Imperio Glass Railings
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Imperio Railing Systems, our mission is to revolutionize
                  the railing industry with cutting-edge glass railing systems
                  that prioritize safety and elevate the aesthetic appeal of any
                  environment. We specialize in designing elegant and durable
                  railings for balconies, staircases, and building facades. Our
                  commitment to innovation drives us to exceed industry
                  standards, integrating advanced technology with sustainable
                  practices to create environmentally friendly solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We aim to transform spaces with stylish and secure glass
                  railings, fostering a culture of excellence and unwavering
                  customer satisfaction. Trust us to deliver the perfect railing
                  system that complements your home or building project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button>Learn More About Us</Button>
                  <Button variant="outline">Our Process</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Our team installing glass railings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-16 md:py-24 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Why Choose Our Glass Railings
              </h2>
              <p className="text-lg text-muted-foreground">
                Our glass railing systems combine beauty, durability, and safety
                to enhance any space.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unobstructed Views</h3>
                <p className="text-muted-foreground">
                  Our frameless glass railings provide clear, unobstructed views
                  while maintaining safety and security.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
                <p className="text-muted-foreground">
                  We use only the highest quality tempered and laminated glass
                  that exceeds industry safety standards.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Designs</h3>
                <p className="text-muted-foreground">
                  Each railing system is custom designed to perfectly complement
                  your space and meet your specific needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Professional Installation
                </h3>
                <p className="text-muted-foreground">
                  Our experienced team ensures precise, secure installation with
                  minimal disruption to your space.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
                <p className="text-muted-foreground">
                  Our glass railings are easy to clean and maintain, requiring
                  minimal upkeep to keep them looking pristine.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Warranty Protection</h3>
                <p className="text-muted-foreground">
                  All our products and installations come with comprehensive
                  warranty coverage for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="py-16 md:py-24 bg-slate-50 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Glass Railing Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our range of premium glass railing systems for any
                application.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Frameless glass railing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Frameless Glass Railings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Sleek, minimalist design with no visible posts or frames for
                    a completely unobstructed view.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Stainless steel post glass railing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Stainless Steel Post Railings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Contemporary design combining sleek stainless steel posts
                    with clear glass panels.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Aluminum base glass railing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Aluminum Base Channel Railings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Durable aluminum base channels with tempered glass panels
                    for a clean, modern look.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg">View All Products</Button>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="py-16 md:py-24 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Project Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Browse our portfolio of completed glass railing installations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Project+${
                      i + 1
                    }`}
                    alt={`Glass railing project ${i + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg">View Full Gallery</Button>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="py-16 md:py-24 bg-slate-50 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from our satisfied customers about their experience with
                Imperio Glass Railings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Thompson",
                  role: "Homeowner",
                  content:
                    "The glass railings ClearView installed on our deck completely transformed our outdoor space. The views are now unobstructed, and the quality of the work is outstanding.",
                },
                {
                  name: "Sarah Johnson",
                  role: "Interior Designer",
                  content:
                    "I've worked with ClearView on multiple projects, and they consistently deliver exceptional results. Their attention to detail and craftsmanship is unmatched in the industry.",
                },
                {
                  name: "Robert Chen",
                  role: "Commercial Property Manager",
                  content:
                    "We chose ClearView for our office building's staircase railings, and the result exceeded our expectations. The installation was efficient, and the railings have received numerous compliments.",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-lg shadow-sm border"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(
                          0
                        )}`}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 md:py-24 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today for a free consultation and quote. Our team
                  is ready to help you with your glass railing project.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        info@clearviewglassrailings.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Glass Avenue, Suite 100
                        <br />
                        Anytown, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-6">Request a Free Quote</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="project-type"
                      className="text-sm font-medium"
                    >
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="interior">Interior</option>
                      <option value="exterior">Exterior</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your project..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground flex justify-center items-center px-10">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl mb-8">
                Contact us today for a free consultation and quote on your glass
                railing project.
              </p>
              <Button size="lg" variant="secondary">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-200 py-12 flex justify-center items-center px-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="ClearView Glass Railings Logo"
                  width={40}
                  height={40}
                  className="rounded bg-white"
                />
                <span className="text-xl font-bold">Imperio</span>
              </div>
              <p className="text-slate-400 mb-6">
                Premium glass railing solutions for residential and commercial
                properties.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-slate-400 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-slate-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="text-slate-400 hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-slate-400 hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-slate-400 hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-slate-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Residential Railings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Commercial Railings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Custom Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Repairs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-slate-400">
                    123 Glass Avenue, Suite 100
                    <br />
                    Anytown, ST 12345
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">
                    info@clearviewglassrailings.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} ClearView Glass Railings. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
