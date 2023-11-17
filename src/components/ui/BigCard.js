import './BigCard.css';

function BigCard(props) {
    const { image, category } = props;

    return (
        <div className="big-card-container">
            <div className="big-card-img-container">
                <img src={image}
                     alt={category} />
            </div>
            <div className="big-card-details">
                {props.children}
            </div>
        </div>
    );
}

export default BigCard;
