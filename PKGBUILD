# Maintainer: Alex Taber <aft dot pokemon at gmail dot com>

pkgname=teamviewer
pkgver=15.25.5
pkgrel=1
pkgdesc='All-In-One Software for Remote Support and Online Meetings'
arch=('i686' 'x86_64' 'armv7h')
url='http://www.teamviewer.com'
license=('custom')
options=('!strip')
provides=('teamviewer')
conflicts=('teamviewer-beta')
# /opt/teamviewer/tv_bin/script/teamviewer_setup checklibs can check deps for each TV component:
# TV_DMN, TV_DESK, TV_GUI
depends=(
	'hicolor-icon-theme'
	'qt5-webkit'
	'qt5-x11extras'
	'qt5-quickcontrols' # Doesn't appear in namcap, won't display UI without it.
	'qt5-webengine'
	'qt5-svg'
)
#depends_x86_64=(
# libdepends:
#	'lib32-libxtst'
#	'lib32-libxinerama'
#	'lib32-libxrandr'
#	'lib32-libxdamage'
#	'lib32-fontconfig'
#	'lib32-libsm')
#depends_i686=()
#depends_armv7h=()
install=teamviewer.install
source_x86_64=("https://dl.teamviewer.com/download/linux/version_${pkgver%%.*}x/teamviewer_${pkgver}_amd64.deb")
source_i686=("https://dl.teamviewer.com/download/linux/version_${pkgver%%.*}x/teamviewer_${pkgver}_i386.deb")
source_armv7h=("https://dl.teamviewer.com/download/linux/version_${pkgver%%.*}x/teamviewer-host_${pkgver}_armhf.deb")
#source_armv7h=("https://dl.teamviewer.com/download/linux/version_${pkgver%%.*}x/teamviewer-host_13.2.13582_armhf.deb")
sha256sums_i686=('a6ffcd8b342cdbaa350a1c93f1bd2060e20436310c1a4377a0a8013797d97762')
sha256sums_x86_64=('2ed2133d2d1b2f2f3976fff374ea3c25cb04674660b5598cf8272081a609c570')
sha256sums_armv7h=('cb24786d5bfaed7b5d2d9e3e780c2b8070d6a47d761c21244a419fc8f1968d1c')

prepare() {
	warning "If the install fails, you need to uninstall previous major version of Teamviewer"
	[ -d data ] && rm -rf data
	mkdir data
	cd data
	for datatar in ../data.tar.*; do
		msg2 "Unpacking $datatar"
		tar -xf $datatar
	done
	sed -i '/function CheckQtQuickControls()/{N;a ls /usr/lib/qt/qml/QtQuick/Controls/qmldir &>/dev/null && return # ArchLinux
}' ./opt/teamviewer/tv_bin/script/teamviewer_setup || msg2 "Patching CheckQtQuickControls failed! Contact maintainer"
	msg2 "Running teamviewer_setup checklibs"
	./opt/teamviewer/tv_bin/script/teamviewer_setup checklibs \
    || msg2 "teamviewer_setup checklibs failed, contact maintainer with /tmp/teamviewerTARLibCheck/DependencyCheck.log" # Currently it always exits 0
}

package() {
	# Install
	warning "If the install fails, you need to uninstall previous major version of Teamviewer"
	cp -dr --no-preserve=ownership ./data/{etc,opt,usr,var} "${pkgdir}"/

	# Additional files
	rm "${pkgdir}"/opt/teamviewer/tv_bin/xdg-utils/xdg-email
	rm -rf "${pkgdir}"/etc/apt
	install -D -m0644 "${pkgdir}"/opt/teamviewer/tv_bin/script/teamviewerd.service \
		"${pkgdir}"/usr/lib/systemd/system/teamviewerd.service
	install -d -m0755 "${pkgdir}"/usr/{share/applications,share/licenses/teamviewer}
	ln -s /opt/teamviewer/License.txt \
		"${pkgdir}"/usr/share/licenses/teamviewer/LICENSE
	if [ "$CARCH" = "x86_64" ] && [ -f "${pkgdir}/opt/teamviewer/tv_bin/script/libdepend" ]; then
		msg2 "Removing libdepend to ditch lib32 dependencies"
		rm "${pkgdir}/opt/teamviewer/tv_bin/script/libdepend"
	fi
	# Uncomment to use system's native libraries. This can save around 150MiB of disk space
	#rm -rf "${pkgdir}"/opt/teamviewer/tv_bin/RTlib
}
