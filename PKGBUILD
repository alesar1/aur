# Maintainer: MKzero <info at linux-web-development dot de>
# Contributor: Bitwig GmbH <support at bitwig dot com>
pkgname=bitwig-studio-demo
_pkgname=bitwig-studio
pkgver=1.1.11
pkgrel=2
pkgdesc="Music production system for production, remixing and performance"
arch=( 'x86_64' )
url="http://www.bitwig.com"
license=('custom')
# This list is not anywhere near what it should be
# and misses a lot of package names. If you find 
# yourself in a situation where you are missing 
# something please tell me via mail or on Github: 
# https://github.com/mkzero/bitwig-studio-demo-aur
depends=( 'jack' 'xdg-utils' 'zenity' 'xcb-util-wm')
optdepends=(
             'alsa-lib'
             'oss'
             'libav: MP3 support'
           )
provides=('bitwig-studio')
conflicts=('bitwig-studio-demo-rc')
options=(!strip)
source=("https://downloads.bitwig.com/bitwig-studio-${pkgver}.deb")
md5sums=('f6852f415b495521e335b13629e55d3e')

package() {
  cd $srcdir

  # create pkgdir folders
  install -d $pkgdir/usr/bin
  install -d $pkgdir/opt/${_pkgname}
  install -d $pkgdir/usr/share/{applications,icons}
  install -d $pkgdir/usr/share/licenses/$pkgname

  bsdtar -xf ./data.tar.gz -C "${pkgdir}/"

  install -m644 ${pkgdir}/opt/$_pkgname/EULA.rtf $pkgdir/usr/share/licenses/$pkgname/LICENSE

  # Fix launcher category
  sed -i 's:Categories=Multimedia:Categories=Multimedia;AudioVideo;Player;Recorder;:' \
    $pkgdir/usr/share/applications/bitwig-studio.desktop
}
