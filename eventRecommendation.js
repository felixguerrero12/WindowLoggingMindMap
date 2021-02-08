const fetch = require("node-fetch");
const jsdom = require("jsdom");


var eventid = [
    '4768', '4771', '4769', '4770', '4773', '4741', '4742', '4743', '4749', '4750', '4751', '4752', '4753', '4782', '4793', '4731', '4732', '4733', '4734', '4735', '4764', '4799', '4720', '4722', '4723', '4724', '4725', '4726', '4738', '4740', '4767', '4781', '4794', '4798', '5376', '5377', '4692', '4693', '6416', '6419', '6420', '6421', '6422', '6423', '4688', '4696', '4689', '4703', '4928', '4929', '4930', '4931', '4935', '4662', '4661', '5136', '5137', '5138', '5139', '5141', '4932', '4933', '4625', '4626', '4627', '4634', '4647', '4624', '4648', '4778', '4779', '4800', '4801', '4802', '4803', '5378', '5632', '5633', '4964', '4672', '5145', '5140', '5142', '5143', '5144', '5168', '4656', '4658', '4660', '4663', '4664', '4985', '4670', '5031', '5154', '5155', '5156', '5157', '5158', '5159', '5152', '4690', '4691', '4698', '4699', '4700', '4701', '4702', '5888', '5889', '5890', '4657', '4715', '4719', '4817', '4902', '4906', '4907', '4908', '4912', '4904', '4905', '4706', '4707', '4716', '4713', '4717', '4718', '4739', '4865', '4866', '4867', '4704', '4911', '4913', '4944', '4945', '4946', '4947', '4948', '4949', '4950', '4951', '4953', '4954', '4956', '4957', '4714', '4819', '4826', '5447', '6144', '6145', '4673', '4674', '5024', '5025', '5027', '5028', '5033', '5034', '5058', '5059', '4705', '4608', '4616', '4610', '4611', '4614', '4622', '4697', '4618', '4816', '5061', '1100', '1102', '1104', '1105', '1108'
]

function findRecommendations(dom) {
    const data = {};
    const recs = dom.window.document.querySelector("#security-monitoring-recommendations").nextElementSibling.textContent;
    data[0] = recs;
    const nextTag = dom.window.document.querySelector("#security-monitoring-recommendations").nextElementSibling.nextElementSibling;
    const nextTagText = nextTag.textContent;
    data[1] = nextTagText;
    if (nextTag.tagName !== "UL") {
        x = 2;
        let currentTag = dom.window.document.querySelector("#security-monitoring-recommendations").nextElementSibling.nextElementSibling;
        while (currentTag.tagName !== "UL") {
            currentTag = currentTag.nextElementSibling;
            data[x] = currentTag.textContent;
            x += 1;
        }
    }
    return data;
}

for (var i = 0; i < eventid.length; i++) {
    url = 'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-' + eventid[i]
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const dom = new jsdom.JSDOM(data);
            const xml = dom.window.document.querySelector("code").textContent;
            const recs = findRecommendations(dom);
            console.log(xml);
            console.log(recs);
        });

}
