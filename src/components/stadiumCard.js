function stadiumCard(props) {
    return (
        <div style={props.style}>
            <div style={{fontWeight: 'bold', color: '#A06D3F', fontSize: 22, marginBottom: 80}}>{props.number}</div>
            <div style={{fontWeight: 'bold', color: '#A06D3F', fontSize: 26, marginBottom: 30}}>{props.title}</div>
            <div style={{color: '#A06D3F', fontSize: 16}}>{props.description}</div>
        </div>
    );
}

export default stadiumCard;