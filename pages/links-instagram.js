import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import CallSection from "../components/CallSection";
import SeoHead from "../components/SeoHead";
import TestimoniSection from "../components/TestimoniSection";
import ImageWithText from "../components/ImageWithText";
import {useI18n} from '../utils/languages'
import Image from 'next/image'
import Head from 'next/head'
import classNames from "classnames";


export default function LinksInstagram() {
  const {getString, locale} = useI18n()
  return (
    <>
      <SeoHead title='Infinite Inteligence Access'/>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700;900&family=Libre+Baskerville&display=swap"
        rel="stylesheet"/>
      </Head>
      <main id="links-instagram">
      
        <div id="brand">
          <img src="/logo-infiniteintelligenceaccess.png"/>
          <div id="languages">
          <a href="/pt/links-instagram">
            <Image width={40} height={30} src="/bandeira-brazil.png" className={classNames("language-selector", {selected: locale === 'pt'})}/>
          </a>
          <a href="/en/links-instagram">
            <Image width={40} height={30} src="/bandeira-usa.png" className={classNames("language-selector", {selected: locale === 'en'})}/>
          </a>
          <a href="/nl/links-instagram">
            <Image width={40} height={30} src="/bandeira-nl.png" className={classNames("language-selector", {selected: locale === 'nl'})}/>
          </a>
        </div>
        </div>
        <div>
          <h1>
            Karine Rodrigues
          </h1>
          <h2>
            Infinite Intelligence ACCESS
          </h2>
        </div>
        <ul id="main-links">
          <li>
            <a href="#" target="_blank">
              <span>{getString('links-instagram.schedule-therapy')}</span>
            </a>
          </li>
          <li>
            <a href="https://forms.gle/vgkti5CVWVmBq45P9" target="_blank">
              <span>{getString('links-instagram.anonymous-agreed-group')}</span>
            </a>
          </li>
          <li>
            <a href={getString('links-instagram.join-group-webnar-form')} target="_blank">
              <span>{getString('links-instagram.join-group-webnar')}</span>
            </a>
          </li>
          {/* <li>
            <a href="#" target="_blank">
              <span>{getString('links-instagram.my-website')}</span>
              <Image src="/globe.png" alt="Globe" width={30} height={30}/>
            </a>
          </li> */}
        </ul>
        <ul id="social-media">
          <li>
            <a href="https://www.instagram.com/infiniteintelligenceaccess/" target="_blank">
                <Image src="/cartao_files/3a8d7aacda991695cb3cbe37cfe32d9d.svg" alt="Globe" width={50} height={50}/>
              </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@infiniteintelligenceaccess5673/videos" target="_blank">
                <Image src="/cartao_files/08cd78ea2560593f6c4cc27a1b52fd9c.svg" alt="Globe" width={50} height={50}/>
              </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@karinerodriguesholistic" target="_blank">
                <Image src="/cartao_files/ae5d41507e04beb3f3466f23c04a36c3.svg" alt="Globe" width={50} height={50}/>
              </a>
          </li>
            
        </ul>
      </main>
    </>
  )
}