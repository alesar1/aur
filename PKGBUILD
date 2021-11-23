# Maintainer: Rellieberman <name AT gmail DOT com>
pkgname=bulky
pkgver=1.9
pkgrel=1
pkgdesc="Bulk File Renamer"
arch=("i686" "x86_64")
url="https://github.com/linuxmint/bulky"
licence=("GPL3")
depends=('python-magic' 'xapp' 'python-xapp')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('52882b32bd4572ef3504f8204cf319080a7e48036297ea3690ae7dd5c8699b1f')

package()
{   

    install -d "$pkgdir"/usr/share/bulky
    install -d "$pkgdir"/usr/lib/bulky
  
  
  
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/share/bulky/bulky.css -t "$pkgdir"/usr/share/bulky
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/share/bulky/bulky.ui -t "$pkgdir"/usr/share/bulky
  
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/share/glib-2.0/schemas/org.x.bulky.gschema.xml -t "$pkgdir"/usr/share/glib-2.0/schemas
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/share/bulky/bulky.ui -t "$pkgdir"/usr/share/bulky
    
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/share/icons/hicolor/scalable/apps/bulky.svg -t "$pkgdir"/usr/share/icons/hicolor/scalable/apps
    
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/lib/bulky/bulky.py -t "$pkgdir"/usr/lib/bulky
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/bin/bulky -t "$pkgdir"/usr/bin
   
    chmod 755  "$pkgdir"/usr/lib/bulky/bulky.py
    chmod 755  "$pkgdir"/usr/bin/bulky
    
    install -Dm644 "$srcdir"/"$pkgname"-"$pkgver"/usr/share/applications/bulky.desktop -t "$pkgdir"/usr/share/applications

}
