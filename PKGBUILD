# Maintainer: Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ>

pkgname=airvpn-bin
pkgver=2.9.2
pkgrel=8
pkgdesc='AirVPN client "Eddie" based on OpenVPN, stable version.'
arch=('i686' 'x86_64')
url=https://airvpn.org/linux/
license=(GPL3)
depends=(gksu mono openvpn)
optdepends=('stunnel: VPN over SSL' 'openssh: VPN over SSH')
provides=('airvpn')
conflicts=('airvpn' 'airvpn-beta-bin')
install=airvpn.install
source_i686=("https://airvpn.org/repository/${pkgver%.*}/airvpn_linux_x86_debian.deb")
source_x86_64=("https://airvpn.org/repository/${pkgver%.*}/airvpn_linux_x64_debian.deb")
md5sums_i686=('c3f1ed16b8e72b530c5786799bb13b89')
md5sums_x86_64=('edceba29c0ca6b58eb36478e12c2f71c')
sha256sums_i686=('8dcae5773fda5f0955dcbd19a2364ac700909b8ae3f564de298a9add5879575a')
sha256sums_x86_64=('2013ff2dc9f474a8d8fa95ef41a441a55e3b31c96a836ba17dad2bfc75da2c43')

package() {
  msg2 "Extracting the data.tar.lzma..."
  bsdtar -xf data.tar.gz

  msg2 "Moving stuff in place..."
  install -Dm755 "$srcdir/usr/lib/AirVPN/AirVPN.exe" "$pkgdir/usr/lib/AirVPN//AirVPN.exe"
  install -Dm644 "$srcdir/usr/lib/AirVPN/Lib.Core.dll" "$pkgdir/usr/lib/AirVPN/Lib.Core.dll"
  install -Dm644 "$srcdir/usr/lib/AirVPN/Lib.Forms.dll" "$pkgdir/usr/lib/AirVPN/Lib.Forms.dll"
  install -Dm644 "$srcdir/usr/lib/AirVPN/Platforms.Linux.dll" "$pkgdir/usr/lib/AirVPN/Platforms.Linux.dll"
  install -Dm755 "$srcdir/usr/lib/AirVPN/update-resolv-conf" "$pkgdir/usr/lib/AirVPN/update-resolv-conf"
  install -Dm755 "$srcdir/usr/bin/airvpn" "$pkgdir/usr/bin/airvpn"
  install -Dm644 "$srcdir/usr/share/doc/airvpn/changelog.gz" "$pkgdir/usr/share/doc/airvpn/changelog.gz"
  install -Dm644 "$srcdir/usr/share/doc/airvpn/copyright" "$pkgdir/usr/share/doc/airvpn/copyright"
  install -Dm644 "$srcdir/usr/share/man/man1/airvpn.1.gz" "$pkgdir/usr/share/man/man1/airvpn.1.gz"
  install -Dm644 "$srcdir/usr/share/pixmaps/AirVPN.png"  "$pkgdir/usr/share/pixmaps/AirVPN.png"
  cd "$srcdir/usr/share/applications"
  desktop-file-install -m 644 --set-comment="VPN service based on OpenVPN"\
  --dir="$pkgdir/usr/share/applications/" "AirVPN.desktop"
}
