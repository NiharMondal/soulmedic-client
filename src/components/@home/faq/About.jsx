import Accordion from './Accordion'
import Why from './Why'
export default function About() {
  return (
     <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Accordion />
        <Why />
     </section>
  );
}
