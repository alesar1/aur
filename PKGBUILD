# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>
# Contributor: Doug Newgard <scimmia at archlinux dot info>

pkgname=jriver-media-center
_debpkgver=21.0.16
pkgver=$_debpkgver
pkgrel=2
pkgdesc="The Most Comprehensive Media Software"
arch=('x86_64')
url="http://www.jriver.com/"
license=('custom')
depends=('alsa-lib' 'gcc-libs' 'libx11' 'libxext' 'libxcb' 'libxau' 'libxdmcp' 'util-linux' 'libxext' 'gtk2' 'p11-kit')
optdepends=('mesa-libgl: nouveau video support' 'nvidia-libgl: nvidia video support' 'vorbis-tools:' 'lame:' 'musepack-tools:')
source=("http://files.jriver.com/mediacenter/channels/v21/latest/MediaCenter-$pkgver-amd64.deb" 'License.txt')
sha256sums=('f5a30ab511537e25b57bf75a61e205eeb17c1f44a7d83e1972ccaa13da1e1406' 'ee00f430918df6be37777a61e12812875b5583379c78daaa969bae7383a41fbd')

package() {
  cd "$srcdir"
  bsdtar xf data.tar.xz -C "$pkgdir"
    install -Dm644 "License.txt" \
    "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
