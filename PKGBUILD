# Maintainer: acxz <akashpatel2008@yahoo.com>
# Contributor: K. Morton <pryre.dev@outlook.com>
# Contributor: Anselmo L. S. Melo <anselmo.melo@intel.com>
pkgname=qgroundcontrol
pkgver=4.0.7
pkgrel=1
pkgdesc="Micro air vehicle ground control station."
arch=('x86_64')
url="https://github.com/mavlink/qgroundcontrol"
license=('GPL3')

# Git commit hash for version-specific submodules
pkgver_mavlink='cf28669660332f9348994ae0e323582d8d19d704' # libs/mavlink/include/mavlink/
pkgver_aossl='3aaff1bd9e35047abdb363239bb3e3c114d07ea1' # libs/OpenSSL/android_openssl
pkgver_gst='9d782fad9dc0384ba86ecae64511c193f6149f93' # libs/gst-plugins-good
pkgver_gps='2a4865adc3808687d6c6f550f497a02eb920c382' # src/GPS/Drivers

depends=('bzip2'
		 'dbus'
		 'flac'
		 'gst-plugins-base-libs'
		 'libasyncns'
		 'libffi'
		 'libgcrypt'
		 'libgpg-error'
		 'libogg'
		 'libsndfile'
		 'libsystemd'
		 'libunwind'
		 'libx11'
		 'libxau'
		 'libxcb'
		 'libxdmcp'
		 'libxext'
		 'lz4'
		 'orc'
		 'pcre'
		 'sdl2'
		 'xz'
		 'zlib'
		 'icu'
		 'qt5-speech'
		 'qt5-multimedia'
		 'qt5-serialport'
		 'qt5-charts'
		 'qt5-quickcontrols'
		 'qt5-quickcontrols2'
		 'qt5-location'
		 'qt5-svg'
		 'qt5-graphicaleffects'
		 'qt5-tools'
		 'qt5-wayland'
		 'qt5-x11extras'
)

makedepends=('git' 'qt5-base')

source=("qgroundcontrol-${pkgver}.tar.gz::https://github.com/mavlink/qgroundcontrol/archive/v${pkgver}.tar.gz"
		"mavlink-v2.0-qgc${pkgver}.zip::https://github.com/mavlink/c_library_v2/archive/${pkgver_mavlink}.zip"
		"gst-plugins-good-qgc${pkgver}.zip::https://github.com/mavlink/gst-plugins-good/archive/${pkgver_gst}.zip"
		"aossl-qgc${pkgver}.zip::https://github.com/Auterion/android_openssl/archive/${pkgver_aossl}.zip"
		"gps-drivers-qgc${pkgver}.zip::https://github.com/PX4/GpsDrivers/archive/${pkgver_gps}.zip"
		'libcudata-qgc.patch'
		'mavlink-warn-qgc.patch'
)

sha256sums=('adac22dde483408ae1b3a3a70547fd1f610b3ee6e8907239f18f12c5d38c2093'
            'f3aa1ae178cfa22c4d0bf8c46edc28902ed626a970f0164bd2eba031c9d76432'
            '51b2d5af91e16d6009e73690c62a289dff9004c170e626dc8c322dd49a745c8b'
            'ad96ca7c11864d26047637dc02a0278bbf33997a6f6be37ef1b7ca44669f1149'
            '1ab58c633edcfff9288bd868bf33e2c9990afa27fa5df8f1731675d98a4ce6e4'
            'd65862686e39f30245b8684b33db8f32074f683c934f5c964c3ffe8a288b7d61'
            '49fd4ef4fb1b6c1c337d5d9d16c35225230ad2f4e3ddd89f1fd08d3ec6e2df84')

prepare() {
	mavlinkdir="c_library_v2-${pkgver_mavlink}"
	aossldir="android_openssl-${pkgver_aossl}"
	gstdir="gst-plugins-good-${pkgver_gst}"
	gpsdir="GpsDrivers-${pkgver_gps}"

	mkdir -p "${srcdir}/${pkgname}-${pkgver}/build"

	# Copy in the mavlink source
	rm -r "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/v2.0"
	mkdir -p "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/v2.0"
	cp -R "${srcdir}/${mavlinkdir}/"* "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/v2.0"
	# mv "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/${mavlinkdir}" "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/v2.0"
	# Copy in the GST source
	rm -r "${srcdir}/${pkgname}-${pkgver}/libs/gst-plugins-good/"
	mkdir -p "${srcdir}/${pkgname}-${pkgver}/libs/gst-plugins-good/"
	cp -R "${srcdir}/${gstdir}/"* "${srcdir}/${pkgname}-${pkgver}/libs/gst-plugins-good/"
	# Copy in the GST source
	rm -r "${srcdir}/${pkgname}-${pkgver}/libs/OpenSSL/android_openssl/"
	mkdir -p "${srcdir}/${pkgname}-${pkgver}/libs/OpenSSL/android_openssl/"
	cp -R "${srcdir}/${aossldir}/"* "${srcdir}/${pkgname}-${pkgver}/libs/OpenSSL/android_openssl/"
	# Copy in the GPS source
	rm -r "${srcdir}/${pkgname}-${pkgver}/src/GPS/Drivers"
	mkdir -p "${srcdir}/${pkgname}-${pkgver}/src/GPS/Drivers"
	cp -R "${srcdir}/${gpsdir}/"* "${srcdir}/${pkgname}-${pkgver}/src/GPS/Drivers"
	# mv "${srcdir}/${pkgname}-${pkgver}/src/GPS/${gpsdir}" "${srcdir}/${pkgname}-${pkgver}/src/GPS/Drivers"

	cd "${srcdir}/${pkgname}-${pkgver}/"
	patch --strip=1 < "${srcdir}/libcudata-qgc.patch"
	patch --strip=1 < "${srcdir}/mavlink-warn-qgc.patch"
}

build() {
	cd "$srcdir/${pkgname}-${pkgver}/build"
	qmake ../qgroundcontrol.pro \
		QMAKE_CXXFLAGS="-Wno-deprecated-declarations"
	make

	echo "[Desktop Entry]
Type=Application
Name=QGroundControl Release
Comment=Ground control for unmanned vehicles
Path=/opt/${pkgname}/
Exec=/usr/bin/${pkgname}
Icon=/opt/${pkgname}/qgroundcontrol.png
Terminal=false
Categories=Qt;Utility;" > "$srcdir/${pkgname}.desktop"
}

package() {
	mkdir -p "${pkgdir}/opt" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/applications"
	cp -R "${srcdir}/${pkgname}-${pkgver}/build/release" "${pkgdir}/opt/${pkgname}"
	cp "${srcdir}/${pkgname}-${pkgver}/resources/icons/qgroundcontrol.png" "${pkgdir}/opt/${pkgname}"
	cp "${srcdir}/${pkgname}-${pkgver}/deploy/qgroundcontrol-start.sh" "${pkgdir}/opt/${pkgname}"

	# Remove the default one as we want to use our own desktop file
	rm "${pkgdir}/opt/${pkgname}/${pkgname}.desktop"
	cp "${srcdir}/${pkgname}.desktop" "${pkgdir}/opt/${pkgname}"

	ln -s "/opt/${pkgname}/qgroundcontrol-start.sh" "${pkgdir}/usr/bin/${pkgname}"
	ln -s "/opt/${pkgname}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

# vim:set ts=2 sw=2 et:
