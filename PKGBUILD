# Maintainer:   Maximilian Weiss         <$(echo "bWF4QG1heHdlaXNzLmlv" | base64 -d)>
# Contributor:  James Lovejoy            <$(echo "amFtZXNsb3Zlam95MUBnbWFpbC5jb20=" | base64 -d)>
# Contributor:  The Vertcoin Developers  <$(echo "Y29udGFjdEB2ZXJ0Y29pbi5vcmcK" | base64 -d)>
# Contributor:  Thomas Voegtlin          <$(echo "dGhvbWFzdkBlbGVjdHJ1bS5vcmcK" | base64 -d)>
# Contributor:  Pooler                   <https://bitcointalk.org/index.php?action=profile;u=43931>

pkgname=electrum-vtc
pkgver=3.3.0.rc1
pkgrel=1
pkgdesc='A simple, powerful, and secure Vertcoin wallet which has no sync time or long waits for the blockchain to download.'

arch=('any')
url='https://electrum.vertcoin.org/'
license=('MIT')

depends=('python-setuptools'
         'python-pyaes'
         'python-ecdsa'
         'python-pbkdf2'
         'python-requests'
         'python-qrcode'
         'python-vtc_scrypt'
         'python-lyra2re2_hash'
         'python-protobuf'
         'python-pyqt5'
         'python-dnspython'
         'python-jsonrpclib-pelix'
         'python-pysocks'
         'python-pycryptodomex'
         'python-websocket-client'
         'python-hidapi'
         'zbar')

optdepends=('cython: Compilation support for all hardware wallet dependencies'
            'python-btchip: Ledger, Trezor, and KeepKey hardware wallet support dependency'
            'python-trezor: Trezor hardware support dependency'
            'python-keepkey: KeepKey hardware wallet support dependency')

provides=('electrum-vtc')
conflicts=('electrum-vtc')

source=("https://github.com/vertcoin-project/electrum-vtc/releases/download/3.3.0-rc1/electrum-vtc-3.3.0-rc1.tar.gz"
        "https://github.com/vertcoin-project/electrum-vtc/releases/download/3.3.0-rc1/electrum-vtc-3.3.0-rc1.tar.gz.sig")

validpgpkeys=('64D9042053AA1391D6C0B4A7425776E2F9E5BAB8')

sha256sums=('d54a665cef4d2dc937b3b2a831bcfba0b825461136069b827b2d7ebbaf582be2'
            'SKIP')

prepare() {
    cd "$srcdir/Electrum-VTC-3.3.0/"
    cat lib/plugins.py | sed 's/electrum_plugins/electrum_vtc_plugins/g' > lib/plugins2.py
    rm -f lib/plugins.py
    mv lib/plugins2.py lib/plugins.py
    chmod 644 lib/plugins.py
    for i in icons/{electrum_{dark,light}_icon,unpaid}.png
    do convert $i $i
    done
    pyrcc5 icons.qrc -o gui/qt/icons_rc.py
}

build() {
    cd "$srcdir/Electrum-VTC-3.3.0/"
    python setup.py build
}

package() {
    cd "$srcdir/Electrum-VTC-3.3.0/"
    python setup.py install --root="$pkgdir/" --optimize=1 --prefix=/usr
    mkdir -p "$pkgdir/usr/share/doc/$pkgname/"
    mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
    cp AUTHORS README.rst RELEASE-NOTES "$pkgdir/usr/share/doc/$pkgname/"
    cp LICENCE "$pkgdir/usr/share/licenses/$pkgname/"
}

