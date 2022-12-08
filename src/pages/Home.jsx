import React from "react";
import {
   Banner,
   Services,
   Blog,
   DoctorsTips,
   TopTrends,
} from "../components/@home";

import About from "../components/@home/faq/About";
import Partners from "../components/@home/Partners";

export default function Home() {
   return (
      <React.Fragment>
         <Banner />
         <section className="container mx-auto">
            <Services />
            <About />
            <DoctorsTips />
            <Blog  />
            <TopTrends />
            <Partners />
         </section>
      </React.Fragment>
   );
}
