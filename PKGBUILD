# Maintainer: Yiyao Yu <yuydevel at protonmail dot com>
# Contributor: Benjamin Maisonnas <ben at wainei dot net>
# Author: Ondrej Čerman

_pkgname=zenpower
pkgname=zenpower-dkms
pkgver=0.1.10
pkgrel=1
pkgdesc='Linux kernel driver for reading sensors for AMD Zen family CPUs'
arch=('x86_64' 'i686')
url='https://github.com/ocerman/zenpower'
license=('GPL2')
depends=('dkms')
provides=('zenpower')
install=$_pkgname.install
source=("$_pkgname-$pkgver.tar.gz::https://github.com/ocerman/$_pkgname/archive/v$pkgver.tar.gz"
        "$_pkgname.conf")
sha256sums=('d2341cde13d7af48e2ae5c1c966ca1877bee2e3c0d86d2362ddfec85369f7303'
            '7bff3a5ea2c8b8abf56ce1d79b9724b1aea89e2564d244e09691070113d60f6a')

prepare() {
  sed -e "s/@CFLGS@//" \
      -e "s/@VERSION@/$pkgver/" \
      -i "$srcdir/$_pkgname-$pkgver/dkms.conf"
}

package() {
  install -Dm644 "$srcdir/$_pkgname-$pkgver/dkms.conf" "$pkgdir/usr/src/$_pkgname-$pkgver/dkms.conf"
  install -Dm644 "$srcdir/$_pkgname-$pkgver/Makefile" "$pkgdir/usr/src/$_pkgname-$pkgver/Makefile"
  install -Dm644 "$srcdir/$_pkgname-$pkgver/zenpower.c" "$pkgdir/usr/src/$_pkgname-$pkgver/zenpower.c"

  install -Dm644 "$srcdir/$_pkgname.conf" "$pkgdir/usr/lib/modprobe.d/$_pkgname.conf"
}

# vim:set et ts=2 sw=2 tw=79
