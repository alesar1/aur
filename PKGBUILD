# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=zimg-git
pkgver=2.0.1.22.g1aa2811
pkgrel=1
pkgdesc="Scaling, colorspace conversion, and dithering library. include VapourSynth plugin (deprecated soon(?)). (GIT version)"
arch=('i686' 'x86_64')
url='http://forum.doom9.org/showthread.php?t=171334'
license=('custom:WTFPL')
depends=('vapoursynth')
makedepends=('git')
provides=('zimg' 'vapoursynth-plugin-zimg')
conflicts=('zimg' 'vapoursynth-plugin-zimg')
source=('git+https://github.com/sekrit-twc/zimg.git')
sha1sums=('SKIP')

pkgver() {
  cd zimg
  echo "$(git describe --long --tags | tr - . | sed 's|release.||g')"
}

prepare() {
  cd zimg
  ./autogen.sh
}

build() {
  cd zimg
  ./configure --prefix=/usr \
              --enable-x86simd
  make
}

package(){
  make -C zimg DESTDIR="${pkgdir}" install
  install -d "${pkgdir}/usr/lib/vapoursynth"
  ln -s ../zimg/vszimg.so "${pkgdir}/usr/lib/vapoursynth/libvszimg.so"

  install -Dm644 zimg/COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
  install -Dm644 zimg/doc/vszimg/vszimg.txt "${pkgdir}/usr/share/doc/vapoursynth/plugins/zimg/vszimg.txt"
}
