/* eslint-disable no-undef */
const { sendSingleFakeEmail, sendFakeEmailToWholeData } = require("./scam");

describe("Scam Time", () => {
  test("Should print scam message when called", () => {
    const mockFakeEmail = sendSingleFakeEmail(0);
    expect(mockFakeEmail).toBe(
      "Dear Jonathan, you won a thousand dollars. Meet me at europe to get your money."
    );
  });

  test("Should print second scam message when called", () => {
    const mockFakeEmail = sendSingleFakeEmail(1);
    expect(mockFakeEmail).toBe(
      "Dear Enwee, you won a million dollars. Meet me at malaysia to get your money."
    );
  });

  test("Should print second scam message when called", () => {
    const mockFakeEmail = sendFakeEmailToWholeData();
    expect(mockFakeEmail).toMatchObject([
      "Dear Jonathan, you won a thousand dollars. Meet me at europe to get your money.",
      "Dear Enwee, you won a million dollars. Meet me at malaysia to get your money."
    ]);
  });
});
