# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Alex Taber <aft dot pokemon at gmail dot com>
# Contributor: Louis Tim Larsen <louis(a)louis.dk>
# Contributor: Ignacio <nachohc89 at gmail dot com>
# Contributor: Gun Onen <brookline653 at yahoo dot com>
# Contributor: Christian Hesse <mai at eworm dot de>
# Contributor: Yakir Sitbon <kingyes1 at gmail dot com>
# Contributor: Alucryd <alucryd at gmail dot com>
# Contributor: Stas S <whats_up at tut dot by>
# Contributor: Hilinus <itahilinus at hotmail dot it>

# TODO: Complete tar install
# TODO: There are missing packages on a fresh Manjaro install'

_opt_Type='D' # D=Debian, R=RPM, T=tar

set -u
pkgname=teamviewer
pkgname+='-beta'
#pkgver=13.2.26559
#pkgver=14.0.8346
#pkgver=14.0.12762
#pkgver=14.0.14470
#pkgver=14.1.3399
#pkgver=14.1.9025
#pkgver=14.1.18533
#pkgver=14.2.2558
#pkgver=14.2.8352
#pkgver=14.3.4730
pkgver=14.4.2669
pkgrel=1
pkgdesc='All-In-One Software for Remote Support and Online Meetings'
arch=('i686' 'x86_64' 'armv7h')
url='https://www.teamviewer.com/en-us/download/linux/'
license=('custom')
options=('!strip')
provides=("teamviewer=${pkgver%%.*}")
conflicts=('teamviewer')
depends=(
	'qt5-base'
	'qt5-declarative'
	'hicolor-icon-theme'
	'qt5-webkit'
	'qt5-x11extras'
	'qt5-quickcontrols' # Doesn't appear in namcap, won't display UI without it.
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
optdepends=(
  'teamviewer-openrc: OpenRC scripts'
)
install=teamviewer.install
_dl='https://dl.tvcdn.de'
source_x86_64=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer_${pkgver}_amd64.deb")
source_i686=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer_${pkgver}_i386.deb")
source_armv7h=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer-host_${pkgver}_armhf.deb")
#source_armv7h=("${_dl}/download/linux/version_${pkgver%%.*}x/teamviewer-host_13.2.13582_armhf.deb")
md5sums_i686=('609c460517795932a6a8deca0c81ecf7')
md5sums_x86_64=('474fd9018c50107568a8d294a59b40e6')
md5sums_armv7h=('dae79ecc4d2ba3acb71486dd928df1cc')
sha256sums_i686=('9e71a7106c7bbf4f5c40379b6cbc14f4a36c93cb233301377604b2f4a3d9f5f7')
sha256sums_x86_64=('ea8bf3112cd8f757ff2dc06c9a6e69c81e9e25b8ef3986be5af4a27bbb40676e')
sha256sums_armv7h=('b95514999cb7eb209f1cf220096de2d94606c07a787c38488240d63968333a2c')

case "${_opt_Type}" in
'R')
  source_x86_64=("${source_x86_64[@]//_amd64.deb/.x86_64.rpm}")
  source_i686=("${source_i686[@]//_i386.deb/.i686.rpm}")
  source_armv7h=("${source_armv7h[@]//_armhf.deb/.armv7hl.rpm}")
  ;;
'T')
  source_x86_64=("${source_x86_64[@]//_amd64.deb/_amd64.tar.xz}")
  source_i686=("${source_i686[@]//_i386.deb/_i386.tar.xz}")
  source_armv7h=("${source_armv7h[@]//_armhf.deb/_armhf.tar.xz}")
  ;;
esac

prepare() {
	warning "If the install fails, you need to uninstall previous major version of Teamviewer"
	local datatar
	shopt -s nullglob
	for datatar in data.tar.*; do
		msg2 "Unpacking $datatar"
		tar -xf $datatar
	done
	shopt -u nullglob
	sed -i '/function CheckQtQuickControls()/{N;a ls /usr/lib/qt/qml/QtQuick/Controls/qmldir &>/dev/null && return # ArchLinux
}' ./opt/teamviewer/tv_bin/script/teamviewer_setup || msg2 "Patching CheckQtQuickControls failed! Contact maintainer"
	sed -e 's:/var/run/:/run/:g' -i 'opt/teamviewer/tv_bin/script/teamviewerd.service'
}

check() {
	msg2 "Running teamviewer_setup checklibs"
	if ! ./opt/teamviewer/tv_bin/script/teamviewer_setup checklibs; then
		msg2 "teamviewer_setup checklibs failed, contact maintainer with /tmp/teamviewerTARLibCheck/DependencyCheck.log" # Currently it always exits 0
		false
	fi
}

package() {
	# Install
	warning "If the install fails, you need to uninstall previous major version of Teamviewer"
	cp -dr --no-preserve=ownership {etc,opt,usr,var} "${pkgdir}"/

	# Additional files
	rm "${pkgdir}"/opt/teamviewer/tv_bin/xdg-utils/xdg-email
	rm -rf "${pkgdir}"/etc/apt
	rm -rf "${pkgdir}"/etc/yum.repos.d
	install -D -m0644 "${pkgdir}"/opt/teamviewer/tv_bin/script/teamviewerd.service \
		"${pkgdir}"/usr/lib/systemd/system/teamviewerd.service
	sed -e 's: NetworkManager-wait-online.service::g' -i "${pkgdir}"/usr/lib/systemd/system/teamviewerd.service
	install -d -m0755 "${pkgdir}"/usr/{share/applications,share/licenses/teamviewer}
	ln -s /opt/teamviewer/doc/License.txt \
		"${pkgdir}"/usr/share/licenses/teamviewer/LICENSE
	if [ "$CARCH" = "x86_64" ] && [ -f "${pkgdir}/opt/teamviewer/tv_bin/script/libdepend" ]; then
		msg2 "Removing libdepend to ditch lib32 dependencies"
		rm "${pkgdir}/opt/teamviewer/tv_bin/script/libdepend"
	fi
}
set +u
