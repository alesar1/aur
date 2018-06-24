# Maintainer : Dr-Shadow <xxdrshadowxx@gmail.com>
# Contributor: xantares <xantares09 at hotmail dot com>
# Contributor: Ray Donnelly <mingw.android@gmail.com>

pkgname=mingw-w64-python2
pkgver=2.7.15
_pybasever=2.7
pkgrel=2
pkgdesc="A high-level scripting language (mingw-w64)"
arch=('any')
license=('PSF')
url="http://www.python.org/"
depends=('mingw-w64-crt'
         'mingw-w64-expat'
	       'mingw-w64-bzip2'
	       'mingw-w64-ncurses'
	       'mingw-w64-openssl'
	       'mingw-w64-libffi'
         'mingw-w64-tcl'
         'mingw-w64-tk'
	       'mingw-w64-zlib'
         'mingw-w64-wine')
makedepends=('mingw-w64-gcc' 'mingw-w64-pkg-config' 'mingw-w64-configure' "python2>=${pkgver}" 'mingw-w64-wine')
options=('staticlibs' '!buildflags' '!strip')
source=("http://www.python.org/ftp/python/${pkgver}/Python-${pkgver}.tar.xz"
        'patches.tar.gz'
        'descr_ref.patch')
sha1sums=('f99348a095ec4a6411c84c0d15343d11920c9724'
          'ecc4f9469bb16c03d860ae1a6f4cc1f6d1ee3bcb'
          '8cc6ac63e909063eb16bbdabc0f0eac7d24ff0c1')
_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

# Helper macros to help make tasks easier #
apply_patch_with_msg() {
  for _patch in "$@"
  do
    msg2 "Applying ${_patch}"
    patch -Nbp1 -i "${srcdir}/${pkgver}/${_patch}"
  done
}

del_file_exists() {
  for _fname in "$@"
  do
    if [ -f ${_fname} ]; then
      rm -rf ${_fname}
    fi
  done
}
# =========================================== #

