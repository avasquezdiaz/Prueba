import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';



export function Integrantes(){
    
    
    useEffect(() => {
        new WOW.WOW({
         live: false
        }).init();
    }, [])

    return(
        <>
            <div className='row justify-content-center my-5'>
                <div className="col-12 col-md-4 mt-5 mb-2 zoom">
                    <img src= 'https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/2003.webp?alt=media&token=e8d83483-b672-4beb-9b5f-8de6c32ca813' alt='foto1'className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-target="#collapseExample" data-bs-toggle="collapse"/>
                </div> 
                <div className="col-12 col-md-4 align-self-center border-start">
                    <h2>Silvestre Dangond</h2>
                    <h3>En el 2002, firmó con Sony Music y lanzó su álbum debut Tanto para ti, el cual produjo tres sencillos Quién me mandó,Necesito verte y Muñeca de porcelana. En los años siguientes, lanzó dos álbumes más, Lo mejor para los dos, y Más unidos que nunca, con sencillos como Mi amor por ella y La pinta chévere.</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center my-5'>
                
                <div className="col-12 col-md-4 align-self-center border-end text-end">
                    <h2>2012</h2>
                    <h3>La 9ª batalla fue certificado como Disco de Platino en Colombia y Venezuela a solo días después de su lanzamiento. El álbum también alcanzó el puesto #1 en la lista de álbumes latinos de iTunes en Estados Unidos, convirtiéndolo en el primer artista de vallenato en llegar a la cima de este ranquin altamente competitivo.</h3>
                </div>
                <div className="col-12 col-md-4 mt-5 mb-2 zoom">
                    <img src= 'https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/2013.jpg?alt=media&token=8b6cad17-1174-4d4b-88bf-d7ba33deb139' alt='2003'className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-target="#collapseExample" data-bs-toggle="collapse"/>
                </div> 
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center my-5'>
                <div className="col-12 col-md-4 mt-5 mb-2 zoom">
                    <img src= 'https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/2022.jpg?alt=media&token=77397cfb-d0d8-4fba-a4a1-5af42d825391' alt='2013'className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow" data-bs-target="#collapseExample" data-bs-toggle="collapse"/>
                </div> 
                <div className="col-12 col-md-4 align-self-center border-start">
                    <h2>2020</h2>
                    <h3>Durante la pandemia del coronavirus, el cual fue bien recibido y aplaudido por sus seguidores, pues por medio de su melodiosa voz y el sonido de los instrumentos, logró regresar a las raíces del vallenato, con el estilo sentimental y romántico que lo caracterizó en sus inicios. </h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>

           
    

  
  

        </>
    )


}