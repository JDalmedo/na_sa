import "./Figure.css";

const Figure = ({data}) => {
    
    return (

        <figure>
            <img className="fondo" src={data.url} alt={data.title} />
                <div className="window">
                    <div className="title-bar">
                        <h1 className="title">{data.title}</h1>
                        <button aria-label="Close" className="close">Siguiente</button>
                        <button aria-label="Resize" className="resize">Anterior</button>
                    </div>
                    <div className="details-bar">
                        <span>{data.date}</span>
                        <span>{data.copyright}</span>
                    </div>
                    <div className="window-pane">{data.explanation}</div>
                </div>
        </figure>
    );
};


export default Figure