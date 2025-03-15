"use client";
import Image from "next/image";
import Link from "next/link";
import { State, City } from "country-state-city";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";
import hero from "../../public/hero.webp";
import deck from "../../public/deck.png";
import framedbalcony from "../../public/framedbalcony.png";
import beachside from "../../public/beachside.png";
import cornerglass from "../../public/cornerglass.png";
import homebalcony from "../../public/homebalcony.png";
import homefence from "../../public/homefence.png";
import staircase from "../../public/staircase.jpg";
import mukesh from "../../public/mukeshambani.webp";
import rakesh from "../../public/rakeshjhunjhunwala.webp";
import salman from "../../public/salmankhan.webp";
import whiteLogo from "../../public/White.webp";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Counter } from "./components/Counter";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasClosedOnce, setHasClosedOnce] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: hero, location: "Jogeshwari" },
    { src: deck, location: "Alibaug" },
    { src: framedbalcony, location: "Andheri" },
    { src: beachside, location: "Nagothane" },
    { src: cornerglass, location: "Goa" },
    { src: homebalcony, location: "Jamshedpur" },
    { src: homefence, location: "Satara" },
    { src: staircase, location: "Bangalore" },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosedOnce) setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasClosedOnce]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className="flex min-h-screen flex-col">
      <Form
        isOpen={isModalOpen}
        isFloating={true}
        onClose={() => setIsModalOpen(false)}
      />
      <Form
        isOpen={isOpen}
        isFloating={true}
        onClose={() => {
          setIsOpen(false);
          setHasClosedOnce(true);
        }}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav
          className={`bg-black shadow-md fixed top-0 w-full transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-48">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="text-2xl font-bold flex flex-start">
                <Image
                  src={whiteLogo}
                  alt="Imperio Glass Railings Logo"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>

              <a
                href="tel:+91 8591953385"
                className="text-gray-300 px-4 py-2 hover:bg-gray-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </nav>
        {/* Mobile Toggle Button */}
        {/* <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
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
              </Button> */}

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex space-x-6">
                <a href="#" className="text-white px-4 py-2 hover:bg-gray-900">
                  Home
                </a>

                <a
                  href="#about"
                  className="text-white px-4 py-2 hover:bg-gray-900"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-white px-4 py-2 hover:bg-gray-900"
                >
                  Features
                </a>
                <a
                  href="#products"
                  className="text-white px-4 py-2 hover:bg-gray-900"
                >
                  Products
                </a>
                <a
                  href="#gallery"
                  className="text-white px-4 py-2 hover:bg-gray-900"
                >
                  Gallery
                </a>
                <a
                  href="#testimonials"
                  className="text-white px-4 py-2 hover:bg-gray-900"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-white px-4 py-2 hover:bg-gray-900"
                >
                  Contact
                </a>
              </div>
            </div> */}

        {/* Mobile Menu (Dropdown) */}
        {/* <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col space-y-2 bg-white py-4 shadow-md rounded-lg">
                <a
                  href="#"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  Features
                </a>
                <a
                  href="#products"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  Products
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  Gallery
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 px-4 py-2 hover:bg-gray-100"
                >
                  Contact
                </a>
              </div> */}
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="relative flex justify-center items-center px-10"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={hero}
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
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-white bg-white/10 backdrop-blur-sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  Download Brochure
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
                  Transform Your Home With Premium Aluminium Glass Railings
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Imperio Railing Systems, our mission is to revolutionize
                  the railing industry with cutting-edge glass railing systems
                  that prioritize safety and elevate the aesthetic appeal of any
                  environment. We specialize in designing elegant and durable
                  railings for balconies, staircases, and building facades.
                </p>
                <div className="flex justify-start items-center space-x-20">
                  <div className="flex flex-col justify-center items-left">
                    <h2>Happy Clients</h2>
                    {/* <Counter target={100} /> Stops at 100 */}
                    <span className="text-3xl font-semibold">4000 + </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <h2>Projects</h2>
                    {/* <Counter target={500} /> Stops at 500 */}
                    <span className="text-3xl font-semibold">7000 + </span>
                  </div>
                  <div className="flex flex-col justify-center items-left">
                    <h2>City</h2>
                    {/* <Counter target={500} /> Stops at 500 */}
                    <span className="text-3xl font-semibold">100 + </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="#contact" className="text-gray-700 ">
                    <Button className=" px-6 py-3 text-lg md:text-xl bg-blue-500 hover:bg-blue-700">
                      <h1 className="text-lg md:text-xl">Learn More</h1>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={deck}
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
          className="py-16 md:py-24 flex justify-center items-center px-6"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Why Choose Us?
              </h2>
              <p className="text-md md:text-lg text-muted-foreground">
                Our glass railing systems combine beauty, durability, and safety
                to enhance any space.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Weather & Corrosion Resistant",
                  description:
                    "Imperio railings are engineered to withstand harsh weather conditions.",
                },
                {
                  title: "Multiple Finish Options",
                  description:
                    "Enhance your space with a variety of premium finishes, from sleek anodized aluminum to elegant powder-coated textures.",
                },
                {
                  title: "Safety & Durability",
                  description:
                    "Built with high-quality aluminum and tempered glass, our railings provide superior strength and stability.",
                },
                {
                  title: "Easy Installation & Low Maintenance",
                  description:
                    "Our innovative railing systems are designed for hassle-free installation with minimal tools.",
                },
                {
                  title: "Seamless Aesthetics & Modern Appeal",
                  description:
                    "With sleek lines and a minimalist design, Imperio railings add a touch of sophistication to any space.",
                },
                {
                  title: "Clear View",
                  description:
                    "Experience unobstructed views with our glass railing solutions.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md"
                >
                  <div className="flex flex-col items-left space-x-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <h3 className="text-sm md:text-lg font-bold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center items-center mt-10">
              <Button
                size="lg"
                className="w-1/3 sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                <h1 className="text-xl text-white">
                  Experience Premium Railings in your Home
                </h1>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="py-16 bg-slate-50 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
                Our Glass Railing Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our range of premium glass railing systems for any
                application.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-84">
                  <Image
                    src={beachside}
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
                  {/* <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-84">
                  <Image
                    src={staircase}
                    alt="Stainless steel post glass railing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Staircase Railings</h3>
                  <p className="text-muted-foreground mb-4">
                    Contemporary design combining sleek stainless steel posts
                    with clear glass panels.
                  </p>
                  {/* <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="relative h-84">
                  <Image
                    src={homefence}
                    alt="Aluminum base glass railing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Deck Railings</h3>
                  <p className="text-muted-foreground mb-4">
                    Durable aluminum base channels with tempered glass panels
                    for a clean, modern look.
                  </p>
                  {/* <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </div>
            </div>

            {/* <div className="text-center mt-12">
              <Button size="lg">View All Products</Button>
            </div> */}
          </div>
        </section>

        <section
          id="gallery"
          className="py-16 md:py-24 flex justify-center items-center px-10"
        >
          <div className="container flex">
            <div className="w-1/2 flex flex-wrap justify-center gap-8">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg h-[80px] w-[80px] md:h-[120px] md:w-[120px] lg:h-[250px] lg:w-[250px] flex-shrink-0"
                >
                  {/* Shadow Effect at the Top */}
                  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/30 to-transparent z-5"></div>

                  {/* Location Badge - Appears Over the Shadow */}
                  <div className="absolute top-2 left-2 text-white text-sm font-semibold px-2 py-1 rounded-md z-10 flex items-center">
                    <MapPin size={16} className="mr-1 text-white" />
                    {image.location}
                  </div>

                  {/* Image - Behind Everything */}
                  <Image
                    src={image.src}
                    alt={`Glass railing project ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform hover:scale-105 z-0"
                  />
                </div>
              ))}
            </div>
            <div className="w-1/2 max-w-3xl mx-auto mb-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Recent Projects
              </h2>
              <p className="w-2/3 text-lg text-muted-foreground mt-8">
                Explore our latest projects featuring stunning glass railing
                installations, premium aluminum windows, and a range of
                high-quality architectural solutions. Get inspired by our
                craftsmanship and innovative designs—perfect for elevating your
                space with elegance and durability. Ready to transform your home
                or commercial property? Discover how our products can bring your
                vision to life.
              </p>
              <div className="flex w-full sm:flex-row gap-4 mt-8">
                <a href="#contact" className="text-gray-700 ">
                  <Button className=" px-6 py-3 text-lg md:text-xl bg-blue-500 hover:bg-blue-700">
                    <h1 className="text-md md:text-md">Connect with us now</h1>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section
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
                  name: "Mukesh Ambani",
                  profile: mukesh,
                  role: "Mumbai, India",
                  content:
                    "Mukesh Ambani, RIL Chairman, launched Reliance Jio in 2016, transforming Indian telecom with 400+ million subscribers",
                },
                {
                  name: "Rakesh Jhunjhunwala",
                  profile: rakesh,
                  role: "Mumbai, India",
                  content:
                    "Rakesh Jhunjhunwala, dubbed the Warren Buffett of India, is a billionaire investor celebrated for his successful stock market ventures and influential role in finance.",
                },
                {
                  name: "Salman Khan",
                  profile: salman,
                  role: "Mumbai, India",
                  content:
                    "Salman Khan, a Bollywood superstar renowned for blockbuster films and philanthropic efforts through Being Human NGO.",
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
                        src={testimonial.profile}
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
        </section> */}

        <section
          id="contact"
          className="py-16 md:py-24 flex justify-center items-center px-10"
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start ">
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
                      <p className="text-muted-foreground">022-66362506</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        sales@imperiorailing.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Headquaters</h3>
                      <p className="text-muted-foreground">
                        1, Aman Chambers, New Queens Rd,
                        <br />
                        Charni Road, Mumbai Maharashtra - 400004.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                {/* <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="Enter name"
                        className="text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input id="first-name" placeholder="John" />
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
                </form> */}
                <Form isOpen={true} isFloating={false} />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 md:py-24 bg-primary text-primary-foreground flex justify-center items-center px-10">
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
                <a href="#contact">Get Started Now</a>
              </Button>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="bg-slate-900 text-slate-200 py-12 flex justify-center items-center px-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex flex-col gap-2 mb-6">
                <Image
                  src={whiteLogo}
                  alt="Imperio Glass Railings Logo"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <span className="text-xl font-bold">Imperio Railings</span>
              </div>
              <p className="text-slate-400 mb-6">
                Premium glass railing solutions for residential and commercial
                properties.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/imperiorailingsystem"
                  className="text-slate-400 hover:text-white"
                >
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
                <a
                  href="https://www.instagram.com/imperio.railings/?igsh=OWlmaXB6NnJpcWJ0"
                  className="text-slate-400 hover:text-white"
                >
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
                <a
                  href="https://x.com/ImperioRailing"
                  className="text-slate-400 hover:text-white"
                >
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
                    <path d="M22 4.01c-.77.35-1.6.58-2.47.69a4.27 4.27 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.7 1.03A4.26 4.26 0 0 0 11.5 7c0 .34.04.67.11.98A12.1 12.1 0 0 1 3 3.86a4.27 4.27 0 0 0-.58 2.14c0 1.47.75 2.77 1.9 3.53a4.24 4.24 0 0 1-1.93-.54v.06c0 2.05 1.46 3.77 3.4 4.16a4.25 4.25 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.13a12.08 12.08 0 0 0 6.29 1.84c7.55 0 11.7-6.27 11.7-11.71l-.01-.53A8.3 8.3 0 0 0 22 4.01z"></path>
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
                    1, Aman Chambers, New Queens Rd,
                    <br />
                    Charni Road, Mumbai Maharashtra - 400004.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">022-66362506</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-slate-400">
                    sales@imperiorailing.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Imperio Glass Railings. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
