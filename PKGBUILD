# Maintainer: Mike Swanson <mikeonthecomputer@gmail.com>

pkgname=reposurgeon
pkgver=4.10
pkgrel=1
pkgdesc="Performs surgery on version control repositories."
arch=('x86_64')
url="http://www.catb.org/esr/$pkgname/"
license=('BSD')
makedepends=('asciidoctor' 'go' 'git' 'xmlto')
optdepends=('bitkeeper'
            'bzr'
            'cvs-fast-export'
            'darcs'
            'fossil'
            'git'
            'mercurial'
            'src'
            'subversion')
source=("https://gitlab.com/esr/$pkgname/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
b2sums=('fd75132caf755e05d8af2ccdf326315f0dfc25dd8711c0f84f06a0cab835887db468868a51f2fd8d579371804924f06ceff248ed335bfb61dd4f06b2221c4ce5')

prepare() {
  cd "$pkgbase-$pkgver"

  for patch in ../*.patch; do
    if [ ! -f "$patch" ]; then
      break;
    else
      patch -p1 -i "$patch"
    fi
  done
}

build() {
  cd "$pkgbase-$pkgver"

  # Use -j1 so reposurgeon always gets built before options.adoc is needed
  if [ "$(go version | grep gccgo)" ]; then
    make GOFLAGS="" -j1
  else
    make -j1
  fi
}

package_reposurgeon() {
  cd "$pkgbase-$pkgver"

  if [ "$(go version | grep gccgo)" ]; then
    make GOFLAGS="" DESTDIR="$pkgdir" prefix=/usr install
  else
    make DESTDIR="$pkgdir" prefix=/usr install
  fi

  install -dm755 "$pkgdir/usr/share/emacs/site-lisp"
  install -Dm644 reposurgeon-mode.el "$pkgdir/usr/share/emacs/site-lisp"

  install -Dm644 COPYING "$pkgdir/usr/share/licenses/reposurgeon/COPYING"
}
