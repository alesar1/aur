#
# Maintainer: Alessandro Gario
#
# keep in mind that his is not an official package! ubuntu is the only
# officially supported linux distribution!
#

pkgname=cerbero-profiler
pkgver=2.6.2
pkgrel=2
pkgdesc="Cerbero Profiler is a tool designed primarily for malware and forensic analysis. It supports a huge number of file formats on which it performs analysis and lets the user inspect their internal layout."
arch=('x86_64')
url="http://cerbero.io/profiler"
license=('custom')
depends=('curl' 'tar' 'findutils' 'coreutils' 'binutils' 'openssl')
provides=('cerbero-profiler')

#
# release tarball and external dependencies
# this is where the sha1 hashes were obtained:
#
# 1. http://packages.ubuntu.com/uk/trusty-updates/amd64/libpng12-0/download
# 2. http://packages.ubuntu.com/trusty/amd64/libpython3.4/download
# 3. https://store.cerbero.io/profiler/download
#

source=("https://store.cerbero.io/static/downloads/profiler/profiler_${pkgver}.tar.gz" 'http://security.ubuntu.com/ubuntu/pool/main/p/python3.4/libpython3.4_3.4.0-2ubuntu1.1_amd64.deb' 'http://mirrors.kernel.org/ubuntu/pool/main/libp/libpng/libpng12-0_1.2.50-1ubuntu2.14.04.2_amd64.deb')
noextract=('libpython3.4_3.4.3-1ubuntu1~14.04.3_amd64.deb' 'libpng12-0_1.2.50-1ubuntu2.14.04.2_amd64.deb')
sha1sums=('c4517aac16d56aeca6a64e9bff06bf5496875ef3' 'f3feb9e69cc02a0f4c7502e45db0f1f9c4e7c863' '0fd57a753a5e46659492187f804d6981158d8a00')

prepare() {
	# we have to manually extract our two external dependencies since
	# they both contain files with the same names

	echo "Extracting: libpython3.4_3.4.0-2ubuntu1.1_amd64.deb"
	ar vx libpython3.4_3.4.0-2ubuntu1.1_amd64.deb >> /dev/null 2>&1
	tar xf data.tar.xz >> /dev/null 2>&1

	echo "Extracting: libpng12-0_1.2.50-1ubuntu2.14.04.2_amd64.deb"
	ar vx libpng12-0_1.2.50-1ubuntu2.14.04.2_amd64.deb >> /dev/null 2>&1
	tar xf data.tar.xz >> /dev/null 2>&1
}

build() {
	# copy the external dependencies we have downloaded from the ubuntu repository
	cp "${srcdir}/usr/lib/x86_64-linux-gnu/libpython3.4m.so.1.0" "profiler_${pkgver}"
	cp "${srcdir}/lib/x86_64-linux-gnu/libpng12.so.0.50.0" "profiler_${pkgver}/libpng12.so.0"

	# hardcode the 'dirname' variable in the launcher to our installation directory
	sed -i 's+dirname=`dirname $0`+dirname=/opt/Cerbero/Profiler+g' "profiler_${pkgver}/cerpro.sh"

	# generate a .desktop file for the menu
	printf '[Desktop Entry]\nComment=Malware and forensic analysis tool.\nExec=/opt/Cerbero/Profiler/cerpro.sh %%U\nIcon=/opt/Cerbero/Profiler/icons/app_256x256.png\nName=Cerbero Profiler\nTerminal=false\nType=Application\nCategories=Development;\n' > "${srcdir}/Cerbero Profiler.desktop"
}

package() {
	local menu_folder="${pkgdir}/usr/share/applications"

	# install the menu item
	mkdir -p "$menu_folder"
	mv "${srcdir}/Cerbero Profiler.desktop" "$menu_folder"

	local application_folder="${pkgdir}/opt/Cerbero"

	# application files
	mkdir -p "$application_folder"
	mv "profiler_${pkgver}" "${application_folder}/Profiler"

	# symlink the main executable to /usr/local/bin so that we can start the program by running the 'cerpro' command
	local local_bin_folder="${pkgdir}/usr/local/bin"
	mkdir -p "$local_bin_folder"
	ln -s "/opt/Cerbero/Profiler/cerpro.sh" "${local_bin_folder}/cerpro"

	# fix the permissions
	chown -R root:root "$application_folder"

	find "$application_folder" -type d -exec chmod 755 {} \;
	find "$application_folder" -type f -exec chmod 644 {} \;
	find "$application_folder" -type f -iname '*.so*' -exec chmod 755 {} \;
	find "$application_folder" -type f -iname '*.sh' -exec chmod 755 {} \;

	chmod 755 "${application_folder}/Profiler/cerpro" "${application_folder}/Profiler/file" "${application_folder}/Profiler/jsdbg" "${application_folder}/Profiler/yara" "${application_folder}/Profiler/hdrmgr"

	# install the license file
	install -D -m644 "${pkgdir}/opt/Cerbero/Profiler/credits.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
