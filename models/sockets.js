const Markers = require("./markers");



class Sockets {

    constructor(io) {
        this.io = io;

        this.markers = new Markers();

        this.socketEvents();
    }

    socketEvents() {
        // on connection
        this.io.on('connection', (socket) => {
            
            socket.emit('markers-active', this.markers.actives)
            
            socket.on('new-marker',(marcador)=>{
                this.markers.addMarker(marcador);

                socket.broadcats.emit('new-marker', marcador)
            })
        })

    }
}

module.exports = Sockets