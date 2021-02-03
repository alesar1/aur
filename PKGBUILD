# Maintainer: Codist <countstarlight@gmail.com>

pkgname=deepin-wine-tim
pkgver=3.3.0.22020
debpkgver=9.3.2deepin14
debpkgname="com.qq.im.deepin"
timpkgname="com.qq.office.deepin"
pkgrel=1
pkgdesc="Tencent TIM on Deepin Wine5(${timpkgname}) For Archlinux"
arch=("x86_64")
url="https://tim.qq.com/"
license=('custom')
depends=('p7zip' 'wine' 'wine-mono' 'wine-gecko' 'xorg-xwininfo' 'wqy-microhei' 'lib32-alsa-lib' 'lib32-alsa-plugins' 'lib32-libpulse' 'lib32-openal' 'lib32-mpg123' 'lib32-gnutls')
conflicts=('wine-tim' 'deepin.com.qq.office' 'deepin-tim-for-arch')
install="deepin-wine-tim.install"
_mirror="https://community-store-packages.deepin.com"
source=("$_mirror/appstore/pool/appstore/c/${debpkgname}/${debpkgname}_${debpkgver}_i386.deb"
  "https://dldir1.qq.com/qqfile/qq/PCTIM/TIM3.3.0/TIM${pkgver}.exe"
  "run.sh"
  "share.7z")
md5sums=('e12c4b26c791ca32cdc96e5441341148'
  '07fe0f065594b90673ab28d7388017d4'
  '3dcb24166e65ebbba4ba9a535402b34a'
  '479ae2a04a9c5dcc08c67c7b1395a944')

build() {
  msg "Extracting DPKG package ..."
  mkdir -p "${srcdir}/dpkgdir"
  tar -xvf data.tar.xz -C "${srcdir}/dpkgdir"
  #sed "s/\(Categories.*$\)/\1Network;/" -i "${srcdir}/dpkgdir/usr/share/applications/deepin.com.qq.office.desktop"
  #sed "13s/TIM.exe/tim.exe/" -i "${srcdir}/dpkgdir/usr/share/applications/deepin.com.qq.office.desktop"
  msg "Extracting Deepin Wine QQ archive ..."
  7z x -aoa "${srcdir}/dpkgdir/opt/apps/${debpkgname}/files/files.7z" -o"${srcdir}/deepintimdir"
  msg "Cleaning up the original package directory ..."
  rm -r "${srcdir}/deepintimdir/drive_c/Program Files/Tencent/QQ"
  #msg "Patching reg files ..."
  #patch -p1 -d "${srcdir}/deepintimdir/" < "${srcdir}/reg.patch"
  msg "Creating font file link ..."
  ln -sf "/usr/share/fonts/wenquanyi/wqy-microhei/wqy-microhei.ttc" "${srcdir}/deepintimdir/drive_c/windows/Fonts/wqy-microhei.ttc"
  msg "Copying latest TIM installer to ${srcdir}/deepintimdir/drive_c/Program Files/Tencent/ ..."
  install -m644 "${srcdir}/TIM${pkgver}.exe" "${srcdir}/deepintimdir/drive_c/Program Files/Tencent/"
  msg "Repackaging app archive ..."
  7z a -t7z -r "${srcdir}/files.7z" "${srcdir}/deepintimdir/*"
}

package() {
  msg "Preparing icons ..."
  install -d "${pkgdir}/usr/share"
  7z x -aoa "${srcdir}/share.7z" -o"${srcdir}/"
  cp -a ${srcdir}/share/* "${pkgdir}/usr/share/"
  msg "Copying deepin files ..."
  install -d "${pkgdir}/opt/apps/${timpkgname}/files"
  install -m644 "${srcdir}/files.7z" "${pkgdir}/opt/apps/${timpkgname}/files/"
  cp ${srcdir}/dpkgdir/opt/apps/${debpkgname}/files/helper_archive* "${pkgdir}/opt/apps/${timpkgname}/files/"
  install -m755 "${srcdir}/dpkgdir/opt/apps/${debpkgname}/files/gtkGetFileNameDlg" "${pkgdir}/opt/apps/${timpkgname}/files/"
  md5sum "${srcdir}/files.7z" | awk '{ print $1 }' > "${pkgdir}/opt/apps/${timpkgname}/files/files.md5sum"
  install -m755 "${srcdir}/run.sh" "${pkgdir}/opt/apps/${timpkgname}/files/"
}
