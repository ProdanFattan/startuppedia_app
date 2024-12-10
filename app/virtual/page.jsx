import FigmaEmbed from "../components/FigmaEmbed";

export default function VirtualTour() {
  const embedUrl =
    "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/HQqnY5EVPY4VILlJPbWeHN/Virtual-Tour?node-id=69-385&node-type=canvas&t=gWek7oWcSIPqNJlO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 my-6">Virtual Tour</h1>
      <FigmaEmbed embedUrl={embedUrl} />
    </div>
  );
}
