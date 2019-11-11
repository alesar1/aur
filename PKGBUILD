# Maintainer: Josef Vybíhal (josef.vybihal@gmail.com)

pkgname=ms-teams
pkgver=1.2.00.30358
pkgrel=1
pkgdesc="Microsoft Teams for Linux is your chat-centered workspace in Office 365. Currently *only for insiders* on linux."
arch=('x86_64')
url="https://teams.microsoft.com/start"
#license=('custom:ms-teams')
depends=('gnome-keyring' 'libgnome-keyring' 'pango' 'libsecret' 'gtk3' 'gdk-pixbuf2' 'cairo' 'fontconfig' 'dbus' 'glibc' 'glib2' 'gcc-libs' 'libxss' 'libxtst' 'nss') #?? FIXME
optdepends=('libdbusmenu-glib' 'alsa-lib' 'libnotify') ##??
provides=("ms-teams=${pkgver}")
options=('!emptydirs' '!strip')
install=${pkgname}.install
_source_arch="amd64"
#[ "${CARCH}" = 'x86_64' ] && _source_arch="amd64"
source=("teams-insiders_${pkgver}_${_source_arch}.deb::https://packages.microsoft.com/repos/ms-teams/pool/main/t/teams-insiders/teams-insiders_${pkgver}_${_source_arch}.deb")
sha256sums=('24ba404057dc0d72402c39f3a5a2f62e166b5b413ddbbae9d84d77d8ac46ff54')

package() {
  msg2 "Extracting the data.tar.xz"
  tar -xf data.tar.xz -C "${pkgdir}/"
}
