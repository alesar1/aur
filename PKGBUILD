# Maintainer: Felix Fung <fylixeoi@gmail.com>

pkgname=apache-zeppelin
pkgver=0.8.0
pkgrel=1
pkgdesc="Data analytics and visualization notebook with backends of Spark, Hadoop, SQL and more"
arch=('x86_64')
url="http://zeppelin.apache.org/"
license=('Apache')
depends=('java-environment')
makedepends=()
install=${pkgname}.install
source=("http://apache.claz.org/zeppelin/zeppelin-$pkgver/zeppelin-$pkgver-bin-all.tgz"
    "apache-zeppelin.service")
sha512sums=('27b74460a0da5780e273869801fb438c405bd70aaee0679bc9de761371964938859529cb2510e9af18451b2384393562f2eed7988d7619dfd8a5ac73654dd4ca'
'08d8047b764ac465779d6c18a7decfb959da9915f3082e1641732ee1431a7f8f4d823e8d51dad960e71771b8fee8fefd3b6e04a6645468b6d6d4dafb0428cded')

PKGEXT='.pkg.tar' # no need for package compression, which takes too much time

package() {
    mkdir -p "$pkgdir/opt"
    cp -r "$srcdir/zeppelin-$pkgver-bin-all" "$pkgdir/opt/apache-zeppelin"
    install -Dm644 "$srcdir/apache-zeppelin.service" "$pkgdir/usr/lib/systemd/system/apache-zeppelin.service"
}
