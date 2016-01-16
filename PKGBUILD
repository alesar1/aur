# Maintainer: Damian Nowak <damian.nowak@atlashost.eu>
# Contributor: Alexsandr Pavlov <kidoz at mail dot ru>
# Contributor: Ernie Brodeur <ebrodeur@ujami.net>
# Contributor: Rogof <fake.bios at gmail>
# Contributor: m4.rc0 <m4.rc0 at o2 (dot) pl>
# Contributor: Bjørn Madsen <bm@aeons.dk>
pkgname='rubymine-eap'
_pkgname='RubyMine'
_pkgver='8.5'
_pkgbuild='144.2925.5'
pkgver="${_pkgver}_${_pkgbuild}"
pkgrel='1'
pkgdesc="Ruby and Rails IDE with the full stack of essential developer tools (EAP)"
arch=('i686' 'x86_64')
options=('!strip')
url="http://www.jetbrains.com/rubymine"
license=('custom')
depends=('java-runtime')
source=(http://download.jetbrains.com/ruby/${_pkgname}-${_pkgbuild}-no-jdk.tar.gz
        rubymine-eap
        rubymine-eap.desktop)
sha256sums=('4daa34a6db33ffb1a8cd6948191475ef5ef01b970ff6ae6b6127b941da8f35cb'
            '5907872548a4698c4a58a229296ff519031fba30b070257ff1a5e308faaff3c3'
            '772ff1c6599d414e02e862e03f1c7525cf69d3158f22674e5de751fa47df46c1')
PKGEXT='.pkg.tar.gz' # prevent a time-consuming compression with xz

package() {
  cd "${srcdir}"

  realsrcdir="${_pkgname}-${_pkgbuild}/"

  mkdir -p "${pkgdir}/opt/${pkgname}"
  cp -r ${srcdir}/${realsrcdir}* "${pkgdir}/opt/${pkgname}"

  mkdir -p "${pkgdir}/usr/bin"
  mkdir -p "${pkgdir}/usr/share/applications"
  mkdir -p "${pkgdir}/usr/share/pixmaps"
  mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 "${startdir}/rubymine-eap.desktop" "${pkgdir}/usr/share/applications/rubymine-eap.desktop"
  install -m 644 "${pkgdir}/opt/${pkgname}/bin/RMlogo.svg" "${pkgdir}/usr/share/pixmaps/${pkgname}.svg"
  install -m 755 "${startdir}/rubymine-eap" "${pkgdir}/usr/bin/rubymine-eap"
}