prepare() {
  cd "${srcdir}/Python-${pkgver}"

  # these are created by patches
  rm -f Misc/config_mingw \
        Misc/cross_mingw32 \
        Misc/python-config.sh.in \
        Misc/cross_mingw32 \
        Misc/python-config-u.sh.in \
        Python/fileblocks.c \
        Lib/list2cmdline.py

  plain "Apply Ray Donnelly's should-be-upstreamed patches"
  apply_patch_with_msg \
    0000-make-_sysconfigdata.py-relocatable.patch \
    0001-fix-_nt_quote_args-using-subprocess-list2cmdline.patch

  plain "Apply Roumen Petrov's core patches (13)"
  apply_patch_with_msg \
    0100-MINGW-BASE-use-NT-thread-model.patch \
    0110-MINGW-translate-gcc-internal-defines-to-python-platf.patch \
    0120-MINGW-use-header-in-lowercase.patch \
    0130-MINGW-configure-MACHDEP-and-platform-for-build.patch \
    0140-MINGW-preset-configure-defaults.patch \
    0150-MINGW-configure-largefile-support-for-windows-builds.patch \
    0160-MINGW-add-wincrypt.h-in-Python-random.c.patch \
    0180-MINGW-init-system-calls.patch \
    0190-MINGW-detect-REPARSE_DATA_BUFFER.patch \
    0200-MINGW-build-in-windows-modules-winreg.patch \
    0210-MINGW-determine-if-pwdmodule-should-be-used.patch \
    0220-MINGW-default-sys.path-calculations-for-windows-plat.patch \
    0230-MINGW-AC_LIBOBJ-replacement-of-fileblocks.patch

  plain "Apply Roumen Petrov's compiler patch (1)"
  apply_patch_with_msg \
    0250-MINGW-compiler-customize-mingw-cygwin-compilers.patch

  plain "Apply Roumen Petrov's extensions patches (21)"
  apply_patch_with_msg \
    0270-CYGWIN-issue13756-Python-make-fail-on-cygwin.patch \
    0290-issue6672-v2-Add-Mingw-recognition-to-pyport.h-to-al.patch \
    0300-MINGW-configure-for-shared-build.patch \
    0310-MINGW-dynamic-loading-support.patch \
    0320-MINGW-implement-exec-prefix.patch \
    0330-MINGW-ignore-main-program-for-frozen-scripts.patch \
    0340-MINGW-setup-exclude-termios-module.patch \
    0350-MINGW-setup-_multiprocessing-module.patch \
    0360-MINGW-setup-select-module.patch \
    0370-MINGW-setup-_ctypes-module-with-system-libffi.patch \
    0380-MINGW-defect-winsock2-and-setup-_socket-module.patch \
    0390-MINGW-exclude-unix-only-modules.patch \
    0400-MINGW-setup-msvcrt-module.patch \
    0410-MINGW-build-extensions-with-GCC.patch \
    0420-MINGW-use-Mingw32CCompiler-as-default-compiler-for-m.patch \
    0430-MINGW-find-import-library.patch \
    0440-MINGW-setup-_ssl-module.patch \
    0460-MINGW-generalization-of-posix-build-in-sysconfig.py.patch \
    0462-MINGW-support-stdcall-without-underscore.patch \
    0480-MINGW-generalization-of-posix-build-in-distutils-sys.patch \
    0490-MINGW-customize-site.patch

  plain "Apply Ray Donnelly's general/cross patches (32)"
  apply_patch_with_msg \
    0500-add-python-config-sh.patch \
    0510-cross-darwin-feature.patch \
    0520-py3k-mingw-ntthreads-vs-pthreads.patch \
    0530-mingw-system-libffi.patch \
    0540-mingw-semicolon-DELIM.patch \
    0550-mingw-regen-use-stddef_h.patch \
    0560-mingw-use-posix-getpath.patch \
    0565-mingw-add-ModuleFileName-dir-to-PATH.patch \
    0570-mingw-add-BUILDIN_WIN32_MODULEs-time-msvcrt.patch \
    0580-mingw32-test-REPARSE_DATA_BUFFER.patch \
    0590-mingw-INSTALL_SHARED-LDLIBRARY-LIBPL.patch \
    0600-msys-mingw-prefer-unix-sep-if-MSYSTEM.patch \
    0610-msys-cygwin-semi-native-build-sysconfig.patch \
    0620-mingw-sysconfig-like-posix.patch \
    0630-mingw-_winapi_as_builtin_for_Popen_in_cygwinccompiler.patch \
    0640-mingw-x86_64-size_t-format-specifier-pid_t.patch \
    0650-cross-dont-add-multiarch-paths-if-cross-compiling.patch \
    0660-mingw-use-backslashes-in-compileall-py.patch \
    0670-msys-convert_path-fix-and-root-hack.patch \
    0690-allow-static-tcltk.patch \
    0710-CROSS-properly-detect-WINDOW-_flags-for-different-nc.patch \
    0720-mingw-pdcurses_ISPAD.patch \
    0740-grammar-fixes.patch \
    0750-Add-interp-Python-DESTSHARED-to-PYTHONPATH-b4-pybuilddir-txt-dir.patch \
    0760-msys-monkeypatch-os-system-via-sh-exe.patch \
    0770-msys-replace-slashes-used-in-io-redirection.patch \
    0790-mingw-add-_exec_prefix-for-tcltk-dlls.patch \
    0800-mingw-install-layout-as-posix.patch \
    0820-mingw-reorder-bininstall-ln-symlink-creation.patch \
    0830-add-build-sysroot-config-option.patch \
    0840-add-builddir-to-library_dirs.patch \
    0845-Remove-compiler-lib-dirs-from-extension-lib-dirs.patch \
    0850-cross-PYTHON_FOR_BUILD-gteq-276-and-fullpath-it.patch \
    0855-mingw-fix-ssl-dont-use-enum_certificates.patch \
    0860-mingw-build-optimized-ext.patch \
    0870-mingw-add-LIBPL-to-library-dirs.patch \
    0910-fix-using-dllhandle-and-winver-mingw.patch \
    0970-Add-AMD64-to-sys-config-so-msvccompiler-get_build_version-works.patch \
    0980-mingw-readline-features-skip.patch

  plain "Apply Alexey Pavlov's mingw-w64 patches (6)"
  apply_patch_with_msg \
    1000-dont-link-with-gettext.patch \
    1010-ctypes-python-dll.patch \
    1020-gdbm-module-includes.patch \
    1030-use-gnu_printf-in-format.patch \
    1040-install-msilib.patch \
    1050-skip-add-db-includes-for-win.patch \

  plain "Apply Renato Silva's patch to distutils"
  apply_patch_with_msg \
    2000-distutils-add-windmc-to-cygwinccompiler.patch

  # Extend some isatty calls to check for mintty when checking for
  # a terminal output. Disable the readline module under non-mintty as it
  # breaks things with a real console (like conemu or winpty)
  # https://github.com/Alexpux/MINGW-packages/issues/2645
  # https://github.com/Alexpux/MINGW-packages/issues/2656
  apply_patch_with_msg \
    2700-cygpty-isatty-disable-readline.patch

  # gdbm is broken and as a result breaks anydbm/shelve.
  # Don't include it so the dumbdbm backend is used instead,
  # like with the official CPython build.
  apply_patch_with_msg \
    2701-disable-broken-gdbm-module.patch
    
  # Fix winsock2 include in timemodule.c
  apply_patch_with_msg \
    python-2.7.15-add-missing-winsock2-include.patch

  # run PGEN through wine
  sed -i "s|\\\$(PGEN) \\\$(GRAMMAR_INPUT)|wine \\\$(PGEN) \\\$(GRAMMAR_INPUT)|g" Makefile.pre.in

  autoreconf -vfi
  
  # Temporary workaround for FS#22322
  # See http://bugs.python.org/issue10835 for upstream report
  sed -i "/progname =/s/python/python${_pybasever}/" Python/pythonrun.c

  # Enable built-in SQLite module to load extensions (fix FS#22122)
  sed -i "/SQLITE_OMIT_LOAD_EXTENSION/d" setup.py

  # FS#23997
  sed -i -e "s|^#.* /usr/local/bin/python|#!/usr/bin/python2|" Lib/cgi.py

  sed -i "s/python2.3/python2/g" Lib/distutils/tests/test_build_scripts.py \
     Lib/distutils/tests/test_install_scripts.py Tools/scripts/gprof2html.py
  
  touch Include/graminit.h
  touch Python/graminit.c
  touch Parser/Python.asdl
  touch Parser/asdl.py
  touch Parser/asdl_c.py
  touch Include/Python-ast.h
  touch Python/Python-ast.c
  echo \"\" > Parser/pgen.stamp
  
  # Ensure that we are using the system copy of various libraries (expat, zlib and libffi),
  # rather than copies shipped in the tarball
  rm -r Modules/expat
  rm -r Modules/zlib
  rm -r Modules/_ctypes/{darwin,libffi}*
  
  # clean up #!s
  find . -name '*.py' | \
    xargs sed -i "s|#[ ]*![ ]*/usr/bin/env python$|#!/usr/bin/env python2|"
    
  # Workaround asdl_c.py/makeopcodetargets.py errors after we touched the shebangs
  touch Include/Python-ast.h Python/Python-ast.c Python/opcode_targets.h

  # FS#48761
  # http://bugs.python.org/issue25750
  patch -Np1 -i ../descr_ref.patch
}

