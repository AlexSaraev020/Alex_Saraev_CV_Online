import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20">
          Alex Saraev
        </h1>
        <TextGenerateEffect className="w-full text-center" words={"Building the future of the web with cutting-edge technologies and a passion for innovation."} />
        <div className="w-8/12 h-full flex flex-col justify-center items-center relative">
          {/* Gradients */}
          <div className="bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />
          {/* Core component */}
          <div className="w-6/12 h-full rounded-full">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(600px_300px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

    </main>
  );
}
