export default function Places(props) {
  return (
    <div className="entry">
      <img 
        src={props.src}
        className="entry-img" 
        alt={props.alt}
      />
      <div className="entry-details">
        <p className="location">
          <span className="pin">📍 {props.place}</span>
          <a href={props.map} target="_blank" className="map-link">View on Google Maps</a>
        </p>
        <h2 className="entry-title">{props.destination}</h2>
        <p className="date">{props.date}</p>
        <p className="desc">
          {props.description}
        </p>
      </div>
    </div>
  );
}