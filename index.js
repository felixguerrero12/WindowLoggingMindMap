const fetch = require("node-fetch");
const jsdom = require("jsdom");
const  xmlParser = require("xml2json");
const fs = require('fs');

var eventurl =  [
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4634', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4647', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4649', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4661', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4672', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4688', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4689', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4696', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4697', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4698', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4699', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4700', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4701', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4702', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4717', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4717', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4798', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4799', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4964', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5031', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5140', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5145', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5152', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5156', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5158', 
          'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-5159'
]

for(var i = 0; i < eventurl.length;i++){
        fetchData(eventurl[i]);
  }

  function fetchData(url){
    fetch(url)
    .then(response => response.text())
    .then(data => {
      const dom = new jsdom.JSDOM(data);
      const xml = dom.window.document.querySelector("code").textContent;
      console.log(xml);
    })
  };
