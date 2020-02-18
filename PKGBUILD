# Maintainer: James Henderson <james@jarohen.me.uk>
pkgname=bridje-bin
pkgver=0.0.2
pkgrel=2
pkgdesc="Bridje is a statically typed LISP targeting GraalVM, drawing inspiration from both Clojure and Haskell."
arch=('any')
url="https://github.com/bridje/bridje"
license=('custom')
depends=('jdk11-graalvm-bin')

source=("https://github.com/bridje/bridje/releases/download/v${pkgver}/brj-component-${pkgver}.jar")
sha256sums=('0480756b5ff04f8062c6664a0b4db2814035c556ba5176b4b3ec69231bf055ca')

package() {
    mkdir -p "$pkgdir/usr/lib/jvm/java-11-graalvm/bin"
    cp -a -t "$pkgdir/usr/lib/jvm/java-11-graalvm/" languages/ lib/

    chmod +x "$pkgdir/usr/lib/jvm/java-11-graalvm/languages/brj/bin/brj"
    ln -s "../languages/brj/bin/brj" "$pkgdir/usr/lib/jvm/java-11-graalvm/bin/brj"
}
