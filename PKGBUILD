# Maintainer: Serge K <arch@phnx47.net>
# Contributor: Stephen Argent <steve [at] tuxcon [dot] com>

# https://github.com/phnx47/pkgbuilds

_pkgbin=ledger-live-desktop
pkgname=ledger-live-bin
pkgdesc='Ledger Live - Desktop (AppImage version)'
license=('MIT')
url='https://github.com/LedgerHQ/ledger-live-desktop'
pkgver=2.29.0
pkgrel=1
arch=('x86_64')
depends=('ledger-udev')
options=(!strip)
provides=('ledger-live')
conflicts=('ledger-live' 'ledger-live-git')
_package="ledger-live-desktop-${pkgver}-linux-${arch}.AppImage"
source=(
  "${_package}::${url}/releases/download/v${pkgver}/${_package}"
  "LICENSE::https://raw.githubusercontent.com/LedgerHQ/ledger-live-desktop/v${pkgver}/LICENSE"
)
sha512sums=('ce45335df820401499b6c6659c368311345f7297c894742110a47406bc0679c81ea8e84d4474ce9bafa1a50f3aa5da4914b3ef64fe0b4109eb0e359b37095a84'
            '915edd51fe7732af57f5a4ca8f4c61c4f435de6357e34ed0733cac8d950d80b3a9e513deac0a3672a07f38ff871a57032a221b3aa27edae8e42cc00586fe3318')


build() {
  # Extract files
  chmod +x "$srcdir/$_package"
  $srcdir/$_package --appimage-extract

  # Correct .desktop
  sed -e "s/AppRun/${_pkgbin}/g" -i "$srcdir/squashfs-root/$_pkgbin.desktop"
}


package() {
  install -d "$pkgdir/opt/$_pkgbin"
  cp -a "$srcdir/squashfs-root/." "$pkgdir/opt/$_pkgbin/"
  chmod -R +rx "$pkgdir/opt/$_pkgbin"

  install -d "$pkgdir/usr/bin"
  ln -s "/opt/$_pkgbin/$_pkgbin" "$pkgdir/usr/bin/$_pkgbin"

  install -d "$pkgdir/usr/share"
  cp -r "$srcdir/squashfs-root/usr/share/." "${pkgdir}/usr/share/"

  find "$pkgdir" -type d -exec chmod 755 {} +

  install -Dm644 "$srcdir/squashfs-root/$_pkgbin.desktop" "$pkgdir/usr/share/applications/$_pkgbin.desktop"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
