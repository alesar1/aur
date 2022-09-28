# Maintainer: smowtenshi <smowtenshi at protonmail dot com>
# Contributor: Asim Bera <asimbera at outlook dot in>

# Check for new releases in: https://docs.icons8.com/release-notes/

pkgname=lunacy-bin
_pkgname=lunacy
pkgver=8.7.0
pkgrel=1
pkgdesc="Free design software that keeps your flow with AI tools and built-in graphics"
arch=('x86_64')
url="https://icons8.com/lunacy"
license=('custom: commercial')
depends=('gcc-libs' 'hicolor-icon-theme' 'zlib' 'fontconfig')
provides=('lunacy')

source_x86_64=(lunacy_x86_64_${pkgver}.deb::https://lun-eu.icons8.com/s/setup/Lunacy_${pkgver}.deb)
sha256sums_x86_64=('1db7cb3495e0ccce75ac996e7138c77d6cb72bd62a058848d79caa865ed9aa62')

package() {
  echo "  -> Extracting the data.tar.xz..."
  bsdtar -xf data.tar.xz -C "$pkgdir/"

  install -d "${pkgdir}/usr/bin"
  ln -s /opt/icons8/${_pkgname}/Lunacy "${pkgdir}"/usr/bin/lunacy
}
