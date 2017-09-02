// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'be.danssaert.wekan',
  name: 'Wekan',
  description: 'Wekan client',
  author: 'David Danssaert',
  email: 'david.danssaert@gmail.com'
});
// Set up resources such as icons and launch screens.
/*App.icons({
  'android': 'public/wekan-favicon.png'
});
App.launchScreens({
  'android': 'public/wekan-logo.png',
});*/
// Set PhoneGap/Cordova preferences.
/*App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');*/
// Pass preferences for a particular PhoneGap/Cordova plugin.

// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="192.168.0.187:3000" />
  </universal-links>
`);
