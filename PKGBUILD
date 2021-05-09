# Maintainer: kevku <kevku@gmx.com>
pkgbase=web-eid-webextension
pkgname=("firefox-extension-web-eid" "chromium-extension-web-eid")
pkgver=1.0.0
pkgrel=1
pkgdesc="Web eID browser extension"
arch=('any')
url="https://web-eid.eu/"
license=('MIT')
depends=('web-eid')
makedepends=('git' 'nodejs-lts-fermium' 'npm')
source=("$pkgbase::git+https://github.com/web-eid/web-eid-webextension.git#tag=$pkgver")
sha256sums=("SKIP")
validpgpkeys=(
    '1282B0F8809D0DC632C85A3F86B611CE24492160'  # Mart Somermaa
)

build() {
    cd "$srcdir/$pkgbase"
    npm install --cache "${srcdir}/npm-cache" 
    SOURCE_DATE_EPOCH=$(git log -1 --pretty=%ct) npm run clean build package
}

package_firefox-extension-web-eid() {
    pkgdesc="Web eID Firefox extension"
    depends=('firefox')
    
    cd "$srcdir/$pkgbase"
    install -Dm644 ./dist/firefox.zip "$pkgdir/usr/lib/firefox/browser/extensions/{e68418bc-f2b0-4459-a9ea-3e72b6751b07}.xpi"
    install -Dm644 "$srcdir/$pkgbase/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


package_chromium-extension-web-eid() {
    pkgdesc="Unpacked Web eID Chromium extension"
    mkdir -p "$pkgdir/usr/share/$pkgname"
    cd "$srcdir/$pkgbase"
    cp -dr --no-preserve=ownership ./dist/chrome/* "$pkgdir/usr/share/$pkgname/"
    install -Dm644 "$srcdir/$pkgbase/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
