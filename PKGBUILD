# Maintainer: Gabriel Guldner <gabriel at guldner dot eu>

# Contributor: Tomas Jasek <tomsik68(at)gmail(dot)com>
# Contributor: Alex Brinister <alex_brinister at yahoo dot com>

pkgname='papyrus'
pkgver='6.1.0'
_eclipsever='2022-03'
pkgrel=1
pkgdesc='Graphical editing tool for UML based on eclipse.'
arch=('x86_64')
url='http://www.eclipse.org/papyrus/'
license=('EPL')
groups=()
depends=('java-runtime>=11' python perl bash)
makedepends=(tar)
provides=('papyrus')
conflicts=('papyrus')
sha256sums=('7f6afa7719131c001470d3f9e084b80be7fb13b5e15da6dd16c7f841286fd235'
            '0bf0ff5eacc3e955a01c171cc21d8c989707ed9eee668ce176d67cfae06c8608'
            '255f1d8b0277bb9e4a3f84d09294fe34a54485b29f67220733343f37db052b94'
            '3710742ce0745841d2c87118df1905d36fa5837f7d5ee55a50adf8ff70ec56fd'
            '45387c39208b4e18f70059059729dfd06ed4c3393065aebd299072c6eec888ea')
source=(
  "http://ftp-stud.fht-esslingen.de/pub/Mirrors/eclipse/modeling/mdt/papyrus/rcp/${_eclipsever}/${pkgver}/papyrus-${_eclipsever}-${pkgver}-linux64.tar.gz"
  "papyrus.png"
  "papyrus.desktop"
  "papyrus.ini.patch"
  "papyrus"
)

build() {
  cd "$srcdir/Papyrus"
  rm -r features/org.eclipse.justj*
  rm -r plugins/org.eclipse.justj*

  patch papyrus.ini "$srcdir/papyrus.ini.patch"
}

package() {
  cd "$srcdir"
  mkdir -p "$pkgdir/usr/lib/papyrus"
  mkdir -p "$pkgdir/usr/bin/"
  mkdir -p "$pkgdir/usr/share/icons"
  mkdir -p "$pkgdir/usr/share/applications"

  install -m644 papyrus.png "$pkgdir/usr/share/icons/"
  install -m755 papyrus.desktop "$pkgdir/usr/share/applications/"

  cd "$srcdir/Papyrus"
  find . -type f -exec install -vDm755 {} "$pkgdir/usr/lib/papyrus/"{} \;

  install -m755 "$srcdir/papyrus" "$pkgdir/usr/bin/"
}
