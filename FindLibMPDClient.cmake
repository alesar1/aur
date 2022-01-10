find_package(PkgConfig QUIET)
pkg_check_modules(PC_LIBMPDCLIENT QUIET libmpdclient)

find_path(LIBMPDCLIENT_INCLUDE_DIR
        NAMES mpd/version.h
        HINTS ${PC_LIBMPDCLIENT_INCLUDEDIR} ${PC_LIBMPDCLIENT_INCLUDE_DIRS})

find_library(LIBMPDCLIENT_LIBRARY
        NAMES mpdclient libmpdclient
        HINTS ${PC_LIBMPDCLIENT_LIBDIR} ${PC_LIBMPDCLIENT_LIBRARY_DIRS})

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(LibMPDClient
        REQUIRED_VARS LIBMPDCLIENT_LIBRARY LIBMPDCLIENT_INCLUDE_DIR)

if (LIBMPDCLIENT_FOUND)
    set(LIBMPDCLIENT_LIBRARIES ${LIBMPDCLIENT_LIBRARY})
    set(LIBMPDCLIENT_INCLUDE_DIRS ${LIBMPDCLIENT_INCLUDE_DIR}/mpd)
endif ()

mark_as_advanced(LIBMPDCLIENT_INCLUDE_DIR LIBMPDCLIENT_LIBRARY)
