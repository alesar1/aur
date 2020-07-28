# Maintainer: acxz <akashpatel2008@yahoo.com>
# Contributor: K. Morton <pryre.dev@outlook.com>
# Contributor: Anselmo L. S. Melo <anselmo.melo@intel.com>
pkgname=qgroundcontrol
pkgver=4.0.10
pkgrel=1
pkgdesc="Micro air vehicle ground control station."
arch=('x86_64')
url="https://github.com/mavlink/qgroundcontrol"
license=('GPL3')

# Git commit hash for version-specific submodules
pkgver_gps='2a4865adc3808687d6c6f550f497a02eb920c382' # src/GPS/Drivers
pkgver_mavlink='cf28669660332f9348994ae0e323582d8d19d704' # libs/mavlink/include/mavlink/v2.0
pkgver_aossl='3aaff1bd9e35047abdb363239bb3e3c114d07ea1' # libs/OpenSSL/android_openssl
pkgver_gst='9d782fad9dc0384ba86ecae64511c193f6149f93' # libs/gst-plugins-good

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
        "gps-drivers-qgc${pkgver}.tar.gz::https://github.com/PX4/GpsDrivers/archive/${pkgver_gps}.tar.gz"
        "mavlink-v2.0-qgc${pkgver}.tar.gz::https://github.com/mavlink/c_library_v2/archive/${pkgver_mavlink}.tar.gz"
        "aossl-qgc${pkgver}.tar.gz::https://github.com/Auterion/android_openssl/archive/${pkgver_aossl}.tar.gz"
        "gst-plugins-good-qgc${pkgver}.tar.gz::https://github.com/mavlink/gst-plugins-good/archive/${pkgver_gst}.tar.gz"
        'libcudata-qgc.patch'
)

sha256sums=('4eebd9daf89c56f440ecabb3a08da91762180612d29a410506f80ad1e8798bff'
            '6cea541ddeb8c54fb20d4340784bcab6da9aad5d65b12928a57549b440e9d886'
            '46aefd64c24a48158e953467c432ac25c067ec93bff8704cd8af925a90aab5c8'
            '93598e63fbbd86fec5e15f2596bba8b1f1654c854a99222099516933fd22a118'
            'd5aad13c8eff7f3cce75c8cf3bbf6ac592ac82455e666dccd17cf006deec3e55'
            'd65862686e39f30245b8684b33db8f32074f683c934f5c964c3ffe8a288b7d61'
)

prepare() {
  gpsdir="GpsDrivers-${pkgver_gps}"
  mavlinkdir="c_library_v2-${pkgver_mavlink}"
  aossldir="android_openssl-${pkgver_aossl}"
  gstdir="gst-plugins-good-${pkgver_gst}"

  mkdir -p "${srcdir}/${pkgname}-${pkgver}/build"

  # Copy in the GPS source
  rm -r "${srcdir}/${pkgname}-${pkgver}/src/GPS/Drivers"
  mkdir -p "${srcdir}/${pkgname}-${pkgver}/src/GPS"
  cp -R "${srcdir}/${gpsdir}" "${srcdir}/${pkgname}-${pkgver}/src/GPS/Drivers"

  # Copy in the mavlink source
  rm -r "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/v2.0"
  mkdir -p "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink"
  cp -R "${srcdir}/${mavlinkdir}" "${srcdir}/${pkgname}-${pkgver}/libs/mavlink/include/mavlink/v2.0"

  # Copy in the android openssl source
  rm -r "${srcdir}/${pkgname}-${pkgver}/libs/OpenSSL/android_openssl"
  mkdir -p "${srcdir}/${pkgname}-${pkgver}/libs/OpenSSL"
  cp -R "${srcdir}/${aossldir}" "${srcdir}/${pkgname}-${pkgver}/libs/OpenSSL/android_openssl"

  # Copy in the GST source
  rm -r "${srcdir}/${pkgname}-${pkgver}/libs/gst-plugins-good"
  mkdir -p "${srcdir}/${pkgname}-${pkgver}/libs"
  cp -R "${srcdir}/${gstdir}" "${srcdir}/${pkgname}-${pkgver}/libs/gst-plugins-good"

  cd "${srcdir}/${pkgname}-${pkgver}"
  patch --strip=1 < "${srcdir}/libcudata-qgc.patch"
}

build() {
  cd "$srcdir/${pkgname}-${pkgver}/build"
  qmake ..
  make
}

package() {

  mkdir -p "${pkgdir}/opt" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/applications"
  cp -r "${srcdir}/${pkgname}-${pkgver}/build/release" "${pkgdir}/opt/${pkgname}"
  cp "${srcdir}/${pkgname}-${pkgver}/resources/icons/qgroundcontrol.png" "${pkgdir}/opt/${pkgname}"
  cp "${srcdir}/${pkgname}-${pkgver}/deploy/qgroundcontrol-start.sh" "${pkgdir}/opt/${pkgname}"

  # Use our own desktop file and remove the default one

  echo "[Desktop Entry]
Type=Application
Name=QGroundControl Release
Comment=Ground control for unmanned vehicles
Path=/opt/${pkgname}/
Exec=/usr/bin/${pkgname}
Icon=/opt/${pkgname}/qgroundcontrol.png
Terminal=false
Categories=Qt;Utility;" > "$srcdir/${pkgname}.desktop"

  rm "${pkgdir}/opt/${pkgname}/${pkgname}.desktop"
  cp "${srcdir}/${pkgname}.desktop" "${pkgdir}/opt/${pkgname}"

  ln -s "/opt/${pkgname}/QGroundControl" "${pkgdir}/usr/bin/${pkgname}"
  ln -s "/opt/${pkgname}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

# vim:set ts=2 sw=2 et:
