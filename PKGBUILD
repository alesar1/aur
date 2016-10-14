# Maintainer: Mario Finelli <mario at finel dot li>

pkgname=deployer
pkgver=3.3.0
pkgrel=2
pkgdesc="A deployment tool written in PHP with support for popular frameworks out of the box."
arch=('any')
url="http://deployer.org/"
license=('MIT')
depends=('php')
makedepends=('php-composer' 'git')
source=("git+https://github.com/deployphp/deployer.git#tag=v${pkgver}")
sha256sums=('SKIP')

prepare() {
    cd "${srcdir}/${pkgname}"
    composer install --prefer-dist --no-dev
}

build() {
    cd "${srcdir}/${pkgname}"
    ./build -v"$pkgver"
    chmod +x deployer.phar
}

package() {
    cd "${srcdir}/${pkgname}"

    install -Dm0644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm0755 deployer.phar "$pkgdir/usr/bin/dep"
}
