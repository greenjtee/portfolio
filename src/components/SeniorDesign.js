export default function SeniorDesign() {
   return (
      <div className="senior-design">
         <div className="senior-design-item">
            <div className="senior-design-content">
               <div className="senior-design-header">Description</div>
               <div className="senior-design-text">
                  My senior design team is sdmay23-28, Digital Chip Fabrication. Our advisor/client is Dr. Duwe.
                  <br />
                  <br />
                  The goal of our project is to better understand the Efabless chip fabrication process.
                  In doing this, we can assist Dr. Duwe in designing and operating a chip design curriculum,
                  somethink that Iowa State is in need of.
                  <br />
                  <br />
                  Efabless is a program that Google has funded, allowing open-source hardware designs to be fabricated at no charge
                  to the developers.
                  Our design will function as a Spiking Neural Network, with the goal of classifying handwritten digits,
                  an entry level application that many traditional neural networks use as a good "Hello World" example.
                  Since our goal is to develop the documentation and knowledge of digital chip fabrication, this simple but relatively
                  novel (due to the use of a spiking neural network) application is a good starting point.
               </div>
            </div>
         </div>
         <div className="senior-design-item">
            <div className="senior-design-content">
               <div className="senior-design-header">My role</div>
               <div className="senior-design-text">
                  During senior design, my role mostly involved Hardware Design, Environment Setup, and Tool Research.
                  <br />
                  <br />
                  In terms of hardware design, I was able to work on many of the individual parts, including our main neuron component and its tests.
                  I also was able to learn SNNTorch, a useful python library that our team made use of for modeling Spiking Neural Networks. From this tool,
                  I could export the trained weights for our network to make use of.
                  <br />
                  <br />
                  The environment setup, while documented by the Efabless Caravel Harness repository, often leads to various errors to to a combination of
                  host operating system, docker installation, pip, and others. Due to this, I helped our team troubleshoot the environment setup and document how
                  to fix some of these errors, something especially useful for the documentation component of our project to bring new teams up faster.
                  <br />
                  <br />
                  There are many tools involved in the Efabless hardware design flow, including GTKWave, Klayout, the Caravel harness, and others.
                  Due to this, my team and I were all involved with gaining a better understanding of these tools and documenting our findings.
               </div>
            </div>
         </div>
         <div className="senior-design-item">
            <div className="senior-design-content">
               <div className="senior-design-header">Skills and Knowledge Gained</div>
               <div className="senior-design-text">
                  <ul>
                     <li>Verilog HDL</li>
                     <li>GTKWave</li>
                     <li>Caravel Harness and Fabrication Process</li>
                     <li>SNNTorch</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="senior-design-item">
            <div className="senior-design-content">
               <div className="senior-design-header">Big picture contribution</div>
               <div className="senior-design-text">
                  My major contributions to this project were understanding the environment and tools,
                  design and implementation of a Spiking Neural Network in RTL,
                  and assisting documentation of the process.
               </div>
            </div>
         </div>
         <div className="senior-design-item">
            <div className="senior-design-content">
               <div className="senior-design-header">Supporting documents</div>
               <div className="senior-design-text">
                  <ul>
                     <li><a href="https://sdmay23-28.sd.ece.iastate.edu/docs/Final%20Design%20Document%202022.pdf">Final Design Document</a></li>
                     <li><a href="https://sdmay23-28.sd.ece.iastate.edu/docs/Final%20Presentation.pdf">Final Presentation</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
