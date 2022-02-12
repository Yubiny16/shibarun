function featureCard(props) {
    return (
        <div style={props.style}>
            <img src={props.image} style={{width: 200, height: 200}}/>
            <div style={props.textStyle}>{props.title}</div>
            <div style={{color: '#868686', fontSize: 14, marginTop: 30, width: '80%'}}>{props.description}</div>
        </div>
    );
}

export default featureCard;