# Maintainer: Pavan Rikhi <pavan.rikhi@gmail.com>
pkgname=neon-wallet
pkgver=0.2.3
pkgrel=1
pkgdesc="Light Wallet for the NEO Blockchain"
arch=('x86_64')
license=('MIT')
url="http://github.com/CityOfZion/neon-wallet"
source=("https://github.com/CityOfZion/neon-wallet/archive/$pkgver.tar.gz"
        "neon.desktop"
        "neon.png"
        "LICENSE"
       )
sha256sums=('628f6169324b661dc418ac377021cf280e31481cbec15622a8e689cd9eb3b342'
            'd70d3cb065a779035812f12f0da337b9d83975159b26fba6efd04fd2db87b547'
            '0bfb88ecd77178bc600a9d752ba6e3a1f5cf4a38963bb718d2d047030445ff34'
            '49d5f9ad18e2e7d8de196c9c0bcf558b018918e23f60e3e0ab83ddc4ef9a6151')
depends=('gtk2' 'gconf' 'nss' 'alsa-lib' 'libxtst' 'libxss')
makedepends=('nodejs' 'npm' 'yarn' 'git' 'python2')

package() {
    cd "$srcdir/$pkgname-$pkgver"

    if [ -d "$HOME" ]; then
        TMP_HOME="$HOME"
    else
        TMP_HOME="$(pwd)/tmp-home"
        mkdir -p "$TMP_HOME/.config"
    fi

    HOME="$TMP_HOME" yarn install
    HOME="$TMP_HOME" yarn run dist --linux dir

    install -d "$pkgdir/usr/share/$pkgname/" "$pkgdir/usr/bin" \
        "$pkgdir/usr/share/applications" "$pkgdir/usr/share/icons/hicolor/512x512/apps" \
        "$pkgdir/usr/share/licenses/$pkgname"

    cp -r dist/linux-unpacked/* "$pkgdir/usr/share/$pkgname/"

    cp "$srcdir/neon.desktop" "$pkgdir/usr/share/applications/"
    cp "$srcdir/neon.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/"
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    ln -s "/usr/share/$pkgname/neon" "$pkgdir/usr/bin/"
}
