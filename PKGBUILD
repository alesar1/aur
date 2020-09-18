# Maintainer: grufo <madmurphy333 AT gmail DOT com>
# Contributor: Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Contributor: Julio González <juliolokoo at gmail dot com>
# Contributor: Jose Valecillos <valecillosjg (at) gmail (dot) com>
# Contributor: Thiago Perrotta <echo dGhpYWdvcGVycm90dGE5NUBnbWFpbC5jb20K | base64 -d >
# Contributor: alegotta <algottardi at disroot dot org>
# Contributor: oguzkagan <me@oguzkaganeren.com.tr>

pkgname='xampp'
pkgver='7.4.10'
pkgrel=7
pkgdesc='A stand-alone LAMPP distribution'
_platform='linux-x64'
_uppkgrel=0
url='https://www.apachefriends.org/'
license=('GPL')
arch=('x86_64')
depends=('net-tools')
optdepends=('polkit: for launching XAMPP Manager and Control Panel from menu'
            'pygtk: for using XAMPP Control Panel')
makedepends=('sdx' 'tclkit' 'rsync')
source=('bitrock-unpacker.tcl'
	'org.freedesktop.xampp-manager.policy'
	'properties.ini.in'
	'xampp.service'
	'xampp.svg'
	'xampp.sysusers'
	'xampp.tmpfiles'
	'xampp-control-panel'
	'xampp-control-panel.desktop'
	'xampp-manager'
	'xampp-manager.desktop')
source_x86_64=("${url}/${pkgname}-files/${pkgver}/${pkgname}-${_platform}-${pkgver}-${_uppkgrel}-installer.run")
options=(staticlibs libtool !strip)
install='xampp.install'
sha256sums=('3f262ef4b3e752992667ab482cbf364e3b9e6f95b4b6fb12a1ce6fa7a88f124e'
            '4092631d86ec1c3a155bfec76ea2c8433426a13f12a7a5866f843a099f1ca418'
            'db911d689c2b78d02b3829cabf03822bb213d21dfa557f388989e10e837860bc'
            '78854cb427117c69117a8f20685acbe898a02bc3af1409950117986ff1b45f1f'
            'a3fc7f2b570af9d05435f2f9a0b8d7d9b30ee1dbeaea152f8e249ef5ef0461c9'
            '37e24dacf3a52037d0cddb11d979917f81741bf399ec5fa5e847359909b7bc25'
            'abdd8e08dc12b1cc57f430460b4653d2b76c53c43f113635983c98e59769ee63'
            'd6135f2f5f089b6293d4d2e87072ec63071e8f76c40e1e2642ed27812c84318c'
            '6451a2e210a7d4d807618c7042a966343cc346ec860680d777b463c30026057e'
            '6fa0e2ce22b51d5c611ff0b4179fc3bdf575a2cd3c69f2dd9f0d4dd6e3ab8814'
            '584f891f908aa5ea95c9a19d4298c1a582e81fcace3ab0741cbd3f4fac33128a')
sha256sums_x86_64=('dc216c55f99b04a9e1a458c7c881127fdbf30963710a32f6d5228a09c3cde722')


prepare() {

	cd "${srcdir}"

	msg 'Extracting package...'
	chmod +x "${srcdir}/bitrock-unpacker.tcl"
	rm -rf "${srcdir}/${pkgname}-${_platform}-${pkgver}"
        "${srcdir}/bitrock-unpacker.tcl" "${srcdir}/${pkgname}-${_platform}-${pkgver}-0-installer.run" \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}"

}

