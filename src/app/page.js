import FinancialServices from "@/pages/FinancialSer/page";
import WhyChooseUs from "@/pages/WhyChooseUs/page";
import ServicesGrid from "./services/TaxService/page";
import CompanyFormation from "./services/CompanyFormation/page";
import AdvisoryServices from "./services/AdvisoryServices/page";
import DraftingServices from "./services/DraftingServices/page";
import AppealsLitigation from "./services/AppealsLitigation/page";
import Contactus from "./components/ContactUs/ContactUs";
import Testimonial from "@/pages/Testimonials/page";
import Navbar from "@/pages/Navbar/Navbar";
import Hero from "@/pages/Hero/Hero";
import Certification from "./components/Certification/page";
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer/Footer";
import Career from "./components/Career/page";
import Gallery from "./components/Gallary/Gallary";
import TaxAudit from "./services/AuditServices/TaxAudit/page";
import TaxService from "./services/TaxService/page";
import AdBar from "@/pages/AdBar/page";
import Zero from "@/pages/Hero/zero";

export default function Home() {
  return (
    <div>
    <Hero />
    <AdBar />
    <FinancialServices />
    <WhyChooseUs />
    <Testimonial />
    <Certification />
    <Achievements />
    </div>
  );
}
