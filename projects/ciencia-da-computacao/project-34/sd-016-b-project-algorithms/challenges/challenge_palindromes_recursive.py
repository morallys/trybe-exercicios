# def is_palindrome_recursive(word, low_index, high_index):
def reverse(word):
    if len(word) <= 1:
        return word

    return word[-1] + reverse(word[: len(word) - 1])


def is_palindrome_recursive(word, low_index, high_index):
    if word is None or word == "":
        return False

    if word == reverse(word):
        return True

    return False
