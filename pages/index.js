import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import CallSection from "../components/CallSection";
import SeoHead from "../components/SeoHead";
import TestimoniSection from "../components/TestimoniSection";
import ImageWithText from "../components/ImageWithText";
import { useI18n } from '../utils/languages'

export default function Home() {
  const {getString} = useI18n()
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero title={getString('home.hero.title')}
              description="Nele falaremos sobre <strong>algo muito importante</strong> e será feito de tal forma, com tais pessoas, você não pode perder."
              button={{
                  href: "/events/webnar-xyz",
                  text: 'saiba mais'
              }}
              image="/assets/Illustration1.png"
              listUser={[
                  {
                      name: "Participantes",
                      number: "10",
                      icon: "/assets/Icon/heroicons_sm-user.svg",
                  },
                  {
                      name: "Eventos",
                      number: "3",
                      icon: "/assets/Icon/gridicons_location.svg",
                  },
                  {
                      name: "Algo",
                      number: "50",
                      icon: "/assets/Icon/bx_bxs-server.svg",
                  },
              ]}
        />
          <ImageWithText
              id="about"
              description="O evento será sobre XYZ, contará com ABC..." image="/assets/karine2.png" title="Quem é Karine Rodrigues" features={[
              "Qualificação 1 muito relevante",
              "Segunda qualificação em ordem de importancia",
              "Terceira qualificação",
              "Quarta qualificação"
              ]} />
        <TestimoniSection />
        <CallSection />
        <Feature />
      </Layout>
    </>
  );
}
