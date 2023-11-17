import './SmallCard.css';

function SmallCard({ title, image }) {
    return (
        <div className="small-card-container">
            <div className="small-card-img-container">
                <img src={image}
                     alt={title} />
            </div>
            <p>{title}</p>
        </div>
    );
}

export default SmallCard;
