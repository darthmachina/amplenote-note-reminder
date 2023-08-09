const plugin = 
{
  // --------------------------------------------------------------------------------------
  constants: {
  },

  // --------------------------------------------------------------------------
  // https://www.amplenote.com/help/developing_amplenote_plugins#insertText
  appOption: async function(app) {
    const inboxNote = await app.findNote({ name: "Inbox" });
    const taskUuid = await app.insertTask({ uuid: inboxNote.uuid }, { content: "Reminder to review note" });
    app.alert(taskUuid);
  },

  // --------------------------------------------------------------------------
  // https://www.amplenote.com/help/developing_amplenote_plugins#noteOption
  noteOption: {
  },

  // --------------------------------------------------------------------------
  // https://www.amplenote.com/help/developing_amplenote_plugins#replaceText
  replaceText: {
  },

  // There are several other entry points available, check them out here: https://www.amplenote.com/help/developing_amplenote_plugins#Actions
  // You can delete any of the insertText/noteOptions/replaceText keys if you don't need them
};
export default plugin;
