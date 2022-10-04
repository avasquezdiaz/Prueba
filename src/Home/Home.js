import'./Home.css'

import { SubMenu } from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer'
export function Home (){

    let descripcionBanda="Silvestre atribuye sus talentos a su padre, el cantante William José El Palomo Dangond Baquero, quien a mediados de la década de los 1970, produjo 10 sencillos con Andrés El Turco Gil; y su madre, quien proviene de una familia musical y le transmitió su carácter carismático, mientras que desempeñó un papel importante en su educación formal y personal.Para ayudarlo a perseguir su anhelo de una trayectoria musical, su familia se trasladó a la ciudad de Bogotá. Allí comenzó a presentarse en fiestas con su gran amigo y acordeonista Coco Zuleta. En el 2002, firmó con Sony Music y lanzó su álbum debut Tanto para ti, el cual produjo tres Quién me mandó, Necesito verte y Muñeca de porcelana.En los años siguientes, lanzó dos álbumes más, Lo mejor para los dos, y Más unidos que nunca, con sencillos como Mi amor por ella y La pinta chévere. Su primer éxito nacional llegó en el 2004 con La colegiala, la cual fue escrita por él mismo" 
    
    return(

        <>
            <div className="banner">


            </div>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">INCUBUS</h1>
                            <p className = "text-center">{descripcionBanda}</p>

                        </div>

                    </div>

                </div>
            </div>

            <div>
                <SubMenu></SubMenu>

            </div>

            <div>
                <Footer></Footer>
            </div>

        
        </>
    )


}