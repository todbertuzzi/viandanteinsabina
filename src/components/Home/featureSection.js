import React from "react"
import Fade from "react-reveal/Fade"
import ExperienceSection from "../Experience/experienceSection"
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

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">

      <ExperienceSection />

      <div className="LUCA max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={OspitalitaImage}
              alt="Tessera Hospitalis"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">IL NOSTRO CONCETTO DI</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient-old bg-gradient-to-r from-pink to-purple">
              OSPITALITÀ
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              HOSPES in origine è il “padrone di casa” che dà ospitalità al forestiero;
              i rapporti che si istauravano tra chi accoglieva e chi era accolto erano
              così stretti che, sin dai tempi più antichi, hospes ha indicato anche
              la persona accolta in casa d’altri...
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              {/* <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-black text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Chiamaci
                </a>
              </div> */}
              <div className="mt-3 sm:mt-0 sm:ml-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">


          <div className="w-4/6  bg-gray-800  p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              La gioia di incontrarsi
            </h2>
            <p className="mt-10 text-white opacity-70">
              La Casa del Viandante è un luogo di pace, su un crocevia di strade e di cammini.
              È la casa che accoglie tutti i viaggiatori, siano essi lavoratori, vacanzieri, esploratori del territorio o dello spirito.
              La nostra struttura nasce con l' intento di unire un' atmosfera familiare e rilassante alla possibilità di fare esperienze a carattere culturale, sportivo e spirituale.
              Nella cucina condivisa è sempre presente una bacheca con tanti spunti per i viaggiatori: trekking organizzati, equitazione, canoa, spettacoli e festival musicali, le immancabili sagre e molto ancora. Siamo  sempre felici di darvi informazioni e di aiutarvi.
              Nella Stanza delle Attività si svolgono corsi e seminari che organizziamo personalmente: il calendario è aggiornato ogni settimana.
              I ciclisti, i camminatori e i pellegrini sono i benvenuti per una sosta comoda e sicura. In struttura è possibile fare il bucato e cucinare i pasti. Le biciclette sono custodite con cura.
            </p>
          </div>

          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-0 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            {/* <span className="text-black font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Gatsby 5+</p>
                <p className="text-black opacity-50 text-sm">SSG and more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">React 18+</p>
                <p className="text-black opacity-50 text-sm">Create more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tailwind CSS 3+</p>
                <p className="text-black opacity-50 text-sm">
                  A utility-first CSS
                </p>
              </div>
            </div> */}
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={StrutturaImage}
              alt="La struttura"
            ></img>
          </div>
        </div>
      </Fade>

      <div className=" max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">


          <div className="lg:w-1/2 sm:text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">ELOGIO AI FRUTTI DELLA TERRA</h2>
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

      <div className=" max-w-7xl mx-auto lg:px-8 md:px-3 border-t-4 border-b-4 pb-6 mt-6">
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
          <div className="lg:w-1/2 my-4 flex justify-end content-center">
                <ul>
                  <li><h3 className="text-2xl flex items-center mb-2"><FaSquarePhone className="mr-2" size="28"/> Telefono: +39 3279027107</h3></li>
                  <li><h3 className="text-2xl flex items-center mb-2"><FaWhatsapp className="mr-2" size="28"/> Whatsapp: +39 3279027107</h3></li>
                  <li><h3 className="text-2xl flex items-center"><CiMail className="mr-2" size="28"/> Mail: ilviandanteinsabina@gmail.com</h3></li>
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
      <div className=" max-w-7xl mx-auto lg:px-8 md:px-3 ">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 justify-center xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className=" sm:text-center lg:text-center flex flex-col justify-center">
            <h2 className="text-black text-2xl font-semibold">SIAMO ANCHE SU</h2>
          </div>
          
        </div>
      </div>
      <Fade bottom cascade>
        <div className="mt-0 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-start align-middle text-center">
          <div className="w-3/6 p-8  rounded-xl m-5 xxs:w-full xs:w-full sm:w-3/6">
           
            <div className="mt-1 flex items-center  justify-center text-black text-xl">
              <FaInstagram className="mr-2" size="50"/> Instagram</div>
          </div>

          <div className="w-3/6  p-8 flex justify-center rounded-xl m-5 xxs:w-full xs:w-full sm:w-3/6">
           
            <div className="mt-1 flex items-center  justify-center text-black text-xl">
              <FaFacebook className="mr-2" size="50"/> Facebook
            </div>
          </div>
          
        </div>
      </Fade>
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
