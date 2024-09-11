import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BlurIn from "@/components/ui/blur-in";
import AboutMe from "@/components/ui/about-me";
import { Projects } from "@/components/ui/projects";
import ScrollToTopButton from "@/components/ui/scroll-to-top";
import Particles from "@/components/ui/particles";
export default function Home() {

  return (
    <main className="w-full font-mono flex flex-col min-h-screen items-center justify-center bg-black">
      <div id="#home" className="flex relative flex-col w-full min-h-screen items-center justify-center">
        <BlurIn className="md:text-7xl text-4xl font-bold text-center text-white" word="Alex Saraev" />
        <TextGenerateEffect className="w-full text-center" words={"Web developer passionate about building modern websites."} />
        <div className="w-8/12 h-fit flex flex-col justify-center items-center relative">
          {/* Gradients */}
          <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />
          {/* Core component */}

          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={0.5}
            particleDensity={300}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(600px_300px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div id="#about-me" className="w-11/12 relative my-40 md:w-11/12 xl:w-9/12 h-screen flex items-center justify-center">
        <AboutMe />
        <Particles className="w-full z-0 absolute inset-0"/>
      </div>
      <Projects />
      <ScrollToTopButton />
    </main>
  );
}
