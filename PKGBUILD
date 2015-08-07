# Maintainer: Det <nimetonmaili g-mail>

pkgname=('jdk-devel-docs' 'javafx-devel-docs')
_major=9
#_minor=1
_build=b76
_date=05_aug_2015
_date_fx=04_aug_2015
_pkgver=$_major
pkgver=${_major}${_build}
#_pkgver=${_major}u${_minor}
#pkgver=${_major}u${_minor}.${_build}
pkgrel=1
arch=('any')
url="https://jdk$_major.java.net/"
license=('custom:Oracle BSD')
optdepends=("java-runtime>=$_major: Run the examples"
            "java-environment>=$_major: Compile and run the examples")
options=('!strip')
source=("http://download.java.net/jdk$_major/archive/$_build/binaries/jdk-$_pkgver-ea-docs-$_build-all-$_date.zip"
        "http://download.java.net/jdk$_major/archive/$_build/binaries/javafx-$_pkgver-ea-apidocs-$_build-$_date_fx.zip"
        'LICENSE')
md5sums=('8d664e53a60c96fb73eb25308f33303e'
         '2380bcf8f6a50c45c78a939f7344c236'
         'f09947a67691a2d78d20a3885889981c')

package_jdk-devel-docs() {
  pkgdesc="Documentation for Oracle Java $_major Development Kit Snapshot"

  # Install
  install -d "$pkgdir"/usr/share/doc/java$_major/
  mv docs/* "$pkgdir"/usr/share/doc/java$_major/

  # License
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_javafx-devel-docs() {
  pkgdesc="Documentation for Oracle JavaFX $_major Development Kit Snapshot"

  # Install
  install -d "$pkgdir"/usr/share/doc/java$_major/
  mv api "$pkgdir"/usr/share/doc/java$_major/javafx/

  # License
  install -d "$pkgdir"/usr/share/licenses/
  ln -s /usr/share/licenses/jdk-devel-docs/ "$pkgdir"/usr/share/licenses/$pkgname
}
