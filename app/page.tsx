import Recipe from "@/components/Receipe/Recipe";
import { recipes } from ".";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-12">
      {recipes.map((recipe) =>
      <Recipe 
      title={recipe.title}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      />
      )}
    </main>
  );
}
