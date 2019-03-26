# Maintainer: David Parrish <daveparrish@tutanota.com>

pkgname=zap-desktop-bin
pkgver=0.4.0_beta
# Actual version used by project
_ver=${pkgver//_/-}
pkgrel=1
pkgdesc="Lightning wallet focused on user experience and ease of use"
arch=('x86_64')
url="https://github.com/LN-Zap/zap-desktop"
license=('MIT')
depends=('gtk3' 'nss' 'libxss')
source_x86_64=("https://github.com/LN-Zap/zap-desktop/releases/download/v${_ver}/Zap-linux-amd64-v${_ver}.deb")
sha256sums_x86_64=('53ed11899d431483c1da43a030cd9078d55e87ee6f2943e7ddd6aa8cb0ab1ea2')
conflicts=("zap-desktop-git")
provides=("zap-desktop")

prepare() {
    tar -Jxvf data.tar.xz

    sed -in "s/\\/Zap\\//\\/${pkgname}\\//g" usr/share/applications/zap-desktop.desktop
}

package() {
  install -d "$pkgdir"/{opt/,usr/bin/,usr/share/applications,/usr/share/pixmaps,/usr/share/licenses/$pkgname}

  # /opt install
  mkdir "$pkgdir/opt/$pkgname"
  cp -r "$srcdir/opt/Zap/". "$pkgdir/opt/$pkgname"

  # Symlink executable
  ln -s "/opt/$pkgname/zap-desktop" "$pkgdir/usr/bin/zap-desktop"

  # Symlink licenses
  ln -s "/opt/$pkgname/LICENSE.electron.txt" "$pkgdir/usr/share/licenses/$pkgname"
  ln -s "/opt/$pkgname/LICENSES.chromium.html" "$pkgdir/usr/share/licenses/$pkgname"

  # Symlink desktop icon
  cp "$srcdir/usr/share/applications/zap-desktop.desktop" "${pkgdir}/usr/share/applications/zap-desktop.desktop"
  cp "$srcdir/usr/share/icons/hicolor/0x0/apps/zap-desktop.png" "${pkgdir}/usr/share/pixmaps/zap-desktop.png"
}
