# Maintainer: James Bunton <jamesbunton@delx.net.au>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Sebastien Piccand <sebcactus gmail com>

pkgname=('handbrake-fdkaac' 'handbrake-cli-fdkaac')
pkgver=1.3.0
pkgrel=1
arch=('x86_64')
url="https://handbrake.fr/"
license=('GPL')
_commondeps=('libxml2' 'libass' 'libvorbis' 'opus' 'speex' 'libtheora' 'lame'
             'x264' 'jansson' 'libvpx' 'libva' 'numactl'
             'bzip2' 'gcc-libs' 'zlib' 'xz')
_guideps=('gst-plugins-base' 'gtk3' 'librsvg' 'libgudev')
makedepends=('intltool' 'python' 'nasm' 'wget' 'cmake' 'meson'
             "${_commondeps[@]}" "${_guideps[@]}")
source=(https://download.handbrake.fr/releases/$pkgver/HandBrake-$pkgver-source.tar.bz2)
sha256sums=('a9a82eb5ca04a793705b3d7d11cefa29946694eeb13b40161446aaca35b31d96')

build() {
  cd "$srcdir/HandBrake-$pkgver"

  ./configure \
    --prefix=/usr \
    --enable-qsv \
    --enable-fdk
  make -C build
}

package_handbrake-fdkaac() {
  pkgdesc="Multithreaded video transcoder"
  conflicts=('handbrake')
  depends=('desktop-file-utils' 'hicolor-icon-theme'
           "${_commondeps[@]}" "${_guideps[@]}")
  optdepends=('gst-plugins-good: for video previews'
              'gst-libav: for video previews'
              'libdvdcss: for decoding encrypted DVDs')

  cd "$srcdir/HandBrake-$pkgver/build"

  make DESTDIR="$pkgdir" install
  rm "$pkgdir/usr/bin/HandBrakeCLI"
}

package_handbrake-cli-fdkaac() {
  pkgdesc="Multithreaded video transcoder (CLI)"
  conflicts=('handbrake-cli')
  depends=("${_commondeps[@]}")
  optdepends=('libdvdcss: for decoding encrypted DVDs')

  cd "$srcdir/HandBrake-$pkgver/build"
  install -D HandBrakeCLI "$pkgdir/usr/bin/HandBrakeCLI"
}

# vim:set ts=2 sw=2 et:
