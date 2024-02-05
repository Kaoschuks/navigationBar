import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'navigationBar',
	loggingBehavior: "none",
	bundledWebRuntime: false,
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
