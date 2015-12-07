# Maintainer: Javier Tia <javier.tia[at]gmail[dot]com>
# Old Maintainer: Viliam Pucik <viliam.pucik[at]gmail[dot]com>
# Old Author: jevv
pkgname=hpmyroom
pkgver=10.4.0.0174
pkgrel=1
pkgdesc="HP MyRoom a collaborative conferencing meetings software"
url="https://www.myroom.hpe.com"
arch=('i686' 'x86_64')
license=('unknown')
install="${pkgname}.install"

depends_i686=('attr' 'bzip2' 'expat' 'flac' 'fontconfig' 'freetype2' 'glib2' 'harfbuzz' 'json-c' 'libasyncns' 'libcap' 'libdbus' 'libffi' 'libgcrypt' 'libgpg-error' 'libice' 'libogg' 'libpng' 'libpng12' 'libpulse' 'libsm' 'libsndfile' 'libvorbis' 'libx11' 'libxau' 'libxcb' 'libxdmcp' 'libxext' 'libxfixes' 'libxi' 'libxss' 'libxtst' 'pcre' 'systemd' 'util-linux' 'xz' 'zlib')
depends_x86_64=('lib32-attr' 'lib32-bzip2' 'lib32-expat' 'lib32-flac' 'lib32-fontconfig' 'lib32-freetype2' 'lib32-gcc-libs' 'lib32-glib2' 'lib32-glibc' 'lib32-harfbuzz' 'lib32-json-c' 'lib32-libasyncns' 'lib32-libcap' 'lib32-libdbus' 'lib32-libffi' 'lib32-libgcrypt' 'lib32-libgpg-error' 'lib32-libice' 'lib32-libogg' 'lib32-libpng' 'lib32-libpng12' 'lib32-libpulse' 'lib32-libsm' 'lib32-libsndfile' 'lib32-libvorbis' 'lib32-libx11' 'lib32-libxau' 'lib32-libxcb' 'lib32-libxdmcp' 'lib32-libxext' 'lib32-libxfixes' 'lib32-libxi' 'lib32-libxss' 'lib32-libxtst' 'lib32-pcre' 'lib32-systemd' 'lib32-util-linux' 'lib32-xz' 'lib32-zlib')

source_i686=("${url}/downloadfiles/${pkgname}_v${pkgver}_i386.deb")
source_x86_64=("${url}/downloadfiles/${pkgname}_v${pkgver}_amd64.deb")
sha256sums_i686=('bd7743a12e478e9a70d9fbe375b378a6b7c45453173c9b3e96d192728cfb88aa')
sha256sums_x86_64=('b22f43c78550b90b2183b56d7d67e9df1b1cf60dc5d0f0cfb76136cdd6cdaa12')

[[ "$CARCH" = "i686" ]] && _debarch='i386'
[[ "$CARCH" = "x86_64" ]] && _debarch='amd64'

package() {
  ar x ${pkgname}_v${pkgver}_${_debarch}.deb
  tar xf data.tar.xz --no-same-permissions --no-overwrite-dir -C ${pkgdir}
  chmod a-x ${pkgdir}/usr/share/applications/HP-myroom.desktop
  find ${pkgdir}/usr/share/hpmyroom/Resources/* -type f -exec chmod a-x {} \;
}

# vim:set ft=sh ts=2 sw=2 et:
