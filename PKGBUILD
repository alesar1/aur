# Maintainer: Uffe Jakobsen <uffe@uffe.org>
# Past Maintainer: Jianing Yang <jianingy.yang @gmail.com>
# Contributor: David Zaragoza <david@zaragoza.com.ve>

pkgname=cpuid
pkgver=20180519
pkgrel=1
pkgdesc="Linux tool to dump x86 CPUID information about the CPU(s)"
url="http://www.etallen.com/cpuid.html"
license=('GPL')
arch=('i686' 'x86_64')
makedepends=('perl')
depends=('glibc')
groups=('system')
source=("http://www.etallen.com/$pkgname/$pkgname-$pkgver.src.tar.gz")
md5sums=('b3b4e44ef49575043a91def0207dcc76')

build () {
  cd "$srcdir/$pkgname-$pkgver" || exit 1
  # pod2man: /usr/bin/core_perl/ is not always in path - minimize error reports by setting PATH
  PATH=${PATH}:/usr/bin/core_perl/
  make || exit 1
}

package () {
  cd "$srcdir/$pkgname-$pkgver" || exit 1
  make BUILDROOT=$pkgdir install || exit 1
}
