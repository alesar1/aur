# Maintainer: trougnouf (Benoit Brummer) <trougnouf at gmail dot com>
# Contributor: Bruno Rodriguez (brunorro)
# Contributor: Øyvind 'Mr.Elendig' Heggstad <mrelendig at har-ikkje dot net>
# Contributor: Travis Fickett <tfickett AT ufl DOT edu>
# Submitter: Anders Lund <anders at alweb dot dk>

pkgname=opencpn
_name="OpenCPN"
pkgver=5.2.0
pkgrel=1
pkgdesc="Open Source Chart Plotting / Marine Navigation"
arch=('x86_64')
license=("GPL2")
depends=('wxgtk3' 'gpsd' 'portaudio' 'tinyxml' 'hicolor-icon-theme' 'webkit2gtk')
makedepends=('cmake')
url="http://opencpn.org"
install=opencpn.install
source=("https://github.com/${_name}/${_name}/archive/v${pkgver}.tar.gz") # "wxWidgets.patch")
sha1sums=('352037909fde8a7195f740ed6a0f8d1eff8e9e78')

build() {
  cd "OpenCPN-${pkgver}"
  cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr \
        -DBUNDLE_GSHHS=CRUDE -DBUNDLE_TCDATA=ON -DBUNDLE_DOCS=ON \
        -DwxWidgets_CONFIG_EXECUTABLE=/usr/bin/wx-config-gtk3 \
        -DOCPN_FORCE_GTK3=ON
  make
}

package() {
  cd "OpenCPN-${pkgver}"
  make DESTDIR="$pkgdir" install
}
