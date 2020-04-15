# Maintainer: Caio Novais <caionov08 at gmail dot com>
pkgname=ungoogled-chromium-bin
_pkgname=chromium
_pkgname2=ungoogled-chromium
pkgver=80.0.3987.163
pkgrel=1
pkgdesc="A lightweight approach to removing Google web service dependency (binary version)"
arch=('x86_64')
url="https://ungoogled-software.github.io/ungoogled-chromium-binaries/releases/archlinux/"
license=('BSD')
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib' 'libva'
         'desktop-file-utils' 'hicolor-icon-theme' 'jsoncpp' 'openjpeg2')
optdepends=('pepper-flash: support for Flash content'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet'
            'libva-intel-driver: for hardware video acceleration with Intel GPUs'
            'libva-mesa-driver: for hardware video acceleration with AMD/ATI GPUs'
            'libva-vdpau-driver: for hardware video acceleration with NVIDIA GPUs')
conflicts=("$_pkgname" "$_pkgname2")
provides=("$_pkgname")
source=("https://github.com/zocker-160/ungoogled-chromium-binaries/releases/download/80.0.3987.163-1/ungoogled-chromium-80.0.3987.163-1-x86_64.pkg.tar.xz")
md5sums=('523a99a5aefe88495699513ce4e5686a')

# Copy files
package() {
   cp -r "$srcdir/usr" "$pkgdir"
}
