const FigmaEmbed = ({ embedUrl }) => {
    return (
      <div className="flex justify-center items-center p-4">
        <iframe
          className="border-2 border-gray-300 rounded-lg shadow-md"
          width="100%"
          height="600"
          src={embedUrl}
          allowFullScreen
        />
      </div>
    );
  };
  
  export default FigmaEmbed;
  