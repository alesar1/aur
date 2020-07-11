# Maintainer: Braden Pellett (daBrado) <aurcontact@dabrado.net>
# Contributor: Vesa Kaihlavirta <vegai@iki.fi>
# Contributor: Kristoffer Fossgård <kfs1@online.no>

_pkgname=terminus-font
pkgname=${_pkgname}-ll2
pkgver=4.48
pkgrel=2
pkgdesc='Monospace bitmap font (for X11 and console) with ll2 patch (pass the il1I test)'
arch=(any)
url=https://sourceforge.net/projects/terminus-font/
license=(GPL2 custom:OFL)
makedepends=(xorg-bdftopcf python)
conflicts=(terminus-font)
provides=(terminus-font)
source=(
  https://downloads.sourceforge.net/project/${_pkgname}/${_pkgname}-${pkgver}/${_pkgname}-${pkgver}.tar.gz
  fix-75-yes-terminus.patch
)
sha256sums=(
  34799c8dd5cec7db8016b4a615820dfb43b395575afbb24fc17ee19c869c94af
  67ef6187106912f81208de39d791bf0ef45f7623c2dced36c99164f58654242b
)

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  patch < ../fix-75-yes-terminus.patch
  patch < alt/ll2.diff
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  ./configure --prefix=/usr --x11dir=/usr/share/fonts/misc --psfdir=/usr/share/kbd/consolefonts
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 75-yes-terminus.conf "${pkgdir}/etc/fonts/conf.avail/75-yes-terminus.conf"
  install -Dm644 OFL.TXT "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -dm755 "${pkgdir}/etc/fonts/conf.d"
  ln -sf -t "${pkgdir}/etc/fonts/conf.d" ../conf.avail/75-yes-terminus.conf
}
