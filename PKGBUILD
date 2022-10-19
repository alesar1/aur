# Maintainer: Tab Fitts <tfitts [at] spryservers [dot] net>
# Contributor: oguzkagan <me at oguzkaganeren dot com dot tr>
# Contributor: Sibren Vasse <arch at sibrenvasse dot nl>
#

pkgname=splashtop-streamer
pkgver=3.5.2.0
pkgrel=1
pkgdesc="Splashtop Remote Streamer. Remotely access your desktop from any device from anywhere!"
arch=('x86_64')
url="https://www.splashtop.com"
license=('Proprietary')
groups=('')
depends=('bash-completion' 'cairo>=1.2.4' 'curl>=7.47.0' 'dbus' 'dbus-glib' 'desktop-file-utils' 'gcc>=3.0' 'gdk-pixbuf2' 'glib2>=2.43.2' 'gtk3>=3.5.12' 'hicolor-icon-theme' 'libappindicator-gtk3>=0.2.92' 'libnotify>=0.7.0' 'libproxy>=0.4.11' 'libpulse>=0.99.1' 'libxcb>=1.3' 'lshw' 'pam>=0.99.7.1' 'systemd-libs>=217' 'uriparser>=0.6.0' 'util-linux-libs>=2.16' 'xcb-util>=0.4.0' 'xcb-util-keysyms>=0.4.0' 'zlib>=1.2.0' 'binutils' 'libxrandr' 'libxfixes' 'libxtst')
provides=('splashtop-streamer')
backup=('etc/dbus-1/system.d/com.splashtop.streamer.Daemon.conf')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("https://download.splashtop.com/linux/STB_CSRS_Ubuntu_v${pkgver}_amd64.tar.gz")
sha512sums=('387d8e8fbf0f2ad3b7031da9996ce2c4e33580ca85d38b79b940260e8223c2f2a669aa4797a04927b782fe1816bd9596938b51b90c23ded5b0eb7e1aa50756e1')

prepare(){
    tar xzf STB_CSRS_Ubuntu_v${pkgver}_amd64.tar.gz
    ar -x Splashtop_Streamer_Ubuntu_amd64.deb
}

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	# Fix directory structure differences
	cd "${pkgdir}"

	install -D -m644 "${pkgdir}/opt/splashtop-streamer/EULA.htm" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p usr/lib 2> /dev/null; mv lib/* usr/lib; rm -rf lib

	cd ..

}
