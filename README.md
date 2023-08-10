# Amplenote Note Reminder Plugin

This plugin allows you to easily create a Task to review the current note in a certain number of days. It will add the Task to Note chosen in the prompt (defaulting to the one from the settings, if set) and set the Start Date for the Task to be a set number of days in the future.

After installation, to use select Note Reminder from the Note menu in the upper right corner of the note.This will prompt for the Note to add the Task to (will default to the one from the settings if none is chosen) and the number of the days in the future for the Start Date. 

If no Default Days is set the plugin will currently default to 7 days.

## Known Issues
- Task content Note links are not converted to an actual link but can easily be made one by clicking on it
- Note for Task field in prompt is not populated with the Default Task Note as value doesn't work for note types

## Development

Nothing of real note, just straight Javascript in the `lib/plugin.js` file.

## Testing

Run `NODE_OPTIONS=--experimental-vm-modules npm test` to run the tests.

If it complains about jsdom being absent, run `npm install -D jest-environment-jsdom` and try again.

## Technologies used to help with this project

* https://esbuild.github.io/getting-started/#your-first-bundle
* https://jestjs.io/
* https://www.gitclear.com
