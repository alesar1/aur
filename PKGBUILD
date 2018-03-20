# Maintainer: Det <nimetonmaili g-mail>

pkgname=jdk-docs
pkgver=10
_major=${pkgver/.*}
_build=46
_hash=76eac37278c24557a3c4199677f19b62
pkgrel=1
pkgdesc="Documentation for Oracle Java Development Kit"
arch=('any')
url="http://www.oracle.com/technetwork/java/javase/downloads/index.html"
license=('custom:Oracle')
optdepends=("java-environment>=$_major: Compile and run examples")
options=('!strip')
source=("http://download.oracle.com/otn-pub/java/jdk/${pkgver}+${_build}/${_hash}/jdk-${pkgver}_doc-all.zip"
        'LICENSE-Oracle-Legal-Notices.txt')
sha256sums=('3bd4c890f6bfaef61141f0720457d6c82a8c479b22a591631cc2b3d741a205bb'
            '01ce75a25c01b3984ff8ad08b0ad8bb24b071316d2ebf5113661ceda76f51a81')

DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 -b oraclelicense=a -o %o %u')

package() {
  # Install
  install -d "$pkgdir"/usr/share/doc/java$_major/
  mv docs/* "$pkgdir"/usr/share/doc/java$_major/

  # License
  install -Dm644 LICENSE-Oracle-Legal-Notices.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
