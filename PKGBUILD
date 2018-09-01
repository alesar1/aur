# Maintainer: Simon Legner <Simon.Legner@gmail.com>
# Maintainer: James An <james@jamesan.ca>
# Contributor: David Pugnasse <david.pugnasse@gmail.com>

pkgname=pmd-bin
_pkgname=${pkgname%-bin}
pkgver=6.6.0
pkgrel=1
pkgdesc="An extensible cross-language static code analyzer."
arch=('any')
url="https://pmd.github.io"
license=('BSD' 'Apache')
depends=('java-environment')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("https://github.com/$_pkgname/$_pkgname/releases/download/${_pkgname}_releases/$pkgver/$pkgname-$pkgver.zip"
        pmdapp)
sha256sums=('61138e877233edd793fbb00f949bbb24ec02041673b94d1274887c8c218dcc98'
            '0b4a682c5498a699cfff691ef3649117f0af455f7b38ff1d9648be46102797ae')

package() {
    cd "$_pkgname-bin-$pkgver"

    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    for app in pmd-bgastviewer pmd-cpd pmd-cpdgui pmd-designer pmd-designerold pmd; do
        install -Dm755 "../pmdapp" "$pkgdir/usr/bin/$app"
    done

    cd lib
    for file in *.jar; do
        install -Dm644 "$file" "$pkgdir/usr/share/java/$pkgname/$file"
    done
}
