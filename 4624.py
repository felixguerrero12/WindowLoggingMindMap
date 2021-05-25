#!/usr/bin/python
# coding: utf-8

try:
    import requests
    from bs4 import BeautifulSoup
    import html
    import xmltodict
    import json
    import re
except ModuleNotFoundError as e:
    sys.exit(-1)


EventID = (
    '1100', '1102', '1104', '1105', '1108', '4608', '4610', '4611', '4614',
    '4616', '4618', '4622', '4624', '4625', '4626', '4627', '4634', '4647',
    '4648', '4656', '4657', '4658', '4660', '4661', '4662', '4663', '4664',
    '4670', '4672', '4673', '4674', '4688', '4689', '4690', '4691', '4692',
    '4693', '4696', '4697', '4698', '4699', '4700', '4701', '4702', '4703',
    '4704', '4705', '4706', '4707', '4713', '4714', '4715', '4716', '4717',
    '4718', '4719', '4720', '4722', '4723', '4724', '4725', '4726', '4731',
    '4732', '4733', '4734', '4735', '4738', '4739', '4740', '4741', '4742',
    '4743', '4749', '4750', '4751', '4752', '4753', '4764', '4767', '4768',
    '4769', '4770', '4771', '4773', '4778', '4779', '4781', '4782', '4793',
    '4794', '4798', '4799', '4800', '4801', '4802', '4803', '4816', '4817',
    '4819', '4826', '4865', '4866', '4867', '4902', '4904', '4905', '4906',
    '4907', '4908', '4911', '4912', '4913', '4928', '4929', '4930', '4931',
    '4932', '4933', '4935', '4944', '4945', '4946', '4947', '4948', '4949',
    '4950', '4951', '4953', '4954', '4956', '4957', '4964', '4985', '5024',
    '5025', '5027', '5028', '5031', '5033', '5034', '5058', '5059', '5061',
    '5136', '5137', '5138', '5139', '5140', '5141', '5142', '5143', '5144',
    '5145', '5152', '5154', '5155', '5156', '5157', '5158', '5159', '5168',
    '5376', '5377', '5378', '5447', '5632', '5633', '5888', '5889', '5890',
    '6144', '6145', '6416', '6419', '6420', '6421', '6422', '6423'
)


URL = 'https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4610'
page = requests.get(URL)
#soup = BeautifulSoup(page.text, 'html.parser')
soupXML = BeautifulSoup(page.content, "lxml")

soup = BeautifulSoup(page.content, 'html.parser')

resultsTitle = soupXML.find(property="og:title")
resultsDescription = soupXML.find(property="og:description")
EventXML = soup.find('code').string


# Print Statements:
print("Event Code " + resultsTitle.attrs['content'])
print(resultsDescription.attrs['content'] + "\n")
print("URL: " + URL + "\n")
print(EventXML)


try:
    label = soup.find(id="security-monitoring-recommendations")
    table = label.findNext('ul')
    rows = table.findAll('p')
    for tr in rows:
        print(tr.text)
except:
    pass


# Recommendation Section
try:
    table = soup.find_all('table')[-1]
    table = table.find_all('tr')

    for item in table:
        TableData = item.find_all('td')
        if len(TableData) != 0:
            typeOfMonitoring, Recommendation = item.find_all('td')
            print(f'Type of Monitoring: \n{typeOfMonitoring.text}')
            print(f'Recommendation: \n{Recommendation.text}')
            print('\n')
except Exception as ex:
    pass
