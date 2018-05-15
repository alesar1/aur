#include "portfolio.h"
#include "graph.h"

int main(int argc, char* argv[]) {
    if (argc < 2) {
        printf("Invalid arguments. Type \"man tick\" for help.\n");
        return 0;
    }
    char cmd[strlen(argv[1]) + 1];
    strcpy(cmd, argv[1]);
    strtolower(cmd);

    char* sym = NULL;
    if (argc > 2) {
        sym = malloc(strlen(argv[2]) + 1);
        pointer_alloc_check(sym);
        strcpy(sym, argv[2]);
        strtoupper(sym);
    }

    // Init portfolio path
    portfolio_file_init();

    // Init cURL
    curl_global_init(CURL_GLOBAL_ALL);

    // Portfolio modify operation
    int modop = -1;

    // News
    if (strcmp(cmd, "news") == 0) {
        if (argc == 3 && strlen(argv[2]) <= 32 && strlen(argv[2]) > 1)
            news_print_top_three(argv[2]);
        else printf("Invalid symbol.\n");
    }

        //Encrypt/decrypt
    else if ((strcmp(cmd, "encrypt") == 0 || strcmp(cmd, "decrypt") == 0) && argc == 2)
        portfolio_encrypt_decrypt(strcmp(cmd, "encrypt") == 0);

        // Info
    else if (strcmp(cmd, "info") == 0 && argc == 3)
        api_print_info(sym);
    else if (strcmp(cmd, "graph") == 0 && argc == 3)
        graph_main(sym);

        // Check
    else if (strcmp(cmd, "check") == 0) {
        int SORT = SORT_ALPHA;
        if (argc == 2)
            portfolio_print_all(SORT);
        else if (argc == 3) {
            if (strlen(sym) == 2 && sym[0] == '-') {
                if (sym[1] == 'V')
                    SORT = SORT_VALUE;
                else if (sym[1] == 'P')
                    SORT = SORT_PROFIT;
                else if (sym[1] == '1')
                    SORT = SORT_PROFIT_1D;
                else if (sym[1] == '7')
                    SORT = SORT_PROFIT_7D;
                portfolio_print_all(SORT);
            } else portfolio_print_stock(sym);
        }
        else puts("Invalid arguments. Type \"man tick\" for help.");
    }

        // Portfolio
    else if (strcmp(cmd, "add") == 0)
        modop = ADD;
    else if (strcmp(cmd, "rm") == 0)
        modop = REMOVE;
    else if (strcmp(cmd, "set") == 0)
        modop = SET;

    else printf("Invalid arguments. Type \"man tick\" for help.\n");

    // Portfolio Operations
    if (modop > -1) {
        if (argc != 5)
            printf("Invalid arguments. Type \"man tick\" for help.\n");
        else if (strlen(argv[2]) > 16)
            printf("Invalid symbol.\n");
        else if (strlen(argv[3]) > 16 || strlen(argv[4]) > 16)
            printf("Value too large.\n");
        else {
            double qty = strtod(argv[3], NULL);
            size_t ulen = strlen(argv[4]);
            char susd[ulen + 1];
            strcpy(susd, argv[4]);
            strtoupper(susd);

            // If last two characters of price are "EA", calculate
            // total price with number of units
            char ea = 0;
            if (ulen > 2 && susd[ulen - 2] == 'E' && susd[ulen - 1] == 'A') {
                ea = 1;
                susd[ulen - 2] = '\0';
            }

            double usd = strtod(susd, NULL);
            if (ea)
                usd *= qty;

            if (modop == REMOVE)
                portfolio_modify(sym, qty, usd, REMOVE);
            else if (modop == ADD)
                portfolio_modify(sym, qty, usd, ADD);
            else portfolio_modify(sym, qty, usd, SET);
        }
    }
    free(portfolio_file);
    free(sym);
    curl_global_cleanup();
    return 0;
}