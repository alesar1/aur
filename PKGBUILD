# Maintainer: kevku <kevku@gmx.com>
pkgname=chrome-token-signing
pkgver=1.1.3.539
_rls_tag=v1.1.3
pkgrel=1
epoch=1
pkgdesc="Chrome and Firefox extension for signing with your eID on the web"
arch=('x86_64' 'i686')
url="http://www.id.ee/"
license=('LGPL2.1')
depends=('qt5-base>=5.15.1' 'pcsclite' 'ccid')
makedepends=('lsb-release' 'git')
source=("$pkgname-$pkgver::git+https://github.com/open-eid/chrome-token-signing.git?signed#tag=$_rls_tag")
sha256sums=("SKIP")
validpgpkeys=(
    'D1EBC666EFCBFBD3CFC2EBAA90C0B5E75C3B195D'  # Raul Metsma
)

build() {
    cd "$srcdir/$pkgname-$pkgver"
    export BUILD_NUMBER=${pkgver##*.}
    make -C host-linux
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    # Istall files
    install -Dm755 ./host-linux/chrome-token-signing -t "$pkgdir/usr/bin"
    install -Dm644 ./host-linux/ee.ria.esteid.json -t "$pkgdir/usr/share/chrome-token-signing"
    install -Dm644 ./host-linux/ee.ria.chrome-token-signing.policy.json -t "$pkgdir/usr/share/chrome-token-signing"
    install -Dm644 ./host-linux/ff/ee.ria.esteid.json -t "$pkgdir/usr/lib/mozilla/native-messaging-hosts"
    install -Dm644 ./ckjefchnfjhjfedoccjbhjpbncimppeg.json -t "$pkgdir/usr/share/chrome-token-signing"
    install -Dm644 ./\{443830f0-1fff-4f9a-aa1e-444bafbc7319\}.xpi -t "$pkgdir/usr/share/mozilla/extensions/{ec8030f7-c20a-464f-9b0e-13a3a9e97384}"

    # Create links
    mkdir -p $pkgdir/etc/{chromium,chromium-browser}/native-messaging-hosts
    mkdir -p $pkgdir/etc/{chromium,chromium-browser}/policies/managed
    mkdir -p $pkgdir/usr/share/{google-chrome,chromium,chromium-browser}/extensions
    ln -sf "/usr/share/chrome-token-signing/ee.ria.esteid.json" "$pkgdir/etc/chromium/native-messaging-hosts/ee.ria.esteid.json"
    ln -sf "/usr/share/chrome-token-signing/ee.ria.esteid.json" "$pkgdir/etc/chromium-browser/native-messaging-hosts/ee.ria.esteid.json"
    ln -sf "/usr/share/chrome-token-signing/ckjefchnfjhjfedoccjbhjpbncimppeg.json" "$pkgdir/usr/share/chromium/extensions/ckjefchnfjhjfedoccjbhjpbncimppeg.json"
    ln -sf "/usr/share/chrome-token-signing/ckjefchnfjhjfedoccjbhjpbncimppeg.json" "$pkgdir/usr/share/chromium-browser/extensions/ckjefchnfjhjfedoccjbhjpbncimppeg.json"
    ln -sf "/usr/share/chrome-token-signing/ckjefchnfjhjfedoccjbhjpbncimppeg.json" "$pkgdir/usr/share/google-chrome/extensions/ckjefchnfjhjfedoccjbhjpbncimppeg.json"
    ln -sf "/usr/share/chrome-token-signing/ee.ria.chrome-token-signing.policy.json" "$pkgdir/etc/chromium/policies/managed/ee.ria.chrome-token-signing.policy.json"
    ln -sf "/usr/share/chrome-token-signing/ee.ria.chrome-token-signing.policy.json" "$pkgdir/etc/chromium-browser/policies/managed/ee.ria.chrome-token-signing.policy.json"
}
