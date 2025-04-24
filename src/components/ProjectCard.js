export default function ProjectCard({ project }) {
  const {
    name,
    location,
    price,
    status,
    image,
    details = [],
    url,
  } = project;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border hover:shadow-md transition-all duration-300">
      {image && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={name}
            className="w-full h-40 object-cover"
          />
        </a>
      )}

      <div className="p-3">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">{name}</h2>
        <p className="text-sm text-gray-500 mb-1">{location}</p>
        <p className="text-sm font-medium text-blue-600">{price}</p>
        <p className="text-xs text-green-600">{status}</p>

        {details?.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            {details.slice(0, 3).map((d, i) => (
              <li key={i}>
                <span className="font-semibold">{d.label}:</span> {d.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
