# Maintainer: sukanka <su975853527 at gmail.com>
# Contributor: HRKo <ootaharuki99 at gmail.com>
pkgname=mathpix-snipping-tool
pkgver=03.00.0093
pkgrel=1
pkgdesc="Mathpix Snipping Tool"
arch=('x86_64')
url="https://mathpix.com/"
license=('unknown')
depends=('qt5-x11extras' 'qt5-webengine' 'qt5-svg' 'qt5-imageformats'
)
options=(!strip)
optdepends=('wayland: Wayland support.')
source=("${pkgname}-${pkgver}-${arch}.AppImage::https://download.mathpix.com/linux/Mathpix_Snipping_Tool-${arch}.v${pkgver}.AppImage")
sha512sums=('7071eba013bdc6037292804ec43047193ffdd40937434cb0f1d1ba05ac905b4b76b4bac00bb17e55b110a7addd305291ae93e7e1b110d293a45ef7f3bdf5e3b2')


prepare() {
  cd $srcdir
  chmod a+x ${pkgname}-${pkgver}-${arch}.AppImage
  ./${pkgname}-${pkgver}-${arch}.AppImage --appimage-extract
}

package() {
  cd $srcdir/squashfs-root
  install -Dm755 usr/bin/${pkgname}     ${pkgdir}/usr/bin/${pkgname}
  install -Dm755 usr/lib/libsentry.so   ${pkgdir}/usr/lib/libsentry.so
  cp -r usr/share         ${pkgdir}/usr
  chmod 0755 -R ${pkgdir}/usr/share

  rm -rf ${pkgdir}/usr/share/doc
  # manually strip excutable here.
  strip ${pkgdir}/usr/bin/${pkgname}
}
