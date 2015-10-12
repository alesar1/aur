#Maintainer: Kars Wang <jaklsy g-mail>

pkgname=lantern-beta
pkgver=2.0.9
pkgrel=1
pkgdesc='Lantern is a free desktop application that delivers fast, reliable and secure access to the open Internet. (Beta Channel)'
arch=('i686' 'x86_64')
url='https://getlantern.org'
license=('Apache')
depends=('hicolor-icon-theme' 'bzip2' 'dbus' 'glib2' 'gtk3' 'libappindicator-gtk3' 'mesa' 'xcb-util' 'xdg-utils' 'zlib')
provides=('lantern')
options=('!emptydirs' '!strip' '!docs')
install=$pkgname.install
source=('lantern.service')
source_i686=('lantern-installer-beta-32-bit.deb::https://raw.githubusercontent.com/getlantern/lantern-binaries/master/lantern-installer-beta-32-bit.deb')
source_x86_64=('lantern-installer-beta-64-bit.deb::https://raw.githubusercontent.com/getlantern/lantern-binaries/master/lantern-installer-beta-64-bit.deb')
sha1sums=('da705ba2fa3608a17258009b933e8bb58b3172a2')
sha1sums_i686=('014396848a63531145971edd573f2c1afe3697e7')
sha1sums_x86_64=('6add655d00518794ef7c62f35dff4859ac766164')

package() {
    msg2 'Extracting the data.tar.xz...'
    bsdtar -xf data.tar.xz -C "${pkgdir}/"

    msg2 'Install systemd service file...'
    install -Dm644 "${srcdir}/lantern.service" "${pkgdir}/usr/lib/systemd/user/lantern.service"
}
