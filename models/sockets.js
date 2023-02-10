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
            
            socket.on('new-marker',(marker)=>{
                this.markers.addMarker(marker);

                socket.broadcast.emit( 'new-marker', marker );
            })
        })

    }
}

module.exports = Sockets