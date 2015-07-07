# Maintainer: William J Bowman <aur@williamjbowman.com>
# Contributor: Patrick Palka <patrick@parcs.ath.cx>
# Contributor: dimino jeremie <jeremie@dimino.org>

pkgname=proofgeneral
pkgver=4.2
pkgrel=2
pkgdesc='Generic interface for proof assistants.'
arch=('i686' 'x86_64')
license=('GPL')
url='http://proofgeneral.inf.ed.ac.uk/'
depends=('emacs>=24.3')
install="${pkgname}.install"
source=("http://proofgeneral.inf.ed.ac.uk/releases/ProofGeneral-${pkgver}.tgz"
  "Makefile.patch")

md5sums=('c9f7eac10ed7a04c96b90abcbf964427'
         'e8a2c065a928f641564174c1342cfa60')
sha256sums=('3567b68077798396ccd55c501b7ea7bd2c4d6300e4c74ff609dc19837d050b27'
            '13c927009152da17ac5b91abc76e45190e60928a1df1e8b202df9390842c9931')
sha512sums=('102c56a1bc113439b1fa8aa10efe571d47d68b344d3489fe18ca3bdbf8828bb31fd2302a68a4bd639c59c429d41e82e5d933abddd3444781cb0e8a603db432ab'
            '6ad406d0528db5dc9db47c6f25fc8280d91a31619450c574f7a65018577cccbb0f67c726e14db62d9d6816d1d3868cb72ea85999496115f79664495a44854f09')

build() {
  cd ProofGeneral

  make clean
  chmod +x isar/isartags

  patch -p2 < "${srcdir}/Makefile.patch"

  sed -i 's,phox/\*,,' Makefile
  sed -i 's,phox,,' Makefile

  make
}

package() {
  cd ProofGeneral

  make PREFIX=${pkgdir}/usr install -j1
}
