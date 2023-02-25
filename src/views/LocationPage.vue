<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>¿Dónde Estoy?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">¿Dónde estoy?</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="flex flex-col justify-center items-center h-full px-3">
        <template v-if="lat && lng">
          <ion-card v-if="place">
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />
            <ion-card-header>
              <ion-card-title>{{ place.name }}</ion-card-title>
              <ion-card-subtitle>{{ place.reference }}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              {{ place.location }}
            </ion-card-content>
          </ion-card>

          <h1 class="mt-6 text-left w-full">Usted Está Aquí</h1>
          <MapComponent
            :key="lat + lng"
            mapId="map"
            title="Estás aquí"
            :lat="lat"
            :lng="lng"
          />
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from "vue";
  import MapComponent from "../components/MapComponent.vue";
  import { Geolocation } from "@capacitor/geolocation";
  export default defineComponent({
    name: "LocationPage",
    components: {
      MapComponent,
    },

    setup() {
      return {};
    },
    data() {
      return {
        lat: 18.44183,
        lng: -70.018662,
        place: null,
      };
    },

    methods: {
      async getPlace() {
        const places = await this.$db.getPlaces();

        if (places.length > 0) {
          //this places is a random place
          this.place = places[Math.floor(Math.random() * places.length)];
        }
      },
    },

    async mounted() {
      this.getPlace();
      await Geolocation.watchPosition({}, (position, err) => {
        if (err) {
          console.log(err);
        } else if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      });
    },
  });
</script>
