const plugin = 
{
  // --------------------------------------------------------------------------------------
  constants: {
    version: "1.0.0"
  },

  // --------------------------------------------------------------------------
  // https://www.amplenote.com/help/developing_amplenote_plugins#insertText
  noteOption: async function(app) {
    var defaultTaskNoteName = app.settings["Task Note"];
    var daysUntilStart = app.settings["Default Days"];
    if (!daysUntilStart) {
      console.log("No 'Default Days' specified, defaulting to 7");
      daysUntilStart = "7"
    }
    const reviewNote = await app.findNote({ uuid: app.context.noteUUID });
    const defaultNoteMessage = (defaultTaskNoteName) ? " (Default: " + defaultTaskNoteName + ")" : "";
    const result = await app.prompt(
      "Please choose a note for task and number of days",
      {inputs: [
        { label: "Note for Task" + defaultNoteMessage, type: "note" },
        { label: "Days to wait (integer)", type: "text", value: daysUntilStart }
      ]}
    );
    if (result) {
      const [ note, days ] = result;
      console.log("note, days: " + note + ", " + days);
      const taskNote = note || await app.findNote({ name: defaultTaskNoteName });
      if (!taskNote) {
        app.alert("You must select a task note or have a default specified in the settings");
        return
      }
      console.log("Selected note: " + taskNote.name);
      console.log("Selected days: " + days);
      const taskUuid = await app.insertTask({ uuid: taskNote.uuid }, { content: "Reminder to review [[" + reviewNote.name + "]]", startAt: this._addDaysAndGetSeconds(new Date(), Number(days)) });
      app.alert(taskUuid);
    };
  },

  _addDaysAndGetSeconds(date, days) {
    return this._convertEpochMillisecondsToSeconds(this._addDays(date, days))
  },

  _addDays(date, days) {
    var startDate = new Date(date);
    startDate.setDate(startDate.getDate() + days);
    console.log("_addDays: " + date + ", " + startDate + ", " + days);
    return startDate;
  },

  _convertEpochMillisecondsToSeconds(date) {
    return Math.floor(date.getTime() / 1000)
  },
};
export default plugin;
