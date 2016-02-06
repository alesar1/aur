# Maintainer: Det
# Contributor: Ondrej Kucera <ondrej.kucera@centrum.cz>
# Contributor: Andrea Scarpino <bash.lnx@gmail.com>

pkgname=('jdk-docs' 'javafx-docs')
_major=8
_minor=74
_build=b02
pkgver=${_major}u${_minor}
pkgrel=2
pkgdesc="Documentation for Oracle Java Development Kit"
arch=('any')
url="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
license=('custom:Oracle')
optdepends=("java-runtime>=$_major: Run the examples"
            "java-environment>=$_major: Compile and run the examples")
options=('!strip')
source=("http://download.oracle.com/otn-pub/java/jdk/$pkgver-$_build/jdk-$pkgver-docs-all.zip"
#        "http://download.oracle.com/otn-pub/java/javafx/$_major.0.$_minor-$_build/javafx-$pkgver-apidocs.zip"
        'http://download.oracle.com/otn-pub/java/javafx/8.0.72-b15/javafx-8u72-apidocs.zip'
        'LICENSE-Documentation'
        'LICENSE-Oracle-Legal-Notices')
md5sums=('d98ad2762c2c7e48af3a93272764b5ce'
         '1a97e0c6e666cfcb11c52a76a43be96b'
         '4d54057ca75b691366977dab2277e869'
         '3137397f4dba13f4a79157819af583a3')

DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')

package_jdk-docs() {
  # Install
  install -d "$pkgdir"/usr/share/doc/java/
  mv docs/* "$pkgdir"/usr/share/doc/java/

  # License
  install -d "$pkgdir"/usr/share/licenses/$pkgname/
  install -m644 LICENSE-Documentation "$pkgdir"/usr/share/licenses/$pkgname/
  install -Dm644 LICENSE-Documentation "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_javafx-docs() {
  # Install
  install -d "$pkgdir"/usr/share/doc/java/javafx/
  mv api "$pkgdir"/usr/share/doc/java/javafx/

  # License
  install -d "$pkgdir"/usr/share/licenses/$pkgname/
  install -Dm644 LICENSE-JavaFX "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
