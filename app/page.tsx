import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import GridTechnologies from "@/components/ui/grid-technologies";
export default function Home() {
  return (
    <main className="w-full font-mono flex flex-col min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col w-full h-screen items-center justify-center">
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
      <LampContainer className="w-full pt-80">
        <div className="w-11/12 flex flex-col items-center justify-center space-y-4 pt-20 pb-20">
          <h1 className="text-4xl max-w-4xl font-bold text-center text-white relative z-20 w-6/1">
            Hi! My name is <span className="text-sky-500">Alex Saraev</span>
          </h1>
          <div className="w-11/12 text-white space-y-10">
            <h2 className="text-xl text-center font-semibold">
              A passionate and dedicated web developer with a strong
              enthusiasm for learning and exploring the latest trends in <span>web</span> technologies.
            </h2>
            <GridTechnologies/>
          </div>
        </div>
      </LampContainer>
    </main>
  );
}
