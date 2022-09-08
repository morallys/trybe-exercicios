def study_schedule(permanence_period, target_time):

    if type(target_time) != int or target_time < 0:
        return None

    count_students = 0

    for schedule in permanence_period:
        if type(schedule[0]) != int or type(schedule[1]) != int:
            return None

        if schedule[0] <= target_time <= schedule[1]:
            count_students += 1

    return count_students
