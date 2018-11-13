# Maintainer: Daniel Biehl dbiehl@live.de

pkgname=getgauge
pkgver=1.0.3
pkgrel=2
pkgdesc="Light weight cross-platform test automation tool for authoring test cases in the business language."
arch=('x86_64' 'i686')
url="https://getgauge.io"
license=('GPL3')
makedepends=('go')

source=("https://github.com/getgauge/gauge/archive/v$pkgver.tar.gz")
sha256sums=('c0092f40940469853ef0810b6ae388b405b60c7a40dc5585af841652da40cee8')

_gourl="/github.com/getgauge/gauge"

prepare() {    
    cd "$srcdir"
    mkdir -p "src/github.com/getgauge/"
    mv "gauge-$pkgver" "src/github.com/getgauge/gauge"
}

build() {
    export GOPATH="${srcdir}"
    
    cd "${srcdir}/src/github.com/getgauge/gauge"
    
    go run build/make.go
}

package() {
    cd "${srcdir}/src/github.com/getgauge/gauge"

    go run build/make.go --install --prefix="$pkgdir/usr"
}

