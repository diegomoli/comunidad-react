import './card.css';

export const Card = ({name,status,image}) => {
    // console.log(status);
    
    return (
        
        <div className="card tarjeta">
            <img src={image} className="card-img-top" alt="cargando...."/>
            <div className="card-body">
                <p className={`card-text ${status==='Dead'&& 'dead'} ${status==='Alive' && 'alive'}`}>{name}</p>
                <p className="card-text">{status}</p>
            </div>
        </div>
    )
}
