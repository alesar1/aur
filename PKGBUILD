# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

_name=vnote
_pkgname=VNote
pkgname=${_name}-bin
pkgver=2.5
pkgrel=1
pkgdesc='A Vim-inspired note-taking application that knows programmers and Markdown better'
arch=('x86_64')
url='https://tamlok.github.io/vnote'
license=('MIT')
# depends=('qt5-webengine')
conflicts=("${_name}")
replaces=("${_name}")
options=(!strip)
_url=https://github.com/tamlok/vnote/
_binfile=${_pkgname}-${pkgver}-${CARCH}.AppImage
_buildfile=${_name}-${pkgver}.AppImage
source=("${_buildfile}::${_url}/releases/download/v${pkgver}/${_binfile}")
sha256sums=('9d825543ce4a0673abe0d7fa89b105a4c0b71495901f62310a2f6a2c3eee4e97')

prepare() {
  # Extract AppImage
  chmod +x ${_buildfile}
  ./${_buildfile} --appimage-extract
  find "${srcdir}/squashfs-root/" -type d -exec chmod 755 '{}' +;

  _desktopfile="${srcdir}/squashfs-root/usr/share/applications/${_name}.desktop"
  sed -i "s#^Exec=VNote#Exec=/opt/vnote/usr/bin/VNote#" "${_desktopfile}"
}

package() {
  # share
  install -d "${pkgdir}/usr"
  mv "${srcdir}/squashfs-root/usr/share" "${pkgdir}/usr"

  # Install
  install -d "${pkgdir}/opt/${_name}"
  mv "${srcdir}/squashfs-root/usr" "${pkgdir}/opt/${_name}"

  # License
  install -d "${pkgdir}/usr/share/licenses/${_name}"
  cp "${srcdir}"/squashfs-root/LICENSE \
    "${pkgdir}/usr/share/licenses/${_name}"

  # Binary 
  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${_name}/usr/bin/${_pkgname}" \
    "${pkgdir}/usr/bin/${_name}"
  ln -s "/opt/${_name}/usr/bin/${_pkgname}" \
    "${pkgdir}/usr/bin/${_pkgname}"

  # Clean up
  rm -rf "${pkgdir}/opt/${_name}/usr/bin/${_name}"
  rm -rf "${pkgdir}/usr/share/doc"
}

# vim:set ts=2 sw=2 et:
