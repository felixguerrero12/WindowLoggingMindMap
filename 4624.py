#!/usr/bin/python
# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import html
import xmltodict
import json


page = requests.get('https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4624'
                 )

soup = BeautifulSoup(page.content, 'html.parser')
data = soup.find('code', class_='lang-xml').string
print data
print json.dumps(xmltodict.parse(data))
