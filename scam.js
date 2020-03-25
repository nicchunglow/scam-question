/* eslint-disable no-undef */
const data = require("./data");
const sendSingleFakeEmail = dataIndex => {
  return `Dear ${data[dataIndex].to}, you won a ${data[dataIndex].amount} dollars. Meet me at ${data[dataIndex].country} to get your money.`;
};
const sendFakeEmailToWholeData = () => {
  const allEmails = data.map(contact => {
    return `Dear ${contact.to}, you won a ${contact.amount} dollars. Meet me at ${contact.country} to get your money.`;
  });
  return allEmails;
};
sendFakeEmailToWholeData();
module.exports = { sendSingleFakeEmail, sendFakeEmailToWholeData };
