"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Check } from "lucide-react";
import hero from "../../public/hero.webp";
import deck from "../../public/deck.png";
import framedbalcony from "../../public/framedbalcony.png";
import beachside from "../../public/beachside.png";
import homefence from "../../public/homefence.png";
import staircase from "../../public/staircase.jpg";
import whiteLogo from "../../public/Blacklogo.png";
import blacklogo from "../../public/White.webp";
import { Button } from "./components/Button";
import { useEffect, useState, useRef } from "react";
import { Form } from "./components/Form";
import { Counter } from "./components/Counter";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasClosedOnce, setHasClosedOnce] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // Animation elements refs
  const animatedElements = useRef([]);

  // Add element to animated elements array
  const addAnimatedElement = (el) => {
    if (el && !animatedElements.current.includes(el)) {
      animatedElements.current.push(el);
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          // For staggered children animations
          if (entry.target.dataset.parent) {
            const children = entry.target.querySelectorAll("[data-child]");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-in");
              }, index * 100); // 100ms stagger
            });
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all section refs
    [
      heroRef,
      aboutRef,
      featuresRef,
      productsRef,
      galleryRef,
      contactRef,
      footerRef,
    ].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Observe all animated elements
    animatedElements.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const images = [
    { src: hero, location: "Jogeshwari" },
    { src: deck, location: "Alibaug" },
    { src: framedbalcony, location: "Andheri" },
    { src: beachside, location: "Nagothane" },
    // { src: cornerglass, location: "Goa" },
    // { src: homebalcony, location: "Jamshedpur" },
    // { src: homefence, location: "Satara" },
    // { src: staircase, location: "Bangalore" },
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
      {/* Add CSS for animations */}
      <style jsx global>{`
        /* Base animation classes */
        .fade-up,
        .fade-down,
        .fade-left,
        .fade-right,
        .fade-in,
        .scale-in {
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .fade-up {
          transform: translateY(30px);
        }

        .fade-down {
          transform: translateY(-30px);
        }

        .fade-left {
          transform: translateX(-30px);
        }

        .fade-right {
          transform: translateX(30px);
        }

        .scale-in {
          transform: scale(0.9);
        }

        /* Animation trigger class */
        .animate-in {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }

        /* Staggered children delays */
        [data-child="1"] {
          transition-delay: 0.1s;
        }
        [data-child="2"] {
          transition-delay: 0.2s;
        }
        [data-child="3"] {
          transition-delay: 0.3s;
        }
        [data-child="4"] {
          transition-delay: 0.4s;
        }
        [data-child="5"] {
          transition-delay: 0.5s;
        }
        [data-child="6"] {
          transition-delay: 0.6s;
        }

        /* Hover transitions */
        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .image-zoom {
          transition: transform 0.7s ease;
        }

        .image-zoom:hover {
          transform: scale(1.1);
        }

        /* Navbar animation */
        .nav-transition {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
      `}</style>

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
          className={`bg-white shadow-md fixed top-0 w-full nav-transition ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-48">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="text-2xl font-bold flex flex-start">
                <Image
                  src={whiteLogo || "/placeholder.svg"}
                  alt="Imperio Glass Railings Logo"
                  width={120}
                  height={120}
                  className="rounded hover-scale"
                />
              </div>

              <a href="tel:+91 8591953385">
                <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-400 transition duration-300 hover-scale">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="relative flex justify-center items-center px-10"
          ref={heroRef}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={hero || "/placeholder.svg"}
              alt="Modern glass railing installation"
              fill
              className="object-cover transition-transform duration-10000 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div
            className="container relative z-10 py-24 md:py-32 lg:py-40"
            data-parent
          >
            <div className="max-w-2xl text-white">
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl fade-up"
                data-child="1"
                ref={addAnimatedElement}
              >
                Elegant Glass Railings for Modern Spaces
              </h1>
              <p
                className="mt-6 text-lg md:text-xl fade-up"
                data-child="2"
                ref={addAnimatedElement}
              >
                Transform your property with our premium glass railing
                solutions. Combining safety, durability, and stunning aesthetics
                for residential and commercial spaces.
              </p>
              <div
                className="mt-8 flex flex-col sm:flex-row gap-4 fade-up"
                data-child="3"
                ref={addAnimatedElement}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto transition-all duration-300 hover-scale"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-white bg-white/10 backdrop-blur-sm transition-all duration-300 hover-scale"
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
          ref={aboutRef}
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-left" ref={addAnimatedElement}>
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
                <div
                  className="flex justify-start items-center space-x-20"
                  data-parent
                >
                  <div
                    className="flex flex-col justify-center items-left fade-up"
                    data-child="1"
                    ref={addAnimatedElement}
                  >
                    <h2>Happy Clients</h2>
                    <Counter target={4000} />
                  </div>
                  <div
                    className="flex flex-col justify-center items-left fade-up"
                    data-child="2"
                    ref={addAnimatedElement}
                  >
                    <h2>Projects</h2>
                    <Counter target={7000} />
                  </div>
                  <div
                    className="flex flex-col justify-center items-left fade-up"
                    data-child="3"
                    ref={addAnimatedElement}
                  >
                    <h2>City</h2>
                    <Counter target={100} />
                  </div>
                </div>
              </div>
              <div
                className="relative h-[400px] rounded-lg overflow-hidden fade-right"
                ref={addAnimatedElement}
              >
                <Image
                  src={deck || "/placeholder.svg"}
                  alt="Our team installing glass railings"
                  fill
                  className="object-cover image-zoom"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-16 md:py-24 flex justify-center items-center px-6"
          ref={featuresRef}
        >
          <div className="container">
            <div
              className="text-center max-w-3xl mx-auto mb-12 fade-up"
              ref={addAnimatedElement}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Why Choose Us?
              </h2>
              <p className="text-md md:text-lg text-muted-foreground">
                Our glass railing systems combine beauty, durability, and safety
                to enhance any space.
              </p>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              data-parent
            >
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
                  className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover-scale fade-up"
                  data-child={index + 1}
                  ref={addAnimatedElement}
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
            <div
              className="flex w-full justify-center items-center mt-10 fade-up"
              ref={addAnimatedElement}
            >
              <Button
                size="lg"
                className="w-1/3 sm:w-auto transition-all duration-300 hover-scale"
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
          ref={productsRef}
        >
          <div className="container">
            <div
              className="text-center max-w-3xl mx-auto mb-16 fade-up"
              ref={addAnimatedElement}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
                Our Glass Railing Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our range of premium glass railing systems for any
                application.
              </p>
            </div>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              data-parent
            >
              <div
                className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover-scale fade-up"
                data-child="1"
                ref={addAnimatedElement}
              >
                <div className="relative h-84">
                  <Image
                    src={beachside || "/placeholder.svg"}
                    alt="Frameless glass railing"
                    fill
                    className="object-cover image-zoom"
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
                </div>
              </div>
              <div
                className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover-scale fade-up"
                data-child="2"
                ref={addAnimatedElement}
              >
                <div className="relative h-84">
                  <Image
                    src={staircase || "/placeholder.svg"}
                    alt="Stainless steel post glass railing"
                    fill
                    className="object-cover image-zoom"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Staircase Railings</h3>
                  <p className="text-muted-foreground mb-4">
                    Contemporary design combining sleek stainless steel posts
                    with clear glass panels.
                  </p>
                </div>
              </div>
              <div
                className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover-scale fade-up"
                data-child="3"
                ref={addAnimatedElement}
              >
                <div className="relative h-84">
                  <Image
                    src={homefence || "/placeholder.svg"}
                    alt="Aluminum base glass railing"
                    fill
                    className="object-cover image-zoom"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Deck Railings</h3>
                  <p className="text-muted-foreground mb-4">
                    Durable aluminum base channels with tempered glass panels
                    for a clean, modern look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="py-16 md:py-24 flex justify-center items-center px-10 bg-gray-50"
          ref={galleryRef}
        >
          <div className="container flex">
            <div
              className="w-1/2 flex flex-wrap justify-center gap-8"
              data-parent
            >
              {images.map((image, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg h-[80px] w-[80px] md:h-[120px] md:w-[120px] lg:h-[250px] lg:w-[250px] flex-shrink-0 scale-in"
                  data-child={i + 1}
                  ref={addAnimatedElement}
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
                    src={image.src || "/placeholder.svg"}
                    alt={`Glass railing project ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="image-zoom z-0"
                  />
                </div>
              ))}
            </div>
            <div
              className="w-1/2 max-w-3xl mx-auto mb-4 fade-right"
              ref={addAnimatedElement}
            >
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
                <a href="#contact" className="text-gray-700">
                  <Button className="px-6 py-3 text-lg md:text-xl bg-blue-500 hover:bg-blue-700 transition-all duration-300 hover-scale">
                    <h1 className="text-md md:text-md">Connect with us now</h1>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 md:py-24 flex justify-center items-center px-10"
          ref={contactRef}
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="fade-left" ref={addAnimatedElement}>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today for a free consultation and quote. Our team
                  is ready to help you with your glass railing project.
                </p>
                <div className="space-y-6" data-parent>
                  <div
                    className="flex items-start gap-4 fade-up"
                    data-child="1"
                    ref={addAnimatedElement}
                  >
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">022-66362506</p>
                    </div>
                  </div>
                  <div
                    className="flex items-start gap-4 fade-up"
                    data-child="2"
                    ref={addAnimatedElement}
                  >
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        sales@imperiorailing.com
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start gap-4 fade-up"
                    data-child="3"
                    ref={addAnimatedElement}
                  >
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
              <div className="bg-white fade-right" ref={addAnimatedElement}>
                <Form isOpen={true} isFloating={false} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="bg-slate-900 text-slate-200 py-12 flex justify-center items-center px-10"
        ref={footerRef}
      >
        <div className="container">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up"
            ref={addAnimatedElement}
          >
            <div>
              <div className="flex flex-col gap-2 mb-6">
                <Image
                  src={blacklogo || "/placeholder.svg"}
                  alt="Imperio Glass Railings Logo"
                  width={100}
                  height={100}
                  className="rounded transition-all duration-300 hover-scale"
                />
                {/* <span className="text-xl font-bold">Imperio Railings</span> */}
              </div>
              <p className="text-slate-400 mb-6">
                Premium glass railing solutions for residential and commercial
                properties.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/imperiorailingsystem"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
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
                    className="h-5 w-5 transition-transform duration-300 hover-scale"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/imperio.railings/?igsh=OWlmaXB6NnJpcWJ0"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
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
                    className="h-5 w-5 transition-transform duration-300 hover-scale"
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
                  className="text-slate-400 hover:text-white transition-colors duration-300"
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
                    className="h-5 w-5 transition-transform duration-300 hover-scale"
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
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
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
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Residential Railings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Commercial Railings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Custom Designs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
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
          <div
            className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 fade-up"
            ref={addAnimatedElement}
          >
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
