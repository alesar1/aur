# $Id: pkgbuild-mode.el,v 1.23 2007/10/20 16:02:14 juergen Exp $
# Contributor: Sergey Mastykov <smastykov[at]gmail[dot]com>
# Based on saleae-logic package by Kyle Keen <keenerd@gmail.com>

pkgname=saleae-logic-beta
pkgver=1.2.9
pkgrel=1
pkgdesc="High speed USB logic analyzer."
arch=('i686' 'x86_64')
url="http://www.saleae.com/"
license=('unknown')  # closed source, none given
depends=('gcc-libs' 'gtk2' 'libice')
conflicts=(saleae-logic)
provides=(saleae-logic)

case $CARCH in
  'i686')
    source=("http://downloads.saleae.com/logic/$pkgver/Logic $pkgver (32-bit).zip"
            "http://downloads.saleae.com/Saleae+Users+Guide.pdf"
            "http://opendesktop.org/CONTENT/content-files/133473-SaleaeLogic.svg"
            "saleae-logic.desktop")
    sha256sums=('117abfd58ad6cdf2d9869afa1b6ba9c51130a3f7e927c25cc115fc038ada23ca'
             'b862b10c75d57010b15663e0f26976ec7a1fc0d7a5a2d4e299b17c5a06185d18'
             '6f5f590c6b29a674b4d2263783430630f271ea296a0ef0ac7787ce081a2b1d9b'
             'cc2a4127af87c8248b08a9cb8d82d542f63cfe77d95478bd469c64fd6722ed7a')
    __arch=' (32-bit)' ;;
  'x86_64')
    source=("http://downloads.saleae.com/logic/$pkgver/Logic $pkgver (64-bit).zip"
            "http://downloads.saleae.com/Saleae+Users+Guide.pdf"
            "http://opendesktop.org/CONTENT/content-files/133473-SaleaeLogic.svg"
            "saleae-logic.desktop")
    sha256sums=('da8475d81f69627f11e87fda8f3fe06d7d16daa495681f62994e7b53cead90b4'
             'b862b10c75d57010b15663e0f26976ec7a1fc0d7a5a2d4e299b17c5a06185d18'
             '6f5f590c6b29a674b4d2263783430630f271ea296a0ef0ac7787ce081a2b1d9b'
             'cc2a4127af87c8248b08a9cb8d82d542f63cfe77d95478bd469c64fd6722ed7a')
    __arch=' (64-bit)' ;;
esac

package() {
  # for now, it needs /opt
  cd "$srcdir/Logic $pkgver$__arch"
  install -d "$pkgdir/opt/saleae-logic"
  install -d "$pkgdir/usr/share/doc/saleae-logic"
  cp -r ./ "$pkgdir/opt/saleae-logic/"
  find "$pkgdir/opt/saleae-logic" -type d -exec chmod 777 {} \;
  #icon
  install -Dm644 "$srcdir/133473-SaleaeLogic.svg" "$pkgdir/usr/share/pixmaps/SaleaeLogic.svg"
  install -D -m644 "$srcdir/saleae-logic.desktop" \
    "$pkgdir/usr/share/applications/saleae-logic.desktop"
  # docs
  install -Dm644 ../../*.pdf "$pkgdir/usr/share/doc/saleae-logic/"
  # udev
  install -Dm644 Drivers/99-SaleaeLogic.rules "$pkgdir/usr/lib/udev/rules.d/99-SaleaeLogic.rules" 
  # launch script
  install -d "$pkgdir/usr/bin"
  touch "$pkgdir/usr/bin/logic"
  echo -e "#!/bin/sh\nexec /opt/saleae-logic/Logic > /dev/null 2>&1" > "$pkgdir/usr/bin/logic"
  chmod +x "$pkgdir/usr/bin/logic"
}

# vim:set ts=2 sw=2 et:
