from inventory_report.inventory.product import Product


def test_cria_produto():
    product_test = [
        1,
        "Bolsa",
        "Fábrica de bolsa",
        "2022-08-01",
        "2025-08-01",
        "1123123234",
        "Para guardar a bolsa....",
    ]

    product = Product(*product_test)

    assert product_test[0] == product.id
    assert product_test[1] == product.nome_do_produto
    assert product_test[2] == product.nome_da_empresa
    assert product_test[3] == product.data_de_fabricacao
    assert product_test[4] == product.data_de_validade
    assert product_test[5] == product.numero_de_serie
    assert product_test[6] == product.instrucoes_de_armazenamento
