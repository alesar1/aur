# Maintainer: Martins Mozeiko <martins.mozeiko@gmail.com>

pkgname=far2l-git
pkgver=r1127.4c12ff1
pkgrel=1
pkgdesc='Linux port of FAR v2'
url='https://github.com/elfmz/far2l'
arch=('i686' 'x86_64')
license=('GPL2')
source=('git+https://github.com/elfmz/far2l'
        'git+https://github.com/cycleg/far-gvfs#commit=7ea1a87fbe3e0c6cc42a4c2e7067d04758587894'
        'far2l-add-gvfs.patch')
sha256sums=('SKIP'
            'SKIP'
            'd75dcd5ac96d0b7d2b7964620191d9e81733380ddf47dedf8b5aef1255686fd7'
           )
makedepends=('git' 'cmake')
depends=('wxgtk' 'gtkmm3' 'openssl-1.0')

pkgver() {
  cd "$srcdir"/far2l
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir"/far2l

  patch -p1 -i "$srcdir"/far2l-add-gvfs.patch
}

package() {

  cd "$srcdir"/far2l
  rm -rf far-gvfs
  mv "$srcdir"/far-gvfs ./

  PKG_CONFIG_PATH=/usr/lib/openssl-1.0/pkgconfig cmake . -DCMAKE_INSTALL_PREFIX="$pkgdir"/usr -DCMAKE_BUILD_TYPE=Release
  cmake --build . --target install

  ln -sf ../../bin/far2l "$pkgdir"/usr/lib/far2l/far2l_askpass
  ln -sf ../../bin/far2l "$pkgdir"/usr/lib/far2l/far2l_sudoapp
}
