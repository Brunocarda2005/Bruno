import wave from "../../static/svg/wave.svg";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <img src={wave} alt="" className="footer-img" />
      <div className="footer-content">
        <div className="footer-content-img">
          <p>© 2022 Bruno Cardamone</p>
        </div>
      </div>
    </footer>
  );
}
