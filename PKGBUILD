# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname='pop-sound-theme-bin'
pkgver='5.4.4'
pkgrel=1
_timestamp=1629398560
_commit=6615e45
pkgdesc='System76 Pop Sound Theme'
arch=('any')
url='https://github.com/pop-os/gtk-theme'
license=('GPL2' 'CCPL:by-sa')
conflicts=('pop-sound-theme')
provides=('pop-sound-theme')

source=("http://ppa.launchpad.net/system76/pop/ubuntu/pool/main/p/pop-gtk-theme/pop-sound-theme_${pkgver}~${_timestamp}~21.10~${_commit}_all.deb")
sha256sums=('4c8ae42e6e6b24cf2fd820b40b1ccdf58192ddecbe47cfd3d5dec483b7897b58')

package() {
  cd "${srcdir}"
  
  tar --zstd -xC "${pkgdir}" -f data.tar.zst
}

# vim: ts=2 sw=2 et:
