import React from "react"
import OspitalitaImage from "../../images/foto_tessera.jpg"
const OspitalitaExtra = () => {
    return (
        <div className="max-w-5xl mr-auto mt-10">
            <div className="mt-10 px-8">

                <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
                    OSPITALITA' viene dalla parola latina HOSPES
                </p>
                <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
                    HOSPES in origine è il “padrone di casa” che dà ospitalità al forestiero; i rapporti che si istauravano tra chi accoglieva e chi era accolto erano così stretti che, sin dai tempi più antichi, hospes ha indicato anche la persona accolta in casa d’altri. </p>
                <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
                    La reciprocità del patto di ospitalità è dunque all’origine del doppio significato della parola ospite.
                    La Casa del Viandante è il luogo dove tale patto avviene ogni volta che un viaggiatore, un forestiero arriva da noi.
                </p>
                <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
                    L'accoglienza è un rito antico che implica l'essere accolti e sostenuti per il proprio viaggio.
                </p>
                <p className="text-black font-bold font-semibold opacity-70 font-normal mt-3 text-lg xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">

                    Come nell'antichità abbiamo introdotto la TESSERA HOSPITALIS, era un documento che proteggeva il forestiero e ne garantiva il transito da parte dell' Hospes; ne abbiamo fatto una versione moderna e un ricordo per il viandante che soggiorna da noi.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
                    <div className="rounded-md">
                        <img
                            className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src={OspitalitaImage}
                            alt="Tessera Hospitalis"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OspitalitaExtra
