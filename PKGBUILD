pkgname=camunda-modeler
pkgver=2.0.3
pkgrel=3
pkgdesc="An integrated modeling solution for BPMN and DMN based on bpmn.io"
arch=('x86_64')
url="https://camunda.org/features/modeler/"
license=('MIT')
install=$pkgname.install

source=("https://camunda.org/release/$pkgname/$pkgver/$pkgname-$pkgver-linux-x64.tar.gz"
        'camunda-modeler.sh')
        
sha256sums=('3ea1f9dd7a2210d4c96b54d509e4d63e6c7d3feb22aa39f6e63e5db2d37830c5'
            '5f2f52b71d0f2e98a3e9d6bc0169cc0bdfd88eb4dd40e6837a54e0cc9275dce7')

depends=('libnotify' 'gconf')

package() {
    cd "$srcdir"
    install -dm 755 "$pkgdir/opt/$pkgname"
    cp -af "$pkgname-$pkgver-linux-x64/." "$pkgdir/opt/$pkgname"
    install -dm 755 "$pkgdir/usr/bin/"
    install -Dm 775 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
}

