# Maintainer: Ivaylo Kirilov <iikirilov@gmail.com>
pkgname=pantheon
pkgver=1.2.3
pkgrel=1
pkgdesc='An Apache 2.0 licensed, MainNet compatible, Ethereum client written in Java.'
arch=('any')
url='https://pegasys.tech/'
license=('Apache')
depends=('java-runtime>=11')
source=('pantheon'
	"https://bintray.com/consensys/pegasys-repo/download_file?file_path=pantheon-${pkgver}.tar.gz"
	"https://bintray.com/consensys/pegasys-repo/download_file?file_path=pantheon-${pkgver}.tar.gz.asc")
sha256sums=('97383c0098343059660aa50de27c482cca9929d03dd32dd08ba2dec43b9ea06e'
            '2d48438878bfcace93f7c782f2a86a58aeae9fa7463f9d8bf9dfc43682c26386'
            'SKIP')
validpgpkeys=('8756C4F765C9AC3CB6B85D62379CE192D401AB61')
package() {
  cd "$pkgname-$pkgver"
  install -D -m644 -t "$pkgdir/usr/share/java/pantheon" lib/*
  install -D -m755 "$srcdir/pantheon"  "$pkgdir/usr/bin/pantheon"
}
