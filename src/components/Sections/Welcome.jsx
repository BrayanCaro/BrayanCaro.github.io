export default function Welcome() {
  return (
    <section className="col-span-full grid grid-cols-subgrid grid-rows-2 gap-12 sm:grid-rows-subgrid">
      <div className="bg-red-50 text-red-950 col-span-full sm:col-span-8 p-3 rounded-3xl">
        <h1 className="font-bold text-3xl">Brayan Martínez Santana</h1>
        <h2 className="font-bold text-xl text-red-800 mb-6">
          Full Stack Developer
        </h2>
        {/*
        <p className="w-full">
          Cuento con una amplia experiencia en:
          <ul className="list-disc list-inside">
            <li>El desarrollo de aplicativos web</li>
            <li>
              Implementación y uso de <strong>APIs</strong> (y también con{" "}
              <strong>JSON:API</strong>)
            </li>
            <li>
              Manejo de Git, trabajo en equipo y en algunas herramientas de CI /
              CD
            </li>
            <li>
              Uso de otras tecnologías y frameworks como:{" "}
              <strong>Laravel</strong>, <strong>Vue.js</strong>,{" "}
              <strong>Docker</strong>, <strong>React</strong>,{" "}
              <strong>composer</strong>,<strong>npm</strong>,{" "}
              <strong>MySQL</strong>, entre otros.
            </li>
          </ul>
        </p>
        <p>
          Disfruto mucho de aprender y compartir mis conocimientos con los
          demás.
        </p>
        */}
      </div>
      <div className="p-3 bg-red-50 col-span-full sm:col-span-4 text-red-900 rounded-3xl"></div>
    </section>
  );
}
