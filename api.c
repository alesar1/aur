#include "api.h"

Info* api_info_init(void) {
    Info* pInfo = malloc(sizeof(Info));
    pointer_alloc_check(pInfo);
    pInfo->name = malloc(64);
    pointer_alloc_check(pInfo->name);
    pInfo->symbol = malloc(64);
    pointer_alloc_check(pInfo->symbol);
    pInfo->price = EMPTY;
    pInfo->change_1d = EMPTY;
    pInfo->change_7d = EMPTY;
    pInfo->change_30d = EMPTY;
    pInfo->div_yield = EMPTY;
    pInfo->marketcap = EMPTY;
    pInfo->volume_1d = EMPTY;
    return pInfo;
}

size_t api_string_writefunc(void* ptr, size_t size, size_t nmemb, String* hString) {
    String* pString = hString;
    size_t new_len = pString->len + size * nmemb;
    pString->data = realloc(pString->data, new_len + 1);
    pointer_alloc_check(pString->data);
    memcpy(pString->data + pString->len, ptr, size * nmemb);
    pString->data[new_len] = '\0';
    pString->len = new_len;
    return size * nmemb;
}

String* api_curl_data(const char* url, const char* post_field) {
    String* pString = string_init();
    CURL* curl = curl_easy_init();
    CURLcode res;
    if (!curl) { // Error creating curl object
        string_destroy(&pString);
        RETNULL_MSG("Error initializing curl.")
    }
    curl_easy_setopt(curl, CURLOPT_URL, url); // Set URL
    curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L); // Needed for HTTPS
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, api_string_writefunc); // Specify writefunc for return data
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &pString->data); // Specify object for return data
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
    if (res != CURLE_OK) {
        string_destroy(&pString);// Free and return NULL
        RETNULL_MSG("Error curling data.")
    }
    return pString;
}

double* api_get_current_price(const char* ticker_name_string) {
    double* val;
    if (strlen(ticker_name_string) > 5) { // If symbol length is greater than 5, then it must be a crypto
        val = coinmarketcap_get_price(ticker_name_string);
        return val;
    }
    val = iex_get_price(ticker_name_string); // First tries IEX for intraday prices
    if (val != NULL)
        return val;
    val = morningstar_get_price(ticker_name_string); // Secondly tries Morningstar for market open/close data
    if (val != NULL)
        return val;
    val = coinmarketcap_get_price(ticker_name_string); // Thirdly tries Coinmarketcap for real-time crypto data
    if (val != NULL)
        return val;
    return NULL; // Invalid symbol
}

