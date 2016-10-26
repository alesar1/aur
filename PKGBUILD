# Maintainer: Ben Widawsky <ben@bwidawsk.net>
# Contributor: Jonathan Arnold <jarnold@buddydog.org>
# Contributor: Marq Schneider <queueRAM@gmail.com>

pkgname=p4v
pkgver=2015.1.1233444
pkgrel=1
pkgdesc="Perforce Visual Client"
arch=('i686' 'x86_64')
url="http://www.perforce.com"
license=('custom:p4v')
depends=(libxcb)
options=('!strip')
install=${pkgname}.install
source=(p4v.desktop p4admin.desktop p4merge.desktop LICENSE)
source_i686=("http://www.perforce.com/downloads/perforce/r${pkgver:2:4}/bin.linux26x86/${pkgname}.tgz")
source_x86_64=("http://www.perforce.com/downloads/perforce/r${pkgver:2:4}/bin.linux26x86_64/${pkgname}.tgz")

sha256sums=('1fc7ea925fdcb38915f191b6a9c85fb46db9ef501dbaa077e8f38876c5e8fda0'
            '10e470c6099459a072565494c4fd21cc1f4198f1024fe6fdeb6c77ea7e594827'
            '139c5e4951ea9ab040912ef1f9705de16a37d32fdf7b8c7116eb5a785829c634'
            'c4ed3aef62b1bbf2d16ce4cceb65dc49ab9635b38e2fed0a595fe259283a9f32')
sha256sums_i686=('feb34f486c8807ff1db80576c746b487ce6e1aaa4eea7a830a1ad596ade6a3b3')
sha256sums_x86_64=('feb34f486c8807ff1db80576c746b487ce6e1aaa4eea7a830a1ad596ade6a3b3')

package() {
  mkdir -p "${pkgdir}"/usr/share/p4v
  mkdir -p "${pkgdir}"/usr/bin

  cd "${srcdir}"
  cp -R ${pkgname}-${pkgver}/* "${pkgdir}"/usr/share/p4v

  # put a pointer in /usr/bin
  ln -s /usr/share/p4v/bin/{p4v,p4merge,p4admin,p4vc} "${pkgdir}"/usr/bin

  # Install icons
  mkdir -p "$pkgdir"/usr/share/icons/hicolor/{16x16,24x24,48x48,96x96}/apps
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Admin_16x16.png "$pkgdir"/usr/share/icons/hicolor/16x16/apps/p4admin.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Admin_24x24.png "$pkgdir"/usr/share/icons/hicolor/24x24/apps/p4admin.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Admin_48x48.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/p4admin.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Admin_96x96.png "$pkgdir"/usr/share/icons/hicolor/96x96/apps/p4admin.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Merge_16x16.png "$pkgdir"/usr/share/icons/hicolor/16x16/apps/p4merge.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Merge_24x24.png "$pkgdir"/usr/share/icons/hicolor/24x24/apps/p4merge.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Merge_48x48.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/p4merge.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-Merge_96x96.png "$pkgdir"/usr/share/icons/hicolor/96x96/apps/p4merge.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-V_16x16.png "$pkgdir"/usr/share/icons/hicolor/16x16/apps/p4v.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-V_24x24.png "$pkgdir"/usr/share/icons/hicolor/24x24/apps/p4v.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-V_48x48.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/p4v.png
  install -Dm644 "${pkgname}-${pkgver}"/lib/p4v/P4VResources/icons/P4-V_96x96.png "$pkgdir"/usr/share/icons/hicolor/96x96/apps/p4v.png

  mkdir -p "${pkgdir}"/usr/share/applications

  # Install desktop files
  install -m644 {p4v,p4merge,p4admin}.desktop "${pkgdir}"/usr/share/applications

  install -d "$pkgdir/usr/share/licenses/$pkgname"
  install -m 0644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
