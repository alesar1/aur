# Maintainer: Adam Scott <ascott.ca@gmail.com>
pkgname='pico8-bin'
_pkgname='pico8'
pkgver='0.1.8'
pkgrel=2
pkgdesc="PICO-8 is a fantasy console for making, sharing and playing tiny games and other computer programs."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://www.lexaloffle.com/pico-8.php"
license=('custom:commercial')
depends=('glibc')
makedepends=('unzip')
# Zip uses other terms for the architecture
[ "${CARCH}" = "i686" ] && _platform="i386"
[ "${CARCH}" = "x86_64" ] && _platform="amd64"
[ "${CARCH}" = "armv6h" ] && _platform="arm"
[ "${CARCH}" = "armv7h" ] && _platform="arm"
_file_i386="pico-8_${pkgver}_i386.zip"
_file_amd64="pico-8_${pkgver}_amd64.zip"
_file_arm="pico-8_${pkgver}_arm.zip"
_sha256sum_i386="ea5dedfb078e29f2f2e635708cace383a75a60fb864414b8ee1eb1e2bdcfc041"
_sha256sum_amd64="6e851e40883e03bb94369b9d25bec3e3baa21bc7d18e0063937b5bb19903ce8a"
_sha256sum_arm="e90bd42f2fe7767506415111465f6df645d2903aab8c1dc571139dfbb6fa9f76"
source_i686=("local://${_file_i386}")
source_x86_64=("local://${_file_amd64}")
source_armv6h=("local://${_file_arm}")
source_armv7h=("local://${_file_arm}")
sha256sums_i686=("${_sha256sum_i386}")
sha256sums_x86_64=("${_sha256sum_amd64}")
sha256sums_armv6h=("${_sha256sum_arm}")
sha256sums_armv7h=("${_sha256sum_arm}")

prepare () {
  # Change directory to extracted folder
  cd "pico-8"
  # Changes licence and icon filenames in order to comply naming conventions
  mv "license.txt" "LICENSE"
  mv "lexaloffle-pico8.png" "pico8.png"
}

package () {
  # Change directory to extracted folder
  cd "${srcdir}/pico-8"
  # Creates variables storing paths
  local _wantedlicensedir="/usr/share/licenses/${pkgname}"
  local _licensedir="${pkgdir}/${_wantedlicensedir}"
  local _wanteddestdir="/usr/share/${_pkgname}"
  local _destdir="${pkgdir}/${_wanteddestdir}"
  local _wantedbindir="/usr/bin"
  local _bindir="${pkgdir}/${_wantedbindir}"
  local _wantedmimedir="/usr/share/mime/packages"
  local _mimedir="${pkgdir}/${_wantedmimedir}"
  local _wantedappsdir="/usr/share/applications"
  local _appsdir="${pkgdir}/${_wantedappsdir}"
  local _wantedpixmapsdir="/usr/share/icons/hicolor/128x128/apps"
  local _pixmapsdir="${pkgdir}/${_wantedpixmapsdir}"
  # Creates local variables storing filenames
  local _pico8_license="LICENSE"
  local _pico8_bin="pico8"
  local _pico8_dyn="pico8_dyn"
  local _pico8_dat="pico8.dat"
  local _pico8_txt="pico-8.txt"
  local _pico8_mime="pico8.xml"
  local _pico8_desktop="pico8.desktop"
  local _pico8_icon="pico8.png"
  # Makes fakeroot folders
  mkdir -p "${_destdir}"
  mkdir -p "${_bindir}"
  mkdir -p "${_appsdir}"
  mkdir -p "${_pixmapsdir}"
  # Creates a MIME configuration file
  cat <<< "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<mime-info xmlns=\"http://www.freedesktop.org/standards/shared-mime-info\">
  <mime-type type=\"application/pico8\">
    <comment>pico-8 file</comment>
    <magic priority=\"50\">
      <match type=\"string\" value=\"pico-8 cartridge\" offset=\"0\"/>
    </magic>
    <glob-deleteall/>
    <glob pattern=\"*.p8\"/>
  </mime-type>
</mime-info>" > "${_pico8_mime}"
  # Creates a desktop entry file
  cat <<< "[Desktop Entry]
Type=Application
Version=1.0
Name=PICO-8
Comment=${pkgdesc}
Exec=/usr/bin/${_pico8_bin}
MimeType=application/pico8
Icon=${_pico8_bin}
Terminal=false
Categories=Development;Game" > "${_pico8_desktop}"
  # Installs the extracted files
  install -Dm644 "${_pico8_license}" "${_licensedir}/${_pico8_license}"
  install -Dm755 "${_pico8_bin}" "${_destdir}/${_pico8_bin}"
  install -Dm644 "${_pico8_dyn}" "${_destdir}/${_pico8_dyn}"
  install -Dm644 "${_pico8_dat}" "${_destdir}/${_pico8_dat}"
  install -Dm644 "${_pico8_txt}" "${_destdir}/${_pico8_txt}"
  install -Dm644 "${_pico8_mime}" "${_mimedir}/${_pico8_mime}"
  install -Dm644 "${_pico8_desktop}" "${_appsdir}/${_pico8_desktop}"
  install -Dm644 "${_pico8_icon}" "${_pixmapsdir}/${_pico8_icon}"
  # Links the installed binary to /usr/bin
  ln -s "/usr/share/${_pkgname}/pico8" "${_bindir}/pico8"
}

