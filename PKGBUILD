# Maintainer: Kevin Puertas <kevinpr@jkanetwork.com>
# Helper: paulequilibrio
pkgname=gdevelop-bin
_pkgname=gdevelop
pkgver=5.0.0.beta79
pkgrel=1
pkgdesc="Open-source, cross-platform game creator designed to be used by everyone - no programming skills required."
arch=('x86_64')
url='https://gdevelop-app.com/'
license=('GPL' 'MIT' 'zlib/png')
groups=()
provides=('gdevelop')
conflicts=('gdevelop')
depends=('gconf')
source=("https://github.com/4ian/GDevelop/releases/download/v${pkgver//.b/-b}/gdevelop-${pkgver//.b/-b}.tar.gz"
        'https://github.com/4ian/GDevelop/raw/master/Core/docs/images/glogo.png'
        'gdevelop.desktop')
sha256sums=('8000a4c3d8c88fe00beae572bfabdef3946627744bf8b836e4b0bc74cbc7199d'
            '6ec8974d1c073442e1e653ac75d8ab4c1ed1cc1c2d14c6d73d6c50543a4f4b5f'
            '0e445ccbefd17af5d1d1984ba76fbc7b283eed04a0dcacf3a020739180c2d898')

package() {
  install -dm 755 "$pkgdir"/{opt/${_pkgname},usr/{bin,share/{applications,pixmaps}}}
  cp -a "${srcdir}/${_pkgname}-${pkgver//.b/-b}/." "${pkgdir}/opt/$_pkgname/"
  ln -s "/opt/$_pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
  install -D -m 644 "${srcdir}/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -D -m 644 "${srcdir}/glogo.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"
}
