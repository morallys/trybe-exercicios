from .simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, list_products):
        report = SimpleReport.generate(list_products)

        products = {}
        for data in list_products:
            company = data["nome_da_empresa"]

            if company not in products:
                products[company] = 0

            products[company] += 1

        inventory_companies = [
            f"- {nameCompany}: {quantity}\n"
            for (nameCompany, quantity) in products.items()
        ]

        return (
            f"{report}\n"
            "Produtos estocados por empresa:\n"
            f"{''.join(company for company in inventory_companies)}"
        )
