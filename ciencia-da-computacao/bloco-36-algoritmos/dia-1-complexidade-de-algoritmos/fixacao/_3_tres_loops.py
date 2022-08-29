import time
from tracemalloc import start


def tres_loops(list1, list2, list3):
    number_iterations = 0  # O(1)
    sum_list = 0  # O(1)

    for n1 in list1:  # O(n)
        for n2 in list2:  # O(n)
            for n3 in list3:  # O(n)
                sum_list += n1 + n2 + n3
                number_iterations += 1

    return number_iterations


if __name__ == "__main__":
    list1 = [1, 2, 3, 4, 5]
    list2 = [6, 7, 8, 9, 10]
    list3 = [11, 12, 13, 14, 15]

    start_time = time.time()
    print(f"numeros de iterações: {tres_loops(list1, list2, list3)}")
    print(f"leva {(time.time() - start_time)} segundos para completar")
