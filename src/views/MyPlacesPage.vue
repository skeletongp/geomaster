<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lugares añadidos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mis Sitios</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list class="w-full ion-no-padding ion-margin-top">
        <ion-item v-for="place in places" :key="place.id">
          <ion-label w-class="!w-96">
            <div class="flex !items-start space-x-4">
              <h2 class="uppercase !font-bold">{{ place.name }}</h2>
              <div class="flex items-center">
                <ion-icon
                  :icon="star"
                  class="text-yellow-600"
                  v-for="i in place.priority"
                  :key="i"
                ></ion-icon>
              </div>
            </div>
            <p>{{ place.location }}</p>
            <p v-if="place.isVisited">Visitado</p>
            <p v-else>No visitado</p>
          </ion-label>
          <div class="flex flex-col" slot="end">
            <ion-button fill="clear" @click="openModal(place.id)">
              <ion-icon :icon="mapOutline"></ion-icon>
            </ion-button>
            <ion-item class="relative pb-2">
              <ion-toggle
                @ionChange="updatePlace(place)"
                v-model="place.isVisited"
              ></ion-toggle>
            </ion-item>
          </div>
          <ion-modal :is-open="modalOpened === place.id">
            <ion-header>
              <ion-toolbar>
                <ion-buttons slot="end">
                  <ion-button @click="closeModal">Cerrar</ion-button>
                </ion-buttons>
                <ion-title>{{ place.name }}</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <MapComponent
                :mapId="`Map${place.id}`"
                :lat="place.lat"
                :lng="place.lng"
              />
              <div class="pt-4">
                <p>{{ place.reference }}</p>
              </div>
            </ion-content>
          </ion-modal>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from "vue";
  import { mapOutline, star } from "ionicons/icons";
  import {alertController} from "@ionic/vue";
  import MapComponent from "../components/MapComponent.vue";
  export default defineComponent({
    name: "MyPlacesPage",
    data() {
      return {
        places: [],
        modalOpened: null,
        mapOutline,
        star,
      };
    },
    methods: {
      openModal(id) {
        this.modalOpened = id;
      },
      closeModal() {
        this.modalOpened = null;
      },
      async updatePlace(place) {
        console.log(place);
        await this.$db.updatePlace(place);

        const alert= await alertController.create({
          header: 'Actualizado',
          message: 'El lugar ha sido actualizado',
          buttons: ['OK']
        });

        await alert.present();

        this.$forceUpdate();
      },
    },

    components: {
      MapComponent,
    },
    async mounted() {
      console.log('mounted')
      const places = await this.$db.getPlaces();
      this.places = places;
    },
  });
</script>
