# Maintainer: m8D2 <omui (at) proton mail (dot) com>
# Contributor: Robert Booster <boosterdev at linuxmail dot org>

pkgname=zuki-themes
pkgver=3.36_4
pkgrel=1
pkgdesc="Zuki themes for GNOME, Xfce and more."
arch=('any')
url="https://github.com/lassekongo83/zuki-themes"
license=(GPL3)
depends=(gtk-engine-murrine gtk-engines)
makedepends=(ninja meson sassc)
optdepends=(ttf-roboto)
conflicts=(zukitwo-themes-git)
source=("$pkgname-$pkgver.tar.gz::https://github.com/lassekongo83/zuki-themes/archive/v${pkgver//_/-}.tar.gz")
sha256sums=('5416e966e69c3e7ab6573e7a4315633b5275fce848ded40abee443174404f661')

build() {
    cd $pkgname-${pkgver//_/-}
    meson --prefix /usr --buildtype=plain build
    ninja -C build
}

package(){
    cd $pkgname-${pkgver//_/-}
    DESTDIR="$pkgdir" ninja -C build install
}
