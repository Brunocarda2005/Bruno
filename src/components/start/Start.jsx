import StartAbout from "./components/about/StartAbout";
import StartLink from "./components/links/StartLinks";
import { StartTools } from "./components/tools/StartTools";
import StartSetup from "./components/setup/StartSetup";
import "./Start.css";

export default function Main() {
  return (
    <main className="main" id="home">
      <div className="blob position-start">
        <span className="blob-span"></span>
      </div>
      <section className="main__content-grid">
        <StartAbout />
        <StartTools />
        <StartSetup />
        <StartLink />
      </section>
    </main>
  );
}
