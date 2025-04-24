import ProjectCard from '@/components/ProjectCard';
import MapWrapper from '@/components/MapWrapper';

async function getProjects(cityName) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?city=${cityName}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.projects || [];
}

export default async function CityPage({ params }) {
  const { cityName } = params;
  const projects = await getProjects(cityName);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🏙️ Projects in {cityName}
      </h1>

      <div className="my-6">
        <MapWrapper projects={projects} />
      </div>

      {projects.length === 0 ? (
        <div className="text-center text-red-500 font-medium">No projects found in {cityName}</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
