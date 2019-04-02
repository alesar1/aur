# AUR with fixes applied:
# Maintainer: Aaron Barany <akb825@gmail.com>
# Original:
# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Imanol Celaya <ornitorrincos@archlinux-es.org>
# Contributor: Lukas Jirkovsky <l.jirkovsky@gmail.com>
# Contributor: Dan Vratil <progdan@progdansoft.com>
# Contributor: thotypous <matiasΘarchlinux-br·org>
# Contributor: delor <bartekpiech gmail com>

pkgname=qtcreator-fixed-themes
pkgver=4.8.2
_clangver=8.0.0
pkgrel=2
pkgdesc='Lightweight, cross-platform integrated development environment, with fixes applied for various themes and other bug fixes'
arch=(x86_64)
url='https://www.qt.io'
license=(LGPL)
depends=(qt5-tools qt5-quickcontrols qt5-quickcontrols2 qt5-webengine clang=$_clangver qbs clazy)
makedepends=(git mesa llvm python)
conflicts=(qtcreator)
options=(docs)
optdepends=('qt5-doc: integrated Qt documentation'
            'qt5-examples: welcome page examples'
            'qt5-translations: for other languages'
            'gdb: debugger'
            'cmake: cmake project support'
            'x11-ssh-askpass: ssh support'
            'git: git support'
            'mercurial: mercurial support'
            'bzr: bazaar support'
            'valgrind: analyze support')
source=("https://download.qt.io/official_releases/qtcreator/${pkgver%.*}/$pkgver/qt-creator-opensource-src-$pkgver.tar.xz"
        qtcreator-clang-plugins.patch
        qtcreator-theme-fixes.patch
        qtcreator-occurrences-fix.patch
        qtcreator-debugger-columns-fix.patch
        qtcreator-cmake-fail-target-fix.patch
        qtcreator-cmake-edit-fix.patch)
sha256sums=('a8257daf39f6025c8523285dc73fd6b66645f3ff071e112b484325966eee0c92'
            '34ea74698ddff9925e06bff6b4c995bf93488d1104e8cc517bcfdd621effb428'
            'bf0f8e88d0fa628d24f59eaf1f359873926998dde442e3bcbd56afcdd6eec7fa'
            '640c4c1607f9ee867e2445ad576697b9b0d3c9a64ae6589c1b99ea4f1d7e3481'
            'cf378a8b591a10646ad89d101375d8b04844c76a83d6c9c960036ba6a3b122e3'
            'df22bfe38bf6dd54b64d9ec0e78873a43e570eb490faf2a247aae7fd44e3d05e'
            '5f002e93717d99a23ed94842567caa35f5cddfac317bddf29e7a677fb6db61a3')

prepare() {
  mkdir -p build

  cd qt-creator-opensource-src-$pkgver
  # fix hardcoded libexec path
  sed -e 's|libexec\/qtcreator|lib\/qtcreator|g' -i qtcreator.pri
  # use system qbs
  rm -r src/shared/qbs
  # Load analyzer plugins on demand, since upstream clang doesn't link to all plugins
  # see http://code.qt.io/cgit/clang/clang.git/commit/?id=7f349701d3ea0c47be3a43e265699dddd3fd55cf
  # and https://bugs.archlinux.org/task/59492
  patch -p1 -i ../qtcreator-clang-plugins.patch
  # Theme fixes
  patch -p1 -i ../qtcreator-theme-fixes.patch
  patch -p1 -i ../qtcreator-occurrences-fix.patch
  # Fix broken sizing for debugger columns.
  patch -p1 -i ../qtcreator-debugger-columns-fix.patch
  # Fixes for CMake integration
  patch -p1 -i ../qtcreator-cmake-fail-target-fix.patch
  patch -p1 -i ../qtcreator-cmake-edit-fix.patch
}

build() {
  cd build

  qmake LLVM_INSTALL_DIR=/usr QBS_INSTALL_DIR=/usr CONFIG+=journald QMAKE_CFLAGS_ISYSTEM=-I \
    DEFINES+=QBS_ENABLE_PROJECT_FILE_UPDATES "$srcdir"/qt-creator-opensource-src-$pkgver/qtcreator.pro
  make
  make docs
}

package() {
  cd build

  make INSTALL_ROOT="$pkgdir/usr/" install
  make INSTALL_ROOT="$pkgdir/usr/" install_docs

  install -Dm644 "$srcdir"/qt-creator-opensource-src-$pkgver/LICENSE.GPL3-EXCEPT "$pkgdir"/usr/share/licenses/qtcreator/LICENSE.GPL3-EXCEPT
}
