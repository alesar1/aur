# Maintainer: Trizen <echo dHJpemVuQHByb3Rvbm1haWwuY29tCg== | base64 -d>
# Contributor: Ivy Foster <iff@archlinux.org>
# Contributor: Alad Wenter <alad@mailbox.org>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Daniel Wallace < danielwallace at gtmanfred dot com>

pkgname=youtube-viewer
pkgdesc='Command line utility for viewing YouTube videos'
url='https://github.com/trizen/youtube-viewer'
license=('Artistic2.0')
epoch=1
pkgver=3.9.5
pkgrel=1
depends=(perl perl-data-dump perl-file-sharedir perl-json perl-lwp-protocol-https perl-libwww perl-unicode-linebreak)
makedepends=(perl-module-build)
optdepends=(
    'mpv: play videos with MPV'
    'perl-file-sharedir: GTK GUI'
    'perl-gtk3: GTK3 GUI'
    'perl-json-xs: faster JSON to HASH conversion'
    'perl-term-readline-gnu: better STDIN support'
    'vlc: play videos with VLC'
    'wget: download videos with wget'
    'youtube-dl: play videos with encrypted signatures'
)
arch=(any)
source=(
    "$pkgname-$pkgver.tar.gz::https://github.com/trizen/youtube-viewer/archive/$pkgver.tar.gz"
    "https://github.com/trizen/youtube-viewer/releases/download/$pkgver/youtube-viewer-$pkgver.tar.gz.asc"
)
install=youtube-viewer.install
validpgpkeys=(ABB8BBAA2E279767774149B7D0A443C703A3A056)
# sums provided by packager makepkg -g
sha512sums=('473732be9c403f6e0df587bef8931fb2f6d96d4c8996f8cb23860fc592208910ce3bb75514052c34f23aeab1ccefd07283f06330bfbc4742e3ca122db03db622'
            'SKIP')

build() {
    cd "youtube-viewer-$pkgver"
    perl Build.PL --installdirs vendor --gtk
}

check() {
    cd "youtube-viewer-$pkgver"
    ./Build test
}

package() {
    cd "youtube-viewer-$pkgver"

    ./Build install --destdir "$pkgdir"
    rm -r "$pkgdir/usr/lib"

    install -D -m 644 README.md "$pkgdir/usr/share/doc/youtube-viewer/README.md"

    mkdir -p "$pkgdir/usr/share/applications" "$pkgdir/usr/share/pixmaps"
    mv "$pkgdir/usr/share/perl5/vendor_perl/auto/share/dist/WWW-YoutubeViewer/gtk-youtube-viewer.desktop" \
        "$pkgdir/usr/share/applications/gtk-youtube-viewer.desktop"
    cp "$pkgdir/usr/share/perl5/vendor_perl/auto/share/dist/WWW-YoutubeViewer/icons/gtk-youtube-viewer.png" \
        "$pkgdir/usr/share/pixmaps/gtk-youtube-viewer.png"
}
