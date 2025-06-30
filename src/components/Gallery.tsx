"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { X } from "lucide-react";

interface GalleryProps {
  images?: {
    src: string;
    alt: string;
  }[];
}

export default function Gallery({ images = defaultImages }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <AspectRatio ratio={1 / 1}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Nail art design",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
    alt: "Salon interior",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    alt: "Manicure service",
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    alt: "Nail polish collection",
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
    alt: "Salon ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80",
    alt: "Nail treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=800&q=80",
    alt: "Beauty products",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
    alt: "Salon workspace",
  },
];
