function roadmapCard(props) {
    return (
        <div style={props.style}>
            <img src={props.image} style={{width: 175, height: 175, marginBottom: 20}}/>
            <div style={{fontWeight: 'bold', color: '#997343'}}>{props.title}</div>
            <ul>
                {props.milestones.map(d => (<li style={{color: '#997343'}} key={d.id}>{d}</li>))} 
            </ul>
        </div>
    );
}

export default roadmapCard;