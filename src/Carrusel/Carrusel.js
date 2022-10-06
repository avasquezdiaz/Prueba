export function Carrusel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Concierto.jpg?alt=media&token=1666e565-6d67-49e5-bc8b-64bc7696f7ae" height="600" className="w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/silvestre2.jpg?alt=media&token=538f21ec-b528-431f-94da-74b2eb81431f" height="600" className="w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Silvestre3.jpg?alt=media&token=ff6848a0-a423-4832-acb2-5dddb42862af" height="600" className="w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
