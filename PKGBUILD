# Maintainer: robertfoster
# Contributor: Fabio Rämi <fabio[at]dynamix-tontechnik[dot]ch>
# Contributor: speps <speps at aur dot archlinux dot org>

pkgname=friture
pkgver=0.46
pkgrel=1
pkgdesc="An application to visualize and analyze live audio data in real-time."
arch=(i686 x86_64)
url="http://tlecomte.github.com/friture/"
license=('GPL3')
depends=('python-appdirs' 'python-docutils' 'python-multipledispatch' 'python-numpy' 'python-opengl' 'python-pa-ringbuffer' 'python-pyqt5' 'python-pyrr' 'python-rtmixer' 'python-sounddevice')
optdepends=('jack: for JACK I/O support')
makedepends=('cython' 'python-pip' 'python-setuptools' 'python-wheel')
source=("https://github.com/tlecomte/friture/archive/v${pkgver}.tar.gz")

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  python setup.py install --root="${pkgdir}/"

  install -Dm644 resources/images/friture.iconset/icon_512x512.png \
    "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm644 "appimage/${pkgname}.desktop" \
    "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  sed -i "s|usr|/usr|g" \
    "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

sha256sums=('55b08ff489b19d6ed8d794de8af97858d6d280bc633da442f7d1a86de7000578')
