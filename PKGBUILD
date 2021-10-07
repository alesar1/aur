# Maintainer: Roman Mishin <xtradev (a) yandex (.) ru>

pkgname=bracmat-git
pkgver=6.9.2.r250
pkgrel=4
pkgdesc='Programming language for symbolic computation with pattern matching features'
arch=('i686' 'x86_64')
url='https://github.com/BartJongejan/Bracmat'
license=('GPL2')
makedepends=('git')
provides=('bracmat')
conflicts=('bracmat')
source=("git+$url.git"
        'path-to-help.patch')
md5sums=('SKIP'
         '6ef0a6e438c5f7ff66c59dcb34c50411')

pkgver() {
  sed -nr 'N;s/#define VERSION "([0-9\.]+)"\n#define BUILD "([0-9]+)"/\1.r\2/p;D'\
          "$srcdir/Bracmat/src/bracmat.c"
}

prepare() {
  cd "$srcdir/Bracmat/src"
  patch -Ni "$srcdir/path-to-help.patch"
}

build() {
  cd "$srcdir/Bracmat/src"
  make bracmat
  make bracmatsafe
}

package() {
  install -dm755                                   "$pkgdir"/usr/bin
  install -sm755 "$srcdir"/Bracmat/src/bracmat     "$pkgdir"/usr/bin
  install -sm755 "$srcdir"/Bracmat/src/bracmatsafe "$pkgdir"/usr/bin
  pushd          "$srcdir"/Bracmat/src                   &>/dev/null
  make clean                                             &>/dev/null
  popd                                                   &>/dev/null

  install -dm755                    "$pkgdir"/usr/lib/bracmat/web
  cp -a "$srcdir"/Bracmat/web/*     "$pkgdir"/usr/lib/bracmat/web
  cp -a "$srcdir"/Bracmat/*.bra     "$pkgdir"/usr/lib/bracmat
  cp -a "$srcdir"/Bracmat/*.xml     "$pkgdir"/usr/lib/bracmat

  install -dm755                    "$pkgdir"/usr/share/doc/bracmat
  cp -a "$srcdir"/Bracmat/doc/*     "$pkgdir"/usr/share/doc/bracmat
  cp -a "$srcdir"/Bracmat/*.md      "$pkgdir"/usr/share/doc/bracmat
  cp -a "$srcdir"/Bracmat/Changelog "$pkgdir"/usr/share/doc/bracmat/changelog.txt
}
