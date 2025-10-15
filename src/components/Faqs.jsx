import IconStar from "../assets/images/icon-star.svg";
import faqs from "../data.json";
import Faq from "./Faq";

export default function Faqs() {
  return (
    <div className="bg-white px-6 py-8 rounded-lg max-w-160 z-10">
      <header className="flex items-center gap-5 pb-8">
        <img src={IconStar} alt="Icon Star" />
        <h1 className="text-3xl text-purple-950 font-bold">FAQs</h1>
      </header>
      <main className="flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <Faq title={faq.title} description={faq.description} index={index} />
        ))}
      </main>
    </div>
  );
}
