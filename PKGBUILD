# Maintainer: Det <nimetonmaili g-mail>

pkgname=('jdk-devel-docs' 'javafx-devel-docs')
_major=9
#_minor=1
_build=119
_pkgver=$_major
pkgver=${_major}b${_build}
#_pkgver=${_major}u${_minor}
#pkgver=${_major}u${_minor}.b${_build}
pkgrel=1
arch=('any')
url="https://jdk$_major.java.net/"
license=('custom:Oracle BSD')
optdepends=("java-runtime>=$_major: Run the examples"
            "java-environment>=$_major: Compile and run the examples")
options=('!strip')
source=("http://www.java.net/download/java/jdk${_major}/archive/${_build}/binaries/jdk-${_pkgver}_doc-api-spec.tar.gz"
        "http://www.java.net/download/java/jdk${_major}/archive/${_build}/binaries/javafx-${_pkgver}_doc.zip"
        'LICENSE')
md5sums=('7a4e543bb2b872abe6975c70f464793c'
         '1324c8739686029c5811c1cb18d993d8'
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
