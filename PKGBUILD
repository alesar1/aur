# Maintainer: Bleuzen <supgesu@gmail.com>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Wellington <wellingtonwallace@gmail.com>

pkgname=pulseeffects-git
pkgver=4.5.0.r23.g7e3852cf
pkgrel=1
pkgdesc='Audio Effects for Pulseaudio Applications'
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url='https://github.com/wwmm/pulseeffects'
license=('GPL3')
depends=('gtk3' 'gtkmm3' 'glibmm' 'libpulse' 'gstreamer' 'gst-plugins-good' 'gst-plugins-bad'
        'lilv' 'boost-libs' 'libsigc++' 'libsndfile' 'libsamplerate' 'zita-convolver' 'libebur128')
makedepends=('meson' 'boost' 'itstool' 'appstream-glib'
             'calf' 'zam-plugins' 'rubberband' 'mda.lv2')
optdepends=('calf: limiter, compressor exciter, bass enhancer and others'
            'zam-plugins: maximizer'
            'rubberband: pitch shifting'
            'lsp-plugins: equalizer, delay'
            'mda.lv2: loudness')
source=("git+https://github.com/wwmm/pulseeffects.git")
conflicts=(pulseeffects)
provides=(pulseeffects)
sha512sums=('SKIP')

pkgver() {
  cd pulseeffects
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  mkdir -p pulseeffects/build
  cd pulseeffects/build

  arch-meson ..

  ninja
}

package() {
  cd pulseeffects/build

  DESTDIR="$pkgdir" ninja install
}
