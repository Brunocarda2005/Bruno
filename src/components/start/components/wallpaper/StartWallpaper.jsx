import wallpaperIMG from "../../../../static/fotos/wallpaper.webp";
import "./StartWallpaper.css";

export default function StartWallpaper() {
  return (
    <aside className="main__content-grid__container wallpaper box-shadow">
      <picture className="main__content-grid__container__wallpaper">
        <img
          src={wallpaperIMG}
          alt="nebulosa wallpaper 4k full hd pc webp bruno cardamone"
          className="main__content-grid__container__wallpaper__img"
        />
      </picture>
    </aside>
  );
}
