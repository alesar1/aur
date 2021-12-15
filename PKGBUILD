pkgname=googleplay
pkgver=1.4.6
pkgrel=1
pkgdesc="Download APK from Google Play or send API requests"
url="https://github.com/89z/googleplay"
arch=('i686' 'x86_64')
license=('OSL')
depends=()
makedepends=("go")
#optdepends=()
source=("$pkgname-$pkgver.tar.gz::https://github.com/89z/googleplay/archive/refs/tags/v$pkgver.tar.gz")
md5sums=('13750d320a51642e1f597bc4bc59b752')

build() {
    cd "$srcdir/$pkgname-$pkgver"
    mkdir -p build/
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
    go build -o build ./cmd/...
    
}
 
package() {
    cd "$srcdir/$pkgname-$pkgver"

    install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
    install -Dm444 license.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
