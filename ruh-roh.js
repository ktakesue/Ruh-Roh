const emails = require("./email-log.js");
const count = {};

const findUniqueEmails = function() {
  const emailCollection = {};

  function getEmails() {
    emails.emails.forEach(function(e) {
      if (emailCollection.hasOwnProperty(e.email)) {
        emailCollection[e.email] += 1;
      } else {
        emailCollection[e.email] = 1;
      }
    });
    return emailCollection;
  }

  return {
    getEmails: getEmails
  };
};

const uniqueEmails = findUniqueEmails();
console.log(uniqueEmails.getEmails());
