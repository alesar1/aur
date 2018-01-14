# Maintainer: Alex Merry <dev@randomguy3.me.uk>

pkgname=get_iplayer
pkgver=3.12
pkgrel=1
pkgdesc="Allows you to download or stream any iPlayer programme from the BBC in H.264 (Quicktime/mp4) format, any radio programmes in MP3 or RealAudio format"
arch=('any')
url="http://www.infradead.org/get_iplayer/html/get_iplayer.html"
license=('GPL3')
depends=(
    'perl>=5.10.1'
    'perl-json-pp'
    'perl-lwp-protocol-https'
    'perl-libwww'
    'perl-xml-libxml')
optdepends=(
    'ffmpeg: convert flash (flv) files'
    'atomicparsley: add tags to MP4 files'
    'perl-mojolicious: significantly faster index updates')
install=get_iplayer.install
source=(https://github.com/get-iplayer/get_iplayer/archive/v${pkgver}.tar.gz)
md5sums=('e47df68197d33783464e2981a3d1881a')

package() {
    cd "$srcdir/$pkgname-$pkgver"
    install -m755 -D get_iplayer $pkgdir/usr/bin/get_iplayer
    install -m755 -D get_iplayer.cgi $pkgdir/usr/bin/get_iplayer.cgi

    install -m644 -D README.md $pkgdir/usr/share/doc/get_iplayer/README.md

    install -D -m644 get_iplayer.1 ${pkgdir}/usr/share/man/man1/get_iplayer.1
}

# vim:set ts=4 sw=4 et:
