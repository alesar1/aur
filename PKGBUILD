# Maintainer: Santiago Pelufo <santiagopelufo@gmail.com>

pkgname=clojure-install
pkgver=1.9.0.273
pkgrel=2
pkgdesc='The Clojure Programming Language'
url='http://clojure.org/'
arch=('any')
license=('CPL')
depends=('java-environment' 'bash')
makedepends=('java-environment' 'sed')
optdepends=('rlwrap: friendlier shell with readline support')
source=("https://download.clojure.org/install/clojure-tools-$pkgver.tar.gz")
md5sums=('0433e07caef3b3e0a8dd114f66ed992f')

package() {
	install -Dm644 "$srcdir/clojure-tools/deps.edn" "$pkgdir/usr/lib/clojure/deps.edn"
	install -Dm644 "$srcdir/clojure-tools/example-deps.edn" "$pkgdir/usr/lib/clojure/example-deps.edn"
	install -Dm644 "$srcdir/clojure-tools/clojure-tools-$pkgver.jar" "$pkgdir/usr/lib/clojure/libexec/clojure-tools-$pkgver.jar"

	sed -i -e 's@PREFIX@/usr/lib/clojure@g' "$srcdir/clojure-tools/clojure"
	install -Dm755 "$srcdir/clojure-tools/clojure" "$pkgdir/usr/bin/clojure"
	install -Dm755 "$srcdir/clojure-tools/clj" "$pkgdir/usr/bin/clj"
}
