
var sock = new WebSocket('ws://localhost:5001');
sock.onopen = function(event) {
    console.log('Socket opened successfully');
    sock.send('Hello WS');
};

sock.onmessage = function(event) {
    console.log(event.data);
}


function handleTextChange(element) {
    sock.send(element.value);
}
    
