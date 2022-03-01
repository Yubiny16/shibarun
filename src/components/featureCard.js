function featureCard(props) {
    return (
        <div style={props.style}>
            <img src={props.image} style={{width: 200, height: 200}}/>
            <div className="aller-display" style={props.textStyle}>{props.title}</div>
            <div className="roboto-rg" style={{color: '#868686', fontSize: 14, marginTop: 15, width: '80%'}}>{props.description}</div>
        </div>
    );
}

export default featureCard;