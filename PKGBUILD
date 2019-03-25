# Maintainer: Cedric Girard <cgirard.archlinux@valinor.fr>
# Contributor: kevku <kevku@gmx.com>

pkgname=kodi-addon-inputstream-adaptive
pkgver=2.3.16
pkgrel=1
pkgdesc="InputStream client for adaptive streams for Kodi 18+"
arch=('x86_64' 'i686')
url="https://github.com/peak3d/inputstream.adaptive"
license=('GPL2')
makedepends=('kodi-dev>=18' 'cmake')
depends=('kodi-platform')
conflicts=("${pkgname%-git}")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/peak3d/inputstream.adaptive/archive/${pkgver}.tar.gz")
sha256sums=('ea783ad0edc2a1e0569ff9b318e0efc1923301753ef1093446974b204a7191eb')


build() {
        cd "$srcdir/inputstream.adaptive-${pkgver}"
        cmake -DCMAKE_INSTALL_PREFIX=/usr .
        make
}

package() {
        cd "$srcdir/inputstream.adaptive-${pkgver}"
        make DESTDIR="$pkgdir/" install
        sed -i 's|special://home/cdm|/usr/lib/kodi/addons/inputstream.adaptive/lib|g' "$pkgdir/usr/share/kodi/addons/inputstream.adaptive/resources/settings.xml"
}
