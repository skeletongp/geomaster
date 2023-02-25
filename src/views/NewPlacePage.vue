<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registrar Sitio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form>
        <ion-list class="space-y-4">
          <ion-item class="relative pb-2">
            <ion-label
              position="stacked"
              >{{ errors.name ? errors.name : "Nombre del Sitio" }}</ion-label
            >
            <ion-input type="text" v-model="place.name"></ion-input>
          </ion-item>
          <ion-item class="relative pb-2">
            <ion-label
              position="stacked"
              >{{ errors.location ? errors.location : "Ubicación del Sitio" }}</ion-label
            >
            <GMapAutocomplete
              placeholder="Comience a escribir la dirección"
              @place_changed="onPlaceChanged"
              :options="{
                types: ['establishment'],
                componentRestrictions: { country: 'do' },
              }"
            >
            </GMapAutocomplete>
          </ion-item>
          <ion-item class="relative pb-2">
            <ion-label>¿Ya fue visitado?</ion-label>
            <ion-toggle v-model="place.isVisited"></ion-toggle>
          </ion-item>
          <ion-item class="relative pb-2">
            <ion-label>Prioridad</ion-label>
            <ion-range min="1" max="5" step="1" snaps v-model="place.priority">
              <ion-icon slot="start" :icon="starOutline"></ion-icon>
              <ion-icon slot="end" :icon="star"></ion-icon>
            </ion-range>
          </ion-item>
          <ion-item class="relative pb-2">
            <ion-label
              position="stacked"
              >{{ errors.reference ? errors.reference : "Referencia del Sitio" }}</ion-label
            >
            <ion-input v-model="place.reference"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button expand="block" class="w-1/2 mx-auto" @click="submitForm"
          >Registrar</ion-button
        >
        <GMapMap
          :key="lat + lng"
          :center="{ lat: lat, lng: lng }"
          :zoom="zoom"
          map-type-id="terrain"
          class="mt-4 w-11/12 mx-auto h-72"
        >
          <GMapMarker
            :position="{
              lat: lat,
              lng: lng,
            }"
            :clickable="true"
            :draggable="true"
          />
        </GMapMap>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>


  import { defineComponent } from "vue";
  import { star, starOutline } from "ionicons/icons";

  import valdiateForm from "../utils/validation";

  export default defineComponent({
    name: "NewPlacePage",

    setup() {
      return {
        star,
        starOutline,
      };
    },
    data() {
      return {
        place: {
          name: "",
          location: "",
          isVisited: false,
          priority: 1,
          reference: "",
        },
        searchText: "",
        results: [],
        lat: 18.46633,
        lng: -69.8936,
        zoom: 12,
        errors: {},
      };
    },
    methods: {
      async submitForm() {
        this.errors = valdiateForm(this.place);
        if (Object.keys(this.errors).length === 0) {
          console.log(this.place);
        await this.$db.addPlace(this.place);
          this.$router.push("/pages/my_places");
         
        } else{
          console.log(this.errors);
        }
      },
      async onPlaceChanged(place) {
        if (place.geometry) {
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.place.location= place.formatted_address;
          this.place.lat= place.geometry.location.lat();
          this.place.lng= place.geometry.location.lng();
        } else {
          this.lat = 18.46633;
          this.lng = -69.8936;
        }
      },
    },

   async mounted() {
    const request = indexedDB.open('databaseName');
request.onsuccess = function(event) {
  const db = event.target.result;
  const version = parseInt(db.version);
  console.log('IndexedDB version:', version);
}

    },
   
  });
</script>
