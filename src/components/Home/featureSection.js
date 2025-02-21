import React from "react"
import Fade from "react-reveal/Fade"
import ExperienceSection from "../Experience/experienceSection"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Map from "../Map";
// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"
import OspitalitaImage from "../../images/foto_tessera.jpg"
import StrutturaImage from "../../images/struttura.jpg"
import OlioImage from "../../images/olio_2.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logoPilota from "../../images/logoRev.png"
import { IoIosAirplane } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const FeatureSection = ({ box_1, box_2, attivita }) => {

  const image_ospitalita = getImage(box_1.immagine);

  const image_struttura = getImage(box_2.immagine);


  return (
    <div className="max-w-7xl mx-auto">

      <ExperienceSection attivita={attivita} />

      <div className="LUCA max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
           {/*  <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={OspitalitaImage}
              alt="Tessera Hospitalis"
            ></img> */}
            <GatsbyImage
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              image={image_ospitalita}
              alt="Tessera Hospitalis"
            />
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">

            <img className="logo-section w-16 md:w-24" src={logoPilota} alt="Logo" />
            <h2 className="text-black md:text-3xl sm:text-2xl font-semibold">{box_1.preTitolo}</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
              {box_1.titolo}
            </h3>

            {/* <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              HOSPES in origine è il “padrone di casa” che dà ospitalità al forestiero;
              i rapporti che si istauravano tra chi accoglieva e chi era accolto erano
              così stretti che, sin dai tempi più antichi, hospes ha indicato anche
              la persona accolta in casa d’altri...
            </p> */}
             <div className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              {documentToReactComponents(JSON.parse(box_1.testo.raw))}
            </div>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/ospitalita"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-black md:py-3 md:text-lg md:px-10"
                >
                  Approfondisci
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex mx-2 md:mx-0   justify-space xxs:flex-col xs:flex-col sm:flex-row">


          <div className="w-4/6  bg-gray-800  p-8 rounded-xl sm:m-0 md:m-5 md:mt-0 xxs:w-full xs:w-full sm:w-4/6">
            <img className="logo-section w-16 md:w-24 sx" src={logoPilota} alt="Logo" />
            <h2 className="text-white text-4xl">
              {box_2.titolo}
            </h2>
            <div className="mt-10 text-white opacity-70 text-base text-black-70  sm:text-lg md:text-xl ">
            {documentToReactComponents(JSON.parse(box_2.testo.raw))}
              </div>
          </div>

          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-0 rounded-xl sm:m-0 mt-2  md:m-5 md:mt-0 xxs:w-full xs:w-full sm:w-2/6 hidden md:block">
           
            {/* <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={StrutturaImage}
              alt="La struttura"
            ></img> */}
            <GatsbyImage
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              image={image_struttura}
              alt="La struttura"
            />
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3 mt-4 md:mt-0">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">


          <div className="lg:w-1/2 sm:text-center lg:text-left flex flex-col justify-center">
            <img className="logo-section w-16 md:w-24 sx" src={logoPilota} alt="Logo" />
            <h2 className="text-black md:text-4xl sm:text-3xl font-semibold">ELOGIO AI FRUTTI DELLA TERRA</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
              L'OLIO
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              La nostra azienda agricola, LUMA frutti antichi, si trova alle pendici del caratteristico borgo medievale di Casperia, bandiera arancione.
              La produzione di olio extravergine di oliva è curata nei dettagli per garantire una qualità elevata e degna del nostro territorio. La Sabina era infatti già famosa per l' olio ai tempi dei Romani, quando, non lontano dalla Casa del Viandante, partivano i carichi via Tevere, destinati alla Capitale. Il nostro olio viene colto a mano, ad un grado di maturazione studiato per garantire la massima presenza di polifenoli e spremuto a freddo, entro due giorni dalla raccolta.
              L'azienda ha recentemente aggiunto un impianto di more con il progetto di offrire confetture ed altri prodotti correlati.
              Sui nostri terreni sono in oltre presenti un orto familiare, coltivato con ispirazione sinergica e biologica e tante erbe aromatiche.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {/* <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-black text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                 Chiamaci
                </a>
              </div> */}
              {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-black md:py-3 md:text-lg md:px-10"
                >
                  Approfondisci
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={OlioImage}
              alt="L'Olio"
            ></img>
          </div>
        </div>
      </div>

      {/* CONTATTI */}

      <div id="contattaci" className=" max-w-7xl mx-auto lg:px-8 md:px-3 border-t-4 border-b-4 pb-6 mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">


          <div className="lg:w-1/2 sm:text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">COME</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
              CONTATTARCI
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              Contattaci per avere più informazioni sull'ospitalità, le attività o per lasciarci un messaggio.
            </p>
          </div>
          <div className="lg:w-1/2 my-4 flex md:justify-end sm:justify-start content-center">
            <ul>
              <li><div className="md:text-2xl sm:text-xl flex items-center mb-2"><FaSquarePhone className="mr-2" size="28" /> Telefono: +39 3279027107</div></li>
              <li><div className="md:text-2xl sm:text-xl flex items-center mb-2"><FaWhatsapp className="mr-2" size="28" /> Whatsapp: +39 3279027107</div></li>
              <li><div className="md:text-2xl sm:text-xl flex items-center mb-2"><CiMail className="mr-2" size="28" /> Mail: ilviandanteinsabina@gmail.com</div></li>
              <li><div className="md:text-2xl sm:text-xl flex items-center mb-2"><a className="flex text-black md:text-2xl sm:text-xl" href="https://www.instagram.com/ilviandanteinsabina?igsh=NjV2cmxxdTVtcGE4" target="_blank"><FaInstagram className="mr-2" size="28" /> Instagram</a></div></li>
              <li><div className="md:text-2xl sm:text-xl flex items-center"><a className="flex text-black md:text-2xl sm:text-xl" href="https://www.facebook.com/profile.php?id=100012826775817" target="_blank"><FaFacebook className="mr-2" size="28" /> Facebook</a></div></li>
            </ul>
          </div>
        </div>
      </div>

      {/*  <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          OPEN SOURCE
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
          A React based framework
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div> */}

      {/*  <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INTEGRATIONS
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
          Discover and connect
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-black text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}

      {/*  <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade> */}

      <div id="dove" className=" max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="w-full sm:text-center lg:text-left flex flex-col justify-center">

            <h2 className="text-black text-4xl font-semibold">COME</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
              RAGGIUNGERCI
            </h3>
            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:ml-0">
              la nostra struttura si trova in <span className="font-bold">CONTRADA GALANTINA, 1 FORANO 02044 (RIETI)</span>, all'incrocio tra la SR313 E LA SR657 di fronte allo SNACK BAR ALESSIO, si sale la strada bianca per 50 metri e si è arrivati al cancello d'ingresso.
            </p>

          </div>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto lg:px-8 md:px-3 border-b-4 pb-6 mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">


          <div className="lg:w-1/3 sm:text-center lg:text-left flex flex-col justify-center md:pr-3">
            <div className="come-arrivare flex flex-col">
              <div className="mb-3">
                <div className="flex"><FaCar size="20" /><span className="font-bold ml-2 uppercase">Macchina</span></div>
                <p>Uscita autostradale Ponzano Soratte, seguire SR657 la Sabinese, poco prima dell'incrocio con SR313 la Ternana, fermarsi davanti al bar di Alessio e proseguire sulla sterrata che sta di fronte al bar sulla sinistra.</p>
              </div>
              <div className="mb-3">
                <div className="flex"><FaTrain size="20" /><span className="font-bold ml-2 uppercase">TRENO</span></div>
                <p>La Stazione di Poggio Mirteto scalo è la più vicina. Offriamo gratuitamente un servizio navetta, prendendo precedenti accordi.</p>
              </div>
              <div>
                <div className="flex"><IoIosAirplane size="20" /> <span className="font-bold ml-2 uppercase">AEREO</span></div>
                <p> Da Fiumicino aeroporto c'è il treno per Poggio Mirteto o per Orte che ferma a Poggio Mirteto scalo. Offriamo gratuitamente un servizio navetta, prendendo precedenti accordi.
                </p>
              </div>
            </div>


            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

            </div>
          </div>
          <div className="lg:w-2/3 my-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53327.17354870804!2d12.64899658621124!3d42.27385977214411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f0f4c39edfb2b%3A0x35520aa8e700e1e9!2sLa%20Casa%20del%20Viandante!5e0!3m2!1sit!2sit!4v1738004727076!5m2!1sit!2sit" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient-old bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-black text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}



export default FeatureSection
