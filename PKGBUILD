# Maintainer: Martchus <martchus@gmx.net>
# Contributor: ant32 <antreimer@gmail.com>
# Contributor: Filip Brcic <brcha@gna.org>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

# Includes dynamic and static versions; if only one version is requried, just
# set $NO_STATIC_LIBS or $NO_SHARED_LIBS.

# For QQuickWidgetPlugin, add mingw-w64-qt5-declarative to dependencies (already present by default)
# For QWebViewPlugin, add mingw-w64-qt5-webkit to dependencies
# For QAxWidgetPlugin, add mingw-w64-qt5-activeqt to dependencies

# All patches are managed at https://github.com/Martchus/qttools

_qt_module=qttools
pkgname="mingw-w64-qt5-tools"
pkgver=5.10.1
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="A cross-platform application and UI framework (Development Tools, QtHelp; mingw-w64)"
depends=('mingw-w64-qt5-declarative')
makedepends=('mingw-w64-gcc' 'mingw-w64-pkg-config' 'mingw-w64-postgresql' 'mingw-w64-mariadb-connector-c')
options=('!strip' '!buildflags' 'staticlibs')
groups=('mingw-w64-qt5')
license=('GPL3' 'LGPL3' 'FDL' 'custom')
url='https://www.qt.io/'
_pkgfqn="${_qt_module}-everywhere-src-${pkgver}"
source=("https://download.qt.io/official_releases/qt/${pkgver%.*}/${pkgver}/submodules/${_pkgfqn}.tar.xz"
        '0001-Fix-linguist-macro.patch'
        '0002-Prevent-linking-qhelpconverter-against-static-bearer.patch')
sha256sums=('f1ea441e5fe138756e6de3b60ab7d8d3051799eabe85a9408c995dfd4d048a53'
            '3baea410be6981b8dca1d91dc6e2e79ea45ed689b093004fb5616a7fe8023173'
            'e76e523c69922995877ee196c5949d277e94db3cd387b6afe4d6313e2ab7e42f')

_architectures='i686-w64-mingw32 x86_64-w64-mingw32'
# can not use static MySQL plugin because mariadb-connector-c comes with its own pthread implementation
# which has conflicting symbols with the pthread library Qt uses
[[ $NO_STATIC_LIBS ]] || \
  makedepends+=('mingw-w64-qt5-base-static') \
  optdepends+=('mingw-w64-qt5-base-static: use of static libraries') \
  _configurations+=('CONFIG+=no_smart_library_merge QTPLUGIN.sqldrivers=qsqlite  QTPLUGIN.sqldrivers+=qsqlpsql QTPLUGIN.sqldrivers+=qsqlodbc CONFIG+=static')
[[ $NO_SHARED_LIBS ]] || \
  _configurations+=('CONFIG+=actually_a_shared_build CONFIG+=shared')

prepare() {
  cd "${srcdir}/${_pkgfqn}"

  # Apply patches; further descriptions can be found in patch files itself
  for patch in "$srcdir/"*.patch; do
    patch -p1 -i "$patch"
  done
}

