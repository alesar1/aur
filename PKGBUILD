# Maintainer: agentcobra <agentcobra@free.fr>
# Contributor: Nover <novares.x@gmail.com>

# Creator Blade <contact@blade-group.com>

# Made with https://github.com/NicolasGuilloux/blade-shadow-beta

pkgname=shadow-beta
pkgver=0.8.62
pkgrel=1
pkgdesc="Shadow launcher"
arch=('x86_64')
url="http://shadow.tech"
license=('unknown')
depends=('desktop-file-utils' 'freetype2' 'libuv' 'gconf' 'hicolor-icon-theme' 'json-c' 'libappindicator-gtk2' 'libbsd' 'libcurl-gnutls' 'libdrm' 'libnotify' 'libva' 'libxtst' 'nss' 'opus' 'qt5-base' 'qt5-svg' 'sdl2' 'libappindicator' 'libcurl-compat' 'sdl' 'gcc7-libs' 'ttf-dejavu' 'libxss')
provides=(shadow-beta)
source=('https://macosx.update.blade-group.fr/mpl/linux/beta/bionic/shadow-alpha-bionic.zip')
md5sums=('bc290cee83021c95f2ecc2a70b12d859')
install=INSTALL

# Get the version as a datetime
pkgver() {
	# Get the version of the latest Linux version
#	url="https://macosx.update.blade-group.fr/mpl/linux/beta/bionic/latest-linux.yml"
#	content=$(curl -s -L $url)

	# Set the pkgver
#	echo "$content" | grep "version" | sed -e 's,version: ,,g'
echo "0.8.62"
}

# Build the package
package() {

	### Extract the deb
	ar xv shadowalpha-bionic-*.deb

	### Extract the data
	bsdtar xf data.tar.xz

	chmod -R g-w usr
	mv usr "${pkgdir}"

	chmod -R g-w opt
	mv opt "${pkgdir}"

	# Move the source directory
	cd ../

	### Move the Wrapper
	chmod g-w wrapper.pl
	chmod +x wrapper.pl
	mv wrapper.pl "${pkgdir}/opt/shadowbeta/shadow-wrapper.pl"

	### Move the Report.pl
	chmod g-w report.pl
	chmod +x report.pl
	mv report.pl "${pkgdir}/opt/shadowbeta/report.pl"

	### Edit launcher
	sed -e 's/^Exec=.*$/Exec="\/opt\/shadowbeta\/shadow-wrapper.pl"/g' -e 's/^Categories=.*$/Categories=Games;Utility;Virtualization/g' "${pkgdir}/usr/share/applications/shadow-beta.desktop" > shadow-beta.desktop
	chmod g-w shadow-beta.desktop

	rm "${pkgdir}/usr/share/applications/shadow-beta.desktop"
	mv shadow-beta.desktop "${pkgdir}/usr/share/applications/shadow-beta.desktop"

}
