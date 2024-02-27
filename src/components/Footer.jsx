import { Github, Linkedin, StackOverflow } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="col-span-full grid grid-cols-subgrid">
      <div className="p-6 bg-red-50 text-red-900 col-span-full rounded-3xl">
        <h3>Follow</h3>
        <ul className="flex gap-8">
          <li>
            <a href="https://es.stackoverflow.com/users/101864/brayan-mart%c3%adnez-santana">
              <StackOverflow size={32} />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/brayan-mart%C3%ADnez-santana-0845b0212/">
              <Linkedin size={32} />
            </a>
          </li>

          <li>
            <a href="https://github.com/BrayanCaro">
              <Github size={32} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
