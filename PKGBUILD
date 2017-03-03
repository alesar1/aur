# Maintainer: Cedric Girard <girard.cedric@gmail.com>
# Contributor: Det <nimetonmaili at gmail a-dot com>
# Based on [extra]'s thunderbird

pkgname=thunderbird-nightly
pkgver=54.0a1.20170303
_version=54.0a1
pkgrel=1
pkgdesc="Standalone Mail/News reader - Nightly build"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="http://www.mozilla.org/thunderbird"
depends=('alsa-lib' 'cairo' 'dbus-glib' 'desktop-file-utils' 'fontconfig'
         'freetype2' 'gtk2' 'hicolor-icon-theme' 'hunspell' 'libevent' 'libjpeg'
         'libmng' 'libpng' 'libvpx' 'libxt' 'mozilla-common' 'nspr' 'nss'
         'shared-mime-info' 'sqlite' 'startup-notification')
optdepends=('libcanberra: for sound support')
provides=("thunderbird=$_version")
install="$pkgname.install"
PKGEXT='.pkg.tar'

FX_SRC="thunderbird-${_version}.en-US.linux-${CARCH}"
FX_SRC_URI="http://ftp.mozilla.org/pub/thunderbird/nightly/latest-comm-central/${FX_SRC}"

source=("${FX_SRC_URI}.txt"
        "${FX_SRC_URI}.tar.bz2"
        "$pkgname.desktop"
        "vendor.js")

sha1sums=('SKIP'
          'SKIP'
          '9373c6b8e57692f62bac9f738351407ff27aa6f3'
          '4243393daf5bd5a68644034001f512178cad09cc')

pkgver(){
    cd "$srcdir"
    echo "${_version}.$(head -n1 "${FX_SRC}.txt" |cut -c -8)"
}

package() {
    cd "$srcdir"
    install -d "$pkgdir"/{usr/bin,opt}
    cp -a thunderbird "$pkgdir/opt/$pkgname-$pkgver"
    cp vendor.js "$pkgdir/opt/$pkgname-$pkgver/defaults/pref/"
    ln -s "/opt/$pkgname-$pkgver/thunderbird" "$pkgdir/usr/bin/$pkgname"
    for i in 16x16 22x22 24x24 32x32 48x48 256x256; do
        install -Dm644 thunderbird/chrome/icons/default/default${i/x*/}.png "$pkgdir/usr/share/icons/hicolor/$i/apps/$pkgname.png"
    done
    install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
    rm -rf "$pkgdir/opt/$pkgname-$pkgver/dictionaries/"
    ln -sf /usr/share/hunspell/ "$pkgdir/opt/$pkgname-$pkgver/dictionaries"
}
