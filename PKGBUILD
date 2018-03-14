# Maintainer: Felix Barz <skycoder42.de@gmx.de>
pkgbase=qt5-mvvm
pkgname=(qt5-mvvmcore qt5-mvvmwidgets qt5-mvvmquick qt5-mvvmdatasynccore qt5-mvvmdatasyncwidgets qt5-mvvmdatasyncquick qt5-mvvm-doc)
group=qt5-mvvm
pkgver=1.0.1
pkgrel=1
pkgdesc="A mvvm oriented library for Qt, to create Projects for Widgets and Quick in parallel"
arch=('i686' 'x86_64')
url="https://github.com/Skycoder42/QtMvvm"
license=('BSD')
depends=('qt5-base' 'qt5-svg')
makedepends=('qt5-tools' 'qt5-quickcontrols2' 'qt5-graphicaleffects' 'qt5-datasync' 'git' 'qpmx-qpmsource' 'python' 'doxygen' 'graphviz')
optdepends=("repkg: Automatically rebuild the package on dependency updates")
_pkgfqn=$pkgbase-$pkgver
source=("$_pkgfqn::git+https://github.com/Skycoder42/QtMvvm.git#tag=$pkgver"
		"${pkgbase}core.rule"
		"${pkgbase}widgets.rule"
		"${pkgbase}quick.rule"
		"${pkgbase}datasynccore.rule"
		"${pkgbase}datasyncwidgets.rule"
		"${pkgbase}datasyncquick.rule")
sha256sums=('SKIP'
            '2147916eaeebda7109b04f17e122a873388f42f2015e4b6b9fbf6f98e8e80d15'
            'c69a4d6f324019d30a6f3d5dac00760af670c8f14b5064e6f4c08072a34ab5b8'
            '1a1ad4f7468f0b78cbe64e4a25f6ecbba2e6d94c79c4aecc54ca23f45fc791d7'
            '312675fe1ef88356119d62b9c4e4f481b21b189bc1d32954ecdeb88c73eba382'
            '9d14762455458b3bb414c714dbdc572212cf2c3e2cd6e6719c855ab9ec210191'
            '9d14762455458b3bb414c714dbdc572212cf2c3e2cd6e6719c855ab9ec210191')

prepare() {
  mkdir -p build

  cd "$_pkgfqn"
}

build() {
  cd build

  qmake "../$_pkgfqn/"
  make qmake_all
  make
  make lrelease
  make doxygen
}

package_qt5-mvvmcore() {
  cd build
  cd src/mvvmcore
  make INSTALL_ROOT="$pkgdir" install
  cd ../imports/mvvmcore
  make INSTALL_ROOT="$pkgdir" install
  cd ../../..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  install -D -m644 "../$_pkgfqn/LICENSE" "$pkgdir/usr/share/licenses/$pkgbase/LICENSE"
  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-mvvmwidgets() {
  depends=('qt5-mvvmcore')
  optdepends=()

  cd build
  cd src/mvvmwidgets
  make INSTALL_ROOT="$pkgdir" install
  cd ../..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-mvvmquick() {
  depends=('qt5-mvvmcore' 'qt5-quickcontrols2' 'qt5-graphicaleffects')
  optdepends=()

  cd build
  cd src/mvvmquick
  make INSTALL_ROOT="$pkgdir" install
  cd ../imports/mvvmquick
  make INSTALL_ROOT="$pkgdir" install
  cd ../../..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-mvvmdatasynccore() {
  depends=('qt5-mvvmcore' 'qt5-datasync')
  optdepends=()

  cd build
  cd src/mvvmdatasynccore
  make INSTALL_ROOT="$pkgdir" install
  cd ../imports/mvvmdatasynccore
  make INSTALL_ROOT="$pkgdir" install
  cd ../../..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
  # Install mimetype
  install -D -m644 "../$_pkgfqn/src/mvvmdatasynccore/application-x-datasync-account-data.xml" "$pkgdir/usr/share/mime/packages/application-x-datasync-account-data.xml"
}

package_qt5-mvvmdatasyncwidgets() {
  depends=('qt5-mvvmdatasynccore')
  optdepends=()

  cd build
  cd src/mvvmdatasyncwidgets
  make INSTALL_ROOT="$pkgdir" install
  cd ../..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-mvvmdatasyncquick() {
  depends=('qt5-mvvmdatasynccore')
  optdepends=()

  cd build
  cd src/mvvmdatasyncquick
  make INSTALL_ROOT="$pkgdir" install
  cd ../imports/mvvmdatasyncquick
  make INSTALL_ROOT="$pkgdir" install
  cd ../../..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-mvvm-doc() {
  depends=('qt5-mvvmcore')
  optdepends=()

  cd build/doc
  make INSTALL_ROOT="$pkgdir" install

  # DROP file paths from doc tags
  find "$pkgdir/usr/share/doc/qt" -type f -name '*.tags' \
    -exec sed -i -e 's:<path>[^<]*<\/path>:<path>/usr/include/qt/QtMvvm</path>:g' {} \;
}
