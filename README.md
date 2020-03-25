Email templates

I want to send fake emails, but could you make a template for me?

Input template:“Dear {to}, you won a {amount} dollars. Meet me at {country} to get your money.”

Some sample json data
[{“to”: “jonathan”,“amount”: “thousand”,“country”: “europe”},{“to”: “enwee”,“amount”: “million”,“country”: “malaysia”}]

module.exports = (template,data) => {... your code }

Expected output: “Dear jonathan, you won a thousand dollars. Meet me at europe to get your money.

Solution :
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
