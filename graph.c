#include "graph.h"

void graph_main(const char* ticker_name_string) {
    initscr();
    noecho(); // Don't echo keystrokes
    keypad(stdscr, TRUE); // Enables extra keystrokes
    curs_set(0); // Hides cursor
    double* price_data = api_get_hist_5y(ticker_name_string);
    if (price_data == NULL) { // If invalid symbol or cryptocurrency
        puts("Invalid symbol.");
        endwin();
        return;
    }

    time_t now = time(NULL);
    struct tm today_date = *localtime(&now), start_date = today_date, furthest_back_date = today_date, end;
    start_date.tm_year -= 5, furthest_back_date.tm_year -= 5;
    int ch, zoom = ZOOM_5y;
    graph_print(price_data, &start_date, zoom); // Initial graph of 5 year history

    while (1) { // Main input loop
        ch = getch();
        if (ch == 'q') // Quits program on "q"
            break;

        if ((ch == KEY_UP && zoom != ZOOM_1m) || (ch == KEY_DOWN && zoom != ZOOM_5y) ||
            (zoom != ZOOM_5y && (ch == KEY_LEFT || ch == KEY_RIGHT))) { // UP / DOWN / LEFT / RIGHT
            if (ch == KEY_UP) {
                zoom++;
                start_date.tm_mon += zoom_change_x_months[zoom];
            } else if (ch == KEY_RIGHT || ch == KEY_DOWN) {
                if (ch == KEY_DOWN)
                    zoom--;
                if (zoom == ZOOM_1m)
                    start_date.tm_mon += 1; // Moves only one month if zoom is 1 month
                else start_date.tm_mon += zoom_change_x_months[zoom];

                end = start_date; // If trying to go past current date, set start to (zoom level - current date)
                end.tm_mon += zoom_months[zoom];
                if (difftime(mktime(&end), mktime(&today_date)) > 0) {
                    start_date = today_date;
                    start_date.tm_mon -= zoom_months[zoom];
                }
            } else { // LEFT
                if (zoom == ZOOM_1m)
                    start_date.tm_mon -= 1; // Moves only one month if zoom is 1 month
                else start_date.tm_mon -= zoom_change_x_months[zoom];
                if (difftime(mktime(&start_date), mktime(&furthest_back_date)) < 0)
                    start_date = furthest_back_date; // Can't go back past furthest_date
            }
            graph_print(price_data, &start_date, zoom);
        }
    }
    endwin();
    free(price_data);
}

void graph_print(const double* points, struct tm* start_time, int zoom) {
    move(0, 0); // Instead of clear()ing, move to the top left corner and re-print
    int cols, rows;
    getmaxyx(stdscr, rows, cols);
    cols -= 11; // 10 offset to give space for graph labels + 1 for right side
    rows -= rows % ROWS_SPACING; // Round down to multiple of 5
    if (cols < 10 || rows < 10) { // Exits if the terminal is too small
        puts("Terminal not large enough.");
        return;
    }

    time_t now = time(NULL);
    struct tm end_date = *start_time, * five_y = localtime(&now);
    end_date.tm_mon += zoom_months[zoom], five_y->tm_year -= 5;

    double seconds = difftime(mktime(&end_date), mktime(start_time));
    int trading_days = (int) ((1.0 / DAYS_TO_BUSINESS_DAYS_RATIO) * seconds / 86400.0); // Total trading days to print

    seconds = difftime(mktime(start_time), mktime(five_y));
    int starting_index = (int) ((1.0 / DAYS_TO_BUSINESS_DAYS_RATIO) * seconds / 86400.0);

    double max = points[starting_index], min = points[starting_index];
    for (int i = starting_index + 1; i < trading_days + starting_index; i++) {
        if (points[i] > max) // Find max and min values for graph upper/lower bounds
            max = points[i];
        if (points[i] < min)
            min = points[i];
    }
    double line_diff = (max - min) / rows, dat; // Each line includes data point up to line_diff below

    for (int i = rows; i >= 0; i--) {
        if (i % ROWS_SPACING == 0) // Print y-axis price labels with width 10
            printw("%9.2lf ", (max - ((rows - i) * line_diff)));
        else printw("          "); // Indent width 10
        for (int j = 0; j < cols; j++) {
            dat = points[starting_index + (int) ((double) j * trading_days / cols)];
            if (dat <= (max - ((rows - i) * line_diff)) && dat > (min + ((i - 1) * line_diff)))
                addch(ACS_DIAMOND);
            else if (i % ROWS_SPACING == 0 && j % COLS_SPACING == 0) // Cross on corners
                addch(ACS_PLUS);
            else if (i % ROWS_SPACING == 0) // Horizontal line every ROWS_SPACING lines
                addch(ACS_HLINE);
            else if (j % COLS_SPACING == 0) // Vertical line every COLS_SPACING lines
                addch(ACS_VLINE);
            else // Otherwise prints a space
                addch(' ');
        }
        addch('\n'); // Newline on line end
    }

    printw("     "); // Use to center date labels
    char time_string[16];
    double x = (DAYS_TO_BUSINESS_DAYS_RATIO * trading_days) / (cols / COLS_SPACING);
    struct tm copy = *start_time;
    for (int i = 0; i < cols; i++) {
        if (i % (2 * COLS_SPACING) == 0 && cols - i > 5) { // Print x-axis date labels every two
            if (i != 0)
                copy.tm_sec += x * 2.0 * 86400.0;
            mktime(&copy);
            strftime(time_string, 16, "%m/%d/%Y", &copy);
            printw("%s              ", time_string); // Width 2 * COLS_SPACING
        }
    }

    printw("\n\n"); //  Empty line as spacing
    for (int i = 0; i < cols / 2 - 8; i++)
        addch(' '); // Center text
    const char* str[9] = {"5y", "4y", "3y", "2y", "1y", "9m", "6m", "3m", "1m"}; // Zoom level
    for (int i = 0; i < 9; i++) {
        if (zoom == i)
            attron(A_STANDOUT); // Highlight current zoom level
        addstr(str[i]);
        attroff(A_STANDOUT);
        addch(' ');
    }
}