function initState() {
    let startX = 50;
    let startY = 400;

    const state = {
        player: 'Viktor',
        wizard: {
            width: 82,
            height: 100,
            positionX: startX,
            positionY: startY,
            speed: 5,
        },
        keys: {},
        
    }

    return state;
}