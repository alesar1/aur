# Maintainer: Chanathip Srithanrat <axesd9@gmail.com>

pkgname=macos-icon-theme
pkgver=4.1.8
pkgrel=2
pkgdesc='macOS iCons Collection'
arch=('any')
url='https://www.opendesktop.org/p/1102582/'
license=('GPL')
depends=('gtk-update-icon-cache')

# Hash and Timestamp
_p="var \(hash = '\(.*\)\|timetamp = '\(.*\)\)';"
read _s _t <<< $(echo -n $(curl -s $url | sed -n "s/$_p/\2\3/p"))

source=("https://dl.opendesktop.org/api/files/downloadfile/id/1519002046/s/$_s/t/$_t/$pkgname-$pkgver.tar.xz")
md5sums=('056982040d0efdcf4fa93b0e5bc9bc3d')

prepare() {
    find -name '* *' -delete
}

package() {
    install -dm755 $pkgdir/usr/share/icons
    cp -r macOS $pkgdir/usr/share/icons
}
