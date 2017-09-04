// Configure universal-links to handle links to the Wekan server
if (Meteor.isCordova) {
  universalLinks.subscribe('launchedAppFromLink', function (eventData) {
    FlowRouter.go(eventData.path);
  });
}
