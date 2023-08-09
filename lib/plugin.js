const plugin = 
{
  // --------------------------------------------------------------------------------------
  constants: {
  },

  // --------------------------------------------------------------------------
  // https://www.amplenote.com/help/developing_amplenote_plugins#insertText
  appOption: async function(app) {
    const inboxNote = await app.findNote({ name: "Inbox" });
    const taskUuid = await app.insertTask({ uuid: inboxNote.uuid }, { content: "Reminder to review [[Amplenote - Create Note Reminder]]", startAt: this._addDaysAndGetSeconds(new Date(), 7) });
    app.alert(taskUuid);
  },

  _addDaysAndGetSeconds(date, days) {
    return this._convertEpochMillisecondsToSeconds(this._addDays(date, days))
  },

  _addDays(date, days) {
    var startDate = new Date(date);
    startDate.setDate(startDate.getDate() + days);
    return startDate;
  },

  _convertEpochMillisecondsToSeconds(date) {
    return Math.floor(date.getTime() / 1000)
  },
};
export default plugin;
