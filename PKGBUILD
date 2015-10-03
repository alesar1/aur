# Maintainer: zaps166 <spaz16@wp.pl>

pkgname=qmplay2
pkgver=15.10.03
pkgrel=1
pkgdesc='QMPlay2 is a video and audio player which can play most formats and codecs'
arch=('i686' 'x86_64' 'armv7' 'armv6' 'armv5')
url='http://qt-apps.org/content/show.php/QMPlay2?content=153339'
license=('LGPL')
depends=('qt4' 'ffmpeg' 'libass' 'libgl' 'libva' 'libxv' 'alsa-lib' 'libcdio' 'taglib' 'libcddb')
optdepends=('pulseaudio' 'youtube-dl')
makedepends=('make' 'gcc' 'pkg-config')
source="http://downloads.sourceforge.net/project/zaps166/QMPlay2/QMPlay2-src-${pkgver}.tar.bz2"
sha256sums=(2edd962630afd41688e8c24da6cd781d03ad9b2d88e13d0ae2e16de5d70fa99a)

build()
{
    cd $srcdir/QMPlay2-*
    NOTERM=1 SYSTEM_BUILD=1 ./compile_unix 0
}

package()
{
    mv $srcdir/QMPlay2-*/app $pkgdir/usr
}
