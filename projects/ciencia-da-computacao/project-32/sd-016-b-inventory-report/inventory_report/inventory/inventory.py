import csv
import json
import xml.etree.ElementTree as ET

from ..reports.simple_report import SimpleReport
from ..reports.complete_report import CompleteReport


class Inventory:
    @classmethod
    def read_csv(cls, path):
        with open(path) as file:
            relatory = csv.DictReader(file, delimiter=",", quotechar='"')
            data = list(relatory)
        return data

    @classmethod
    def read_json(cls, path):
        with open(path) as file:
            relatory = file.read()
            data = json.loads(relatory)

        return data

    @classmethod
    def read_xml(cls, path):
        tree = ET.parse(path)
        root = list(tree.getroot())

        dict_list = []
        info_dict = {}

        for index in range(len(root)):
            for info in root[index]:
                info_dict[info.tag] = info.text

            dict_list.append(info_dict)
            info_dict = {}

        return dict_list

    @classmethod
    def import_data(cls, path, type_relatory):
        if path.endswith(".csv"):
            data = Inventory.read_csv(path)

        elif path.endswith(".json"):
            data = Inventory.read_json(path)

        else:
            data = Inventory.read_xml(path)

        if type_relatory == "simples":
            return SimpleReport.generate(data)

        elif type_relatory == "completo":
            return CompleteReport.generate(data)
