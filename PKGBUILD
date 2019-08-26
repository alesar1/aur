# Maintainer: Wouter Haffmans <wouter@simply-life.net>
pkgname=tomtomsportsconnect
pkgver=3.3.9
pkgrel=2
pkgdesc="TomTom Sports Connect"
arch=(x86_64)
url="http://us.support.tomtom.com/app/answers/detail/a_id/24742/~/linux-version-of-tomtom-sports-connect"
license=('custom')
groups=()
depends=(gstreamer0.10-base openssl-1.0)
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
source=(
    https://sports.tomtom-static.com/downloads/desktop/mysportsconnect/latest/tomtomsportsconnect-${pkgver}.x86_64.deb
    fix-desktop-file.patch
    90-tomtomsports.rules)
noextract=()
md5sums=('e50e37598ac9e1dce213d24747c5cbc0'
         '23de8b949214475945e4aa6537e26319'
         '9176bd3daa77589fea115735fadee288')

prepare() {
    cd "$srcdir"
    tar -xf data.tar.xz
    patch -p0 < fix-desktop-file.patch
}

package() {
    cd "$srcdir"
    install -d $pkgdir/opt/TomTomSportsConnect/
    install -d $pkgdir/usr/share/
    install -d $pkgdir/usr/lib/udev/rules.d/
    cp -ra usr/local/TomTomSportsConnect/* $pkgdir/opt/TomTomSportsConnect/
    cp -ra usr/share/* $pkgdir/usr/share/
    install -m 0644 90-tomtomsports.rules $pkgdir/usr/lib/udev/rules.d/90-tomtomsports.rules
}
