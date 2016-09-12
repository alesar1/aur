# Maintainer: Scott Percival <code at moral.net.au>
# Contributor: Boohbah <boohbah at gmail.com>
# Contributor: SpepS <dreamspepser at yahoo.it>
# Contributor: Bernardo Barros <bernardobarros at gmail.com>
# Contributor: Uli Armbruster <uli_armbruster at web.de>
# Contributor: Christopher Arndt <chris at chrisarndt.de>

_pkgname=ardour
pkgname="${_pkgname}5"
pkgver=5.3
pkgrel=1
pkgdesc="A multichannel hard disk recorder and digital audio workstation"
arch=('i686' 'x86_64')
url="http://ardour.org/"
license=('GPL')
depends=('aubio' 'cwiid' 'gtkmm' 'liblo' 'liblrdf' 'libltc' 'lilv' 'suil'
         'rubberband' 'taglib')
makedepends=('git' 'python2' 'boost' 'cppunit' 'doxygen' 'graphviz' 'itstool')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}-${pkgver}::git://github.com/Ardour/ardour.git#tag=${pkgver}"
        "${_pkgname}.desktop")
md5sums=('SKIP'
         'e481a2e720770162784563fa5241b7cb')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  python2 waf configure \
    --prefix=/usr \
    --configdir=/etc \
    --docs \
    --freedesktop \
    --internal-shared-libs \
    --libjack=weak \
    --lv2 \
    --lxvst \
    --optimize \
    --with-backends=jack,alsa,dummy \
    --use-external-libs \
    --cxx11 \
    --no-phone-home

  python2 waf build $MAKEFLAGS
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  python2 waf --destdir="${pkgdir}" install

  # Install freedesktop.org compatible application starter desktop file
  install -Dm644 "$srcdir/${_pkgname}.desktop" \
    "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}

# vim:set ts=2 sw=2 et:
