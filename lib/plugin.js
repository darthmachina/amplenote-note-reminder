const plugin = 
{
  // --------------------------------------------------------------------------------------
  constants: {
    version: "1.0.0"
  },

  // --------------------------------------------------------------------------
  // https://www.amplenote.com/help/developing_amplenote_plugins#insertText
  noteOption: async function(app) {
    const defaultTaskNoteName = app.settings["Task Note"];
    const daysUntilStart = app.settings["Default Days"] || "7";
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
      const taskNote = note || await app.findNote({ name: defaultTaskNoteName });
      if (!taskNote) {
        app.alert("You must select a task note or have a default specified in the settings");
        return
      }
      const daysToWait = Number(days);
      if (days.indexOf('.') > -1 || isNaN(daysToWait)) {
        app.alert("You must enter a valid integer for Days to wait");
        return
      }
      const taskUuid = await app.insertTask({ uuid: taskNote.uuid }, { content: "Review [[" + reviewNote.name + "]]", startAt: this._addDaysAndGetSeconds(new Date(), daysToWait) });
      app.alert(taskUuid);
    };
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
