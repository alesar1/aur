# Maintainer: Rene <rene+_arch@reneschmidt.de>

pkgname=littlenavmap-bin
pkgver=2.6.13
pkgrel=1
pkgdesc="A Free Open Source Flight Planner, Navigation Tool, Moving Map, Airport Search, and Airport Information System for Flight Simulator X, Prepar3D, Microsoft Flight Simulator 2020, and X-Plane"
license=('GPL3')
provides=('littlenavmap-bin')
conflicts=('littlenavmap-bin')
arch=('x86_64')
url="https://albar965.github.io/littlenavmap.html"
depends=('glibc' 'gcc-libs' 'glib2' 'pcre' 'libx11' 'libxau' 'libxcb' 'libxdmcp' 'libglvnd' 'gtk3' 'qt5-declarative' 'qt5-svg')
options=(!strip)
_desktop_name=LittleNavmap.desktop
_filename=LittleNavmap-linux-20.04-${pkgver}.tar.gz
source=(
  https://github.com/albar965/littlenavmap/releases/download/v${pkgver}/${_filename}
  LittleNavmap.desktop
)
sha512sums=('cde6ced581add32d7e4a270f7d6b30901a6f924e2b503ba578fb2b0bc3bae3bbb391ad1d91bae66a8bdd7b6daac5490379a6aaf747448d4dbaafed4e3db4d0bf'
            'd706e0ee77c714315b3fae1da46633680bf345250fa5561f07c6b1c5445e56897dcae51e5ecf5e493f9e99ae58abe038bf89e4df249323f86e6d7b1ad78befab')

package() {
  install -d "${pkgdir}/opt/${pkgname}"
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/share/applications"
  cp -r "${srcdir}/Little Navmap/." "${pkgdir}/opt/${pkgname}"
  ln -s "/opt/${pkgname}/littlenavmap" "${pkgdir}/usr/bin/littlenavmap"
  install -Dm0644 ${srcdir}/${_desktop_name} "${pkgdir}/usr/share/applications/${_desktop_name}"
}
