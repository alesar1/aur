# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

pkgname=spim-svn
pkgver=717
pkgrel=1
pkgdesc="A MIPS32 simulator (SVN version)"
arch=('i686' 'x86_64')
url="https://sourceforge.net/projects/spimsimulator/"
license=('custom:BSD')
groups=('emulators')
depends=('glibc')
makedepends=('subversion')
conflicts=('spim')
provides=("spim=$pkgver")

_svntrunk='svn+https://svn.code.sf.net/p/spimsimulator/code'
source=("$_svntrunk/spim"
        "$_svntrunk/CPU"
        "$_svntrunk/Tests")
sha256sums=('SKIP'
            'SKIP'
            'SKIP')

pkgver() {
  cd spim

  local ver="$(svnversion)"
  printf "${ver//[[:alpha:]]}"
}

build() {
  cd spim

  make
}

check() {
  cd spim

  make test
}

package() {
  cd spim

  make DESTDIR="$pkgdir" install

  install -Dm644 README "$pkgdir"/usr/share/licenses/$pkgname/README
}
