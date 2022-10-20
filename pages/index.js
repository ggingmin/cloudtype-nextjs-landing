import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js와 Tailwind CSS로 제작된 랜딩페이지입니다.</title>
        <meta
          name="description"
          content="이 페이지는 Next.js와 Tailwind CSS로 제작되었습니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="클라우드타입"
        title="당신이 클라우드타입을 사용해야 하는 이유">
        세상에서 가장 빠르고 간편한 서비스 배포
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="데모 영상"
        title="클라우드타입으로 배포하기">
        복잡한 과정없이 손쉽게 배포하는 과정을 영상으로 직접 확인하세요
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="고객추천"
        title="사용자 분들의 생생한 사용 후기">
        개발자 분들이 직접 말씀해주신 클라우드타입의 장점
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="자주 묻는 질문">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
