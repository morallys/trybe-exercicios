from tech_news import database


# Requisito 10
def top_5_news():
    list_news = database.find_news()

    order = sorted(list_news, key=lambda n: (-n["comments_count"], n["title"]))

    news = []
    for n in order:
        tuple_news = (n["title"], n["url"])
        news.append(tuple_news)

    return news[:5]


# Requisito 11
def top_5_categories():
    list_news = database.find_news()

    group_by_categories = {}
    for c in list_news:
        category = c["category"]

        if category not in group_by_categories:
            group_by_categories[category] = 0

        group_by_categories[category] += 1

    top_categories = sorted(
        group_by_categories.items(), key=lambda n: (-n[1], n[0])
    )

    return [category[0] for category in top_categories][:5]
