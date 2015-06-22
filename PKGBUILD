# Maintainer: Kyle Keen <keenerd@gmail.com>

pkgname=antimony-git
pkgver=20150621
pkgrel=1
pkgdesc="Graph-based 3D CSG CAD modeller"
url="http://www.mattkeeter.com/projects/antimony/3/"
provides=('antimony')
conflicts=('antimony')
arch=('i686' 'x86_64')
license=('MIT')
depends=('qt5-base' 'boost-libs' 'python' 'libpng')
makedepends=('boost' 'git')
source=("git+https://github.com/mkeeter/antimony.git")
md5sums=('SKIP')

# todo, replace bundled eigen with official

_gitname="antimony"
_gitbranch="master"

pkgver() {
  cd "$_gitname"
  git show -s --format="%ci" HEAD | sed -e 's/-//g' -e 's/ .*//'
}

build() {
    cd "$_gitname"

    sed -i 's|/usr/local/bin/sb/|/usr/share/antimony/sb/|' app/app.pro 
    sed -i 's|/usr/local/|/usr/|' qt/*.pri
    sed -i 's|/usr/local/|/usr/|' app/*.pro
    #sed -i 's|/usr/share/antimony/sb/fab|/usr/lib/python3.4/site-packages/fab|' qt/antimony.pro
    sed -i 's|return path.join("/");|return "/usr/share/antimony/sb/nodes";|' app/src/app/app.cpp

    mkdir -p build
    cd build
    qmake-qt5 PREFIX="/usr" ../app/app.pro
    sed -i 's|/local/bin|/bin|g' Makefile
    make
}

check() {
    cd "$_gitname"
    return 0
    mkdir -p tests
    cd tests
    qmake-qt5 PREFIX="/usr" ../qt/antimony-tests.pro
    make
    # failure involving QNetworkAccessManager
}

package() {
    cd "$_gitname/build"
    make INSTALL_ROOT="$pkgdir" install
    install -Dm755 antimony "$pkgdir/usr/bin/antimony"
}
