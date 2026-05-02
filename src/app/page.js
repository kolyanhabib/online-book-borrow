import FeaturedBooks from "@/components/book/FeaturedBooks";
import BreakingNews from "@/components/breakingnews/BreakingNews";
import Banner from "@/components/hero/Banner";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/whychooseus/WhyChooseUs";

const page = () => {
  return (
    <div>
      <Banner />

      <BreakingNews />

      <FeaturedBooks />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default page;
