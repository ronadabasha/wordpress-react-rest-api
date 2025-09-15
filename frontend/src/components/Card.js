import DOMPurify from "dompurify";

export default function Card({ item }) {
  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3 mt-4">
      <div className="md:mx-2 flex flex-col w-full h-full bg-white text-[#0e162e] border border-[rgb(140 140 140 / .25)] rounded-md shadow-lg overflow-hidden">
        {/* Image */}
        {item.acf.image && <img alt={item.acf.image} src={item.acf.image} />}

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-6">
          <h2 className="font-bold text-base py-4 mb-4">
            {item.title.rendered}
          </h2>
          <div
            className="text-[#0e162e] flex-1"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.content.rendered),
            }}
          />
        </div>
      </div>
    </div>
  );
}
