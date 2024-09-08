import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import AboutMe from "@/components/ui/about-me";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import ScrollToTopButton from "@/components/ui/scroll-to-top";
export default function Home() {
 
  return (
    <main className="w-full font-mono flex flex-col min-h-screen items-center justify-center bg-black">
      <div id="#home" className="flex flex-col w-full h-screen items-center justify-center">
        <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20">
          Alex Saraev
        </h1>
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
      <div id="#about-me" className="w-full h-screen">
        <LampContainer className="w-full h-screen pt-80">
          <div className="w-11/12 h-full flex flex-col items-center justify-center space-y-4 pb-60">
            <AboutMe />
          </div>
        </LampContainer>
      </div>

      <GridBackgroundDemo />

      <ScrollToTopButton />
    </main>
  );
}
