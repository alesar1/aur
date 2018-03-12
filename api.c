#include "api.h"

Info* api_info_init(void) {
    Info* pInfo = malloc(sizeof(Info));
    if (pInfo != NULL) {
        pInfo->name = malloc(64);
        pInfo->symbol = malloc(64);
        if (pInfo->name == NULL || pInfo->symbol == NULL) {
            fprintf(stderr, "malloc() failed\n");
            exit(EXIT_FAILURE);
        }
        pInfo->price = EMPTY;
        pInfo->change_1d = EMPTY;
        pInfo->change_7d = EMPTY;
        pInfo->change_30d = EMPTY;
        pInfo->div_yield = EMPTY;
        pInfo->marketcap = EMPTY;
        pInfo->volume_1d = EMPTY;
    } else {
        fprintf(stderr, "malloc() failed\n");
        exit(EXIT_FAILURE);
    }
    return pInfo;
}

size_t api_string_writefunc(void* ptr, size_t size, size_t nmemb, String* hString) {
    String* pString = hString;
    size_t new_len = pString->len + size * nmemb;
    pString->data = realloc(pString->data, new_len + 1);
    if (pString->data == NULL) {
        fprintf(stderr, "realloc() failed\n");
        exit(EXIT_FAILURE);
    }
    memcpy(pString->data + pString->len, ptr, size * nmemb);
    pString->data[new_len] = '\0';
    pString->len = new_len;
    return size * nmemb;
}

String* api_curl_data(char* url, char* post_field) {
    String* pString = string_init();
    if (pString == NULL)
        return NULL;
    CURL* curl = curl_easy_init();
    CURLcode res;
    curl_global_init(CURL_GLOBAL_DEFAULT);
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url);
        curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, api_string_writefunc);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &pString->data);
        struct curl_slist* list = NULL;
        if (url[12] == 'g') { //if using Google Urlshortener, a post field is needed
            list = curl_slist_append(list, "Content-Type: application/json");
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, list);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, post_field);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, strlen(post_field));
        }
        res = curl_easy_perform(curl);
        if (url[12] == 'g')
            curl_slist_free_all(list);
        curl_easy_cleanup(curl);
        if (res != CURLE_OK)
            return NULL;
    }
    return pString;
}

double* api_get_current_price(const char* ticker_name_string) {
    double* val;
    if (strlen(ticker_name_string) > 5) { //if symbol length is greater than 5, then it must be a crypto
        val = coinmarketcap_get_price(ticker_name_string);
        return val;
    }
    val = iex_get_price(ticker_name_string); //First tries IEX for intraday prices
    if (val != NULL)
        return val;
    val = morningstar_get_price(ticker_name_string); //Secondly tries Morningstar for market open/close data
    if (val != NULL)
        return val;
    val = coinmarketcap_get_price(ticker_name_string); //Thirdly tries Coinmarketcap for real-time crypto data
    if (val != NULL)
        return val;
    return NULL; //Invalid symbol
}

