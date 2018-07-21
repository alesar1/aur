/**
 * API data is taken from IEX Trading, Morningstar, and Coinmarketcap.
 * https://iextrading.com/developer/docs/
 * http://www.morningstar.com/
 * https://coinmarketcap.com/api/documentation/v1
 */

#ifndef TICK_API_H
#define TICK_API_H

#define QUARTERS 4
#define DATE_MAX_LENGTH 16
#define CELL_MAX_LENGTH 16
#define SYMBOL_MAX_LENGTH 32
#define URL_MAX_LENGTH 2048
#define INFO_TEXT_MAX 2048
#define EMPTY (-999)
#define DEFAULT_NUM_ARTICLES 3
#define MAX_PEERS 12

#include <stddef.h>
#include <curl/curl.h>
#include <json-c/json_tokener.h>
#include <pthread.h>
#include "utils.h"

typedef struct news_article {
    char headline[INFO_TEXT_MAX];
    char source[INFO_TEXT_MAX];
    char date[DATE_MAX_LENGTH];
    char summary[INFO_TEXT_MAX];
    char url[URL_MAX_LENGTH];
    char related[INFO_TEXT_MAX];
} News;

typedef struct info Info;

typedef struct info_array Info_Array;

struct info {
    /** API DATA **/

    /* Company */
    char symbol[SYMBOL_MAX_LENGTH];     // ex. AAPL
    char name[INFO_TEXT_MAX];           // ex. Apple Inc.
    char industry[INFO_TEXT_MAX];       // ex. Computer Hardware
    char website[URL_MAX_LENGTH];       // ex. apple.com
    char description[INFO_TEXT_MAX];    // Paragraph description of company
    char ceo[INFO_TEXT_MAX];            // ex. Timothy D. Cook
    char issue_type[3];                 /* ad – American Depository Receipt (ADR’s)
                                           re – Real Estate Investment Trust (REIT’s)
                                           ce – Closed end fund (Stock and Bond Fund)
                                           si – Secondary Issue
                                           lp – Limited Partnerships
                                           cs – Common Stock
                                           et – Exchange Traded Fund (ETF)
                                           (blank) = Not Available, i.e., Warrant, Note, or (non-filing)
                                           Closed Ended Funds
                                        */
    char sector[INFO_TEXT_MAX];         // ex. Technology

    /* Quote */
    int64_t intraday_time;              // Unix timestamp of current price
    double price;                       // Current price of security in USD (ex. 174.54)
    int64_t marketcap;                  // Market cap in USD (ex. 890489000000)
    int64_t volume_1d;                  // Volume in shares of security (ex. 33812360)
    double pe_ratio;                    // Price per earnings ratio

    /* Stats */
    double div_yield;                   // Percent dividend yield (ex. 1.46)
    int64_t revenue;                    // Revenue in dollars
    int64_t gross_profit;               // Gross Profit in dollars
    int64_t cash;                       // Cash in dollars
    int64_t debt;                       // Debt in dollars

    /* Earnings */
    double eps[QUARTERS];               // Earnings per share per quarter for past four quarters
    char fiscal_period[QUARTERS][DATE_MAX_LENGTH];  // Quarter and Year of past four quarters (ex. Q1 2018)
    double eps_year_ago[QUARTERS];      // Earnings per share per quarter for the previous year

    /* Chart */
    double price_last_close;            // Last close price
    double price_7d;                    // Price 7 days ago
    double price_30d;                   // Price 30 days ago
    double* points;                     // Array of one price per day, startings five years previously
    int num_points;                     // Number of data points

    /* News */
    News** articles;                    // Array of News pointers
    int num_articles;                   // Number of News pointers in array

    /* Peers */
    Info_Array* peers;

    /** PORTFOLIO DATA **/

    double amount;                      // Amount of security in porfolio
    double total_spent;                 // Total USD spent
    double current_value;               // Total USD value

    char famount[CELL_MAX_LENGTH];                      // Amount of security in porfolio
    char ftotal_spent[CELL_MAX_LENGTH];                 // Total USD spent
    char fcurrent_value[CELL_MAX_LENGTH];               // Total USD value

    /** CALCULATED DATA **/

    double profit_total;                // Total profit
    double profit_total_percent;        // Total profit %
    double profit_last_close;           // Profit since last close
    double profit_last_close_percent;   // Profit since last close %
    double profit_7d;                   // Profit since seven days ago
    double profit_7d_percent;           // Profit since seven days ago %
    double profit_30d;                  // Profit since thirty days ago
    double profit_30d_percent;          // Profit since thirty days ago %

    char fprofit_total[CELL_MAX_LENGTH];                // Total profit
    char fprofit_total_percent[CELL_MAX_LENGTH];        // Total profit %
    char fprofit_last_close[CELL_MAX_LENGTH];           // Profit since last close
    char fprofit_last_close_percent[CELL_MAX_LENGTH];   // Profit since last close %
    char fprofit_7d[CELL_MAX_LENGTH];                   // Profit since seven days ago
    char fprofit_7d_percent[CELL_MAX_LENGTH];           // Profit since seven days ago %
    char fprofit_30d[CELL_MAX_LENGTH];                  // Profit since thirty days ago
    char fprofit_30d_percent[CELL_MAX_LENGTH];          // Profit since thirty days ago %
};

