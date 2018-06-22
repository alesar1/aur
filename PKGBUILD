pkgname=camunda-modeler
pkgver=1.16.1
pkgrel=1
pkgdesc="An integrated modeling solution for BPMN and DMN based on bpmn.io"
arch=('x86_64')
url="https://camunda.org/features/modeler/"
license=('MIT')

source=("https://camunda.org/release/$pkgname/$pkgver/$pkgname-$pkgver-linux-x64.tar.gz"
        'camunda-modeler.sh'
        'camunda-modeler.desktop'
        'camunda-modeler16.png'
        'camunda-modeler48.png'
        'camunda-modeler128.png')
        
md5sums=('b21dd18d4324b79a784f8de7b58a5867'
         '9580e90224bd893ea6e070e399b25b01'
         'd13db3466242d0ab85e0152f3ceccded'
         'bc08d6679ab052bd7c936954f0a8d97c'
         '2d041c2f1a6cafa0d0079d207eb635fd'
         '22f05a8460e7b0d823dc65a2ee3f5a0e')

depends=('libnotify')

package() {
  cd "$srcdir"
  install -dm 755 "$pkgdir/opt/$pkgname"
  cp -rf "$pkgname" "$pkgdir/opt"
  install -dm 755 "$pkgdir/usr/bin/"
  install -Dm 775 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
  install -Dm 644 "$srcdir/camunda-modeler.desktop" "$pkgdir/usr/share/applications/camunda-modeler.desktop"
  install -Dm 644 "$srcdir/camunda-modeler16.png" "$pkgdir/usr/share/icons/hicolor/16x16/apps/camunda-modeler.png"
  install -Dm 644 "$srcdir/camunda-modeler48.png" "$pkgdir/usr/share/icons/hicolor/48x48/apps/camunda-modeler.png"
  install -Dm 644 "$srcdir/camunda-modeler128.png" "$pkgdir/usr/share/icons/hicolor/128x128/apps/camunda-modeler.png"
}