double* iex_get_price(const char* ticker_name_string) {
    char iex_api_string[64];
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/quote", ticker_name_string);
    String* pString = api_curl_data(iex_api_string, NULL);
    if (strcmp(pString->data, "Unknown symbol") == 0) { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    double* ret = malloc(sizeof(double) * 2);
    if (ret == NULL) {
        fprintf(stderr, "malloc() failed\n");
        exit(EXIT_FAILURE);
    }
    const char* price_string = json_object_to_json_string(json_object_object_get(jobj, "latestPrice"));
    const char* close_price_string = json_object_to_json_string(json_object_object_get(jobj, "previousClose"));
    ret[0] = strtod(price_string, NULL); //Intraday current price
    ret[1] = strtod(close_price_string, NULL); //Previous day's close price
    string_destroy(&pString);
    json_object_put(jobj);
    return ret;
}

double* morningstar_get_price(const char* ticker_name_string) {
    char today_char[16], yesterday_char[16], morningstar_api_string[512];
    time_t now = time(NULL);
    struct tm* ts = localtime(&now);
    mktime(ts);
    strftime(today_char, 16, "%Y-%m-%d", ts);
    ts->tm_mday -= 7; //get info from past 7 days
    mktime(ts);
    strftime(yesterday_char, 16, "%Y-%m-%d", ts);
    sprintf(morningstar_api_string,
            "http://globalquote.morningstar.com/globalcomponent/RealtimeHistoricalStockData.ashx?showVol=true&dtype=his"
                    "&f=d&curry=USD&isD=true&isS=true&hasF=true&ProdCode=DIRECT&ticker=%s&range=%s|%s",
            ticker_name_string, yesterday_char, today_char);
    String* pString = api_curl_data(morningstar_api_string, NULL);
    if (strcmp("null", pString->data) == 0) { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    double* ret = malloc(sizeof(double) * 2);
    if (ret == NULL) {
        fprintf(stderr, "malloc() failed\n");
        exit(EXIT_FAILURE);
    }
    Json* datapoints = json_object_object_get(
            json_object_array_get_idx(json_object_object_get(jobj, "PriceDataList"), 0), "Datapoints");
    size_t size = json_object_array_length(datapoints);
    Json* today = json_object_array_get_idx(json_object_array_get_idx(datapoints, size - 1), 0);
    const char* price = json_object_to_json_string(today);
    ret[0] = strtod(price, NULL); //Last close price
    Json* yesterday = json_object_array_get_idx(json_object_array_get_idx(datapoints, size - 2), 0);
    price = json_object_to_json_string(yesterday);
    ret[1] = strtod(price, NULL); //Close price before last close price
    json_object_put(jobj);
    string_destroy(&pString);
    return ret;
}

double* coinmarketcap_get_price(const char* ticker_name_string) {
    char coinmarketcap_api_string[64];
    sprintf(coinmarketcap_api_string, "https://api.coinmarketcap.com/v1/ticker/%s", ticker_name_string);
    String* pString = api_curl_data(coinmarketcap_api_string, NULL);
    if (pString->data[0] == '{') { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    Json* data = json_object_array_get_idx(jobj, 0);
    Json* usd = json_object_object_get(data, "price_usd");
    Json* percent_change_1d = json_object_object_get(data, "percent_change_24h");
    const char* price = json_object_get_string(usd);
    const char* change_1d = json_object_get_string(percent_change_1d);
    double* ret = malloc(sizeof(double) * 2);
    if (ret == NULL) {
        fprintf(stderr, "malloc() failed\n");
        exit(EXIT_FAILURE);
    }
    ret[0] = strtod(price, NULL); //Current real-time price
    ret[1] = ret[0] - ((strtod(change_1d, NULL) / 100) * ret[0]); //Price 24 hours earlier
    string_destroy(&pString);
    json_object_put(jobj);
    return ret;
}

double* api_get_hist_5y(const char* ticker_name_string){
    double* val;
    val = iex_get_hist_5y(ticker_name_string); //First tries IEX for intraday prices
    if (val != NULL)
        return val;
    return NULL; //Invalid symbol
}

double* iex_get_hist_5y(const char* ticker_name_string) {
    char iex_api_string[64];
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/chart/5y", ticker_name_string);
    String* pString = api_curl_data(iex_api_string, NULL);
    if (strcmp(pString->data, "Unknown symbol") == 0) { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    size_t len = json_object_array_length(jobj);
    double* ret = malloc(sizeof(double) * (len + 1));
    ret[len] = '\0';
    if (ret == NULL) {
        fprintf(stderr, "malloc() failed\n");
        exit(EXIT_FAILURE);
    }
    Json* temp;
    for (int i = 0; i < (int)len; i++) {
        temp = json_object_array_get_idx(jobj, (size_t) i);
        ret[i] = json_object_get_double(json_object_object_get(temp, "close"));
    }
    json_object_put(jobj);
    string_destroy(&pString);
    return ret;
}

void news_print_top_three(const char* ticker_name_string) {
    char* url_encoded_string = calloc(128, 1);
    if (url_encoded_string == NULL) {
        fprintf(stderr, "malloc() failed\n");
        exit(EXIT_FAILURE);
    }
    for (int i = 0, j = 0; i < 128; i++, j++) { //Replace underscores and spaces with url encoded '%20's
        if (ticker_name_string[i] == '_' || ticker_name_string[i] == ' ') {
            memcpy(&url_encoded_string[i], "%20", 3);
            i += 2;
        } else url_encoded_string[i] = ticker_name_string[j];
    }
    char yearchar[16], news_api_string[256];
    time_t now = time(NULL);
    struct tm* ts = localtime(&now);
    ts->tm_mday -= 14; // Lowerbound date is 14 days earlier
    mktime(ts);
    strftime(yearchar, 16, "%Y-%m-%d", ts);
    sprintf(news_api_string,
            "https://newsapi.org/v2/everything?sortBy=popularity&pageSize=3&language=en&apiKey=1163c352d041460381f0a8273e60a9d1&from=%s&q=%s",
            yearchar, url_encoded_string);
    free(url_encoded_string);
    String* pString = api_curl_data(news_api_string, NULL);
    Json* jobj = json_tokener_parse(pString->data);
    if (strtol(json_object_to_json_string(json_object_object_get(jobj, "totalResults")), NULL,
               10) > 0)
        json_print_news(jobj);
    else printf("No articles. Try a different input.\n");
    string_destroy(&pString);
    json_object_put(jobj);
}

void json_print_news(Json* jobj) {
    Json* article_list = json_object_object_get(jobj, "articles"), * article;
    char author_string[512], title_string[512], source_string[512], url_string[512], date_string[512], * shortened_url;
    int results = (int) strtol(json_object_to_json_string(json_object_object_get(jobj, "totalResults")), NULL, 10);
    for (int i = 0; i < results && i < 3; i++) {
        article = json_object_array_get_idx(article_list, (size_t) i);
        strcpy(author_string, json_object_to_json_string(json_object_object_get(article, "author")));
        strip_char(author_string, '\\'); // Strip all attributes of escape characters
        strcpy(title_string, json_object_to_json_string(json_object_object_get(article, "title")));
        strip_char(title_string, '\\');
        strcpy(source_string,
               json_object_to_json_string(json_object_object_get(json_object_object_get(article, "source"), "name")));
        strip_char(source_string, '\\');
        strcpy(date_string, json_object_to_json_string(json_object_object_get(article, "publishedAt")));
        date_string[11] = '\"'; // End string after day of month
        date_string[12] = '\0';
        strcpy(url_string, json_object_to_json_string(json_object_object_get(article, "url")));
        strip_char(url_string, '\\');
        strip_char(url_string, '\"');
        shortened_url = google_shorten_link(url_string); // Shorten link with google API
        printf("Title: %s Source: %s ", title_string, source_string);
        if (strcmp(author_string, "null") != 0) //Some articles don't list authors or dates
            printf("Author: %s ", author_string);
        if (strcmp(date_string, "null") != 0)
            printf("Date: %s ", date_string);
        printf("Url: \"%s\"\n", shortened_url);
        free(shortened_url);
    }
}

void api_print_info(const char* ticker_name_string) {
    Info* ticker_info = coinmarketcap_get_info(ticker_name_string);
    if (ticker_info == NULL)
        ticker_info = iex_get_info(ticker_name_string);
    if (ticker_info == NULL)
        ticker_info = morningstar_get_info(ticker_name_string);
    if (ticker_info == NULL) {
        printf("Invalid symbol!\n");
        return;
    }
    if (strcmp(ticker_info->name, "") != 0)
        printf("Name: %s\n", ticker_info->name);
    if (strcmp(ticker_info->symbol, "") != 0)
        printf("Symbol: %s\n", ticker_info->symbol);
    if (ticker_info->price != EMPTY)
        printf("Price: $%.2lf\n", ticker_info->price);
    if (ticker_info->change_1d != EMPTY)
        printf("Percent change 24h: %.2lf%%\n", ticker_info->change_1d);
    if (ticker_info->change_7d != EMPTY)
        printf("Percent change 7d: %.2lf%%\n", ticker_info->change_7d);
    if (ticker_info->change_30d != EMPTY)
        printf("Percent change 30d: %.2lf%%\n", ticker_info->change_30d);
    if (ticker_info->div_yield != EMPTY)
        printf("Dividend yield: %.2lf%%\n", ticker_info->div_yield);
    if (ticker_info->marketcap != EMPTY)
        printf("Market Cap: $%ld\n", ticker_info->marketcap);
    if (ticker_info->volume_1d != EMPTY)
        printf("Volume 24h: $%ld\n", ticker_info->volume_1d);
    api_info_destroy(&ticker_info);
}

Info* iex_get_info(const char* ticker_name_string) {
    char iex_api_string[128];
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/quote", ticker_name_string);
    String* pString = api_curl_data(iex_api_string, NULL); // API CALL 1 -- name, symbol, price, mcap, volume
    if (strcmp(pString->data, "Unknown symbol") == 0) { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Info* ticker_info = api_info_init();
    Json* jobj = json_tokener_parse(pString->data);
    strcpy(ticker_info->name, json_object_get_string(json_object_object_get(jobj, "companyName")));
    strcpy(ticker_info->symbol, json_object_get_string(json_object_object_get(jobj, "symbol")));
    ticker_info->price = json_object_get_double(json_object_object_get(jobj, "latestPrice"));
    ticker_info->marketcap = json_object_get_int64(json_object_object_get(jobj, "marketCap"));
    ticker_info->volume_1d = json_object_get_int64(json_object_object_get(jobj, "latestVolume"));
    json_object_put(jobj);
    string_destroy(&pString);
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/stats/dividendYield", ticker_name_string);
    pString = api_curl_data(iex_api_string, NULL); // API CALL 2 -- dividend
    if (strcmp("0", pString->data) != 0)
        ticker_info->div_yield = strtod(pString->data, NULL);
    string_destroy(&pString);
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/chart", ticker_name_string);
    pString = api_curl_data(iex_api_string, NULL); // API CALL 3 -- historical
    jobj = json_tokener_parse(pString->data);
    time_t now = time(NULL);
    struct tm* ts = localtime(&now);
    mktime(ts);
    int after_close = ts->tm_hour > 16 && ts->tm_wday != 0 && ts->tm_wday != 6;
    Json* d_30 = json_object_array_get_idx(jobj, (size_t) after_close);
    Json* d_7 = json_object_array_get_idx(jobj, json_object_array_length(jobj) - 6 + after_close);
    Json* d_1 = json_object_array_get_idx(jobj, json_object_array_length(jobj) - 2 + after_close);
    ticker_info->change_30d = 100 / ticker_info->price *
                              (ticker_info->price - json_object_get_double(json_object_object_get(d_30, "close")));
    ticker_info->change_7d = 100 / ticker_info->price *
                             (ticker_info->price - json_object_get_double(json_object_object_get(d_7, "close")));
    ticker_info->change_1d = 100 / ticker_info->price *
                             (ticker_info->price - json_object_get_double(json_object_object_get(d_1, "close")));
    json_object_put(jobj);
    string_destroy(&pString);
    return ticker_info;
}

Info* morningstar_get_info(const char* ticker_name_string) {
    char today_char[16], yesterday_char[16], morningstar_api_string[512];
    time_t now = time(NULL);
    struct tm* ts = localtime(&now);
    mktime(ts);
    strftime(today_char, 16, "%Y-%m-%d", ts);
    ts->tm_mday -= 30; //get info from past 30 days
    mktime(ts);
    strftime(yesterday_char, 16, "%Y-%m-%d", ts);
    sprintf(morningstar_api_string,
            "http://globalquote.morningstar.com/globalcomponent/RealtimeHistoricalStockData.ashx?showVol=true&dtype=his"
                    "&f=d&curry=USD&isD=true&isS=true&hasF=true&ProdCode=DIRECT&ticker=%s&range=%s|%s",
            ticker_name_string, yesterday_char, today_char);
    String* pString = api_curl_data(morningstar_api_string, NULL);
    if (strcmp("null", pString->data) == 0) { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Info* ticker_info = api_info_init();
    ticker_info->name[0] = '\0';
    Json* jobj = json_tokener_parse(pString->data);
    Json* datapoints = json_object_object_get(
            json_object_array_get_idx(json_object_object_get(jobj, "PriceDataList"), 0), "Datapoints");
    size_t days = json_object_array_length(datapoints);
    strcpy(ticker_info->symbol, ticker_name_string);
    ticker_info->price = json_object_get_double(
            json_object_array_get_idx(json_object_array_get_idx(datapoints, days - 1), 0));
    Json* d_30 = json_object_array_get_idx(json_object_array_get_idx(datapoints, 0), 0);
    Json* d_7 = json_object_array_get_idx(json_object_array_get_idx(datapoints, days - 6), 0);
    Json* d_1 = json_object_array_get_idx(json_object_array_get_idx(datapoints, days - 2), 0);
    ticker_info->change_30d = 100 / ticker_info->price * (ticker_info->price - json_object_get_double(d_30));
    ticker_info->change_7d = 100 / ticker_info->price * (ticker_info->price - json_object_get_double(d_7));
    ticker_info->change_1d = 100 / ticker_info->price * (ticker_info->price - json_object_get_double(d_1));
    Json* vol = json_object_object_get(jobj, "VolumeList");
    if (vol != NULL) // There is no volume for MUTF
        ticker_info->volume_1d = (long) (1000000 * json_object_get_double( // Data listed in millions
                json_object_array_get_idx(json_object_object_get(vol, "Datapoints"), days - 1)));
    json_object_put(jobj);
    string_destroy(&pString);
    return ticker_info;
}

Info* coinmarketcap_get_info(const char* ticker_name_string) {
    char coinmarketcap_api_string[64];
    sprintf(coinmarketcap_api_string, "https://api.coinmarketcap.com/v1/ticker/%s", ticker_name_string);
    String* pString = api_curl_data(coinmarketcap_api_string, NULL);
    if (pString->data[0] == '{') { //Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Info* ticker_info = api_info_init();
    Json* jobj = json_tokener_parse(pString->data);
    Json* data = json_object_array_get_idx(jobj, 0);
    strcpy(ticker_info->name, json_object_get_string(json_object_object_get(data, "name")));
    strcpy(ticker_info->symbol, json_object_get_string(json_object_object_get(data, "symbol")));
    ticker_info->price = strtod(json_object_get_string(json_object_object_get(data, "price_usd")), NULL);
    ticker_info->change_1d = strtod(json_object_get_string(json_object_object_get(data, "percent_change_24h")), NULL);
    ticker_info->change_7d = strtod(json_object_get_string(json_object_object_get(data, "percent_change_7d")), NULL);
    ticker_info->marketcap = strtol(json_object_get_string(json_object_object_get(data, "market_cap_usd")), NULL, 10);
    ticker_info->volume_1d = strtol(json_object_get_string(json_object_object_get(data, "24h_volume_usd")), NULL, 10);
    json_object_put(jobj);
    string_destroy(&pString);
    return ticker_info;
}

char* google_shorten_link(const char* url_string) {
    char post_string[1024];
    sprintf(post_string, "{\"longUrl\": \"%s\"}", url_string); //Format HTTP POST
    String* pString = api_curl_data(
            "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAoMAvMPpc7U8lfrnGMk2ZKl966tU2pppU", post_string);
    Json* jobj = json_tokener_parse(pString->data);
    char* short_url = malloc(32);
    if (short_url == NULL) {
        fprintf(stderr, "calloc() failed\n");
        exit(EXIT_FAILURE);
    }
    strcpy(short_url, json_object_to_json_string(json_object_object_get(jobj, "id")));
    strip_char(short_url, '\\');
    strip_char(short_url, '\"');
    json_object_put(jobj);
    string_destroy(&pString);
    return short_url;
}

void api_info_destroy(Info** phInfo) {
    Info* pInfo = *phInfo;
    free(pInfo->name);
    free(pInfo->symbol);
    free(*phInfo);
    *phInfo = NULL;
}