function teamCard(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300, margin: 50, marginTop: 0, marginBottom: 150}}>
            <img src={props.image} style={{width: 175, height: 175, marginBottom: 20}}/>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: 20, alignSelf: "flex-start"}}>
                <div style={{marginRight: 15, color: '#507070', fontWeight: 'bold'}}>{props.name}</div>
                <div style={{width: 1, height: 18, backgroundColor: '#D4E5E5'}}></div>
                <div style={{marginLeft: 15, color: '#507070'}}>{props.title}</div>
            </div>
            <div style={{color: '#92A0A0'}}>{props.description}</div>
        </div>
    );
}

export default teamCard;