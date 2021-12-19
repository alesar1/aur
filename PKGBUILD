# Contributor: Rowisi < nomail <at> private <dot> com >
# Maintainer: So1ar <so1ar114514@gmail.com>

pkgname=hmcl-bin
pkgver=3.5.2
pkgrel=1
pkgdesc="A Minecraft Launcher which is multi-functional, cross-platform and popular."
arch=('any')
url="https://github.com/huanghongxun/HMCL"
license=('GPL3')
depends=('java8-openjfx')
provides=('hmcl')
conflicts=('hmcl')
source=("hmcl.desktop"
        "hmcl-launch-script"
        "craft_table.png"
        "LICENCE::https://raw.githubusercontent.com/huanghongxun/HMCL/javafx/LICENSE"
        "${pkgname}-${pkgver}-${pkgrel}.jar::https://cdn.jsdelivr.net/npm/hmcl-update-stable@${pkgver}/HMCL-${pkgver}.zip")
sha1sums=('613a2483883028a52b369c27c1468fc8d31e2d5e'
          'ff8a9141b115ea7788111ce28cc462c8fd46c471'
          '635509ef81b82837fcd1f7d4b24a7d44241559c2'
          '31a3d460bb3c7d98845187c716a30db81c44b615'
          'edbc3ed9475e8b5836274d955e57cdf8879e1d6d')

noextract=("${pkgname}-${pkgver}-${pkgrel}.jar")

package() {
  install -Dm755 "hmcl-launch-script" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "hmcl.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${pkgname}-${pkgver}-${pkgrel}.jar" "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
  install -Dm644 "craft_table.png" "${pkgdir}/usr/share/icons/hicolor/48x48/apps/${pkgname}.png"
  install -Dm644 "LICENSE" "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
