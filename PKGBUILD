# Maintainer: Mattia Borda <mattiagiovanni.borda@icloud.com>

pkgname=zapzap
_pkgname=com.rtosta.zapzap
pkgver=4.4.2
pkgrel=2
pkgdesc="WhatsApp desktop application written in Pyqt6 + PyQt6-WebEngine"
arch=('x86_64')
url="https://github.com/rafatosta/$pkgname" 
license=('GPL3')
depends=('python-pyqt6' 'python-pyqt6-webengine' 'dbus-python')
makedepends=('python-build' 'python-installer' 'python-setuptools' 'python-wheel')
optdepends=(
	'hunspell: spell check'
	)
source=($url/archive/v$pkgver.tar.gz)
sha256sums=('3a5007f90caa251fad3e6e43846cc4342f297f0e704fc17b9b8f22f0349aa2cc')

prepare() {
  cd $pkgname-$pkgver
  sed -i 's/= EXEC_FLATPAK/= EXEC_LOCAL/' zapzap/services/portal_desktop.py
}

build() {
  cd $pkgname-$pkgver
  python -m build --wheel --no-isolation
}

package() {
  cd $pkgname-$pkgver
  python -m installer --destdir="$pkgdir" dist/*.whl
  install -Dm644 share/icons/$_pkgname.svg "$pkgdir"/usr/share/icons/hicolor/scalable/apps/$_pkgname.svg
  install -Dm664 share/applications/$_pkgname.desktop "$pkgdir"/usr/share/applications/$_pkgname.desktop
  install -Dm664 share/metainfo/$_pkgname.appdata.xml "$pkgdir"/share/metainfo/$_pkgname.appdata.xml
}
