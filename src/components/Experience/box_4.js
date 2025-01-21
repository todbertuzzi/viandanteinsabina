import React, { useEffect } from "react"
import { initAccordion } from 'david-ai';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
const Box_4 = () => {
    useEffect(() => {
        initAccordion();
    }, []);


    return (
        <>
            <p className="font-semibold mb-1">
                “Ci siano luci nel firmamento del cielo, per distinguere il giorno dalla notte; servano da segni per le stagioni, per i giorni e per gli anni e servano da luci nel firmamento del cielo per illuminare la terra”
            </p>
            <p className="font-semibold mb-1">
                Genesi 1,14-18
            </p>


            <br />
            <p className="mb-2">
                Il percorso si svilupperà con cadenza stagionale, quindi 4 incontri. La partecipazione massima prevista è di 10 allievi per sessione di studio, dove oltre all'aspetto più fisico delle sequenze, verranno approfonditi alcuni testi relativi alla concezione della natura secondo i principi ayurvedici, e dello spirito secondo alcuni studiosi del tempo che ci indicheranno la via per raggiungere il nostro personale obbiettivo (da Annick de Souzenelle a Carlo Rovelli)
            </p>
            <div className="group block w-full pb-5" aria-disabled="false" data-dui-accordion-container data-dui-accordion-mode="exclusive">
                <div
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-stone-800 cursor-pointer"
                    data-dui-accordion-toggle
                    data-dui-accordion-target="#basicAccordionCalendario"
                    aria-expanded="false">
                    <div className="flex items-center">
                        <FaRegCalendarAlt className="mr-2" /> CALENDARIO DEGLI INCONTRI
                    </div>
                    <svg data-dui-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4 rotate-180">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div id="basicAccordionCalendario" className="overflow-hidden transition-all duration-300 border-b border-stone-200 ">

                    <ul>
                        <li>- 23/03/25 La primavera e le qualità sottili del fuoco. Il calore</li>
                        <li>- 22/06/25 L’estate e la ricchezza dei suoi frutti. Il cuore danza</li>
                        <li>- 22/9 L’autunno e la sua vocazione al ritiro/stasi delle funzionalità organiche. La meditazione del corpo. La Terra in-attesa</li>
                        <li>- 21/12 L’inverno e Le radici che assorbono l'acqua. La fluidità immobile </li>
                    </ul>

                </div>


            </div>
            <div className="group block w-full pb-5" aria-disabled="false" data-dui-accordion-container data-dui-accordion-mode="exclusive">
                <div
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-stone-800 cursor-pointer"
                    data-dui-accordion-toggle
                    data-dui-accordion-target="#basicAccordionInfo"
                    aria-expanded="false">
                    <div className="flex items-center">
                        <IoIosInformationCircleOutline className="mr-2" /> INFORMAZIONI
                    </div>
                    <svg data-dui-accordion-icon width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4 rotate-180">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div id="basicAccordionInfo" className="overflow-hidden transition-all duration-300 border-b border-stone-200 ">
                    <p className="mb-2">
                        L'avvicendarsi delle stagioni nella natura del modo fisico procede ed e' immagine di ciò che accade nel mondo spirituale.
                    </p>
                    <p className="mb-2">
                    </p>
                    Le stagioni esteriori procedono di pari passo con l'avvicendarsi di quelle che coinvolgono il nostro ciclo vitale naturale.
                    <p className="mb-2">
                        Secondo la legge della causa ed effetto, abbiamo la possibilità di osservare quali cambiamenti avvengono all'interno di questi due mondi e nello stesso tempo trarne degli insegnamenti.
                    </p>
                    <p className="mb-2">
                        Io studio dei sogni, il mondo simbolico e gli archetipi possono indicarci la natura dei nostri obiettivi e mostrarci la via per giungervi.
                    </p>
                    <p className="mb-2">
                        Il metodo utilizzato per favorire questa relazione è lo Yoga Ratna ideato dalla Maestra Gabriella Cella, dove l'uso del simbolo e le forme femminili attigue alle divinità indiane, aiutano il corpo e la mente a ritrovare una memoria perduta e una verità in costante evoluzione.
                    </p>
                </div>


            </div>
            <p>
                Gli incontri saranno di 4 ore ciascuno dalle 9 alle 13, piu’ il pranzo condiviso(ognuno porta qualcosa)
            </p>



            <p className="mb-2 font-bold"> La Quota prevista per la partecipazione e’ 140 euro per 4 incontri, oppure 35 euro per l’incontro singolo</p>

        </>
    )
}



export default Box_4
