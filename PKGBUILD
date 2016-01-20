pkgbase=notepadqq-src
pkgname=notepadqq
pkgver=0.50.6
pkgrel=1
pkgdesc='Notepad++-like editor for Linux'
arch=('i686' 'x86_64')
url='http://notepadqq.altervista.org/wp/'
license=('GPL3')
depends=('qt5-webkit' 'qt5-svg' 'desktop-file-utils' 'hicolor-icon-theme')
makedepends=('git' 'qt5-tools')
options=('!emptydirs')
install=$pkgname.install
source=("git://github.com/notepadqq/notepadqq.git#tag=v$pkgver"
        'git://github.com/notepadqq/CodeMirror.git')
sha256sums=('SKIP'
            'SKIP')

prepare() {
  cd $pkgname

  git config submodule.src/editor/libs/codemirror.url "$srcdir/CodeMirror"
  git submodule init
  git submodule update
}

build() {
  cd $pkgname

  ./configure --prefix /usr
  make
}

package() {
  cd $pkgname

  make INSTALL_ROOT="$pkgdir" install
}
