# Maintainer: Ludvig Hozman <ludvig.hozman@gmail.com>

pkgname=plex-desktop
pkgver=1.55.0
pkgrel=1
_snapid=qc6MFRM433ZhI1XjVzErdHivhSOhlpf0
_snaprev=20
pkgdesc="Plex desktop client for linux"
arch=('x86_64')
url='http://plex.tv'
license=('unknown')
makedepends=('squashfs-tools')
depends=('qt5-base' 'qt5-svg' 'qt5-webengine' 'qt5-quickcontrols' 'qt5-x11extras' 'mpv' 'ffmpeg4.4')
optdepends=('qt5-wayland: Wayland support' 'libva: GPU accelerated decoding')
source=("https://api.snapcraft.io/api/v1/snaps/download/${_snapid}_${_snaprev}.snap" "qt.conf")
sha256sums=('2849597f41671142af3473db1e53fa6e7eb149384fa864c8f89cf0e891347722'
            '40d1b22236d9d2312d16563493b8c6d69134c5aa54ff6d1531243133fb46f083')

prepare() {
  unsquashfs -q -f -d "${srcdir}/${pkgname}" "${_snapid}_${_snaprev}.snap"
}

package() {
  install -d "${pkgdir}/opt/${pkgname}"
  cp -r "${srcdir}/${pkgname}/." "${pkgdir}/opt/${pkgname}"

  sed -i 's|${SNAP}/meta/gui/icon.png|plex-desktop|g' "${pkgdir}/opt/${pkgname}/meta/gui/plex-desktop.desktop"

  sed -e "/export LD_LIBRARY_PATH=/ c\export LD_LIBRARY_PATH=\"/usr/lib/${pkgname}:\$LD_LIBRARY_PATH\"" -i "${pkgdir}/opt/${pkgname}/Plex.sh"
  sed -e '/export LC_ALL/ s/^#*/#/' -i "${pkgdir}/opt/${pkgname}/Plex.sh"
  sed -e '/export QML/ s/^#*/#/' -i "${pkgdir}/opt/${pkgname}/Plex.sh"
  sed -e '/export QT_/ s/^#*/#/' -i "${pkgdir}/opt/${pkgname}/Plex.sh"
  sed -e '/export QTDIR/ s/^#*/#/' -i "${pkgdir}/opt/${pkgname}/Plex.sh"
  sed -e '/export QT_QPA_PLATFORM/ i export FONTCONFIG_PATH="$BASE_DIR/etc/fonts"' -i "${pkgdir}/opt/${pkgname}/Plex.sh"
  sed -e "/LIBVA_DRIVERS_PATH/c\export LIBVA_DRIVERS_PATH=/usr/lib/dri" -i "${pkgdir}/opt/${pkgname}/Plex.sh"

  install -Dm644 "${pkgdir}/opt/${pkgname}/meta/gui/plex-desktop.desktop" -t "${pkgdir}/usr/share/applications"
  install -Dm644 "${pkgdir}/opt/${pkgname}/meta/gui/icon.png" "${pkgdir}/usr/share/pixmaps/plex-desktop.png"
  install -d "${pkgdir}/usr/lib/${pkgname}"
  #install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libcec.so.4" -t "${pkgdir}/usr/lib/${pkgname}"
  install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libPlexMediaServer.so" -t "${pkgdir}/usr/lib/${pkgname}"
  install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libicudata.so.66" -t "${pkgdir}/usr/lib/${pkgname}"
  install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libicui18n.so.66" -t "${pkgdir}/usr/lib/${pkgname}"
  install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libicuuc.so.66" -t "${pkgdir}/usr/lib/${pkgname}"
  install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libavutil.so.56" -t "${pkgdir}/usr/lib/${pkgname}"
  install -Dm644 "${pkgdir}/opt/${pkgname}/lib/libavformat.so.58" -t "${pkgdir}/usr/lib/${pkgname}"
  ln -s "/usr/lib/libmpv.so" "${pkgdir}/usr/lib/${pkgname}/libmpv.so.2"

  install -Dm644 "${srcdir}/${pkgname}/usr/lib/x86_64-linux-gnu/libvpx.so.6.2.0" "${pkgdir}/usr/lib/${pkgname}/libvpx.so.6"
  install -Dm644 "${srcdir}/${pkgname}/usr/lib/x86_64-linux-gnu/libwebp.so.6.0.2" "${pkgdir}/usr/lib/${pkgname}/libwebp.so.6"
  install -Dm644 "${srcdir}/${pkgname}/usr/lib/x86_64-linux-gnu/libre2.so.5.0.0" "${pkgdir}/usr/lib/${pkgname}/libre2.so.5"

  rm -rf "$pkgdir/opt/$pkgname"/{lib,gnome-platform,meta,data-dir,snap,usr}

  install -Dm644 "${srcdir}/qt.conf" -t "${pkgdir}/opt/${pkgname}/bin"

  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname}/Plex.sh" "${pkgdir}/usr/bin/plex-desktop"
}
