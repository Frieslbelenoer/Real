"use client";

import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar.tsx";
import { TextLoop } from "src/components/ui/text-loop";

export const HeroSection = () => {
  return (
    <div className="flex w-full items-center gap-4">
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/Frieslbelenoer.png" alt="@Frieslbelenoer" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">mrboxs</h1>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <p>amateur</p>
          <TextLoop
            className="overflow-y-clip"
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 80,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
              },
            }}
          >
            <span>Si Paling Turu</span>
            <span>Ragnarok Enthusiast</span>
            <span>3D Generalist</span>
            <span>Entry Level IT</span>
            <span>Simple Coder</span>
          </TextLoop>
        </div>
      </div>
    </div>
  );
};