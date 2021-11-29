#include <stdio.h>

int main (void){

    char nome[];


    printf("Digite o seu nome");
    scanf("%s", &nome);

    printf("Olá, %s. Seja bem vinda a nossa Tribo!", &nome);

}