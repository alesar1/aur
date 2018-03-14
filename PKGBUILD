# Maintainer: Heiko Nickerl <dev at heiko-nickerl dot com>
pkgname="sodalite"
pkgver=0.7.0
pkgrel=2
pkgdesc="Keyboard-driven terminal file navigator and launcher"
arch=('any')
url="www.github.com/hnicke/sodalite"
license=('GPL')
makedepends=('git' 'awk' )
depends=('python-binaryornot' 'python-npyscreen-git, python-yaml')
source=("$pkgname-$pkgver.tar.gz::https://github.com/hnicke/sodalite/archive/v$pkgver.tar.gz")
md5sums=('SKIP')
install=sodalite.install

_gitroot=https://github.com/hnicke/$pkgname.git

package() {
    cd "${srcdir}/$pkgname-$pkgver"
    FAKE_ROOT=$pkgdir ./install
}
