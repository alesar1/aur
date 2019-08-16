# Maintainer: Hal Gentz <zegentzy@protonmail.com>
# Contributer: Vesa Kaihlavirta <vegai@iki.fi>
 
pkgname=openttd-btpro
_pkgname=openttd
pkgver=1.9.2
pkgrel=1
pkgdesc='An engine for running Transport Tycoon Deluxe. BTPro patches applied.'
arch=('x86_64')
url='http://openttd.btpro.nl/index.php/forum/30-btpro-openttd-client-talk/1186-btpro-openttd-client-1-8-0'
license=('GPL')
depends=('libpng' 'sdl' 'icu' 'fontconfig' 'lzo' 'hicolor-icon-theme' 'desktop-file-utils' 'xz')
optdepends=('openttd-opengfx: free graphics' 
            'openttd-openmsx: free musicset'
            'openttd-opensfx: free soundset')
source=("https://proxy.binaries.openttd.org/openttd-releases/${pkgver}/${_pkgname}-${pkgver}-source.tar.xz"
        "http://openttd.btpro.nl/OpenTTD_versions/BTPro_Client_${pkgver}_A_19202_git.diff"
        "http://openttd.btpro.nl/OpenTTD_versions/innerhighlight.grf")
sha256sums=('f9ff8c255145a1dd617798a9413179cc740a0cc91709455990880a15eeb7564a'
            '1b5e4ee75332348b86dafbee826f8bc4ebefb00f7a8b8d849ba1df781605dddc'
            '1b181a27fbb468c7301291fc61384087ce7b1592cb0023be00f04736eec6e79b')
conflicts=('openttd')
 
prepare() {
  cd ${_pkgname}-${pkgver} 
  patch -p1 < "../BTPro_Client_${pkgver}_A_19202_git.diff" || true
}
 
build() {
  cd ${_pkgname}-${pkgver} 
 
  # http://site.icu-project.org/download/61#TOC-Migration-Issues
  CXXFLAGS+=' -DU_USING_ICU_NAMESPACE=1'
 
 ./configure \
    --prefix-dir=/usr \
    --binary-name=${_pkgname} \
    --binary-dir=bin \
    --data-dir=share/${_pkgname} \
    --install-dir="${pkgdir}" \
    --doc-dir=share/doc/${_pkgname} \
    --menu-name="OpenTTD"
 
  make -j5
}
 
package() {
  cd ${_pkgname}-${pkgver} 
 
  make install
  install -m644 -D ../innerhighlight.grf "${pkgdir}"/usr/share/openttd/baseset/innerhighlight.grf
}

