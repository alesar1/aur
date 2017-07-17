# Maintainer: Maintainer: oi_wtf <brainpower at mailbox dot org>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Vesa Kaihlavirta <vegai@iki.fi>
# Contributor: Kristoffer Fossgård <kfs1@online.no>
# Contributor: clonejo <clonejo@shakik.de>
# Contributor: Daniel Micay <danielmicay@gmail.com>

_pkgname=terminus-font
pkgname=${_pkgname}-td1
pkgver=4.46
pkgrel=1
pkgdesc='Monospace bitmap font (for X11 and console) with td1 patch (centered ascii tilde)'
arch=('any')
url='http://sourceforge.net/projects/terminus-font/'
license=('GPL2' 'custom:OFL')
makedepends=('xorg-bdftopcf' 'fontconfig' 'xorg-mkfontscale' 'xorg-mkfontdir' 'python3')
optdepends=('xorg-fonts-alias')
depends=('fontconfig' 'xorg-fonts-encodings' 'xorg-font-utils')
conflicts=('terminus-font')
provides=('terminus-font')
source=("http://downloads.sourceforge.net/project/${_pkgname}/${_pkgname}-${pkgver}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('4e29433e5699b76df1f5c9a96f1228cccf8ea8a16791cfef063f2b8506c75bcd')

prepare() {
  chmod +x "${_pkgname}-${pkgver}/configure"
}

build() {
	cd "${srcdir}/${_pkgname}-${pkgver}"

  patch < alt/td1.diff

  ./configure \
    --prefix=/usr \
    --x11dir=/usr/share/fonts/misc \
    --psfdir=/usr/share/kbd/consolefonts
  make
}

package() {
	cd "${srcdir}/${_pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  install -Dm644 "75-yes-terminus.conf" \
    "${pkgdir}/etc/fonts/conf.avail/75-yes-terminus.conf"
  install -Dm644 "OFL.TXT" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -d "${pkgdir}/etc/fonts/conf.d"

  cd "${pkgdir}/etc/fonts/conf.d"
  ln -s ../conf.avail/75-yes-terminus.conf
}

# getver: terminus-font.sf.net
# vim:set ts=2 sw=2 et:
