# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=acestream-launcher
pkgver=2.0.0
pkgrel=2
pkgdesc="Acestream Launcher allows you to open Acestream links with a Media Player of your choice"
arch=("any")
url="https://github.com/jonian/acestream-launcher"
license=("GPL")
depends=("python" "python-acestream" "acestream-engine")
optdepends=("mpv" "libnotify")
makedepends=("python-setuptools")
conflicts=("${pkgname}" "${pkgname}-git")
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=("23884757a9f40cb1a69e66363bac427f")

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
}
