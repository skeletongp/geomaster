import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.atriontechsd.geomaster',
  appName: 'geomaster',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    Geolocation: {
      permissions: {
        android: {
          coarse: 'ALWAYS',
          fine: 'ALWAYS',
        },
        ios: {
          always: 'ALWAYS',
          whenInUse: 'WHEN_IN_USE',
        },
      },
    },
  },

};

export default config;
