# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_projectname=Mamba
pkgname="${_projectname,,}"
pkgver=1.7
pkgrel=1
pkgdesc="A virtual MIDI keyboard and file player/recorder for ALSA/JACK"
arch=('i686' 'x86_64')
url="https://github.com/brummer10/${_projectname}"
license=('0BSD')
depends=('cairo')
makedepends=('alsa-lib' 'fluidsynth' 'jack' 'liblo' 'libsigc++' 'libsmf')
optdepends=('new-session-manager: for NSM support')
groups=('pro-audio')
source=(
    "https://github.com/brummer10/${_projectname}/releases/download/v${pkgver}/${_projectname}_${pkgver}.tar.gz"
)
sha256sums=('354d9248dd2239947f50d09fc2d0d0c7c79f9ab6ea6034f6ab8e7ae83fea8632')


prepare() {
  cd "${srcdir}/${_projectname}_${pkgver}"
  sed -i '/update-desktop-database/d' src/Makefile
}

build() {
  cd "${srcdir}/${_projectname}_${pkgver}"
  make
}

package() {
  depends+=('libasound.so' 'libfluidsynth.so' 'libjack.so' 'liblo.so' 'libsigc++' 'libsmf.so')
  cd "${srcdir}/${_projectname}_${pkgver}"
  make DESTDIR="${pkgdir}" PREFIX=/usr install

  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
