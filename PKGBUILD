pkgname=iri
pkgver=1.5.1
pkgrel=1
pkgdesc="IOTA Reference Implementation"
url="https://www.iotatoken.com/"
arch=('any')
license=('GPL')
depends=("java-runtime")
makedepends=("java-environment>=8" "maven")
source=("$pkgname-$pkgver.tar.gz::https://github.com/iotaledger/iri/archive/v$pkgver.tar.gz")
md5sums=('e5716d9d77f0a7cebf2c9f97f06b88bc')
 
build(){
    cd $pkgname-$pkgver
    mvn clean compile
    mvn package
}

package() {
    cd $pkgname-$pkgver
    install -Dm644 target/iri-$pkgver.jar "$pkgdir/usr/lib/iri/iri.jar"
    mkdir -p "$pkgdir/usr/bin/"
    cat >> "$pkgdir/usr/bin/iri" << \here
#!/usr/bin/sh
java -jar /usr/lib/iri/iri.jar --port 14265
here
    chmod +x "$pkgdir/usr/bin/iri"
}
