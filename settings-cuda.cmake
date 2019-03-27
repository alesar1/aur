set (CMAKE_BUILD_TYPE Release CACHE STRING "" FORCE)
set (BUILD_SHARED_LIBS OFF CACHE BOOL "" FORCE)  # this option is currently incompatible
set (CMAKE_INSTALL_PREFIX /usr CACHE PATH "" FORCE)
set (CMAKE_INSTALL_SYSCONFDIR /etc/root CACHE PATH "" FORCE)
set (CMAKE_INSTALL_DATAROOTDIR /usr/share CACHE PATH "" FORCE)
set (afdsmgrd OFF CACHE BOOL "" FORCE)  # broken, bug in string_view include
set (alien OFF CACHE BOOL "" FORCE)
set (all OFF CACHE BOOL "" FORCE)
set (asimage ON CACHE BOOL "" FORCE)
set (astiff ON CACHE BOOL "" FORCE)
set (bonjour OFF CACHE BOOL "" FORCE)  # depricated
set (builtin_afterimage OFF CACHE BOOL "" FORCE)
set (builtin_clang ON CACHE BOOL "" FORCE)
set (CLANG_ENABLE_STATIC_ANALYZER ON CACHE BOOL "" FORCE)
set (CLANG_ANALYZER_BUILD_Z3 ON CACHE BOOL "" FORCE)
set (builtin_cfitsio OFF CACHE BOOL "" FORCE)
set (builtin_davix OFF CACHE BOOL "" FORCE)
set (builtin_fftw3 OFF CACHE BOOL "" FORCE)
set (builtin_ftgl OFF CACHE BOOL "" FORCE)
set (builtin_freetype OFF CACHE BOOL "" FORCE)
set (builtin_gl2ps OFF CACHE BOOL "" FORCE)
set (builtin_glew OFF CACHE BOOL "" FORCE)
set (builtin_gsl OFF CACHE BOOL "" FORCE)
set (builtin_lzma OFF CACHE BOOL "" FORCE)
set (builtin_llvm ON CACHE BOOL "" FORCE)
set (builtin_openssl OFF CACHE BOOL "" FORCE)
set (builtin_pcre OFF CACHE BOOL "" FORCE)
set (builtin_tbb OFF CACHE BOOL "" FORCE)
set (builtin_unuran OFF CACHE BOOL "" FORCE)
set (builtin_vc OFF CACHE BOOL "" FORCE)
set (builtin_xxhash OFF CACHE BOOL "" FORCE)
set (builtin_xrootd OFF CACHE BOOL "" FORCE)
set (builtin_zlib OFF CACHE BOOL "" FORCE)
set (castor OFF CACHE BOOL "" FORCE)
set (ccache OFF CACHE BOOL "" FORCE)
set (clad ON CACHE BOOL "" FORCE)
set (cling ON CACHE BOOL "" FORCE)
set (cocoa OFF CACHE BOOL "" FORCE)  # MacOS only
set (cuda ON CACHE BOOL "" FORCE)
set (cxx11 OFF CACHE BOOL "" FORCE)
set (cxx14 ON CACHE BOOL "" FORCE)
set (cxx17 OFF CACHE BOOL "" FORCE)
set (davix OFF CACHE BOOL "" FORCE)
set (dcache OFF CACHE BOOL "" FORCE)
set (exceptions ON CACHE BOOL "" FORCE)
set (explicitlink ON CACHE BOOL "" FORCE)
set (fail-on-missing ON CACHE BOOL "" FORCE)
set (fftw3 ON CACHE BOOL "" FORCE)
set (fitsio ON CACHE BOOL "" FORCE)
set (fortran OFF CACHE BOOL "" FORCE)  # gcc7 doesn't provide fortran
set (gdml ON CACHE BOOL "" FORCE)
set (geocad OFF CACHE BOOL "" FORCE)
set (genvector ON CACHE BOOL "" FORCE)
set (gfal OFF CACHE BOOL "" FORCE)
set (gl2ps ON CACHE BOOL "" FORCE)
set (globus OFF CACHE BOOL "" FORCE)
set (gminimal OFF CACHE BOOL "" FORCE)
set (gnuinstall ON CACHE BOOL "" FORCE)
set (gsl_shared ON CACHE BOOL "" FORCE)
set (gviz OFF CACHE BOOL "" FORCE)  # depricated
set (hdfs OFF CACHE BOOL "" FORCE)
set (http ON CACHE BOOL "" FORCE)
set (imt ON CACHE BOOL "" FORCE)
set (jemalloc OFF CACHE BOOL "" FORCE)
set (krb5 OFF CACHE BOOL "" FORCE)  # depricated
set (ldap OFF CACHE BOOL "" FORCE)  # depricated
set (mathmore ON CACHE BOOL "" FORCE)
set (memstat OFF CACHE BOOL "" FORCE)
set (minimal OFF CACHE BOOL "" FORCE)
set (minuit2 ON CACHE BOOL "" FORCE)
set (monalisa OFF CACHE BOOL "" FORCE)
set (mt ON CACHE BOOL "" FORCE)
set (mysql ON CACHE BOOL "" FORCE)
set (odbc OFF CACHE BOOL "" FORCE)  # depricated
set (opengl ON CACHE BOOL "" FORCE)
set (OpenGL_GL_PREFERENCE GLVND CACHE STRING "" FORCE)  # use new policy since 3.11
set (oracle OFF CACHE BOOL "" FORCE)
set (pch ON CACHE BOOL "" FORCE)
set (pgsql ON CACHE BOOL "" FORCE)
set (pythia6 OFF CACHE BOOL "" FORCE)
set (pythia6_nolink OFF CACHE BOOL "" FORCE)
set (pythia8 ON CACHE BOOL "" FORCE)
# set (python3 ON CACHE BOOL "" FORCE)
set (python ON CACHE BOOL "" FORCE)
set (qt OFF CACHE BOOL "" FORCE)  # depricated
set (qtgsi OFF CACHE BOOL "" FORCE)  # depricated
set (rfio OFF CACHE BOOL "" FORCE)
set (roofit ON CACHE BOOL "" FORCE)
set (root7 ON CACHE BOOL "" FORCE)
set (roottest OFF CACHE BOOL "" FORCE)
set (rpath OFF CACHE BOOL "" FORCE)
set (runtime_cxxmodules OFF CACHE BOOL "" FORCE)  # broken - circular dependency
set (r OFF CACHE BOOL "" FORCE)  # requires r-rcpp
set (shadowpw ON CACHE BOOL "" FORCE)
set (shared ON CACHE BOOL "" FORCE)
set (soversion OFF CACHE BOOL "" FORCE)
set (sqlite ON CACHE BOOL "" FORCE)
set (ssl ON CACHE BOOL "" FORCE)
set (table OFF CACHE BOOL "" FORCE)  # depricated
set (tbb ON CACHE BOOL "" FORCE)
set (tcmalloc OFF CACHE BOOL "" FORCE)
set (testing OFF CACHE BOOL "" FORCE)
set (thread ON CACHE BOOL "" FORCE)  # cannot be disabled
set (tmva ON CACHE BOOL "" FORCE)
set (tmva-cpu OFF CACHE BOOL "" FORCE)
set (tmva-gpu ON CACHE BOOL "" FORCE)
set (tmva-pymva ON CACHE BOOL "" FORCE)
set (unuran ON CACHE BOOL "" FORCE)
set (vc ON CACHE BOOL "" FORCE)
set (vdt ON CACHE BOOL "" FORCE)
set (winrtdebug OFF CACHE BOOL "" FORCE)  # windows only
set (x11 ON CACHE BOOL "" FORCE)
set (xft ON CACHE BOOL "" FORCE)
set (xml ON CACHE BOOL "" FORCE)
set (xrootd ON CACHE BOOL "" FORCE)
