from datetime import datetime


class SimpleReport:
    @classmethod
    def generate(cls, list_products):
        today = datetime.today()
        data_fabricacao_oldest = min(
            [
                data["data_de_fabricacao"]
                for data in list_products
                if data["data_de_fabricacao"]
            ]
        )
        closest = {
            abs(
                today.timestamp()
                - datetime.strptime(
                    data["data_de_validade"], "%Y-%m-%d"
                ).timestamp()
            ): data["data_de_validade"]
            for data in list_products
        }

        group_companies_more_products = {}
        for data in list_products:
            company = data["nome_da_empresa"]

            if company not in group_companies_more_products:
                group_companies_more_products[company] = 1

            group_companies_more_products[company] += 1

        company_more_products = max(
            group_companies_more_products,
            key=group_companies_more_products.get,
        )

        return str(
            f"Data de fabricação mais antiga: {data_fabricacao_oldest}\n"
            f"Data de validade mais próxima: {closest[min(closest.keys())]}\n"
            f"Empresa com mais produtos: {company_more_products}"
        )
