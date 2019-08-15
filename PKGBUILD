# Maintainer: Gabriel-Andrew Pollo-Guilbert <gabrielpolloguilbert@gmail.com>

pkgname=jome-git
pkgver=r55.b94a35f
pkgrel=1
pkgdesc='Jome is a keyboard centric emoji picker desktop application.'
arch=('i686' 'x86_64')
license=('MIT')
depends=('')
makedepends=('git' 'cmake' 'boost' 'qt5-base' 'python-cairo' 'python-cairosvg' 'python-yaml')
url='https://github.com/eepp/jome'
source=('jome-git::git+https://github.com/eepp/jome')
md5sums=('SKIP')
options=()

pkgver() {
    cd $srcdir/$pkgname
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    mkdir -p $srcdir/$pkgname/build
    cd $srcdir/$pkgname/build
    cmake -DCMAKE_BUILD_TYPE=release ..
    make
}

package() {
    cd $srcdir/$pkgname/build

    make DESTDIR=$pkgdir install
}