build() {
  cd "${srcdir}/Python-${pkgver}"
  unset LDFLAGS
  for _arch in ${_architectures}; do
  
  declare -a extra_config

  CFLAGS+=" -fwrapv -D__USE_MINGW_ANSI_STDIO=1 "
  CXXFLAGS+=" -fwrapv -D__USE_MINGW_ANSI_STDIO=1 "
  CPPFLAGS+=" -I/usr/${_arch}/include/ncursesw "

  if check_option "strip" "y"; then
    LDFLAGS+=" -s "
  fi

    # Most of this is unnecessary, perhaps just
    # the extra_config bit?
  if check_option "debug" "n"; then
    CFLAGS+=" -DNDEBUG "
    CXXFLAGS+=" -DNDEBUG "
  else
    CFLAGS+=" -DDEBUG -DPy_DEBUG -D_DEBUG "
    CXXFLAGS+=" -DDEBUG -DPy_DEBUG -D_DEBUG "
    extra_config+=("--with-pydebug")
  fi

  # Workaround for conftest error on 64-bit builds
    export ac_cv_working_tzset=no
    
    mkdir -p "build-${_arch}" && pushd "build-${_arch}"
    export LIBFFI_INCLUDEDIR=`${_arch}-pkg-config libffi --cflags-only-I | sed "s|\-I||g"` 
    
    CFLAGS+=" -I/usr/${_arch}/include" \
    CXXFLAGS+=" -I/usr/${_arch}/include" \
    CPPFLAGS+=" -I/usr/${_arch}/include" \
    LDFLAGS+=" -L/usr/${_arch}/lib" \
    LIBS+=" -lws2_32" \
    ${_arch}-configure \
      --prefix=/usr/${_arch} \
      --host=${_arch} \
      --build=$CHOST \
      --enable-shared \
      --with-threads=win32 \
      --with-system-expat \
      --with-system-ffi \
      "${extra_config[@]}" \
      OPT=""
      #--with-dbmliborder='gdbm:ndbm'
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/Python-${pkgver}/build-${_arch}"
    make install DESTDIR="$pkgdir"
  mv "${pkgdir}/usr/${_arch}"/bin/smtpd.py "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/

  [[ -d "${pkgdir}/usr/${_arch}"/share/gdb/python2/ ]] || mkdir -p "${pkgdir}/usr/${_arch}"/share/gdb/python2/
  cp -f python.exe-gdb.py "${pkgdir}/usr/${_arch}"/share/gdb/python2/python_gdb.py
  
  rm "${pkgdir}/usr/${_arch}"/bin/2to3
  
  # Copy python import library to $prefix/lib because some programs can't find it in other locations
  cp -f "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/config/libpython${_pybasever}.dll.a "${pkgdir}/usr/${_arch}"/lib/libpython${_pybasever}.dll.a

  # some useful "stuff"
  install -dm755 "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/Tools/{i18n,scripts}
  install -m755 "${srcdir}/Python-${pkgver}"/Tools/i18n/{msgfmt,pygettext}.py "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/Tools/i18n/
  install -m755 "${srcdir}/Python-${pkgver}"/Tools/scripts/{README,*py} "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/Tools/scripts/

  # clean up #!s
  find "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/ -name '*.py' | \
    xargs sed -i "s|#[ ]*![ ]*/usr/bin/env python$|#!/usr/bin/env python2|"

  # clean-up reference to build directory
  sed -i "s#${srcdir}/Python-${pkgver}:##" "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/config/Makefile

  for fscripts in idle pydoc; do
    sed -e "s|/usr/${_arch}/bin/|/usr/bin/env |g" -i "${pkgdir}/usr/${_arch}"/bin/$fscripts
  done

  sed -i "s|#!${pkgdir}/usr/${_arch}/bin/python${_pybasever}.exe|#!/usr/bin/env python${_pybasever}.exe|" "${pkgdir}/usr/${_arch}"/bin/python${_pybasever}-config
  sed -i "s|#!${pkgdir}/usr/${_arch}/bin/python${_pybasever}.exe|#!/usr/bin/env python${_pybasever}.exe|" "${pkgdir}/usr/${_arch}"/bin/python2-config
  sed -i "s|#!${pkgdir}/usr/${_arch}/bin/python${_pybasever}.exe|#!/usr/bin/env python${_pybasever}.exe|" "${pkgdir}/usr/${_arch}"/bin/python-config

  # fix permissons
  find ${pkgdir}/usr/${_arch} -type f \( -name "*.dll" \) | xargs chmod 0755
  find ${pkgdir}/usr/${_arch} -type f \( -name "*.exe" \) | xargs chmod 0755
  find ${pkgdir}/usr/${_arch} -type f \( -name "*.a" \) | xargs chmod 0755

  # replace paths in sysconfig
  sed -i "s|${pkgdir}/usr/${_arch}|/usr/${_arch}|g" \
    "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/_sysconfigdata.py \
    "${pkgdir}/usr/${_arch}"/lib/python${_pybasever}/smtpd.py

  # Create python executable with windows subsystem
  cp -f "${pkgdir}/usr/${_arch}"/bin/python2.exe "${pkgdir}/usr/${_arch}"/bin/python2w.exe
  /usr/${_arch}/bin/objcopy --subsystem windows "${pkgdir}/usr/${_arch}"/bin/python2w.exe
  
  # Strip libraries, dlls and executables
  ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.exe
  ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
  ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
