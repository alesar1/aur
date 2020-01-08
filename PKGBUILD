# Maintainer: naetherm <naether.markus@gmail.com>
# Maintainer: Adrien Jussak <adrien.jussak@wascardev.com>
# Maintainer: sum01 <sum01@protonmail.com>
# Contributor: j1simon
pkgname=buttercup-desktop
pkgver=1.18.2
pkgrel=1
pkgdesc='Javascript Password Vault - Multi-Platform Desktop Application'
arch=('i686' 'x86_64')
url="https://github.com/buttercup/buttercup-desktop"
license=('GPL3')
depends=('gtk3' 'libxss' 'nss')
makedepends=('npm' 'sed')
source=("$pkgname-$pkgver.tar.gz::https://github.com/buttercup/buttercup-desktop/archive/v$pkgver.tar.gz")
sha512sums=('d1354f4a98d50f461563916c484767f109a175d75b1b9b547ea5cf395caaca36482c7f454e17fe6f0564dd91a91663742b4f48d59f42ac4f7dcedb2e3d8a6034')
prepare() {
sed -i '/"rpm",/d' "$srcdir/$pkgname-$pkgver/package.json"
sed -i '/"AppImage",/d' "$srcdir/$pkgname-$pkgver/package.json"
sed -i '/"snap",/d' "$srcdir/$pkgname-$pkgver/package.json"
sed -i 's/"deb"/"dir"/' "$srcdir/$pkgname-$pkgver/package.json"
if [[ $CARCH == "i686" ]]; then
sed -i 's/build --linux --x64/build --linux --ia32/' "$srcdir/$pkgname-$pkgver/package.json"
fi
}
build() {
cd "$srcdir/$pkgname-$pkgver"
npm install --cache "$srcdir/npm-cache"
npm run build
npm run package:linux
}
package() {
install -Dm644 "$srcdir/$pkgname-$pkgver/build/badge.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/buttercup.svg"
install -Dm644 "$srcdir/$pkgname-$pkgver/build/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
if [[ $CARCH == "i686" ]]; then
_distname="linux-ia32-unpacked"
else
_distname="linux-unpacked"
fi
mkdir -p "$pkgdir"/{usr/bin,opt}
cp -rf "$srcdir/$pkgname-$pkgver/release/$_distname" "$pkgdir/opt/$pkgname"
ln -sf /opt/$pkgname/$pkgname "$pkgdir/usr/bin/buttercup"
}
