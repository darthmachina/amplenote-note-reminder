import { jest } from "@jest/globals"
import { mockApp, mockPlugin, mockNote } from "./test-helpers.js"

// --------------------------------------------------------------------------------------
describe("Note Reminder plugin", () => {
  const plugin = mockPlugin();
  plugin._testEnvironment = true;
  const app = mockApp();

  it("_addDays correctly adds 7 days", () => {
    const startDate = plugin._addDays(new Date("2023-01-01"), 7);
    console.log("startDate: " + startDate);
    expect(startDate.getDate()).toBe(7);
  })

  it("_convertEpochMillisecondsToSeconds gives the correct value", () => {
    const date = new Date("2023-01-01");
    const expectedEpochSeconds = 1672531200
    const actualEpochSeconds = plugin._convertEpochMillisecondsToSeconds(date);
    expect(actualEpochSeconds).toBe(expectedEpochSeconds)
  })
});
