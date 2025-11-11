"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Clock, Package, Settings, Shield, Star, Wrench, Zap, Award } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "product" },
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://pixabay.com/get/g2af2107c156dbd27bd9a849b5b44678d8750d4e142ec122cbf77ff2029a08dd9c92fe79bddc7e99899377e9d613e04b74c70b0d9b73a7b3b4759cf899fb081ba_1280.jpg"
          logoAlt="Parts4Laser logo"
          brandName="Parts4Laser"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Cosmetic Laser Parts & Repair Services"
          description="Your trusted source for cosmetic laser parts, accessories, and expert repair services. Quality solutions for top laser brands."
          tag="Parts4Laser"
          tagIcon={Zap}
          buttons={[
            { text: "Shop Parts", href: "product" },
            { text: "Repair Services", href: "feature" }
          ]}
          imageSrc="https://pixabay.com/get/g80177cd2faea0d86306d8561cc2f191793a183286564cb600d46b22f075bb0237f6740dccb48691267289cd1c62e505bb6366af92210bdc3dfab6811033920fc_1280.jpg"
          imageAlt="Advanced laser equipment and parts"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We specialize in cosmetic laser equipment parts and repair services, providing quality solutions for medical and aesthetic professionals worldwide."
          features={[
            {
              icon: Wrench,
              title: "Expert Repairs",
              description: "Professional repair services for all major laser brands with certified technicians and genuine parts."
            },
            {
              icon: Package,
              title: "Quality Parts",
              description: "Comprehensive inventory of handpieces, accessories, and replacement parts for cosmetic laser equipment."
            },
            {
              icon: Shield,
              title: "Trusted Service",
              description: "Years of experience serving medical professionals with reliable parts and exceptional customer support."
            },
            {
              icon: Clock,
              title: "Fast Delivery",
              description: "Quick shipping and tracking services to minimize equipment downtime and keep your practice running."
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Services"
          description="Comprehensive solutions for your cosmetic laser equipment needs"
          tag="Services"
          tagIcon={Settings}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Laser Repair Services",
              description: "Professional repair services for all major laser brands with certified technicians and warranty coverage.",
              imageSrc: "https://pixabay.com/get/ge342305ab853218dadbfcd2c4218e2374fa2350922a291fbe05884ecb5b02fdc564338b63dddf3c336aa3eef4c77b195c24117e0895b41906ae6fd6de546eb5a_1280.jpg",
              imageAlt: "Laser equipment repair service",
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Replacement Parts",
              description: "Genuine handpieces, accessories, and consumables for Alma, Candela, Cutera, Cynosure, and more.",
              imageSrc: "https://pixabay.com/get/g7959c63fad73225788dbd0e1b1bf21d33dc33969f98db24b67f9fec431475a92d4925e8bde1f7ae5d1c6df3a51862a033e46b7280157e39508fcfe79639a7d96_1280.jpg",
              imageAlt: "Laser replacement parts inventory",
              button: { text: "Browse Parts", href: "product" }
            },
            {
              title: "Technical Support",
              description: "Expert guidance and support to help you maintain optimal performance of your laser equipment.",
              imageSrc: "https://pixabay.com/get/g3f91195349b4c50309965b434481729e19ddf6af845037c157b490fea1c57e40931ed9a1f6b4dcd2baf4a27864ad42fa132fbee008bf876aeee5adf644d06f8f_1280.jpg",
              imageAlt: "Technical support for laser equipment",
              button: { text: "Contact Support", href: "contact" }
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Laser Parts"
          description="Premium handpieces and accessories for leading laser brands"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Alma",
              name: "Harmony Hand Piece",
              price: "$2,450.00",
              rating: 5,
              reviewCount: "47",
              imageSrc: "https://pixabay.com/get/g05d0159074e518159fb63944510c05b1791b5baba5e43737842d70194b695a3759adb61fdedbf1b6cbed8ac463250e1d420c86fa240b343486a491658364a204_1280.jpg",
              imageAlt: "Alma Harmony laser handpiece"
            },
            {
              id: "2",
              brand: "Candela",
              name: "GentleMax Pro Tip",
              price: "$1,850.00",
              rating: 5,
              reviewCount: "32",
              imageSrc: "https://pixabay.com/get/g69077b5d58a7a7386962c56ff3b97d342e012a026c1c2654164bc0df6d867365e889503f685cd8998e60c7c71f89c199afe2ddf93aafe5921581d5fd1d182967_1280.jpg",
              imageAlt: "Candela GentleMax Pro laser tip"
            },
            {
              id: "3",
              brand: "Cutera",
              name: "Excel V Handpiece",
              price: "$3,200.00",
              rating: 4,
              reviewCount: "28",
              imageSrc: "https://pixabay.com/get/gad4aa362a585383d020ddac859682abd68f679afc4e51aea2c2e2c25aea05e30a82c2f62d3b5cfde88882e5a0b6a837f9056ad3ca1f5db30eb24535e8496e803_1280.jpg",
              imageAlt: "Cutera Excel V laser handpiece"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Trusted by medical professionals and aesthetic clinics worldwide"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Medical Director",
              testimonial: "Parts4Laser has been our go-to source for laser equipment parts. Their quality and service are exceptional, keeping our clinic running smoothly.",
              imageSrc: "https://pixabay.com/get/g88dd5e903672ecb9d41868646397b50256027ce5fbe77d5343bd4ef9dfd2f771a5e5ac9d1ef7a8e4fd770dec127503c695b85b111af3265e4cb7cd62c071886d_1280.jpg",
              imageAlt: "Dr. Sarah Johnson"
            },
            {
              id: "2",
              name: "Mark Chen",
              role: "Practice Owner",
              testimonial: "Fast shipping, genuine parts, and excellent customer support. They understand the urgency of equipment repairs in our business.",
              imageSrc: "https://pixabay.com/get/gccc2ca76d66e0ada60c158e52d5a0c354842d888e83062d02a0987683ea69f5c5e93ae4bb3dfbe74b88176d08822eda7a889cba8423b035052045de9f032a7f7_1280.jpg",
              imageAlt: "Mark Chen"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Aesthetic Specialist",
              testimonial: "The technical expertise and parts availability at Parts4Laser is unmatched. They've saved us thousands in equipment downtime.",
              imageSrc: "https://pixabay.com/get/g396ec214bb3c49b162bd294571a54016062d19ca6c9176a897b43d2bc60ccafb546c315f97ebfc75d8924c612b4fd2e71a33ad6abf4940e0cdab7ccb13108b36_1280.jpg",
              imageAlt: "Dr. Emily Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Clinic Manager",
              testimonial: "Reliable parts, fair pricing, and knowledgeable staff. Parts4Laser is an essential partner for our laser equipment maintenance.",
              imageSrc: "https://pixabay.com/get/g9f1cb35c9b0c2b385155ba8c37c0b27ce09dc4e17f4f94291785c849bf850d85a100750bdc97a3e27131aed7d6e1e5b6adf49b14f8a49d6ec3a480c4af2b652d_1280.jpg",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>
      
      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Laser Brands"
          description="We specialize in parts and accessories for all major cosmetic laser manufacturers"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g759dc9c5b6b8113bd63be490dd34fdc47f4747f39ecdfc04a5688c119d083dadd86b4e734e115ec457e428eb6eafe292b752211309ff4b371cb0267a146b7fb4_1280.jpg",
            "https://pixabay.com/get/ga7f4ab1872ca03364da6743ad6463bd448dc987d6b362625ceb4fc45e55f860295a67bd04d9ced3fe8dc9c98abd7d3ef830d50e282b168791d868a53f352cb5a_1280.jpg",
            "https://pixabay.com/get/gbc10fecf0dc4161f7db94f1bc9451335b1962c39d67d55e86bf75f601b7d3571096e9c31458ee5c4207c006b5615eb962d908da6a061613d440debd2f2e672c9_1280.jpg",
            "https://pixabay.com/get/g9014c310afb15d712cc5fa46e4f52981b00badaec588ecb0085317d4079238e2f822bf1a616f82935943a99e6e95a9729f5af4321a7e87e1fa837cb6db56a3f1_1280.jpg",
            "https://pixabay.com/get/gd1e34f2bce93a8782b1f687b9e7a3e15b5bc4057e8b62dac966cc4895f6ce246b4b8d90260f3743ca02c3a2d4bf475b4a371939e764e2e7192f1d176b9f6711d_1280.jpg",
            "https://pixabay.com/get/g6fda756f1e71dfa1892985158edcf0248048f9168f4f15cd38f5607990eb8d4d09cee73466b28ac08e8f5f8974c83b1f0035fde95365c9b899dc89936ac8e788_1280.jpg",
            "https://pixabay.com/get/gcaffe47cdd1f084eba2aecbf90b8e7a4f998f9b5eea5f0aed6c236f152821c9b7f9228892a0f2552b070e1b89f3ed369229266a21c3c75cc6ccd04eed9f4b1a8_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Contact Parts4Laser"
          description="Need laser parts or repair services? Get in touch with our expert team for personalized assistance and quotes."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "company", type: "text", placeholder: "Clinic/Company Name", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your laser equipment needs, parts required, or repair services...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://pixabay.com/get/g51a7122310d91c2f44545b04e56d10014ece5a930c2a427a678995ffe0f95a6e418308c2ef0373a437780be59d52a505dadd4acce4552c5c228f97a4b6afb962_1280.jpg"
          imageAlt="Parts4Laser facility and equipment"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Parts4Laser"
          copyrightText="© 2025 Parts4Laser. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Hand Pieces", href: "product" },
                { label: "Laser Accessories", href: "product" },
                { label: "Consumables", href: "product" },
                { label: "Replacement Parts", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Laser Repairs", href: "feature" },
                { label: "Technical Support", href: "contact" },
                { label: "Shipping Info", href: "contact" },
                { label: "Track Your Order", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Return Policy", href: "contact" },
                { label: "Privacy Statement", href: "contact" },
                { label: "Sell Your Laser", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}