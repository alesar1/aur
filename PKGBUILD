# Maintainer:  Marcin Wieczorek <marcin@marcin.co>
# Contributor: Tomáš Mládek <tmladek{at}inventati{dt}org>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

pkgname=tmsu
pkgver=0.6.1
pkgrel=1
pkgdesc="A tool for tagging your files and accessing them through a virtual filesystem."
arch=('i686' 'x86_64')
url="http://tmsu.org/"
depends=('go' 'fuse' 'sqlite>=3')
makedepends=('git')
provides=('tmsu')
license=('GPL3')
source=("$pkgname-$pkgver.tar.gz::https://github.com/oniony/TMSU/archive/v$pkgver.tar.gz")
sha256sums=('00483d9ca12cb868e9587207556a8293bd43ee5a2993a6fe9f0c93edef918a7f')

build() {
  export GOPATH=/tmp

  echo "Now getting go-sqlite3..."
  go get -u github.com/mattn/go-sqlite3

  echo "Now getting go-fuse..."
  go get -u github.com/hanwen/go-fuse/fuse

  cd "$srcdir/TMSU-$pkgver"
  make
}

package() {
  mkdir -p "$pkgdir/usr/bin" \
           "$pkgdir/usr/bin" \
           "$pkgdir/usr/share/man/man1" \
           "$pkgdir/usr/share/zsh/site-functions"

  cd "$srcdir/TMSU-$pkgver"
  make INSTALL_DIR="$pkgdir/usr/bin" \
  MOUNT_INSTALL_DIR="$pkgdir/usr/bin" \
  MAN_INSTALL_DIR="$pkgdir/usr/share/man/man1" \
  ZSH_COMP_INSTALL_DIR="$pkgdir/usr/share/zsh/site-functions" \
  install
}
