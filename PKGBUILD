# Contributor: Aetf <aetf at unlimitedcodeworks dot xyz>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

_gitname=CuteMarkEd-NG
pkgname=cutemarked-git
pkgver=20200625.r910
pkgrel=3
pkgdesc="Qt Markdown Editor"
url="https://github.com/Waqar144/${_gitname}"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('qt5-webengine')
makedepends=('git' 'qt5-tools')
provides=('cutemarked')
conflicts=('cutemarked')
source=("git+$url.git"
	"git+https://github.com/hunspell/hunspell.git"
	"git+https://github.com/mity/md4c"
	"https://github.com/pbek/qmarkdowntextedit"
       )
md5sums=('SKIP' 'SKIP' 'SKIP' 'SKIP')

pkgver() {
  cd $_gitname
   printf "%s.r%s" $(git log -1 --format="%cd" --date=short | tr -d '-') $(git rev-list --count HEAD)
}

prepare() {
  cd $_gitname
  git submodule init
  git config submodule.3rdparty/hunspell/hunspell.url "$srcdir"/hunspell
  git config submodule.3rdparty/md4c.url "${srcdir}/md4c"
  git config submodule.3rdparty/qmarkdowntextedit.url "${srcdir}/qmarkdowntextedit"
  git submodule update
}

build() {
  cd $_gitname
  [[ -d build ]] || mkdir build
  cd build
  qmake ..
  make
}

package() {
  cd $_gitname/build
  make INSTALL_ROOT="$pkgdir" install
}
