# Maintainer:  Vincent Grande <shoober420@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Arthur Zamarin <arthurzam@gmail.com>
# Contributor: trya <tryagainprod@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: dorphell <dorphell@archlinux.org>
# Contributor: Travis Willard <travis@archlinux.org>
# Contributor: Douglas Soares de Andrade <douglas@archlinux.org>

pkgname=libpng12-minimal
pkgver=1.2.59
pkgrel=1
pkgdesc='A collection of routines used to create PNG format graphics files'
arch=('x86_64')
url='http://www.libpng.org/pub/png/libpng.html'
license=('custom')
depends=('glibc' 'zlib')
source=("https://sourceforge.net/projects/libpng/files/libpng-${pkgver}.tar.xz"{,.asc}
        "https://sourceforge.net/projects/libpng-apng/files/libpng12/${pkgver}/libpng-${pkgver}-apng.patch.gz")
#validpgpkeys=('8048643BA2C840F4F92A195FF54984BFA16C640F') # Glenn Randers-Pehrson
sha256sums=('b4635f15b8adccc8ad0934eea485ef59cc4cae24d0f0300a9a941e51974ffcc7'
            'SKIP'
            '281fd5f0165762967a18302dca217de3212be4a3437f95805be44f1ac9db1a5d')

prepare() {
  cd libpng-${pkgver}

  patch -Np1 -i ../libpng-${pkgver}-apng.patch

  libtoolize --force --copy
  aclocal
  autoconf
  automake --add-missing
}

build() {
  cd libpng-${pkgver}

  ./configure \
    --prefix='/usr' --enable-hardware-optimizations --enable-intel-sse
  make
}

package() {
  cd libpng-${pkgver}

  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{bin,include/*.h,lib/{libpng.{a,so},pkgconfig},share}

  install -Dm 644 LICENSE -t "${pkgdir}"/usr/share/licenses/libpng12/
}

# vim: ts=2 sw=2 et:
