# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: speps <speps dot aur dot archlinux dot org>

_rtkver=0.5.5
pkgname=meters-lv2
pkgver=0.9.6
pkgrel=1
pkgdesc="Collection of LV2 plug-ins for audio-level metering from x42"
arch=('i686' 'x86_64')
url="http://x42-plugins.com/x42/x42-meters"
license=('GPL')
groups=('lv2-plugins')
depends=('fftw' 'jack' 'libglvnd' 'lv2' 'pango')
optdepends=('jack: standalone jack client'
            'liblo: standalone jack client')
# old names of this package
provides=('lv2-meters' 'meters.lv2')
conflicts=('lv2-meters' 'meters.lv2' 'x42-plugins')
source=("meters-lv2-$pkgver.tar.gz::https://github.com/x42/meters.lv2/archive/v$pkgver.tar.gz"
        "robtk-$_rtkver.tar.gz::https://github.com/x42/robtk/archive/v$_rtkver.tar.gz")
md5sums=('185c8135b596574ed70d584f6287e28d'
         '7e936faa5477e013e012978cc7ddd901')


build() {
  cd "${srcdir}/meters.lv2-$pkgver"

  export RW=../robtk-$_rtkver/
  make submodules
  make
}

package() {
  cd "${srcdir}/meters.lv2-$pkgver"

  make PREFIX=/usr DESTDIR="$pkgdir/" install
}
