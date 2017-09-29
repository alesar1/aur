# Maintainer: bennya

pkgname='planck'
conflicts=('planck-git')
pkgver=2.7.3
pkgrel=3
_pkgnamever=${pkgname}-${pkgver}
pkgdesc="A stand-alone ClojureScript REPL"
arch=('x86_64')
url="http://planck-repl.org/"
depends=('webkit2gtk' 'libzip' 'zlib')
makedepends=('java-environment' 'cmake' 'leiningen' 'unzip' 'vim')
license=('EPL-1.0')
source=(
  https://github.com/mfikes/${pkgname}/archive/${pkgver}.tar.gz
  fix-segfault-due-to-strtok-glibc-v2.26-change.patch
)
sha256sums=('16a620c33bc15c2f74ce1e80726c55c85f634443c9675c0c08292a964eb01780'
            'f081ac6cf76d98e5458716c2059d1174880e5daaba9ae3212b9df4713e3175e2')

build() {
  cd "$srcdir/${_pkgnamever}"
  patch -p1 -i ../fix-segfault-due-to-strtok-glibc-v2.26-change.patch
  script/build
}

package() {
  cd "$srcdir/${_pkgnamever}"
  install -Dm755 "$srcdir/${_pkgnamever}/planck-c/build/planck" "$pkgdir/usr/bin/planck"
}
