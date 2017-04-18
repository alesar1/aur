# Maintainer: Det
# Contributor: Ondrej Kucera <ondrej.kucera@centrum.cz>
# Contributor: Andrea Scarpino <bash.lnx@gmail.com>

pkgname=('jdk-docs' 'javafx-docs')
_major=8
_minor=131
_build=b11
pkgver=${_major}u${_minor}
pkgrel=1
pkgdesc="Documentation for Oracle Java Development Kit"
arch=('any')
url="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
license=('custom:Oracle')
optdepends=("java-environment>=$_major: Compile and run examples")
options=('!strip')
source=("http://download.oracle.com/otn-pub/java/jdk/$pkgver-$_build/e9e7ea248e2c4826b92b3f075a80e441/jdk-$pkgver-docs-all.zip"
        "http://download.oracle.com/otn-pub/java/javafx/$_major.0.$_minor-$_build/e9e7ea248e2c4826b92b3f075a80e441/javafx-$pkgver-apidocs.zip"
        'LICENSE-Documentation'
        'LICENSE-Oracle-Legal-Notices')
md5sums=('32df9c95f67e2983fdb4f3e722442d54'
         '9ae377f4a4fce58a5fe959c01b3614bd'
         '4d54057ca75b691366977dab2277e869'
         '3137397f4dba13f4a79157819af583a3')

DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')

package_jdk-docs() {
  # Install
  install -d "$pkgdir"/usr/share/doc/java/
  mv docs/* "$pkgdir"/usr/share/doc/java/

  # License
  install -Dm644 LICENSE-Documentation "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_javafx-docs() {
  # Install
  install -d "$pkgdir"/usr/share/doc/java/javafx/
  mv api "$pkgdir"/usr/share/doc/java/javafx/

  # License
  install -Dm644 LICENSE-Oracle-Legal-Notices "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
