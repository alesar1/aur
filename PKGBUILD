# $Id: PKGBUILD, 2009/06/6$
# Maintainer: Alad Wenter <https://wiki.archlinux.org/index.php/Special:EmailUser/Alad>
# Contributors:
#     * Alireza Savand <alireza.savand@gmail.com>
#     * Maxime de Roucy <maxime.deroucy@gmail.com>
#     * Xyne <ac xunilhcra enyx, backwards>
#     * speeddefrost
#     * stefanr
#     * Bjorn Neergaard <bjorn@neersighted.com>

pkgname=alsaequal
pkgver=0.6
pkgrel=13

pkgdesc='Real-time adjustable equalizer plugin for ALSA sound server'
url='http://www.thedigitalmachine.net/alsaequal.html'
license=('GPL2')
arch=('i686' 'x86_64')

depends=('alsa-lib' 'ladspa')
optdepends=('caps: to use the Eq CAPS equalizer (10-band)'
            'swh-plugins: to use the mbeq equalizer (15-band)')

source=("http://www.thedigitalmachine.net/tools/alsaequal-$pkgver.tar.bz2"
        'makefile.patch'
        'false_error.patch'
        'caps_9.x.patch')
sha256sums=('916e7d152added24617efc350142438a46099efe062bd8781d36dbf10b4e6ff0'
            'c3bde63c45066f26fec21a38f6b4fc70d1fe534b9d20c4a9655fc15004c03792'
            'c1a02bfed6be6385e8ab4ebe7c9c3844e9c0937fbafe0f8d948842c2b7c9f7f0'
            'ba4e79459af3dab96a808ab581759a5a1cf82a1fe69d014cce959d7686e2313e')
install=alsaequal.install

prepare() {
  cd "$pkgname"
  for f in "$srcdir"/*.patch; do patch < "$f"; done
}

build() {
  cd "$pkgname"
  make
}

package() {
  cd "$pkgname"
  install -dm755 "$pkgdir"/usr/lib/alsa-lib
  make DESTDIR="$pkgdir" install
}