package() {

	cd "${srcdir}"

	msg 'Recreating package tree...'
	install -dm755 "${pkgdir}/opt/lampp"
	rsync -azq --remove-source-files \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/xampp_core_files/xampp_core_folder"/. \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/xampp_developer_files/xampp_developer_folder"/. \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/native_apache_adapter/apache_xampp_linux"/. \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/native_proftpd_adapter/proftpd_xampp_linux"/. \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/native_mysql_adapter/mysql_xampp_linux"/. \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/manager/binary"/. \
		"${srcdir}/${pkgname}-${_platform}-${pkgver}/common_native_adapter/common"/. \
		"${pkgdir}/opt/lampp"

	rm "${pkgdir}/opt/lampp/ctlscript.bat" "${pkgdir}/opt/lampp/killprocess.bat"

	# Set root location in all files
	msg 'Setting root location globally (it might take a few minutes)...'
	find "${pkgdir}/opt/lampp/" -type f \
		-exec sed -i 's/\@\@BITNAMI_XAMPP_ROOT\@\@/\/opt\/lampp/gI;s/\@\@BITROCK_INSTALLDIR\@\@/\/opt\/lampp/gI' '{}' \;

	# Temp folders
	install -dm777 "${pkgdir}/opt/lampp/phpmyadmin/tmp"
	chmod 777 "${pkgdir}/opt/lampp/temp"

	# phpMyAdmin MySQL settings (currently unused option)
	#msg 'Configuring phpMyAdmin settings for MySQL...'
	#find "${pkgdir}/opt/lampp/phpmyadmin" -type f -exec sed -i 's/localhost/localhost:3306/gI' '{}' \;

	# Links and missing files
	ln -s '/opt/lampp/xampp' "${pkgdir}/opt/lampp/lampp"
	test -d "${pkgdir}/opt/lampp/share/lampp" || \
		ln -sf '/opt/lampp/share/xampp' "${pkgdir}/opt/lampp/share/lampp"

	sed \
		"
			s/@STACK_VERSION@/${pkgver}-${_uppkgrel}/g
			s/@PLATFORM@/${_platform}/g
		" \
		"${srcdir}/properties.ini.in" > "${pkgdir}/opt/lampp/properties.ini"

	echo -n "${pkgver}-${_uppkgrel}" > "${pkgdir}/opt/lampp/lib/VERSION"

	# For using MariaDB from the official packages (currently unused option)
	#find "${pkgdir}/opt/lampp/mysql/scripts" -type f -exec sed -i 's/\/opt\/lampp\/var\/mysql\/$HOSTNAME.pid/\/var\/lib\/mysql\/$HOSTNAME.pid/gI' '{}' \;
	#find "${pkgdir}/opt/lampp/" -type f -exec sed -i 's/\/opt\/lampp\/var\/mysql\/mysql.sock/\/run\/mysqld\/mysqld.sock/gI' '{}' \;

	# For running MySQL from the official packages (currently unused option)
	#find "${pkgdir}/opt/lampp/mysql/scripts" -type f -exec sed -i 's/\/opt\/lampp\/lampp\ startmysql/systemctl\ start\ mysqld/gI' '{}' \;

	msg 'Copying executables and launcher...'

	# Licenses
	install -dm755 "${pkgdir}/usr/share/licenses"
	chmod -R a+rX,u+w "${pkgdir}/opt/lampp/licenses"
	ln -s "/opt/lampp/licenses" "${pkgdir}/usr/share/licenses/xampp"

	# Executables
	install -dm755 "${pkgdir}/usr/bin"
	install -Dm755 "${srcdir}/xampp-manager" "${pkgdir}/usr/bin/xampp-manager"
	install -Dm755 "${srcdir}/xampp-control-panel" "${pkgdir}/usr/bin/xampp-control-panel"
	ln -s '/opt/lampp/xampp' "${pkgdir}/usr/bin/xampp"

	# Systemd files
	install -dm755 "${pkgdir}/etc/systemd/system"
	install -Dm644 "${srcdir}/xampp.service" "${pkgdir}/etc/systemd/system/xampp.service"
	install -Dm644 "${srcdir}/xampp.sysusers" "${pkgdir}/usr/lib/sysusers.d/xampp.conf"
	install -Dm644 "${srcdir}/xampp.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/xampp.conf"

	# Desktop launcher
	install -Dm644 "${srcdir}/xampp.svg" "${pkgdir}/usr/share/pixmaps/xampp.svg"
	install -Dm644 "${srcdir}/xampp-manager.desktop" "${pkgdir}/usr/share/applications/xampp-manager.desktop"
	install -Dm644 "${srcdir}/xampp-control-panel.desktop" "${pkgdir}/usr/share/applications/xampp-control-panel.desktop"

	# Install policy file for desktop launcher
	install -Dm644 "${srcdir}/org.freedesktop.xampp-manager.policy" "${pkgdir}/usr/share/polkit-1/actions/org.freedesktop.xampp-manager.policy"

	# Update backup list for the next time – currently unused method (we use the
	# install script for this) - requires `readarray backup < "./backup.lst"`)
	#(cd "${pkgdir}" && find -L 'opt/lampp/etc' -type f && find -L 'opt/lampp/var' -type f && find -L 'opt/lampp/htdocs' -type f) > "$(readlink 'backup.lst')"

}

