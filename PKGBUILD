# Maintainer: Christoph Brill <egore911@gmail.com>
pkgname=procyon-decompiler
pkgver=0.5.34
pkgrel=1
pkgdesc='A Java decompiler, inspired by ILSpy and Mono.Cecil'
arch=('any')
url='https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler'
license=('Apache')
depends=('java-runtime')
source=("https://bitbucket.org/mstrobel/procyon/downloads/${pkgname}-${pkgver}.jar"
	"${pkgname}")
noextract=("${pkgname}-${pkgver}.jar")
sha256sums=('ff575a42133a19a44635f2ab2808662b648a67cf5033f94dd6bad4b24335c843'
            '5cd5d0354f8f88150c3c10c8f1a2496b447810a0beb9f642675156fa940e3acf')

package() {
  install -D ${pkgname} "$pkgdir/usr/bin/${pkgname}"
  install -Dm644 "${pkgname}-${pkgver}.jar" "$pkgdir/usr/share/java/${pkgname}/${pkgname}.jar"
}
