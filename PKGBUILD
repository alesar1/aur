# Maintainer: Det <nimetonmaili g-mail>

pkgname=javafx-devel-samples
_major=9
#_minor=1
_build=161
_pkgver=$_major
pkgver=${_major}b${_build}
#_pkgver=${_major}u${_minor}
#pkgver=${_major}u${_minor}.b${_build}
pkgrel=1
pkgdesc="Demos and samples for Oracle JavaFX $_major Development Kit Snapshot"
arch=('any')
url="https://jdk$_major.java.net/"
license=('custom:Oracle BSD')
optdepends=("java-runtime>=$_major: Run the examples"
            "java-environment>=$_major: Compile and run the examples")
options=('!strip')
source=("http://www.java.net/download/java/jdk$_major/archive/$_build/binaries/javafx-${_pkgver}_linux-x86_demo.zip"
        'OTN-Early-Adopter-License-Terms.txt')
sha256sums=('54b4968313ca5a6348356a3b8ca0674e18517671b28cea4c720486e8c2a5a894'
            '5f00ffce28036cf79da41c7fe0e29801e3148597a164ecc69f49e718ae370370')

package() {
  # Install
  install -d "$pkgdir"/usr/lib/jvm/java-$_major-jdk/samples/javafx/
  mv javafx-samples-$_major-ea/* "$pkgdir"/usr/lib/jvm/java-$_major-jdk/samples/javafx/

  # License
  install -Dm644 OTN-Early-Adopter-License-Terms.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
