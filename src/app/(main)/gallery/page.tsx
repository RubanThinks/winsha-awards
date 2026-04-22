import { Metadata } from "next";
import { Award, Trophy } from "lucide-react";
import { getWinners, getGallery } from "@/app/actions/firestore";
import ImageCard from "@/components/shared/ImageCard";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Gallery | Winsha Awards",
  description: "Browse the Winsha Awards gallery — featuring past winners, ceremony highlights, and moments of excellence.",
};

export default async function GalleryPage() {
  let winners: any[] = [];
  let galleryItems: any[] = [];

  try {
    winners = await getWinners();
  } catch (e) {
    winners = [];
  }

  try {
    galleryItems = await getGallery();
  } catch (e) {
    galleryItems = [];
  }

  return (
    <div className="flex flex-col pt-24">

      {/* Cinematic Hero */}
      <section className="relative py-32 md:py-44 px-6 md:px-10 bg-black overflow-hidden flex items-center justify-center">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold-light text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-2xl">
            Hall of Fame
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-white italic mb-8 leading-[0.9] drop-shadow-2xl">
            Gallery of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Excellence
            </span>
          </h1>
          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            A visual journey through the Winsha Awards legacy — honouring the pioneers 
            and moments that define absolute business greatness.
          </p>
        </div>
      </section>

      {/* Winners Grid */}
      <section className="py-20 px-6 md:px-10 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3 block">Laureates</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-accent italic">Past Winners</h2>
          </div>

          {winners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {winners.map((winner: any, i: number) => (
                <ImageCard 
                  key={winner.id} 
                  item={winner} 
                  aspectRatio="portrait" 
                  delay={i * 100} 
                  isGallery={false}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={item * 100}
                  className="aspect-[4/5] rounded-3xl bg-white border border-black/5 flex flex-col items-center justify-center gap-4 text-accent/15"
                >
                  <Award className="w-14 h-14" />
                  <p className="text-xs font-bold uppercase tracking-widest">Awaiting Entries</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-aos="fade-up">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3 block">Moments</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-accent italic">Event Highlights</h2>
          </div>

          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item: any, i: number) => (
                <ImageCard 
                  key={item.id} 
                  item={item} 
                  aspectRatio="square" 
                  delay={i * 80} 
                  isGallery={true}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={item * 80}
                  className="aspect-square rounded-2xl bg-secondary border border-black/5 flex items-center justify-center text-accent/10"
                >
                  <Trophy className="w-10 h-10" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