double* iex_get_price(const char* ticker_name_string) {
    char iex_api_string[80];
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/quote", ticker_name_string);
    String* pString = api_curl_data(iex_api_string, NULL);
    if (strcmp(pString->data, "Unknown symbol") == 0) { // Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    double* api_data = malloc(sizeof(double) * 3);
    pointer_alloc_check(api_data);
    // First API call can only give intraday and previous close
    api_data[0] = json_object_get_double(json_object_object_get(jobj, "latestPrice")); // Intraday
    api_data[1] = json_object_get_double(json_object_object_get(jobj, "previousClose")); // Previous close
    json_object_put(jobj);
    string_destroy(&pString);
    // Second API call gives 7D price
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/chart", ticker_name_string);
    pString = api_curl_data(iex_api_string, NULL);
    jobj = json_tokener_parse(pString->data);
    api_data[2] = json_object_get_double(
            json_object_object_get(json_object_array_get_idx(jobj, json_object_array_length(jobj) - 5), "close"));
    json_object_put(jobj);
    string_destroy(&pString);
    return api_data;
}

double* morningstar_get_price(const char* ticker_name_string) {
    char today_char[16], yesterday_char[16], morningstar_api_string[256];
    time_t now = time(NULL);
    struct tm* ts = localtime(&now);
    strftime(today_char, 16, "%Y-%m-%d", ts);
    ts->tm_mday -= 12; // Get info from past 12 days
    mktime(ts);
    strftime(yesterday_char, 16, "%Y-%m-%d", ts);
    sprintf(morningstar_api_string,
            "http://globalquote.morningstar.com/globalcomponent/RealtimeHistoricalStockData.ashx?showVol=true&dtype=his"
            "&f=d&curry=USD&isD=true&isS=true&hasF=true&ProdCode=DIRECT&ticker=%s&range=%s|%s",
            ticker_name_string, yesterday_char, today_char);
    String* pString = api_curl_data(morningstar_api_string, NULL);
    if (strcmp("null", pString->data) == 0) { // Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    double* api_data = malloc(sizeof(double) * 3);
    pointer_alloc_check(api_data);
    Json* datapoints = json_object_object_get(
            json_object_array_get_idx(json_object_object_get(jobj, "PriceDataList"), 0), "Datapoints");
    size_t size = json_object_array_length(datapoints);
    api_data[0] = json_object_get_double(json_object_array_get_idx(json_object_array_get_idx(datapoints, size - 1), 0));
    api_data[1] = json_object_get_double(json_object_array_get_idx(json_object_array_get_idx(datapoints, size - 2), 0));
    api_data[2] = json_object_get_double(json_object_array_get_idx(json_object_array_get_idx(datapoints, size - 5), 0));
    json_object_put(jobj);
    string_destroy(&pString);
    return api_data;
}

double* coinmarketcap_get_price(const char* ticker_name_string) {
    char coinmarketcap_api_string[64];
    sprintf(coinmarketcap_api_string, "https://api.coinmarketcap.com/v1/ticker/%s", ticker_name_string);
    String* pString = api_curl_data(coinmarketcap_api_string, NULL);
    if (pString->data[0] == '{') { // Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    double* api_data = malloc(sizeof(double) * 3);
    pointer_alloc_check(api_data);
    Json* idx = json_object_array_get_idx(jobj, 0);
    api_data[0] = strtod(json_object_get_string(json_object_object_get(idx, "price_usd")), NULL);
    api_data[1] = api_data[0] - ((strtod(json_object_get_string(
            json_object_object_get(idx, "percent_change_24h")), NULL) / 100) * api_data[0]);
    api_data[2] = api_data[0] - ((strtod(json_object_get_string(
            json_object_object_get(idx, "percent_change_7d")), NULL) / 100) * api_data[0]);
    json_object_put(jobj);
    string_destroy(&pString);
    return api_data;
}

double* api_get_hist_5y(const char* ticker_name_string) {
    double* val;
    val = iex_get_hist_5y(ticker_name_string); // First tries IEX
    if (val != NULL)
        return val;
    val = morningstar_get_hist_5y(ticker_name_string); // Secondly tries Morningstar
    if (val != NULL)
        return val;
    return NULL; // Invalid symbol or cryptocurrency
}

double* iex_get_hist_5y(const char* ticker_name_string) {
    char iex_api_string[64];
    sprintf(iex_api_string, "https://api.iextrading.com/1.0/stock/%s/chart/5y", ticker_name_string);
    String* pString = api_curl_data(iex_api_string, NULL);
    if (strcmp(pString->data, "Unknown symbol") == 0) { // Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    size_t len = json_object_array_length(jobj);
    double* api_data = calloc(len + 1, sizeof(double));
    pointer_alloc_check(api_data);
    Json* temp;
    for (int i = 0; i < (int) len; i++) {
        temp = json_object_array_get_idx(jobj, (size_t) i);
        api_data[i] = json_object_get_double(json_object_object_get(temp, "close"));
    }
    json_object_put(jobj);
    string_destroy(&pString);
    return api_data;
}

double* morningstar_get_hist_5y(const char* ticker_name_string) {
    char today_char[16], yesterday_char[16], morningstar_api_string[256];
    time_t now = time(NULL);
    struct tm* ts = localtime(&now);
    mktime(ts);
    strftime(today_char, 16, "%Y-%m-%d", ts);
    ts->tm_year -= 5; //get info from past 5 years
    mktime(ts);
    strftime(yesterday_char, 16, "%Y-%m-%d", ts);
    sprintf(morningstar_api_string,
            "http://globalquote.morningstar.com/globalcomponent/RealtimeHistoricalStockData.ashx?showVol=true&dtype=his"
            "&f=d&curry=USD&isD=true&isS=true&hasF=true&ProdCode=DIRECT&ticker=%s&range=%s|%s",
            ticker_name_string, yesterday_char, today_char);
    String* pString = api_curl_data(morningstar_api_string, NULL);
    if (strcmp("null", pString->data) == 0) { // Invalid symbol
        string_destroy(&pString);
        return NULL;
    }
    Json* jobj = json_tokener_parse(pString->data);
    Json* datapoints = json_object_object_get(
            json_object_array_get_idx(json_object_object_get(jobj, "PriceDataList"), 0), "Datapoints");
    size_t len = json_object_array_length(datapoints);
    double* ret = calloc(len + 1, sizeof(double)); // Must calloc() because some data points don't exist
    pointer_alloc_check(ret);
    for (int i = 0; i < (int) len; i++)
        ret[i] = json_object_get_double(
                json_object_array_get_idx(json_object_array_get_idx(datapoints, (size_t) i), 0));
    json_object_put(jobj);
    string_destroy(&pString);
    return ret;
}

void news_print_top_three(const char* ticker_name_string) {
    char* url_encoded_string = calloc(128, sizeof(char));
    pointer_alloc_check(url_encoded_string);
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
    sprintf(news_api_string, "https://newsapi.org/v2/everything?sortBy=popularity&pageSize=3&language=en"
                             "&apiKey=1163c352d041460381f0a8273e60a9d1&from=%s&q=%s", yearchar, url_encoded_string);
    free(url_encoded_string);
    String* pString = api_curl_data(news_api_string, NULL);
    Json* jobj = json_tokener_parse(pString->data);
    if (strtol(json_object_to_json_string(json_object_object_get(jobj, "totalResults")), NULL, 10) > 0)
        json_print_news(jobj);
    else puts("No articles. Try a different input.");
    json_object_put(jobj);
    string_destroy(&pString);
}

void json_print_news(const Json* jobj) {
    Json* article_list = json_object_object_get(jobj, "articles"), * article;
    char author_string[512], title_string[512], source_string[512], url_string[512], date_string[512], * shortened_url;
    int results = (int) strtol(json_object_to_json_string(json_object_object_get(jobj, "totalResults")), NULL, 10);
    if (results > 3)
        results = 3;
    for (int i = 0; i < results; i++) {
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
        if (strcmp(author_string, "null") != 0) // Some articles don't list authors or dates
            printf("Author: %s ", author_string);
        if (strcmp(date_string, "null") != 0)
            printf("Date: %s ", date_string);
        printf("Url: \"%s\"\n", shortened_url);
        free(shortened_url);
    }
}

void api_print_info(const char* ticker_name_string) {
    Info* ticker_info;
    if (strlen(ticker_name_string) > 5) { // If symbol length is greater than 5, then it must be a crypto
        ticker_info = coinmarketcap_get_info(ticker_name_string);
        if (ticker_info == NULL)
            RET_MSG("Invalid symbol!")
    }
    ticker_info = iex_get_info(ticker_name_string);
    if (ticker_info == NULL)
        ticker_info = morningstar_get_info(ticker_name_string);
    if (ticker_info == NULL)
        RET_MSG("Invalid symbol!")

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
    ts->tm_mday -= 30; // Get info from past 30 days
    mktime(ts);
    strftime(yesterday_char, 16, "%Y-%m-%d", ts);
    sprintf(morningstar_api_string,
            "http://globalquote.morningstar.com/globalcomponent/RealtimeHistoricalStockData.ashx?showVol=true&dtype=his"
            "&f=d&curry=USD&isD=true&isS=true&hasF=true&ProdCode=DIRECT&ticker=%s&range=%s|%s",
            ticker_name_string, yesterday_char, today_char);
    String* pString = api_curl_data(morningstar_api_string, NULL);
    if (strcmp("null", pString->data) == 0) { // Invalid symbol
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
    if (pString->data[0] == '{') { // Invalid symbol
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
    sprintf(post_string, "{\"longUrl\": \"%s\"}", url_string); // Format HTTP POST
    String* pString = api_curl_data(
            "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAoMAvMPpc7U8lfrnGMk2ZKl966tU2pppU", post_string);
    Json* jobj = json_tokener_parse(pString->data);
    char* short_url = malloc(32);
    pointer_alloc_check(short_url);
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