<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="location" href="/pages/location">
          <ion-icon aria-hidden="true" :icon="flagOutline" />
          <ion-label>¿Dónde estoy?</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="new_place" href="/pages/new_place">
          <ion-icon aria-hidden="true" :icon="addCircleOutline" />
          <ion-label>Añadir Sitio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="my_places" href="/pages/my_places">
          <ion-icon aria-hidden="true" :icon="mapOutline" />
          <ion-label>Mis sitios</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {flagOutline, mapOutline, addCircleOutline } from 'ionicons/icons';
</script>
