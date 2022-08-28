# Requisito 6
from tech_news import database
from datetime import datetime


def search_by_title(title):
    query = {"title": {"$regex": title, "$options": "i"}}
    list_news = database.search_news(query)

    news = []

    for n in list_news:
        tuple_news = (n["title"], n["url"])
        news.append(tuple_news)

    return news


# Requisito 7
def search_by_date(date):
    try:
        map_date = datetime.strptime(date, "%Y-%m-%d")
        format_date = map_date.strftime("%d/%m/%Y")
        query = {"timestamp": {"$regex": format_date}}

        list_news = database.search_news(query)

        news = []

        for n in list_news:
            tuple_news = (n["title"], n["url"])
            news.append(tuple_news)

    except ValueError:
        raise ValueError("Data inválida")

    else:
        return news


# Requisito 8
def search_by_tag(tag):
    query = {"tags": {"$elemMatch": {"$regex": tag, "$options": "i"}}}
    list_news = database.search_news(query)

    news = []

    for n in list_news:
        tuple_news = (n["title"], n["url"])
        news.append(tuple_news)

    return news


# Requisito 9
def search_by_category(category):
    query = {"category": {"$regex": category, "$options": "i"}}
    list_news = database.search_news(query)

    news = []

    for n in list_news:
        tuple_news = (n["title"], n["url"])
        news.append(tuple_news)

    return news
