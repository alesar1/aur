# Maintainer: JstKddng <jk@vin.ovh>
# Contributors: WSDMatty, Crotok, SantoZ, Det, Achilleas Pipinellis, speed145a, Schnouki

pkgname=ungoogled-chromium-bin
pkgver=78.0.3904.87
pkgrel=1
pkgdesc="A lightweight approach to removing Google web service dependency"
arch=("x86_64")
url="https://ungoogled-software.github.io/"
license=("BSD")
provides=("chromium")
conflicts=("chromium" "iridium" "ungoogled-chromium")
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib' 'libva'
         'desktop-file-utils' 'hicolor-icon-theme' 'jsoncpp' 'openjpeg2' 're2'
         'snappy' 'minizip')
optdepends=('pepper-flash: support for Flash content'
            'pipewire: WebRTC desktop sharing under Wayland'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet'
            'libva-intel-driver: for hardware video acceleration with Intel GPUs'
            'libva-mesa-driver: for hardware video acceleration with AMD/ATI GPUs'
            'libva-vdpau-driver: for hardware video acceleration with NVIDIA GPUs')
source=("https://repo.vin.ovh/arch/${arch}/ungoogled-chromium-${pkgver}-${pkgrel}-${arch}.pkg.tar.xz")
sha256sums=("8217e09c63678fae9693103851d5083940b085201953cbac442fec322960299c")

package() {
  cp -R "${srcdir}/usr/" "${pkgdir}/usr"    
  chown root $pkgdir/usr/lib/chromium/chrome-sandbox
  chmod 4755 $pkgdir/usr/lib/chromium/chrome-sandbox
}
