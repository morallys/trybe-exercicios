class DebitoAutomatico:
    @classmethod
    def debitar(self, conta, valor, banco):
        if banco == "itau":
            # Codigo especifico do Itaú (exemplo)
            # connect_server_udp(itau_line)
            # itau_line.check_system()
            # itau_zig_zag(valor, 'Token 454')
            print("Débito realizado pelo Itau")
        elif banco == "Santander":
            # Codigo especifico do Santander (exemplo)
            # connect_server_tcp(santander_line)
            # santander_line.check_ping()
            # metodo_106(valor)
            print("Santander, Débito efetuado!")
        elif banco == "Bradesco":
            # Codigo especifico do Bradesco (exemplo)
            print("Sucesso!")
        # ... + 150 bancos...
        elif banco == "Caixa":
            # Codigo especifico da Caixa (exemplo)
            print("Efetuado com sucesso, Caixa Agradece!")


DebitoAutomatico.debitar(120, 123, "itau")
DebitoAutomatico.debitar(110, 456, "Santander")
DebitoAutomatico.debitar(120, 789, "Bradesco")
