# Contributer : Jo De Boeck <deboeck.jo@gmail.com>
# Maintainer : Colin Arnott <arnottcr@gmail.com>

pkgname=purple-skypeweb-git
pkgver=20160106.v1.0.54.g623f311
pkgrel=1
arch=('any')
license=('GPLv3')
pkgdesc="SkypeWeb Plugin for Pidgin"
url="https://github.com/EionRobb/skype4pidgin/tree/master/skypeweb"
depends=('libpurple' 'json-glib')
makedepends=('pkg-config' 'git')
conflicts=('purple-skypeweb')
provides=('purple-skypeweb')

source=("$pkgname"::'git://github.com/EionRobb/skype4pidgin')
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    echo `date +%Y%m%d`.`git describe --tags | sed "s/-/./g"`

}

build() {
    cd "$srcdir/$pkgname/skypeweb"
    make
}

package() {
    cd "$srcdir/$pkgname/skypeweb"
    make DESTDIR="$pkgdir" install
}
