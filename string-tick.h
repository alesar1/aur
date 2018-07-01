#ifndef STRING_TICK_H
#define STRING_TICK_H

#define RET_MSG(msg) {\
    puts(msg);\
    return;\
}

#define RETNULL_MSG(msg) {\
    puts(msg);\
    return NULL;\
}

#define GOTO_CLEAN_MSG(msg) {\
    puts(msg);\
    goto cleanup;\
}

#define EXIT_MSG(msg) {\
    fprintf(stderr, "%s\n", msg);\
    exit(EXIT_FAILURE);\
}

#define RET_TRUE_MSG(msg) {\
    puts(msg);\
    return 1;\
}

#define RET_FALSE_MSG(msg) {\
    puts(msg);\
    return 0;\
}

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <sys/stat.h>

typedef struct string {
    char* data;
    size_t len;
} String;

typedef struct json_object Json;

/**
 * Creates and returns a String object with len 0 and data allocated 1 byte null terminated.
 * @return STRING object
 */
String* string_init(void);

/**
 * Changes letters in a string to lowercase in place
 * @param str the string
 */
void strtolower(char* str);

/**
 * Changes letters in a string to uppercase in place
 * @param str the string
 */
void strtoupper(char* str);

/**
 * Returns the input string, stripped of the given char c in place
 * @param string the string to strip the char from
 * @param c the char to strip
 * @return input string
 */
char* strip_char(char* string, char c);

/**
 * Returns the input string, stripped of all HTML tags.
 * @param string input string
 * @return input string
 */
char* strip_tags(char* string);

/**
 * Returns the contents of a file in a String. Will return NULL if the file doesn't exist, if the
 * file cannot be opened, or if there is an issue reading the file.
 * @param file_name path to file
 * @return String* or NULL
 */
String* file_get_string(char* file_name);

/**
 * Writes a String to a file. Will return on error opening file.
 * @param pString the String to overwrite with
 */
void string_write_file(String* pString, char* file_name);

/**
 * Destroys String object and frees memory. Points the String to NULL.
 * @param phString the String to destroy
 */
void string_destroy(String** phString);

/**
 * If pointer is NULL, print error message and exit the program
 * @param alloced recently alloced pointer
 */
void pointer_alloc_check(void* alloced);

#endif