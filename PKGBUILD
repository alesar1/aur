# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname='pop-sound-theme-bin'
pkgver='5.0.0'
pkgrel=4
_timestamp=1573676952
_commit=8ddf0fc
pkgdesc='System76 Pop Sound Theme'
arch=('any')
url='https://github.com/pop-os/gtk-theme'
license=('GPL2' 'CCPL:by-sa')
conflicts=('pop-sound-theme')
provides=('pop-sound-theme')

source=("http://ppa.launchpad.net/system76/pop/ubuntu/pool/main/p/pop-gtk-theme/pop-sound-theme_${pkgver}~${_timestamp}~19.10~${_commit}_all.deb")
sha256sums=('6227ae8f263bda342c893a880a004f6e63b24864461003447ece27a833d75259')

package() {
  cd "${srcdir}"
  
  tar -xJC "${pkgdir}" -f data.tar.xz
}

# vim: ts=2 sw=2 et:
