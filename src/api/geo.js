class GeoService {
    constructor() {
        this.geo = navigator.geolocation
    }

    getLatAndLong() {
        return new Promise((resolve, reject) => {
            this.geo.getCurrentPosition((location) => {
                resolve({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            }, reject)
        })
    }
}

export default new GeoService