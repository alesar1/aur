# Maintainer Yurii Kolesnykov <yurikoles@gmail.com>
# Credit: Jan de Groot <jgc@archlinux.org>

pkgbase=gstreamer0.10-bad
_pkgname=gst-plugins-bad
pkgname=('gstreamer0.10-bad' 'gstreamer0.10-bad-plugins')
pkgver=0.10.23
pkgrel=21
arch=('i686' 'x86_64')
license=('LGPL' 'GPL')
makedepends=('pkgconfig' 'gstreamer0.10-base>=0.10.36-3' 'xvidcore' 'libdca' 'bzip2' 'libdc1394' 'neon' 'faac' 'musicbrainz' 'faad2' 'libmms' 'libcdaudio' 'libmpcdec' 'mjpegtools' 'libdvdnav' 'libmodplug' 'jasper' 'liblrdf' 'libofa' 'soundtouch' 'libvdpau' 'schroedinger' 'libass' 'libvpx' 'gsm' 'libgme' 'rtmpdump' 'libsndfile' 'librsvg' 'wildmidi' 'opus' 'git' 'spandsp' 'celt')
url="http://gstreamer.freedesktop.org/"
options=(!emptydirs)
source=("git://repo.or.cz/gstreamer-sdk/$_pkgname.git#commit=57569a4854a0f2d14ef19a8264a4ae9a7a1d1125"
        fix-libmodplug-include.patch
        drop-vpx-compat-defs.patch
        disable-assrender-test.patch
        disable-camerabin-test.patch
        faad2-version-check.patch
        wildmidi-0.4.patch)
sha256sums=('SKIP'
            'd89d8f4307c7d5a143b9240467d260a1cb6bb1ab2e7ca57841ce0901f41c9cb7'
            'eb97037b7b581d1ab994eadd144044c083975e5670a73ec827de126bf888f4b9'
            'e66642affa6c0e69837d37615010e67e59ef3d672663303d46c1e2591e2ddfc6'
            '01e780ddf1f8161a6115dded9dc5bf4bdd4d09a9eee00fa423b1330e90e76c68'
            '741492ae7a9518603fc51d87ae331d882f075547ea7fdec19c60f399085f18cc'
            '7a8698df3b53c34c627c00d3b025045818898cedc5ee7ffa13272d8758fcefd2')

prepare() {
  cd $_pkgname
  sed -e 's/AM_CONFIG_HEADER/AC_CONFIG_HEADERS/' -i configure.ac
  patch -Np1 -i ../fix-libmodplug-include.patch
  patch -Np1 -i ../drop-vpx-compat-defs.patch
  patch -Np1 -i ../disable-assrender-test.patch
  patch -Np1 -i ../disable-camerabin-test.patch
  patch -Np1 -i ../faad2-version-check.patch
  patch -Np1 -i ../wildmidi-0.4.patch
}

build() {
  cd $_pkgname
  NOCONFIGURE=1 ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
    --disable-static --enable-experimental --disable-gtk-doc \
    --with-package-name="GStreamer Bad Plugins (Archlinux)" \
    --with-package-origin="http://www.archlinux.org/"

  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
  sed -e 's/gst sys ext/gst/' -i Makefile
}

package_gstreamer0.10-bad() {
  pkgdesc="GStreamer Multimedia Framework Bad Plugin libraries (gst-plugins-bad)"
  depends=('gstreamer0.10-base>=0.10.34')

  cd $_pkgname
  make DESTDIR="${pkgdir}" install
}

package_gstreamer0.10-bad-plugins() {
  pkgdesc="GStreamer Multimedia Framework Bad Plugins (gst-plugins-bad)"
  depends=("gstreamer0.10-bad=${pkgver}" 'xvidcore' 'libdca' 'bzip2' 'libdc1394' 'neon' 'faac' 'musicbrainz' 'faad2' 'libmms' 'libcdaudio' 'libmpcdec' 'mjpegtools' 'libdvdnav' 'libmodplug' 'jasper' 'liblrdf' 'libofa' 'libvdpau' 'soundtouch' 'libass' 'schroedinger' 'libvpx' 'gsm' 'rtmpdump' 'libgme' 'libsndfile' 'librsvg' 'wildmidi' 'opus' 'celt' 'spandsp')
  groups=('gstreamer0.10-plugins')

  cd $_pkgname
  make -C gst-libs DESTDIR="${pkgdir}" install
  make -C ext DESTDIR="${pkgdir}" install
  make -C sys DESTDIR="${pkgdir}" install
  make -C gst-libs DESTDIR="${pkgdir}" uninstall
}
