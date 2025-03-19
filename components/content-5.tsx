"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function ContentSection5() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load TidyCal script for the calendar
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // ✅ Sound ON
      videoRef.current.volume = 1.0; // ✅ Max volume
      videoRef.current.play().catch((error) => console.error("Playback failed:", error));
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="pt-16 text-balance text-4xl font-semibold lg:text-5xl">
            Bespaar tijd en werk slimmer met AI voor Makelaars
          </h2>
          <p className="text-lg text-gray-600">
            AI voor Makelaars helpt je sneller en efficiënter werken. Wij automatiseren tijdrovende taken, verbeteren leads en optimaliseren klantcontact. Zo focus jij op wat écht belangrijk is: meer deals sluiten en je bedrijf laten groeien.
          </p>
        </div>

        {/* Video + Image (Fallback) */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-black">
          {/* Video Element (Visible when clicked) */}
          <video
            ref={videoRef}
            src="/demo.mp4"
            className={`w-full h-auto rounded-2xl transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0 absolute"
            }`}
            controls
            playsInline
            onCanPlay={() => setIsLoaded(true)}
          />

          {/* Play Button (Only Shows if Video is Not Playing) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
              <button
                onClick={handlePlay}
                className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition"
              >
                ▶ Start Video
              </button>
            </div>
          )}

          {/* Image Fallback (Only Visible Until Video Starts) */}
          {!isPlaying && (
            <img
              src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop"
              alt="AI Makelaars"
              className="w-full h-auto rounded-2xl"
            />
          )}
        </div>

        {/* Features Grid */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-blue-500" />
              <h3 className="text-sm font-medium">Sneller werken</h3>
            </div>
            <p className="text-muted-foreground text-sm">Automatiseer taken en bespaar uren per week.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-blue-500" />
              <h3 className="text-sm font-medium">Slimmere leads</h3>
            </div>
            <p className="text-muted-foreground text-sm">Krijg betere inzichten en verhoog je conversies.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-blue-500" />
              <h3 className="text-sm font-medium">Veilig en betrouwbaar</h3>
            </div>
            <p className="text-muted-foreground text-sm">AI-oplossingen met volledige privacybescherming.</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-blue-500" />
              <h3 className="text-sm font-medium">Meer deals</h3>
            </div>
            <p className="text-muted-foreground text-sm">Optimaliseer klantcontact en sluit sneller deals.</p>
          </div>
        </div>

        {/* TidyCal Embed (Always Visible) */}
        <div className="tidycal-embed" data-path="ai-voor-makelaars/demo-consult"></div>
      </div>
    </section>
  );
}