import About from "../components/About";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import CallSection from "../components/CallSection";
import SeoHead from "../components/SeoHead";
import TestimoniSection from "../components/TestimoniSection";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <About />
        <TestimoniSection />
        <CallSection />
        <Feature />
      </Layout>
    </>
  );
}
