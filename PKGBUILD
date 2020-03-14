# Maintainer: neeshy <neeshy@tfwno.gf>
pkgname=ripme
pkgver=1.7.91
pkgrel=1
pkgdesc="Downloads albums in bulk"
arch=('any')
url="https://github.com/RipMeApp/ripme"
license=('MIT')
depends=('java-runtime')
makedepends=('maven')
source=("https://github.com/RipMeApp/ripme/archive/$pkgver.tar.gz")
sha256sums=('24e56ea40e939d636935e69ffb16200d587444f1603f1962eb5878c9a025654a')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  mvn clean compile assembly:single
  cat << EOF > "$pkgname.sh"
#!/bin/sh
exec java -jar /usr/share/java/$pkgname.jar "\$@"
EOF
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -Dm644 "target/$pkgname-$pkgver-jar-with-dependencies.jar" \
    "$pkgdir/usr/share/java/$pkgname.jar"
  install -Dm755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
}
