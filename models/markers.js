


class Markers{

    constructor(){

        this.actives = {};
    }

    addMarker(marker){
        this.actives[marker.id] = marker;
    }

}

module.exports = Markers;