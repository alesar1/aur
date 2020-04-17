# Maintainer: zer0def <zer0def@github>
pkgname=lens-bin
pkgver=3.3.0
pkgrel=1
pkgdesc='The Kubernetes IDE (previously Kontena Lens)'
arch=('x86_64')
url='https://github.com/lensapp/lens'
license=('MIT')
depends=('libxss' 'libxtst')

source=(
  "https://github.com/lensapp/lens/releases/download/v${pkgver}/Lens-${pkgver}.AppImage"
  "lens.desktop"
  "lens.sh"
)
sha512sums=(
  '12af119e65f9475ed852b173a82eb4a1c28b358a9edc642233d469321175b229d54c063e22fb34c7a1330d3e406a5ae18049eea8164ec5f07d804544febbde06'
  'ff81d0bfd155766462b1a7b37fe1aed4cb1b80b5afe2310a922a94b4f8801e104fde56d279fe5944dcd36dff38650b0d83bc99d11613a4dc87064a952a2b9364'
  '44130031393f118744d2a4ed70fd8f1c45c3e7e0358a3af74942513a782d7b5b27947389b2680f860b50be7463d9f58e803f9fadad157a52a14a13a47ea2391b'
)

prepare() {
  chmod +x "Lens-${pkgver}.AppImage"
  "./Lens-${pkgver}.AppImage" --appimage-extract &>/dev/null
  #chmod 4755 squashfs-root/chrome-sandbox
}

package() {
  install -d "${pkgdir}/opt"
  cp -a "${srcdir}/squashfs-root" "${pkgdir}/opt/lens"

  install -Dm644 squashfs-root/kontena-lens.png "$pkgdir"/usr/share/icons/hicolor/512x512/apps/kontena-lens.png
  rm -rf "${pkgdir}/opt/lens/usr"
  
  install -Dm644 "${srcdir}/lens.desktop" "${pkgdir}/usr/share/applications/lens.desktop"
  install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" \
    "${srcdir}/squashfs-root/resources/LICENSE" \
    "${srcdir}/squashfs-root/LICENSE.electron.txt" \
    "${srcdir}/squashfs-root/LICENSES.chromium.html"
  install -Dm755 "${srcdir}/lens.sh" "${pkgdir}/usr/bin/lens"
  #ln -s ../../../opt/lens/kontena-lens "${pkgdir}/usr/bin/lens"
}
