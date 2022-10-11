export function Musicos (){

    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"La Colegiala 2004", 
            rol:"Su primer éxito nacional llegó en el 2004 con La colegiala, la cual fue escrita por él mismo.",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/la%20colegiala.png?alt=media&token=026b3611-177d-45c9-b6ee-4179a79bf470"
        },
        {
            nombre:"La Novena Batalla 2012", 
            rol:"En el año 2012, comenzó a trabajar con el acordeonista Rolando Ochoa, hijo del artista de vallenato Calixto Ochoa, y al año siguiente lanzaron el álbum La 9ª batalla. Con 13 canciones escritas por compositores de Colombia, La 9 batalla fue certificado como Disco de Platino en Colombia y Venezuela a solo días después de su lanzamiento. El álbum también alcanzó el puesto 1 en la lista de álbumes latinos de iTunes en Estados Unidos, convirtiéndolo en el primer artista de vallenato en llegar a la cima de este ranquin altamente competitivo.",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/r8.webp?alt=media&token=091a4a2c-c305-4026-8dd9-7fe91f8ef67b"
        },
        {
            nombre:"Gente Valiente 2017", 
            rol:"Gente Valiente es una nueva propuesta musical con la cual Silvestre populariza su versión moderna del vallenato colombiano y marca el 11º álbum en su carrera. El álbum es producido por el productor múltiplemente nominado al GRAMMY y Latin GRAMMY, Andrés Castro, quien ha trabajado con músicos como Carlos Vives, ChocQuibTown, Gian Marco, Prince Royce, Samo y Thalía, entre otros.",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/genteValiente.jpg?alt=media&token=16c08ad0-5a0d-4c41-9fb5-d3d6fe9fb044"
        },
    ]

    let conciertosMemorables=[
        {
            Fecha:"2017",
            Lugar:"Miami",
            Descripcion:"La sensación de la música latina, SILVESTRE DANGOND, hizo historia en Miami este pasado sábado 15 de julio, presentado el primer concierto de Vallenato completamente repleto en el prestigioso American Airlines Arena. El artista deleitó a su audiencia con su gran energía y la buena vibra tan características de sus conciertos.",
            Foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Miami.jpg?alt=media&token=5fab1d92-35bd-42cc-9535-fbf234aa0e91",

            Fecha:"2019",
            Pais:"Toronto",
            Descripcion:"Sus muchos éxitos en el género vallenato le valieron para hacerse con un puesto de prestigio dentro de la escena musical colombiana, y su versatilidad, buena voz, talento y carisma lo ayudaron a experimentar en temas más urbanos con tintes latinos que lo ayudaron a dar, con gran contundencia el salto internacional. Con un carisma peculiar y un ritmo tropical inconfundible, Silvestre Dangond está listo para hacer estremecer a su fanaticada el próximo viernes 6 de setiembre, 2019 en Rebel (11 Polson St, Toronto). En esta noche tan especial, este exponente del vallenato Nueva Ola te hará cantar sus grandes éxitos como “Cásate conmigo”, “Ya no me duele más”, “Justicia” y “Niégame tres veces”.",
            foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Totonto.jpg?alt=media&token=bf64b469-3d82-49cc-aca1-7959db12ab7f",

            fecha:"2022",
            Lugar:"Montreal",
            Descripcion: "Silvestre Dangond anuncia para julio una gira por Canadá y EE.UU. El cantante colombiano Silvestre Dangond realizará una gira de conciertos por Estados Unidos y Canadá entre el 15 y el 30 de julio, informó este martes la empresa productora Loud and Alive.Dangond ha llevado el vallenato a otras fronteras y sigue dejando huella con el lanzamiento de su álbum «Las locuras mías», del que se han desprendido varios sencillos.",
            Foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Montreal.jpg?alt=media&token=ea6797f7-caf5-4c37-9fd7-3cc09a3cb98e",

            fecha:"2022",
            Lugar:"Chicago",
            descripcion:"Loud And Live presenta Silvestre Dangond en su gira 2022. Los conciertos llevarán a la súper estrella colombiana a ocho ciudades en Estados Unidos y Canadá durante el mes de julio que coincide con la celebración de la Independencia de Colombia. Silvestre se presentara en Chicago el sábado 30 de julio.",
            foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Chicago.jpg?alt=media&token=e5e3560c-f752-42d6-a4d7-08fa9ae5939e",

            fecha:"2022",
            Lugar:"Atlanta",
            descripcion:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoavd.appspot.com/o/Atlanta.jpg?alt=media&token=171e3bb4-bec2-4a9e-83d1-615cacd36f98",

        }
        
    ]



    //mapeando un arreglo para hacer render

    return(
    
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
            musicos.map(function(musico){
                return(
                    <>
                    <div className="col mt-3">
                        <div className="card h-100">
                            <img src={musico.url}
                            className="img-fluid w-100 h-100" alt="foto"/>
                            <h1 className="text-center fuente"> {musico.nombre}</h1>

                        </div>


                    </div>
                    
                    </>
                )
            })
            }
        </div>
    )

    }

    








