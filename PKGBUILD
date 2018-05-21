# Maintainer: Eddie.website <maintainer@eddie.website>
# Based on work by Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ> and Beini <bane aτ iki dot fi>

pkgname=eddie-ui
pkgver=2.14.4
pkgrel=1
pkgdesc='Eddie - OpenVPN UI'
arch=('i686' 'x86_64')
url=https://eddie.website
license=(GPL3)
depends=(mono openvpn sudo desktop-file-utils libnotify libappindicator-gtk2)
optdepends=('stunnel: VPN over SSL' 'openssh: VPN over SSH')
provides=('eddie-ui')
conflicts=('airvpn' 'airvpn-beta-bin' 'airvpn-git')
install=eddie-ui.install
source=('git+https://github.com/AirVPN/Eddie.git')
sha1sums=('SKIP')

case "$CARCH" in
    i686) _pkgarch="x86"
      ;;
    x86_64) _pkgarch="x64"
      ;;
esac

build() {
  export TERM=xterm # Fix Mono bug "Magic number is wrong".
  cd "Eddie"
  xbuild /p:Configuration="Release" /p:Platform="$_pkgarch" src/eddie2.linux.sln
}

package() {
  cd "Eddie"
  install -Dm755 "src/App.Forms.Linux/bin/$_pkgarch/Release/App.Forms.Linux.exe" "$pkgdir/usr/lib/eddie-ui/Eddie-UI.exe"
  install -Dm644 "src/App.Forms.Linux/bin/$_pkgarch/Release/Lib.Common.dll" "$pkgdir/usr/lib/eddie-ui/Lib.Common.dll"
  install -Dm644 "src/App.Forms.Linux/bin/$_pkgarch/Release/Lib.Core.dll" "$pkgdir/usr/lib/eddie-ui/Lib.Core.dll"
  install -Dm644 "src/App.Forms.Linux/bin/$_pkgarch/Release/Lib.Forms.dll" "$pkgdir/usr/lib/eddie-ui/Lib.Forms.dll"
  install -Dm644 "src/App.Forms.Linux/bin/$_pkgarch/Release/Lib.Platform.Linux.dll" "$pkgdir/usr/lib/eddie-ui/Lib.Platform.Linux.dll"
  install -Dm644 "deploy/linux_$_pkgarch/libLib.Platform.Linux.Native.so" "$pkgdir/usr/lib/eddie-ui/libLib.Platform.Linux.Native.so" # TOFIX: Compile from C sources.
  install -Dm755 "deploy/linux_$_pkgarch/eddie_tray" "$pkgdir/usr/lib/eddie-ui/eddie_tray" # TOFIX: Compile from C sources.
  install -Dm755 "deploy/linux_$_pkgarch/update-resolv-conf" "$pkgdir/usr/lib/eddie-ui/update-resolv-conf"
  install -Dm755 "resources/debian/usr/bin/eddie-ui" "$pkgdir/usr/bin/eddie-ui"
  install -Dm644 "common/cacert.pem"       "$pkgdir/usr/share/eddie-ui/cacert.pem"
  install -Dm644 "common/icon.png"       "$pkgdir/usr/share/eddie-ui/icon.png"
  install -Dm644 "common/icon_gray.png"       "$pkgdir/usr/share/eddie-ui/icon_gray.png"
  # install -Dm644 "resources/opensuse/usr/share/doc/eddie-ui/changelog.Debian.gz" "$pkgdir/usr/share/doc/eddie-ui/changelog.gz" # TOFIX: Missing changelog generation
  install -Dm644 "resources/opensuse/usr/share/doc/eddie-ui/copyright"    "$pkgdir/usr/share/doc/eddie-ui/copyright"
  # install -Dm644 "resources/opensuse/usr/share/man/man8/eddie-ui.8.gz"    "$pkgdir/usr/share/man/man1/eddie-ui.8.gz" # TOFIX: Missing man generation
  install -Dm644 "resources/opensuse/usr/share/polkit-1/actions/com.eddie.linux.ui.policy" "$pkgdir/usr/share/polkit-1/actions/com.eddie.linux.ui.policy"
  install -Dm644 "resources/opensuse/usr/share/pixmaps/eddie-ui.png"  "$pkgdir/usr/share/pixmaps/eddie-ui.png"

  ## Fix .desktop file for KDE
  _desktop_session=$(printf "%s" "$DESKTOP_SESSION" | awk -F "/" '{print $NF}')
  if [ "$_desktop_session" = "plasma" ]; then
    msg2 "Installing desktop file for KDE..."
    desktop-file-install -m 644 --set-comment="OpenVPN UI" \
    --dir="$pkgdir/usr/share/applications/" \
    --set-icon="/usr/share/pixmaps/eddie-ui.png" \
    "resources/opensuse/usr/share/applications/eddie-ui.desktop"
  else
    msg2 "Installing desktop file..."
    desktop-file-install -m 644 --set-comment="OpenVPN UI" \
    --dir="$pkgdir/usr/share/applications/" \
    "resources/opensuse/usr/share/applications/eddie-ui.desktop"
  fi
}

