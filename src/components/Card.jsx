import './card.css';

export const Card = ({name,status,image}) => {
    // console.log(status);
    
    return (
        
        // <div className="card-grid text-left">
        //   <img className="my-4" width="250" src={image}/>
        //   <div className="card-body">
        //     <h4 className={`${status==='Dead'&& 'dead'} ${status==='Alive' && 'alive'}`}>{name}</h4>
        //     {/* <p className="card-text">{id}</p> */}
        //     <p className="card-text">{status}</p>
        //   </div>
        // </div>
        <div className="card tarjeta">
            <img src={image} className="card-img-top" alt="cargando...."/>
            <div className="card-body">
                <p className={`card-text ${status==='Dead'&& 'dead'} ${status==='Alive' && 'alive'}`}>{name}</p>
                <p className="card-text">{status}</p>
            </div>
        </div>
    )
}
