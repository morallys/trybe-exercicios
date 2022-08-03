while True:
    try:
        x = int(input("Escreva um número: "))
        break
    except ValueError:
        print("Oops! Isso não é um número válido, tente novamente...")
