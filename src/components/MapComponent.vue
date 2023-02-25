<template>
  <GMapMap
    :center="{ lat: lat, lng: lng }"
    :zoom="zoom"
    map-type-id="terrain"
    class="mt-4 w-full h-72"
    :style="dimensions"
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
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MapComponent",
    props: {
      mapId: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
      zoom: {
        type: Number,
        default: 12,
      },
      title: {
        type: String,
        default: "Ubicación actual",
      },
      dimensions: {
        type: Object,
        default: () => ({
          width: "100%",
          height: "18rem",
        }),
      },
    },
    setup() {
      return {};
    },
    
  });
</script>
