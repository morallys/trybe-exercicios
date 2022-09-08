def is_palindrome_iterative(word):
    if len(word) == 0 or word is None:
        return False

    length = len(word)

    new_word = []
    for p in range(length, 0, -1):
        new_word.append(word[p - 1])

    if word == "".join(new_word):
        return True

    else:
        return False
