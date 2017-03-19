# Maintainer: Harenome Ranaivoarivony-Razanajato
#             <ranaivoarivony-razanajato@hareno.me>

pkgname=osl-git
pkgver=0.9.0.r39.g1ac1154
pkgrel=1
pkgdesc="OpenScop Library"
arch=(x86_64)
url="http://icps.u-strasbg.fr/people/bastoul/public_html/development/openscop/index.html"
license=('LGPL')
depends=("gmp")
makedepends=("git")
provides=("osl")
conflicts=("osl")
source=(${pkgname}::git+https://github.com/periscop/openscop.git)
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${pkgname}"
  autoreconf -i
  ./configure --prefix=/usr --with-gmp=system
  make
}

check() {
  cd "${srcdir}/${pkgname}"
  make check
}

package() {
  cd "${srcdir}/${pkgname}"
  make DESTDIR="${pkgdir}/" install
}
