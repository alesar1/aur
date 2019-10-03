# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=bic
pkgver=0.9.0
pkgrel=1
pkgdesc='A C interpreter and API explorer'
arch=('i686' 'x86_64')
url='https://github.com/hexagonal-sun/bic'
makedepends=('gcc' 'automake' 'expect' 'flex' 'autoconf' 'm4' 'libtool' 'readline' 'pkgconf' 'gmp' 'autoconf-archive')
license=('GPL2')
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('0c8cae8884d58ed89b1166aee93e22e961fc49b0d6781b027a5b0368ef0ab10a')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  autoreconf -i
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/"
  make DESTDIR="${pkgdir}" install
  install -D -m 0644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ft=sh ts=2 sw=2 et:
