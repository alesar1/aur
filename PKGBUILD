# Maintainer: Vyacheslav Konovalov <f4f7l1hvr@relay.firefox.com>

pkgname=polaris
pkgver=0.13.3
pkgrel=1
pkgdesc='Music streaming application, designed to let you enjoy your music collection from any computer or mobile device'
arch=('x86_64')
url='https://github.com/agersant/polaris'
license=('MIT')
depends=('openssl' 'sqlite')
makedepends=('cargo' 'npm')
backup=('etc/polaris/config.toml')
source=(
    "$url/archive/$pkgver.tar.gz"
    'https://github.com/agersant/polaris-web/archive/build-45.tar.gz'
    'config.toml'
    'polaris.tmpfiles'
    'polaris.sysusers'
    'polaris.service'
)
sha512sums=(
    'd1f771c8e5e28cf66f7120025791326e78c004ae361296273c619d1619e27b4e7cd9d9e9ed9767bed58c1b44b83812707e5378081bfc409a19f26340a6a23c8a'
    '405fbc46c40e1f7b7d13e85fe9243a125b9a22081ebbdd0a9abf18614ac446a97670747f738e9b468b286e1fe21a9f100a3880863eb4e9477da8312fcb126b98'
    '2e4fe41b394508cb6a767a5b5732745d48d08c32967f66696934346e78f42de529ae47b3102d269198781c04f76cdf8c15555f5090f6b08bce09b2a0c13779ff'
    'd74497953de4e13aef2c62ed4bc4c82cdbe4cfcc5064661322cffbc10cbcd6f5e3c56282c20be5434461d4c1538cc602dd8ac65358feb8df3ba753a2a65528ae'
    '970c9e0e7fbd48a51a644da1ccb9563ba463c1b30bc60581f226c155a7c6b443bdeb1a4b272550a6d19bfc922f2ec6715364e55f6c589e4c87abc3c12b67a9fa'
    '4e3521cb664f5cc47551e38fab8d979f0de0be62c02f301b48bd0ddfc48479ea00f0309db1bd293192fc75d31968c7ea88dddaa5d91b8304558d7d6baef016a9'
)
install='polaris.install'
_webbuild=polaris-web-build-45

build() {
    # Build server
    cd $pkgname-$pkgver
    cp res/unix/Makefile .
    make PREFIX=/usr LOCALSTATEDIR=/var RUNSTATEDIR=/run build

    # Build client
    cd "$srcdir/$_webbuild"
    # FIX: https://github.com/agersant/polaris-web/issues/66
    npm install @babel/helper-compilation-targets --save-dev --cache "$srcdir/npm-cache"
    npm install --cache "$srcdir/npm-cache"
    npm run production
}

# BUG: some tests are broken (last checked 2020-12-26)
# check() {
#     cd $pkgname-$pkgver
#     cargo test --release --locked
# }

package() {
    install -Dm644 config.toml -t "$pkgdir/etc/polaris"
    install -Dm644 polaris.service -t "$pkgdir/usr/lib/systemd/system"
    install -Dm644 polaris.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
    install -Dm644 polaris.sysusers "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

    cd $pkgname-$pkgver
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
    install -Dm755 target/release/polaris -t "$pkgdir/usr/bin"
    install -dm755 "$pkgdir/usr/share/polaris"
    cp -rT "$srcdir/$_webbuild/dist" "$pkgdir/usr/share/polaris/web"
    cp -rT docs/swagger "$pkgdir/usr/share/polaris/swagger"
}
