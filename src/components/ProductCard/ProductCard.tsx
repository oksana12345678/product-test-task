import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import React from "react";
import Button from "../Button/Button";

const ProductCard: React.FC = () => {
  return (
    <div className="w-auto h-48">
      <AspectRatio.Root ratio={16 / 9} className="flex gap-4">
        <img
          className="w-full h-full object-cover rounded-lg" // Adjusted for better fit
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius" // Meaningful alt text
        />
        <div className="flex flex-col justify-between p-2">
          <p className="text-ellipsis overflow-hidden h-14">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            quas aperiam consequuntur facilis fugiat ut numquam consequatur ipsa
            beatae commodi neque minus temporibus delectus voluptate,
            repudiandae ex ea. Odit, consectetur?
          </p>
          <Button className="bg-slate-400 p-3 rounded-xl">Click me!</Button>
        </div>
      </AspectRatio.Root>
    </div>
  );
};

export default ProductCard;
