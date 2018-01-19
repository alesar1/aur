#include "portfolio.h"

void portfolio_file_init() {
    char* home = getenv("HOME");
    char* path = (char*) malloc(strlen(home) + 21);
    memcpy(path, home, strlen(home) + 1);
    memcpy(&path[strlen(home)], "/.tick_portfolio", 17);
    portfolio_file = path;
}

void portfolio_modify(char* ticker_name_string, double quantity_shares, double usd_spent, FILE* fp, int option){
    if (portfolio_contains(ticker_name_string, fp)) {
        long position = ftell(fp);
        fseek(fp, 0, SEEK_END);
        size_t length = (size_t) ftell(fp);
        char* beginning = (char*) calloc(length, sizeof(char));
        char* end = (char*) calloc(length, sizeof(char));
        fseek(fp, 0, SEEK_SET);
        for (int i = 0; i < (int) position; i++)
            beginning[i] = (char) fgetc(fp);
        fseek(fp, position, SEEK_SET);
        double new_quantity_shares;
        double new_usd_spent;
        if (option == ADD) {
            new_quantity_shares = get_next_val(fp) + quantity_shares;
            new_usd_spent = get_next_val(fp) + usd_spent;
        } else if (option == REMOVE) {
            new_quantity_shares = get_next_val(fp) - quantity_shares;
            new_usd_spent = get_next_val(fp) - usd_spent;
        } else {
            new_quantity_shares = quantity_shares;
            new_usd_spent = usd_spent;
            get_next_val(fp);
            get_next_val(fp);
        }
        char c;
        for (int i = 0;; i++) {
            c = (char) fgetc(fp);
            if (feof(fp))
                break;
            end[i] = c;
        }
        if (strlen(end) > 0 && end[strlen(end) - 1] == '\n')
            end[strlen(end) - 1] = '\0';
        remove(portfolio_file);
        fp = fopen(portfolio_file, "w");
        if (new_quantity_shares >= 0 && new_usd_spent >= 0) {
            fprintf(fp, "%s%lf %lf", beginning, new_quantity_shares, new_usd_spent);
            if (strlen(end) != 0)
                fprintf(fp, "\n%s", end);
            if (option == ADD)
                printf("Added ");
            else if (option == REMOVE)
                printf("Removed ");
            else {
                printf("Set %s to %lf\n", ticker_name_string, quantity_shares);
                return;
            }
            printf("%lf %s.\n", quantity_shares, ticker_name_string);
        } else printf("You cannot remove more %s than you have!\n", ticker_name_string);
        free(beginning);
        free(end);
        fclose(fp);
    } else {
        if (api_get_current_price(ticker_name_string) == -1)
            return;
        if (option == REMOVE) {
            printf("You don't have any %s to remove!\n", ticker_name_string);
            return;
        }
        fseek(fp, 0, SEEK_END);
        if (ftell(fp) != 0)
            fprintf(fp, "\n");
        fprintf(fp, "%s %lf %lf", ticker_name_string, quantity_shares, usd_spent);
        if (option == ADD)
            printf("Added ");
        else {
            printf("Set %s to %lf\n", ticker_name_string, quantity_shares);
            return;
        }
        printf("%lf %s.\n", quantity_shares, ticker_name_string);
    }
}

double portfolio_get_quantity_shares(char* ticker_name_string, FILE* fp) {
    if (portfolio_contains(ticker_name_string, fp))
        return get_next_val(fp);
    return 0;
}

double portfolio_get_usd_spent(char* ticker_name_string, FILE* fp) {
    if (portfolio_contains(ticker_name_string, fp)) {
        get_next_val(fp);
        return get_next_val(fp);
    }
    return 0;
}

void portfolio_print_all(FILE* fp) {
    char* str = (char*) calloc(64, sizeof(char));
    char* ticker_name_string = (char*) calloc(32, sizeof(char));
    double* data;
    double total_owned = 0, total_spent = 0;
    int i;
    char c;
    while (fgets(str, 63, fp) != NULL) {
        i = 0;
        while ((c = str[i]) != ' ') {
            ticker_name_string[i] = c;
            i++;
        }
        data = portfolio_print_stock(ticker_name_string, fp);
        if (data != NULL) {
            total_owned += data[0];
            total_spent += data[1];
        }
        memset(str, '\0', 64);
        memset(ticker_name_string, '\0', 32);
        free(data);
    }
    printf("\nTotals: Value: $%8.2lf. Expenditure: $%8.2lf. Profit: %6.2lf (%4.2lf%%)\n",
           total_owned, total_spent, total_owned - total_spent, (100 * (total_owned - total_spent)) / total_spent);
    free(str);
    free(ticker_name_string);
}

double* portfolio_print_stock(char* ticker_name_string, FILE* fp){
    double* a = malloc(sizeof(double) * 2);
    if (portfolio_get_usd_spent(ticker_name_string, fp)) {
        a[0] = portfolio_get_quantity_shares(ticker_name_string, fp);
        a[1] = portfolio_get_usd_spent(ticker_name_string, fp);
        if (a[0] == 0)
            printf("Your portfolio does not contain %s\n", ticker_name_string);
        else {
            double ticker_price_usd = api_get_current_price(ticker_name_string);
            a[0] *= ticker_price_usd;
            printf("%8.2lf %5s. Value: $%8.2lf. Expenditure: $%8.2lf. Profit: %6.2lf (%4.2lf%%)\n",
                   a[0] / ticker_price_usd, ticker_name_string, a[0], a[1], a[0] - a[1], (100 * (a[0] - a[1])) / a[1]);
        }
    } else{
        free(a);
        return NULL;
    }
    return a;
}

int portfolio_contains(char* ticker_name_string, FILE* fp) {
    fseek(fp, 0, SEEK_SET);
    char* temp = (char*) calloc(16, sizeof(char)), c;
    int i = 0;
    while (1) {
        c = (char) fgetc(fp);
        if (feof(fp)) {
            fseek(fp, 0, 0);
            free(temp);
            return 0;
        }
        if (c == ' ') {
            if (strcmp(ticker_name_string, temp) == 0) {
                free(temp);
                return 1;
            } else {
                while (fgetc(fp) != '\n') {
                    if (feof(fp))
                        break;
                }
                memset(temp, '\0', 16);
                i = 0;
            }
        } else {
            temp[i] = c;
            i++;
        }
    }
}

double get_next_val(FILE* fp) {
    char* temp = (char*) calloc(32, sizeof(char)), c;
    int i = 0;
    while ((c = (char) fgetc(fp)) != ' ' && c != '\n') {
        if (feof(fp))
            break;
        temp[i] = c;
        i++;
    }
    double val = strtod(temp, NULL);
    free(temp);
    return val;
}