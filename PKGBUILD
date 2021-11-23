# Maintainer: Emanuel Fernandes <efernandes@tektorque.com>

_channel=stable
pkgname="tws"
_pkgver=981
pkgver="$_pkgver.3d"
pkgrel=1
pkgdesc='IntereactiveBrokers Trader Workstation'
arch=('x86_64')
url='https://www.interactivebrokers.com/en/trading/tws.php#tws-software'
license=('custom')
depends=()
optdepends=()
source=("https://download2.interactivebrokers.com/installers/$pkgname/$_channel-standalone/$pkgname-$_channel-standalone-linux-x64.sh")
sha512sums=('6c5935f1637bfa63d9294f2e318ac661b67bdd551f71658cb3bc27f30a57f493ec6821c7bdfbdd665b97d848c2cb50cdb6ebfe65ea756c432b0fd4154c960fad')

prepare() {
    # unattended mode
    sh "./$pkgname-$_channel-standalone-linux-x64.sh" -q -dir "$srcdir/$pkgname" -overwrite
    sed -i "s|$srcdir/$pkgname|/opt/$pkgname|" \
        "$srcdir/$pkgname/tws.vmoptions" \
        "$srcdir/$pkgname/Trader Workstation $_pkgver.desktop" \
        "$srcdir/$pkgname/.install4j/response.varfile" \
        "$srcdir/$pkgname/.install4j/install.prop" \
        "$srcdir/$pkgname/.install4j/files.log" \
        "$srcdir/$pkgname/.install4j/installation.log"
}

package() {
    cd ${srcdir}

    install -d "$pkgdir/opt/$pkgname"
    cp -a $srcdir/$pkgname/. "$pkgdir/opt/$pkgname"

    chmod 755 "$pkgdir/opt/$pkgname"

    install -d "$pkgdir"/usr/{bin,share/{pixmaps,applications}}
    ln -s /opt/$pkgname/tws "$pkgdir"/usr/bin/$pkgname
    ln -s /opt/$pkgname/.install4/tws.png "$pkgdir"/usr/share/pixmaps/$pkgname.png
    ln -s "/opt/$pkgname/Trader Workstation $_pkgver.desktop" "$pkgdir"/usr/share/applications/$pkgname.desktop
}