struct info_array {
    Info** array;
    size_t length;
    Info* totals;
};

/**
 * Allocates a News struct and returns a pointer to it.
 * @return News*
 */
News* api_news_init(void);

/**
 * Allocates an Info struct and returns a pointer to it. All numbers are set to EMPTY, all strings are NULL
 * terminated at length 0, and all pointers are set to NULL.
 * @return Info*
 */
Info* api_info_init(void);

/**
 * Allocates an Info_Array struct with length 0.
 * @return Info_Array*
 */
Info_Array* api_info_array_init(void);

/**
 * writefunction for cURL HTTP GET/POST
 * stolen from a nice man on stackoverflow
 */
size_t api_string_writefunc(void* ptr, size_t size, size_t nmemb, String* pString);

/**
 * Performs a HTTP GET. Response data is stored and returned in an allocated String*.
 * @param url API url to GET
 * @return NULL if error or no response from server. Otherwise, String* containing data.
 */
String* api_curl_data(const char* url);

/**
 * Designed for threading
 *
 * Queries IEX's company endpoint and stores the data in the Info object pointed to by vpInfo. symbol, name,
 * industry, website, description, ceo, issue_type, and sector are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_company(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries IEX's quote endpoint and stores the data in the Info object pointed to by vpInfo. intraday_time, price,
 * price_last_close, marketcap, volume_1d, and pe_ratio are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_quote(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries IEX's stats endpoint and stores the data in the Info object pointed to by vpInfo. div_yield, revenue,
 * gross_profit, cash, and debt are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_stats(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries IEX's stats earnings and stores the data in the Info object pointed to by vpInfo. eps, fiscal_period, and
 * eps_year_ago are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_earnings(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries IEX's chart endpoint and stores the data in the Info object pointed to by vpInfo. change_7d,
 * change_30d, and points are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_chart(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries IEX's news endpoint and stores the data in the Info object pointed to by vpInfo. num_articles number of
 * articles are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_news(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries IEX's peers endpoint and stores the data in the Info object pointed to by vpInfo.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_peers(void* vpInfo);

/**
 * Designed for threading
 *
 * Calls the above 7 iex store functions to store api data in the Info object pointed to by vpInfo.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_all_info(void* vpInfo);

/**
 * Designed for threading
 *
 * Calls iex_store_quote and iex_store_chart to store api data in the Info object pointed to by
 * vpInfo.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* iex_store_check_info(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries Morningstar's API and stores the data in the Info object pointed to by vpInfo. price, change_1d,
 * change_7d, change_30d, points, and volume_1d are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* morningstar_store_info(void* vpInfo);

/**
 * Designed for threading
 *
 * Queries Coinmarketcaps's API and stores the data in the Info object pointed to by vpInfo. name, symbol, price,
 * change_1d, change_7d, marketcap, and volume_1d are stored.
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* coinmarketcap_store_info(void* vpInfo);

/**
 * Stores API data in Info object pointed to by vpInfo. The function will first query IEX. If no
 * response, it will query Morningstar. If no response, it will query Coinmarketcap.
 * 1. IEX -- NASDAQ/NYSE/NYSEARCA
 * 2. Morningstar -- MUTF/OTCMKTS
 * 3. Coinmarketcap -- CRYPTO
 *
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* api_store_all_info(void* vpInfo);

/**
 * Stores API data in Info object pointed to by vpInfo. The function will first query IEX's check
 * data. If no response, it will query Morningstar. If no response, it will query Coinmarketcap.
 * 1. IEX -- NASDAQ/NYSE/NYSEARCA
 * 2. Morningstar -- MUTF/OTCMKTS
 * 3. Coinmarketcap -- CRYPTO
 *
 * @param vpInfo Info*
 * @return vpInfo on success, NULL on error
 */
void* api_store_check_info(void* vpInfo);

/**
 * Fills an Info_Array with check api data. Primarily used for "check" command.
 * @param portfolio_data Info_Array
 * @param pString portfolio data
 */
void* api_info_array_store_check_data(void* vpPortfolio_Data);

/**
 * After API data and portfolio have already been collected, uses them to populate the Info fields current_value and
 * all the profit fields.
 * @param pInfo Info*
 */
void info_store_check_data(Info* pInfo);

/**
 * Adds up values of Info array and sets values in totals.
 * @param pInfo_Array
 */
void info_array_store_totals(Info_Array* pInfo_Array);

/**
 * Returns a pointer to an Info_Array containing a list of all iex listed securities.
 * @return Info_Array*
 */
Info_Array* iex_get_valid_symbols(void);

/**
 * Destroys News object and frees memory. Sets the pointer of the News to NULL
 * @param phNews the News to destroy
 */
void api_news_destroy(News** phNews);

/**
 * Destroys Info object and frees memory. Sets the pointer to the Info to NULL
 * @param phInfo the Info to destroy
 */
void api_info_destroy(Info** phInfo);

/**
 * Destroys Info_Array object and frees memory. Sets the pointer to the Info to NULL
 * @param phInfo_Array the Info_Array to destroy
 */
void api_info_array_destroy(Info_Array** phInfo_Array);

#endif