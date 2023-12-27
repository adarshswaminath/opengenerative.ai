import Card from "./Card";

const foundersList = [
  {
    name: "Quivr",
    image: "/images/quivr-logo.png",
  },
  {
    name: "PrivateGPT",
    image: "/images/privategpt.jpeg",
  },
  {
    name: "Langchain",
    image: "/images/langchain.png",
  },
  {
    name: "Llama Index",
    image: "/images/llama_index.png",
  },
  {
    name: "Hugging Face",
    image: "/images/hf-logo.png",
  },
  {
    name: "Supabase",
    image: "/images/supabase.png",
  },
  {
    name: "Theodo",
    image: "/images/theodo.png",
  },
  {
    name: "singlestore",
    image: "/images/singlestore.png",
  },
  {
    name: "Neon Database",
    image: "/images/neon.png",
  },
];
function FoundingMembers() {
  return (
    <div class="min-h-screen bg-black mt-2 text-center p-3">
      <h2 class="text-2xl font-bold m-3">The Founding Members</h2>
      <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {foundersList.map((value,index) => (
            <div key={index}>
                <Card image={value.image} name={value.name} />
            </div>
        ))}
      </div>
    </div>
  );
}

export default FoundingMembers;
