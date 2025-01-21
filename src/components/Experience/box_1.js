

import React, { useEffect } from "react"
import { initAccordion } from 'david-ai';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Box_1 = () => {
    useEffect(() => {
        initAccordion();
    }, []);

    return (
        <>
            <p>
                Il corso è a cura di <span className="font-semibold">Donatella Livigni</span>, docente di canto funzionale e integrato, antropologa della musica ed esperta in
                studi sulle civiltà arcaiche, musicista e performer,riflessologa e operatrice olistica.</p>
            <p>
                I seminari prevedono un massimo di 10 partecipanti e si
                attiveranno al raggiungimento di un minimo di 8 persone , <span className="font-semibold">COSTO 30€</span>
            </p>
            <div className="group block w-full py-3" aria-disabled="false" data-dui-accordion-container data-dui-accordion-mode="exclusive">
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
                    <p>Un percorso di crescita personale attraverso il potere della voce,
                        diviso in cinque incontri a cadenza mensile ciascuno della durata di
                        3 ore, <span className="font-semibold">la Domenica dalle 10.00 alle 13.00.</span></p>
                    <p>Ogni incontro tratterà un tema specifico, approfondendo la relazione tra canto e vita e scoprendo, così, come nel
                        cantare sia insito un bisogno tanto ancestrale quanto funzionale per tutti i sistemi vitali sul piano fisico, psichico
                        e spirituale.
                    </p>
                    <p> Esperienze sensoriali, corporee e simboliche e improvvisazioni corali saranno gli ingredienti di ogni seminario.  </p>
                    <br />
                    <p> N.B. Gli incontri hanno carattere pratico e sono aperti a tutti, come aggiornamento per chi già canta, per i
                        professionisti del corpo e per chiunque senta il desiderio di voler sviluppare il rapporto con la propria voce.
                    </p>
                </div>


            </div>

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
                    <p >

                        <ul>

                            <li className="font-semibold">DOMENICA 2 FEBBRAIO - LA VIBRAZIONE: ALL'ORIGINE DEL CANTO</li>
                            <li className="font-semibold"> DOMENICA 16 MARZO ~ L'ORECCHIO E LA VITA: RINASCERE NELLA VOCE</li>
                            <li className="font-semibold"> DOMENICA 13 APRILE - LA LARINGE: IL CUORE DELLA VOCE</li>
                            <li className="font-semibold"> DOMENICA 11 MAGGIO - LE CORDE VOCALI: LE ALI DELLA VOCE</li>
                            <li className="font-semibold mb-3"> DOMENICA 8 GIUGNO - IL PAVIMENTO PELVICO: RADICARSI PER CANTARE</li>
                        </ul>
                    </p>
                </div>


            </div>


            
        </>
    )
}

export default Box_1
