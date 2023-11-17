import './TitleCard.css';

function TitleCard({ title }) {
    return (
        <div className="title-container">
            <p>{title}</p>
        </div>
    );
}

export default TitleCard;
