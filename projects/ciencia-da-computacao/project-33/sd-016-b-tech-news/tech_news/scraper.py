import requests
import time
from parsel import Selector

from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        html = requests.get(
            url, headers={"user-agent": "Fake user-agent"}, timeout=3
        )

        time.sleep(1)
    except requests.ReadTimeout:
        return None

    else:
        if html.status_code != 200:
            return None

        return html.text


# Requisito 2
def scrape_novidades(html_content):
    selector = Selector(text=html_content)
    list_links = selector.css("div .cs-overlay a::attr(href)").getall()

    return list_links


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(text=html_content)
    link_next_page = selector.css("a.next.page-numbers::attr(href)").get()

    return link_next_page


# Requisito 4
def scrape_noticia(html_content):
    selector = Selector(text=html_content)

    summary = (
        "".join(
            selector.css(".entry-content > p:first-of-type *::text").getall()
        )
    ).rstrip()

    news = {
        "url": selector.css('link[rel="canonical"]::attr(href)').get(),
        "title": (selector.css("h1.entry-title::text").get()).rstrip(),
        "timestamp": selector.css(".post-meta li.meta-date::text").get(),
        "writer": selector.css("span.author a::text").get(),
        "comments_count": len(selector.css(".comment-list .comment").getall()),
        "summary": summary,
        "tags": selector.css('.post-tags a[rel="tag"]::text').getall(),
        "category": selector.css(".meta-category span.label::text").get(),
    }

    return news


def handle_links_and_create_news(list_links):
    send_db = []
    for link in list_links:
        html_content = fetch(link)
        send_db.append(scrape_noticia(html_content))

    create_news(send_db)
    return send_db


# Requisito 5
def get_tech_news(amount):
    url_base = "https://blog.betrybe.com"
    html_content = fetch(url_base)
    list_links = scrape_novidades(html_content)

    news = list_links

    while amount > len(news):
        new_url = scrape_next_page_link(html_content)
        html_content = fetch(new_url)
        new_list_links = scrape_novidades(html_content)

        news.extend(new_list_links)

    return handle_links_and_create_news(news[0:amount])
