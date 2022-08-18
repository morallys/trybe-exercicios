from inventory_report.inventory.product import Product


def test_relatorio_produto():
    product_test = [
        1,
        "Bolsa",
        "Fábrica de bolsa",
        "2022-08-01",
        "2025-08-01",
        1123123234,
        "ao abrigo de luz",
    ]

    response = (
        "O produto Bolsa fabricado em 2022-08-01 "
        "por Fábrica de bolsa com validade até "
        "2025-08-01 precisa ser armazenado ao abrigo de luz."
    )

    new_product = Product(*product_test)

    assert str(new_product) == response