build() {
  cd "${srcdir}/${_pkgfqn}"

  for _arch in ${_architectures}; do
    for _config in "${_configurations[@]}"; do
      msg2 "Building ${_config##*=} version for ${_arch}"
      mkdir -p build-${_arch}-${_config##*=} && pushd build-${_arch}-${_config##*=}
      ${_arch}-qmake-qt5 ../${_qt_module}.pro ${_config}

      # Search paths for host standard library (/usr/lib) and for Qt5Bootstrap (/usr/$_arch/lib) are not set correctly by qmake
      # hence we need insert those paths manually
      make qmake_all
      find . -type f -iname 'Makefile' -exec sed -i "s|-L/usr/$_arch/lib -lQt5QmlDevTools -lQt5Bootstrap|-L/usr/lib /usr/$_arch/lib/libQt5QmlDevTools.so /usr/$_arch/lib/libQt5Bootstrap.so|g" {} \;
      find . -type f -iname 'Makefile' -exec sed -i "s|-L/usr/$_arch/lib -lQt5QmlDevTools|-L/usr/lib /usr/$_arch/lib/libQt5QmlDevTools.so|g" {} \;
      find . -type f -iname 'Makefile' -exec sed -i "s|-L/usr/$_arch/lib -lQt5Bootstrap|-L/usr/lib /usr/$_arch/lib/libQt5Bootstrap.so|g" {} \;
      find . -type f -iname 'Makefile' -exec sed -i "s|-lQt5Bootstrap ||g" {} \;

      make
      popd
    done
  done
}

package() {
  cd "${srcdir}/${_pkgfqn}"

  for _arch in ${_architectures}; do
    for _config in "${_configurations[@]}"; do
      pushd build-${_arch}-${_config##*=}

      make INSTALL_ROOT="$pkgdir" install

      # Use prl files from build directory since installed prl files seem to have incorrect QMAKE_PRL_LIBS_FOR_CMAKE
      if [[ -d 'lib' ]]; then
        pushd 'lib'
        find -iname '*.static.prl' -exec cp --target-directory "${pkgdir}/usr/${_arch}/lib" --parents {} +
        popd
      fi
      if [[ -d 'plugins' ]]; then
        pushd 'plugins'
        find -iname '*.static.prl' -exec cp --target-directory "${pkgdir}/usr/${_arch}/lib/qt/plugins" --parents {} +
        popd
      fi

      find "${pkgdir}/usr/${_arch}/lib" -maxdepth 1 -name "*.dll" -exec rm {} \;
      # Applications might be useful as well; keeping them will not hurt anybody I suppose
      [ "$NO_STATIC_EXECUTABLES" -a "${_config##*=}" = static -o "$NO_EXECUTABLES" ] && \
        find "${pkgdir}/usr/${_arch}" -name "*.exe" -exec rm {} \; || \
        find "${pkgdir}/usr/${_arch}" -name "*.exe" -exec ${_arch}-strip --strip-all {} \;
      find "${pkgdir}/usr/${_arch}" -name "*.dll" -exec ${_arch}-strip --strip-unneeded {} \;
      find "${pkgdir}/usr/${_arch}" -name "*.a" -exec ${_arch}-strip -g {} \;
      [[ -d "${pkgdir}/usr/${_arch}/lib/qt/bin/" ]] && \
        find "${pkgdir}/usr/${_arch}/lib/qt/bin/" -exec strip --strip-all {} \;
      find "${pkgdir}/usr/${_arch}/lib/" -iname "*.so.$pkgver" -exec strip --strip-unneeded {} \;

      # Create symlinks for tools
      mkdir -p "${pkgdir}/usr/bin"
      for tool in lconvert lupdate lrelease; do
        ln -sf "../${_arch}/lib/qt/bin/${tool}" "${pkgdir}/usr/bin/${_arch}-$tool-qt5"
      done

      # Remove phrasebooks
      # Would save around 300 KiB on your floppy disk, I keep them by default because
      # phrasebooks might be useful when using Linguist
      #rm -r "${pkgdir}/usr/${_arch}/share"
      popd
    done

    # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
    find "${pkgdir}/usr/${_arch}/lib" -type f -name '*.prl' -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;
  done

  # Make sure the executables don't conflict with their mingw-qt4 counterpart
  for _arch in ${_architectures}; do
    for exe_file in "${pkgdir}/usr/${_arch}/bin/"*.exe; do
      [[ -f $exe_file ]] && mv "${exe_file}" "${exe_file%.exe}-qt5.exe"
    done
    # Fix the path to executables in cmake config files
    sed -i "s|lib/qt/bin/qcollectiongenerator|bin/qcollectiongenerator-qt5.exe|g" "${pkgdir}"/usr/${_arch}/lib/cmake/Qt5Help/Qt5HelpConfigExtras.cmake
    sed -i "s|lib/qt/bin/qhelpgenerator|bin/qhelpgenerator-qt5.exe|g" "${pkgdir}"/usr/${_arch}/lib/cmake/Qt5Help/Qt5HelpConfigExtras.cmake
  done
}
