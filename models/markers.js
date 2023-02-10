


class Markers{

    constructor(){

        this.actives = {};
    }

    addMarker(marker){
        this.actives[marker.id] = marker;
        return marker;
    }

    clearMarker(id){
        delete this.actives[id];
    }

}

module.exports = Markers;