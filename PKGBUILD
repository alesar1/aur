# Maintainer: Felix Barz <skycoder42.de@gmx.de>
pkgbase=qt5-datasync
pkgname=(qt5-datasync qt5-datasync-kwallet-keystore qt5-datasync-secret-keystore qt5-datasync-doc)
group=qt5-datasync-full
pkgver=4.2.1
pkgrel=1
pkgdesc="A simple offline-first synchronisation framework, to synchronize data of Qt applications between devices"
arch=('i686' 'x86_64')
url="https://github.com/Skycoder42/QtDataSync"
license=('BSD')
depends=('qt5-base' 'qt5-jsonserializer' 'qt5-websockets' 'qt5-scxml' 'qt5-remoteobjects>=5.12.0' 'qt5-service>=1.1.0' 'crypto++')
makedepends=('qt5-tools' 'git' 'qpmx-qpmsource' 'qt5-declarative' 'pkg-config' 'python' 'doxygen' 'graphviz' 'libsecret' 'kwallet')
optdepends=("repkg: Automatically rebuild the package on dependency updates"
			"qt5-datasync-kwallet-keystore: Support for KWallet as keystore"
			"qt5-datasync-secret-keystore: Support for secret service as keystore (includes gnome keyring)")
_pkgfqn=$pkgname-$pkgver
source=("$_pkgfqn::git+https://github.com/Skycoder42/QtDataSync.git#tag=${pkgver}"
		"${pkgname}.rule"
		"subpkg.rule")
sha256sums=('SKIP'
            'ba8f2e738359436ad1a4faa8ad6268372441c60a34363c13aa9f0eec5d0378cc'
            '321d7d24f490983f54acb9e7f58ebc2a170b520cd978c4989e28bc1a76513f3b')

prepare() {
  mkdir -p build

  cd "$_pkgfqn"
}

build() {
  cd build

  qmake "CONFIG+=system_cryptopp install_system_service" "../$_pkgfqn/"
  make qmake_all
  make
  make lrelease
  make doxygen
}

package_qt5-datasync() {
  cd build
  cd src/datasync
  make INSTALL_ROOT="$pkgdir" install
  cd ../imports
  make INSTALL_ROOT="$pkgdir" install
  cd ../plugins/keystores/plain
  make INSTALL_ROOT="$pkgdir" install
  cd ../../../../tools
  make INSTALL_ROOT="$pkgdir" install
  cd ..

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  # Set systemd service file target
  sed -i -e 's/#WantedBy=multi-user/WantedBy=multi-user/g' $pkgdir/usr/lib/systemd/system/qdsapp.service

  install -D -m644 "../$_pkgfqn/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -D -m644 "../${pkgname}.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-datasync-kwallet-keystore() {
  depends=('qt5-datasync' 'kwallet')
  optdepends=()

  cd build/src/plugins/keystores/kwallet
  make INSTALL_ROOT="$pkgdir" install

  cd "../../../../../$_pkgfqn"
  install -D -m644 "../subpkg.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-datasync-secret-keystore() {
  depends=('qt5-datasync' 'libsecret')
  optdepends=("gnome-keyring: Gnome keyring as keystore backend for libsecret")

  cd build/src/plugins/keystores/secretservice
  make INSTALL_ROOT="$pkgdir" install

  cd "../../../../../$_pkgfqn"
  install -D -m644 "../subpkg.rule" "$pkgdir/etc/repkg/rules/${pkgname}.rule"
}

package_qt5-datasync-doc() {
  depends=('qt5-datasync')
  optdepends=()

  cd build/doc
  make INSTALL_ROOT="$pkgdir" install

  # DROP file paths from doc tags
  find "$pkgdir/usr/share/doc/qt" -type f -name '*.tags' \
    -exec sed -i -e 's:<path>[^<]*<\/path>:<path>/usr/include/qt/QtDataSync</path>:g' {} \;

  # install manpages
  install -Dm644 -t "$pkgdir/usr/share/man/man3" man/man3/*.3
}
