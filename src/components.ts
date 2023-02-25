import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRouterOutlet,
  IonIcon,
  IonTabButton,
  IonTabBar,
  IonTabs,
  IonInput,
  IonTextarea,
  IonToggle,
  IonButton,
  IonList,
  IonItem,
  IonItemDivider,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonListHeader,
  IonNote,
  IonReorder,
  IonReorderGroup,
  IonThumbnail,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,  
  IonCardTitle,
  IonCardContent,
  IonImg,

} from "@ionic/vue";
import { App } from "vue";
import VueGoogleMaps from '@fawmi/vue-google-maps'


const useComponents = (app: App) => {
  app.component("ion-page", IonPage);
  app.component("ion-header", IonHeader);
  app.component("ion-toolbar", IonToolbar);
  app.component("ion-title", IonTitle);
  app.component("ion-content", IonContent);
  app.component("ion-router-outlet", IonRouterOutlet);
  app.component("ion-icon", IonIcon);
  app.component("ion-label", IonLabel);
  app.component("ion-tab-button", IonTabButton);
  app.component("ion-tab-bar", IonTabBar);
  app.component("ion-tabs", IonTabs);
  app.component("ion-input", IonInput);
  app.component("ion-textarea", IonTextarea);
  app.component("ion-toggle", IonToggle);
  app.component("ion-button", IonButton);
  app.component("ion-list", IonList);
  app.component("ion-item", IonItem);
  app.component("ion-item-divider", IonItemDivider);
  app.component("ion-item-option", IonItemOption);
  app.component("ion-item-options", IonItemOptions);
  app.component("ion-item-sliding", IonItemSliding);
  app.component("ion-list-header", IonListHeader);
  app.component("ion-note", IonNote);
  app.component("ion-reorder", IonReorder);
  app.component("ion-reorder-group", IonReorderGroup);
  app.component("ion-thumbnail", IonThumbnail);
  app.component("ion-range", IonRange);
  app.component("ion-select", IonSelect);
  app.component("ion-modal", IonModal);
  app.component("ion-buttons", IonButtons);
  app.component("ion-card", IonCard);
  app.component("ion-card-header", IonCardHeader);
  app.component("ion-card-subtitle", IonCardSubtitle);
  app.component("ion-card-title", IonCardTitle);
  app.component("ion-card-content", IonCardContent);
  app.component("ion-img", IonImg);
  app.component("ion-select-option", IonSelectOption);
  app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAd55TaJNRJIDp8k9wAwT1Rmu8HJUEJCfQ',
        language: 'es',
        libraries: 'places',
        country: 'DO',
        callback: () => {
            console.log('Google maps loaded')
        }
    }
    })
};

export default useComponents;
