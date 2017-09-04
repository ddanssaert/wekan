// Some optional app info.
App.info({
  id: 'be.danssaert.wekan',
  name: 'Wekan',
  description: 'Mobile App for Wekan',
  author: 'ddanssaert',
});

// Launch icons for android (generated from meta/icons/wekan-24.svg).
App.icons({
  'android_mdpi': 'meta/mobile/icons/android_mdpi.png',
  'android_hdpi': 'meta/mobile/icons/android_hdpi.png',
  'android_xhdpi': 'meta/mobile/icons/android_xhdpi.png',
  'android_xxhdpi': 'meta/mobile/icons/android_xxhdpi.png',
  'android_xxxhdpi': 'meta/mobile/icons/android_xxxhdpi.png',
});

// Launch screens for android (generated from meta/icons/wekan-24.svg).
App.launchScreens({
  'android_mdpi_portrait': 'meta/mobile/splash/android_mdpi_portrait.png',
  'android_hdpi_portrait': 'meta/mobile/splash/android_hdpi_portrait.png',
  'android_xhdpi_portrait': 'meta/mobile/splash/android_xhdpi_portrait.png',
  'android_xxhdpi_portrait': 'meta/mobile/splash/android_xxhdpi_portrait.png',
  'android_mdpi_landscape': 'meta/mobile/splash/android_mdpi_landscape.png',
  'android_hdpi_landscape': 'meta/mobile/splash/android_hdpi_landscape.png',
  'android_xhdpi_landscape': 'meta/mobile/splash/android_xhdpi_landscape.png',
  'android_xxhdpi_landscape': 'meta/mobile/splash/android_xxhdpi_landscape.png',
});

// Set the background color to the default one in Wekan.
App.setPreference('BackgroundColor', '0x4d4d4dff');

// Prevent launching a new instance everytime a link is clicked on Android.
App.setPreference('AndroidLaunchMode', 'singleInstance');

// Configure universal-links (deep links on Android) such that links to the server can be
// opened in this app.
// IMPORTANT! Replace the host name with the ROOT_URL configured in `app.json` or Docker etc.
// Omit the port number (e.g. :3000) in the host name if you have one in ROOT_URL.
App.appendToConfig(`
  <universal-links>
    <host name="<App Name>.herokuapp.com" scheme="https" event="launchedAppFromLink" />
  </universal-links>
`);
