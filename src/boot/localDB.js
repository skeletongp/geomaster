import Dexie from "dexie";


const db = new Dexie("Place")

db.version(2).stores({
    places: "++id, name, location, priority, reference, createdAt, updatedAt, isVisited",
});



const model = {
    getPlaces() {
        return db.places.toArray();
    },

    addPlace(place) {
        const data={
            name: place.name,
            location: place.location,
            priority: place.priority,
            reference: place.reference,
            isVisited: place.isVisited,
            lat: place.lat,
            lng: place.lng,
        }
        return new Promise((resolve, reject) => {
            db.places
                .add(data)
                .then((id) => {
                    resolve(id);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    deletePlace(id) {
       return new Promise((resolve, reject) => {
              db.places
                .delete(id)
                .then(() => {
                     resolve('ok');
                })
                .catch((error) => {
                     reject(error);
                });
         });
    },

    updatePlace(place) {
        console.log(place);
       return new Promise((resolve, reject) => {
                db.places
                    .update(place.id, place)
                    .then(() => {
                         resolve('ok');
                    })
                    .catch((error) => {
                         reject(error);
                    });
             });
    },

    getPlace(id) {
        return db.places.get(id);
    }
};
export default model;



