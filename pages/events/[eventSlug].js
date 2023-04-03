import Pricing from "../../components/Pricing";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import TestimoniSection from "../../components/TestimoniSection";
import ImageWithText from "../../components/ImageWithText";
import PaymentDialog from "../../components/PaymentDialog";


export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero
            image="/assets/Illustration1.png"
            title="Não fique de fora do webnar holístico <strong>nome muito atrativo</strong>"
            description="Nele falaremos sobre <strong>algo muito importante</strong> e será feito de tal forma, com tais pessoas, você não pode perder."
            button={{text: 'Me Inscrever', dialog: <PaymentDialog /> }}
            reverse
        />
        <ImageWithText description="O evento será sobre XYZ, contará com ABC..." image="/assets/Illustration2.png" title="Tema do evento" className="bg-gradient-to-b from-white-500 to-white-300" />

      <ImageWithText description="O Webnar ocorrerá dias xyz, as tais horas" image="/assets/Illustration2.png" title="Quando será o evento" reverse />
        <TestimoniSection />
        <Pricing plans={[
            {image: "/assets/Free.png", name: 'Free Plan', price: 'Free', features: [ 'Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', ]},
            {image: "/assets/Standard.png", name: 'Standard Plan', price: '$9 <span className="text-black-500">/ mo</span>', features: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware']},
            {image: "/assets/Premium.png", name: 'Premium Plan', price: '$12 <span className="text-black-500">/ mo</span>', features: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features' ]},
        ]} />
      </Layout>
    </>
  );
}
