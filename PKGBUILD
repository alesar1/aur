# Maintainer: Gordian Edenhofer <gordian.edenhofer@gmail.com>

# Watch new releases at https://forum.unity3d.com/threads/unity-on-linux-release-notes-and-known-issues.350256/

# Prevent compression of the final package since it would take too long (sereausly!)
PKGEXT='.pkg.tar'

pkgname=unity-editor-bin
_version=5.5.1
_build=f1
_buildtag=20170201
pkgver="${_version}${_build}+${_buildtag}"
pkgrel=1
pkgdesc="The world's most popular development platform for creating 2D and 3D multiplatform games and interactive experiences."
arch=('x86_64')
license=('custom')
url="https://unity3d.com/"
depends=('desktop-file-utils' 'xdg-utils' 'gcc-multilib' 'libgl' 'glu' 'nss' 'libpng12' 'libxtst' 'libpqxx' 'monodevelop' 'npm')
optdepends=('ffmpeg: for WebGL exporting'
	'nodejs: for WebGL exporting'
	'java-runtime: for WebGL exporting'
	'gzip: for WebGL exporting'
	'java-environment: for Android and Tizen exporting'
	'android-sdk: for Android Remote'
	'android-udev: for Android Remote')
provides=("unity-editor=${pkgver}")
conflicts=('unity-editor')
options=(!strip)
source=("http://beta.unity3d.com/download/f5287bef00ff/unity-editor_amd64-${_version}x${_build}Linux.deb")
sha512sums=('40d35cbf12289027e3c070ff46293a56960d57ac3ac34a16be06309f0607067e8a52b87ba6867fea9dd1a60d23190c04d44c1abc4ac8a8d29ecebf8f8bd4dd14')

prepare() {
	if [[ "$(df . -BG --output=avail | awk -F'[^0-9]*' 'FNR==2 {print $2;}')" -le "10" ]]; then
		warning "It seems that you have less than 10GB left on the partition you are building on."
		warning "You might want to change the build-/cache-directory as this package is rather big."
		warning "Bear in mind that most AUR helpers build in /tmp, a potential small partition."
	fi
}

package() {
	bsdtar xf data.tar.gz

	# Moving stuff in place
	mv usr "${pkgdir}"
	mv opt "${pkgdir}"

	# Setting permissions on chrome-sandbox - necessary to run the program
	chown root:root "${pkgdir}/opt/Unity/Editor/chrome-sandbox"
	chmod 4755 "${pkgdir}/opt/Unity/Editor/chrome-sandbox"

	# Linking executables (symlinking does not work!)
	mkdir -p "${pkgdir}/usr/bin"
	#ln -s /opt/Unity/Editor/Unity "${pkgdir}"/usr/bin/unity-editor
	#ln -s /opt/Unity/MonoDevelop/bin/monodevelop "${pkgdir}"/usr/bin/unity-monodevelop
	echo -e "#!/bin/sh\nexec /opt/Unity/Editor/Unity \"$@\"" > "${pkgdir}"/usr/bin/unity-editor
	echo -e "#!/bin/sh\n\n# This prevents the editor from crashing when opening projects on some systems\nunset GTK_IM_MODULE\n\nexec /opt/Unity/MonoDevelop/bin/monodevelop \"$@\"" > "${pkgdir}/usr/bin/unity-monodevelop"
	chmod 755 "${pkgdir}/usr/bin/unity-editor" "${pkgdir}/usr/bin/unity-monodevelop"

	# Refering to the online license
	mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
	echo "Please refer to https://unity3d.com/legal/eula for detailed license information." > "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
