# Maintainer: Det <nimetonmaili g-mail>

pkgname=jdk-docs
pkgver=10.0.1
_major=${pkgver/.*}
_build=10
_hash=fb4372174a714e6b8c52526dc134031e
pkgrel=1
pkgdesc="Documentation for Oracle Java Development Kit"
arch=('any')
url="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
license=('custom:Oracle')
optdepends=("java-environment>=$_major: Compile and run examples")
options=('!strip')
source=("http://download.oracle.com/otn-pub/java/jdk/${pkgver}+${_build}/${_hash}/jdk-${pkgver}_doc-all.zip"
        'LICENSE-Oracle-Legal-Notices.txt')
sha256sums=('884738a0ba6f18c9fd0850f21cbdade252c00e7b18bf0647d8a09150c21d8342'
            'f1c7b95bafa96ddb992e9ef7548e25c49aa98195e4ea37f3d46a93b85d8c9dbd')

DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')

package() {
  # Install
  install -d "$pkgdir"/usr/share/doc/java$_major/
  mv docs/* "$pkgdir"/usr/share/doc/java$_major/

  # License
  install -Dm644 LICENSE-Oracle-Legal-Notices.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
