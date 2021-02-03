# Maintainer: João Figueiredo <jf.mundox@gmail.com>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Wellington <wellingtonwallace@gmail.com>

pkgname=pulseeffects-legacy
pkgver=4.8.4
pkgrel=1
pkgdesc="Audio Effects for Pulseaudio Applications, without pipewire"
arch=($CARCH)
url='https://github.com/wwmm/pulseeffects'
license=(GPL3)
depends=(gtk3 gtkmm3 glibmm libpulse gstreamer gst-plugin-gtk gst-plugins-bad
         lilv boost-libs libsigc++ libsndfile libsamplerate zita-convolver libebur128
         calf lsp-plugins rubberband librnnoise)
makedepends=(meson boost itstool appstream-glib zam-plugins)
optdepends=('zam-plugins: maximizer'
            'yelp: help documentation')
conflicts=(pulseeffects)
provides=(pulseeffects)
source=("${pkgname%-*}-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
        "https://raw.githubusercontent.com/wwmm/pulseeffects/7c570c6e1354adedf01f7ba1e8fbe063cfc15ff2/data/pulseeffects.svg")
sha256sums=('12ba3205025d815a747b58636861594f7d1e43a578a5b0411f7794f4c12e5d86'
            'f9167f96246879eecd907a504b0a70050dc4d90fa520c556c813336974754350')

prepare() {
  ## Fix SVG rendering issue in Qt environments (https://github.com/wwmm/pulseeffects/issues/867)
  if [[ -e /usr/bin/qmake ]]; then
    cp ../pulseeffects.svg ${pkgname%-*}-$pkgver/data/
  fi
}

build() {
  arch-meson ${pkgname%-*}-$pkgver build
  ninja -C build
}

package() {
  DESTDIR="$pkgdir" ninja install -C build
}
