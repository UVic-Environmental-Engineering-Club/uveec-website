import type { NextPage } from "next";
import { BaseLayout } from "../src/Layout/BaseLayout";
import ReactTooltip from "react-tooltip";
import { FaInfoCircle } from "react-icons/fa";
import { Carousel } from "../src/components/molecules/Carousel";
import { CarouselMapProject } from "../src/constants";

const Projects: NextPage = () => {
  return (
    <BaseLayout>
      <main>
        <div className="pt-20 mb-20 space-y-20 overflow-visible sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
          <section id="usv">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center space-y-10 md:space-x-10">
              <div className="flex flex-col">

              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
              Underwater Gliders  </h2>
              <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  Underwater gliders are an excellent technology for autonomous data collection, operating without remote control or tethers. These energy-efficient vehicles travel long distances slowly, propelled by changing weight or buoyancy rather than power-intensive propellers. This makes them ideal for long duration missions.
Since the summer of 2023 we have been developing an economical shallow water glider to lower the barrier to entry for student oceanography. Design decisions are carefully made to ensure high performance, capability and affordability. 
Our glider utilizes a water tank and pump to move vertically and a wing to efficiently move forward. Internal motors adjust pitch and roll, with a long-distance communication system that keeps track of the glider’s location and operational status. Our control system makes the glider follow the desired operation path, making it an invaluable tool for environmental research and monitoring. 
The glider is outfitted with a conductivity, temperature and depth sensor (CTD) to create data profiles while traveling across the inlet. CTD data is used as a baseline for many oceanographic properties and cycles, and additional data would contribute to a large variety of research efforts. Following the completion of our data collection mission, we will compile a detailed report presenting the insights gleaned from our glider operations.
</p> 
  

                

                <div className="flex flex-col md:flex-row space-x-0 md:space-x-20 space-y-4 md:space-y-0  mt-4">
                  <div className="flex flex-row items-center">
                    <h2 className="mr-1">Dimension</h2>
                    <div>
                      <FaInfoCircle
                        data-tip="Length: 5 ft<br />Diameter: 2 ft"
                        className="h-5 w-5 hover:cursor-pointer"
                        data-html={true}
                      />
                      <ReactTooltip place="right" type="info" effect="solid" />
                    </div>
                  </div>
                </div>
              </div>
              <Carousel slides={CarouselMapProject} />
            </div>
            {<div className="pt-20 mb-20 space-y-20 overflow-visible sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
                  Unmanned Surface Vehicle
                </h2>
                
                <p className="text-slate-400 mt-4 max-w-3xl space-y-6">
                  An Unmanned Surface Vehicle that will collect microplastics
                  from the ocean: Microplastics are bits of plastic smaller than
                  the end of a pencil, and have significant negative effects on
                  marine life and unknown effects on humans. The twin-hulled
                  catamaran boat will drag a filtration module through ocean
                  water, and collect microplastics. The real innovation in this
                  project was in the planned microbubble filtration: Our founder
                  Jun had been researching project ideas when he came across the
                  idea of using bubbles to float plastic out of water. Because
                  plastic is hydrophobic, which means that water does not stick
                  to it, plastic would much rather stick to tiny air bubbles,
                  and float to the surface.
                </p> 
                
                </div>}
            {/* */}
            {<div className="pt-20 mb-20 space-y-20 overflow-visible sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
              <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50"> Budget and Timeline </h2>
              <p className="text-slate-400 mt-4 max-w-3xl space-y-6">Paragraph </p>
            </div>}
          </section>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Projects;
