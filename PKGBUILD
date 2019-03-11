# Maintainer: Manuel Domínguez López <mdomlop at gmail dot com>

_pkgver_year=2019
_pkgver_month=03
_pkgver_day=11

pkgname=systemd-zram
pkgver=1.0
pkgrel=1
pkgdesc="Systemd zRAM loader."
url="https://github.com/mdomlop/$pkgname"
source=("https://github.com/mdomlop/$pkgname/archive/$pkgver.tar.gz")
license=('GPL3')
arch=('any')
changelog=ChangeLog
install=$pkgname.install
makedepends=('python-docutils')

build() {
    cd $srcdir/$pkgname-$pkgver
    make
    }

package() {
    cd $srcdir/$pkgname-$pkgver
    make arch_install DESTDIR="$pkgdir"
}
md5sums=('1f0b359579e78933b79c7fbe442a65fe')
