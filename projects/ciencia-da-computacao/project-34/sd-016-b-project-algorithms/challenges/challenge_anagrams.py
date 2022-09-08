def analise_strings(string):
    counter_string = {}

    for i in range(0, len(string)):
        word_letter = string[i]

        if word_letter not in counter_string:
            counter_string[word_letter] = 0

        counter_string[word_letter] += 1

    return counter_string


def analise_letters(dict_1, dict_2):
    try:
        for key, value in dict_1.items():
            if dict_2[key] == value:
                continue
            else:
                return False

    except KeyError:
        return False

    else:
        return True


def is_anagram(first_string, second_string):
    if first_string == "" or second_string == "":
        return False

    if len(first_string) != len(second_string):
        return False

    counter_first_string = analise_strings(first_string.lower())
    counter_second_string = analise_strings(second_string.lower())

    return analise_letters(counter_first_string, counter_second_string)
